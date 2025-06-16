'use client';

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import TestimonialCard from './TestimonialCard';

type Testimonial = {
  id: number;
  company: string;
  text: string;
  author: string;
  role: string;
  logo: string;
  avatar: string;
};

export default function TestimonialSlider() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [startIndex, setStartIndex] = useState(0);
  const [visibleSlides, setVisibleSlides] = useState(3);
  const [showArrows, setShowArrows] = useState(true);

  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  useEffect(() => {
    fetch('/api/testimonials')
      .then(res => res.json())
      .then(data => setTestimonials(data));
  }, []);

  useEffect(() => {
    const updateSlides = () => {
      if (window.innerWidth < 768) {
        setVisibleSlides(1);
        setShowArrows(false);
      } else if (window.innerWidth < 1313) {
        setVisibleSlides(2);
        setShowArrows(false);
      } else if (window.innerWidth < 1378) {
        setVisibleSlides(3);
        setShowArrows(false);
      } else {
        setVisibleSlides(3);
        setShowArrows(true);
      }
    };
    updateSlides();
    window.addEventListener('resize', updateSlides);
    return () => window.removeEventListener('resize', updateSlides);
  }, []);

  const next = () => {
    if (testimonials.length === 0) return;
    const maxIndex = testimonials.length - visibleSlides;
    setStartIndex((prev) =>
      prev >= maxIndex ? 0 : prev + 1
    );
  };

  const prev = () => {
    if (testimonials.length === 0) return;
    const maxIndex = testimonials.length - visibleSlides;
    setStartIndex((prev) =>
      prev <= 0 ? maxIndex : prev - 1
    );
  };


  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (
      touchStartX.current !== null &&
      touchEndX.current !== null &&
      Math.abs(touchStartX.current - touchEndX.current) > 50
    ) {
      if (touchStartX.current > touchEndX.current) {
        next();
      } else {
        prev();
      }
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const totalDots = Math.ceil((testimonials.length - visibleSlides + 1));
  const currentDot = startIndex;

  return (
    <section
      className="bg-[url('/images/bg.png')] w-full min-h-[755px] bg-no-repeat bg-center bg-[length:1920px_755px] px-4 sm:px-6 lg:px-[50px] py-12 overflow-hidden"
      onTouchStart={!showArrows ? handleTouchStart : undefined}
      onTouchMove={!showArrows ? handleTouchMove : undefined}
      onTouchEnd={!showArrows ? handleTouchEnd : undefined}
    >
      <h1 className="font-bold text-3xl sm:text-4xl lg:text-[48px] text-center mb-12 text-black">
        Voices of Success with Sales Fortuna
      </h1>

      <div className="relative max-w-[1220px] mx-auto flex items-center">
        {showArrows && (
          <button
            onClick={prev}
            className="w-[68px] h-[68px] hidden lg:flex items-center justify-center absolute left-[-78px] top-1/2 -translate-y-1/2 hover:scale-110 transition cursor-pointer"
          >
            <Image src="/images/logo/arrow-left.svg" alt="prev" width={68} height={68} />
          </button>
        )}

        <div className="overflow-hidden w-full">
          <div
            className="flex gap-5 justify-center items-stretch"
            style={{
              minHeight: 0,
              minWidth: 0,
              width: '100%',
            }}
          >
            {testimonials.slice(startIndex, startIndex + visibleSlides).map((t) => (
              <div
                key={t.id}
                style={{
                  width: 380,
                  minHeight: 0,
                  minWidth: 0,
                  display: 'flex',
                  alignItems: 'stretch',
                }}
                className="flex-shrink-0 flex"
              >
                <TestimonialCard
                  id={t.id}
                  company={t.company}
                  text={t.text}
                  author={t.author}
                  role={t.role}
                  logo={t.logo}
                  avatar={t.avatar}
                />
              </div>
            ))}
          </div>
        </div>

        {showArrows && (
          <button
            onClick={next}
            className="w-[68px] h-[68px] hidden lg:flex items-center justify-center absolute right-[-78px] top-1/2 -translate-y-1/2 hover:scale-110 transition cursor-pointer"
          >
            <Image src="/images/logo/arrow-right.svg" alt="next" width={68} height={68} />
          </button>
        )}
      </div>

      <div className="flex justify-center mt-6">
        {Array.from({ length: totalDots }).map((_, i) => (
          <button
            key={i}
            onClick={() => setStartIndex(i)}
            className={`w-3 h-3 mx-1 rounded-full transition-colors ${i === currentDot ? 'bg-gray-800' : 'bg-gray-400'
              }`}
          />
        ))}
      </div>
    </section>
  );
}