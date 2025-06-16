import type { NextApiRequest, NextApiResponse } from 'next';

const testimonials = [
  {
    id: 1,
    company: 'Serene Living',
    logo: '/images//serene-logo.svg',
    text: 'Sales Fortuna made managing sales easier and helped us focus on customers...',
    author: 'Ethan Morgan',
    role: 'Founder and CEO',
    avatar: '/images//ethan.jpg'
  },
  {
    id: 2,
    company: 'Starlight Creations',
    logo: '/images//starlight-logo.svg',
    text: 'Sales Fortuna has made sales so much easier for us. It saves time...',
    author: 'Olivia Hayes',
    role: 'Owner',
    avatar: '/images//olivia.jpg'
  },
  {
    id: 3,
    company: 'Opulent Living Group',
    logo: '/images//opulent-logo.svg',
    text: 'Sales Fortuna has simplified our lead generation...',
    author: 'Alexander Reed',
    role: 'Co-Founder',
    avatar: '/images//alexander.jpg'
  }
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(testimonials);
}
