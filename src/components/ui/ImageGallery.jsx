import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

const ImageGallery = ({ images, columns = 3 }) => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const openLightbox = (image, index) => {
        setSelectedImage(image);
        setCurrentIndex(index);
    };

    const closeLightbox = () => {
        setSelectedImage(null);
    };

    const goToPrevious = () => {
        const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
        setSelectedImage(images[newIndex]);
    };

    const goToNext = () => {
        const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
        setSelectedImage(images[newIndex]);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') goToPrevious();
        if (e.key === 'ArrowRight') goToNext();
    };

    React.useEffect(() => {
        if (selectedImage) {
            window.addEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'hidden';
        }
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'unset';
        };
    }, [selectedImage, currentIndex]);

    const gridColsClass = {
        2: 'grid-cols-1 md:grid-cols-2',
        3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
        4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
    };

    return (
        <>
            <div className={`grid ${gridColsClass[columns]} gap-6`}>
                {images.map((image, index) => (
                    <div
                        key={index}
                        className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
                        onClick={() => openLightbox(image, index)}
                    >
                        <div className="aspect-square overflow-hidden">
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                <h3 className="text-lg font-bold mb-1">{image.title}</h3>
                                {image.description && (
                                    <p className="text-sm text-gray-200">{image.description}</p>
                                )}
                            </div>
                            <div className="absolute top-4 right-4 bg-white/90 rounded-full p-3 transform scale-0 group-hover:scale-100 transition-transform duration-300">
                                <ZoomIn className="w-5 h-5 text-gray-900" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Lightbox */}
            {selectedImage && (
                <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center animate-fade-in">
                    <button
                        onClick={closeLightbox}
                        className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white rounded-full p-3 transition-all duration-300 z-50"
                        aria-label="Close lightbox"
                    >
                        <X className="w-6 h-6" />
                    </button>

                    <button
                        onClick={goToPrevious}
                        className="absolute left-4 bg-white/10 hover:bg-white/20 text-white rounded-full p-3 transition-all duration-300 z-50"
                        aria-label="Previous image"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>

                    <button
                        onClick={goToNext}
                        className="absolute right-4 bg-white/10 hover:bg-white/20 text-white rounded-full p-3 transition-all duration-300 z-50"
                        aria-label="Next image"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>

                    <div className="max-w-7xl max-h-[90vh] mx-4">
                        <img
                            src={selectedImage.src}
                            alt={selectedImage.alt}
                            className="max-w-full max-h-[80vh] object-contain rounded-lg"
                        />
                        <div className="text-center mt-4 text-white">
                            <h3 className="text-xl font-bold mb-2">{selectedImage.title}</h3>
                            {selectedImage.description && (
                                <p className="text-gray-300">{selectedImage.description}</p>
                            )}
                            <p className="text-sm text-gray-400 mt-2">
                                {currentIndex + 1} / {images.length}
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ImageGallery;
