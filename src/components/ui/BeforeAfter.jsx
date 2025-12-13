import React, { useState, useRef } from 'react';
import { Move } from 'lucide-react';

const BeforeAfter = ({ beforeImage, afterImage, beforeLabel = 'Before', afterLabel = 'After' }) => {
    const [sliderPosition, setSliderPosition] = useState(50);
    const containerRef = useRef(null);

    const handleMove = (e) => {
        if (!containerRef.current) return;

        const rect = containerRef.current.getBoundingClientRect();
        const x = e.type.includes('mouse') ? e.clientX : e.touches[0].clientX;
        const position = ((x - rect.left) / rect.width) * 100;

        if (position >= 0 && position <= 100) {
            setSliderPosition(position);
        }
    };

    const handleMouseDown = () => {
        const handleMouseMove = (e) => handleMove(e);
        const handleMouseUp = () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
    };

    return (
        <div
            ref={containerRef}
            className="relative w-full aspect-video overflow-hidden rounded-2xl shadow-2xl cursor-ew-resize select-none"
            onMouseDown={handleMouseDown}
            onTouchMove={handleMove}
        >
            {/* After Image (Background) */}
            <div className="absolute inset-0">
                <img
                    src={afterImage}
                    alt={afterLabel}
                    className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                    {afterLabel}
                </div>
            </div>

            {/* Before Image (Foreground with clip) */}
            <div
                className="absolute inset-0 overflow-hidden"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
                <img
                    src={beforeImage}
                    alt={beforeLabel}
                    className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-blue-500 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                    {beforeLabel}
                </div>
            </div>

            {/* Slider Handle */}
            <div
                className="absolute top-0 bottom-0 w-1 bg-white shadow-xl"
                style={{ left: `${sliderPosition}%` }}
            >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-xl">
                    <Move className="w-6 h-6 text-gray-900" />
                </div>
            </div>

            {/* Instructions */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-full text-sm font-medium">
                Drag to compare
            </div>
        </div>
    );
};

export default BeforeAfter;
