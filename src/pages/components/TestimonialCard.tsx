import React from 'react';

type Props = {
  id: number;
  company: string;
  text: string;
  author: string;
  role: string;
  logo: string;
  avatar: string;
};

const TestimonialCard = ({ id, company, text, author, role, logo, avatar }: Props) => (
  <div key={id} className="w-[380px] h-[502px]">
    <div
      className="bg-white shadow-md p-8 flex flex-col justify-between h-full text-left"
      style={{ border: '1px solid #B6B1B1', borderRadius: '16px' }}
    >
      <div className="relative">
        <div className="flex flex-col items-start mb-[15px] ">
          <img src={logo} alt={company} className="h-[91px] max-w-[292px] mb-1" />
        </div>

        <p className="text-[20px] mb-6 italic leading-[35px]">
          {text}
        </p>
        <span
          className="absolute right-0 text-[96px] leading-[35px] text-gray-300 font-[Staatliches] pointer-events-none select-none"
          style={{ fontFamily: "'Staatliches', cursive", bottom: '-36px' }}
        >
          ”
        </span>
      </div>

      <div className="flex items-top gap-5 mt-auto">
        <img
          src={avatar}
          alt={author}
          className="h-[60.49px] w-[60.49px] rounded-full object-cover"
        />
        <div className="text-black">
          <p className="font-bold text-[24px] leading-[35px]">{author}</p>
          <p className="font-medium text-[20px] leading-[28px]">{role}</p>
        </div>
      </div>
    </div >
  </div >
);

export default TestimonialCard;
