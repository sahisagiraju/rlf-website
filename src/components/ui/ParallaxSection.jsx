import React, { useEffect, useRef, useState } from 'react';

const ParallaxSection = ({
    children,
    backgroundImage,
    speed = 0.5,
    className = '',
    overlay = 'bg-black/50'
}) => {
    const [offsetY, setOffsetY] = useState(0);
    const sectionRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current) return;

            const rect = sectionRef.current.getBoundingClientRect();
            const scrolled = window.pageYOffset;
            const rate = scrolled * speed;

            setOffsetY(rate);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [speed]);

    return (
        <div
            ref={sectionRef}
            className={`relative overflow-hidden ${className}`}
        >
            {backgroundImage && (
                <>
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                            backgroundImage: `url(${backgroundImage})`,
                            transform: `translateY(${offsetY}px)`,
                            willChange: 'transform'
                        }}
                    />
                    <div className={`absolute inset-0 ${overlay}`} />
                </>
            )}
            <div className="relative z-10">
                {children}
            </div>
        </div>
    );
};

export default ParallaxSection;
