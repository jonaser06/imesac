"use client";

import { ChevronLeft, ChevronRight, Image } from "lucide-react";
import { useState } from "react";

interface ImageSliderProps {
  images?: string[];
  placeholderCount?: number;
}

export function ImageSlider({
  images,
  placeholderCount = 3,
}: ImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Si no hay imágenes, usar placeholders
  const slides =
    images && images.length > 0 ? images : Array(placeholderCount).fill(null);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-3xl font-bold text-center text-[#006989] mb-8">
          Galería de Imágenes
        </h2>

        <div className="relative w-full h-[400px] md:h-[500px] bg-gradient-to-br from-[#EAEBED] to-[#A3BAC3] rounded-lg shadow-lg overflow-hidden group">
          {/* Slides */}
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-500 ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              {slide ? (
                <img
                  src={slide}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center">
                  <Image className="w-20 h-20 text-[#007090] mb-4" />
                  <p className="text-[#006989] font-semibold text-xl">
                    Imagen {index + 1}
                  </p>
                  <p className="text-gray-600 text-sm mt-2">
                    Dimensiones recomendadas: 1200x800px
                  </p>
                </div>
              )}
            </div>
          ))}

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-[#007090] p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            aria-label="Imagen anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-[#007090] p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            aria-label="Siguiente imagen"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots Indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-[#01A7C2] w-8"
                    : "bg-white/60 hover:bg-white/80"
                }`}
                aria-label={`Ir a imagen ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
