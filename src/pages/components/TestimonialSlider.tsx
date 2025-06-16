'use client';

import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

type Testimonial = {
  id: number;
  company: string;
  logo: string;
  text: string;
  author: string;
  role: string;
  avatar: string;
};

export default function TestimonialSlider() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    fetch('/api/testimonials')
      .then(res => res.json())
      .then(data => setTestimonials(data));
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  if (testimonials.length === 0) {
    return <p className="text-center text-gray-500">Loading...</p>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-10">Voices of Success with Sales Fortuna</h2>
      <Slider {...settings}>
        {testimonials.map(t => (
          <div key={t.id} className="px-3">
            <div className="bg-white shadow-md rounded-xl p-6 h-full text-center">
              <img src={t.logo} alt={t.company} className="h-6 mx-auto mb-4" />
              <p className="text-gray-600 italic mb-6">“{t.text}”</p>
              <div className="flex items-center justify-center gap-4">
                <img src={t.avatar} alt={t.author} className="h-12 w-12 rounded-full object-cover" />
                <div>
                  <p className="font-bold">{t.author}</p>
                  <p className="text-sm text-gray-500">{t.role}, {t.company}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
