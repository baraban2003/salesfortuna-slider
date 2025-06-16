import type { NextApiRequest, NextApiResponse } from 'next';

const testimonials = [
  {
    id: 1,
    company: 'Serene Living',
    logo: '/images/sereneLiving.jpg',
    text: 'Sales Fortuna made managing sales easier and helped us focus on customers. Its tools have been crucial for our growth and client satisfaction.',
    author: 'Ethan Morgan',
    role: 'Founder and CEO, Serene Living Products',
    avatar: '/images//ethan.jpg'
  },
  {
    id: 2,
    company: 'Starlight Creations',
    logo: '/images/starlight.jpg',
    text: 'Sales Fortuna has made sales so much easier for us. It saves time, simplifies the whole process, and helps us land more deals without extra hassle.',
    author: 'Olivia Hayes',
    role: 'Owner, Starlight Creations',
    avatar: '/images//olivia.jpg'
  },
  {
    id: 3,
    company: 'Opulent Living Group',
    logo: '/images/opulent.jpg',
    text: 'Sales Fortuna has simplified our lead generation, helping us attract qualified prospects effortlessly and drive consistent growth.',
    author: 'Alexander Reed',
    role: 'Co-Founder, Opulent Living Group',
    avatar: '/images//alexander.jpg'
  },
  {
    id: 4,
    company: 'Starlight Creations',
    logo: '/images/starlight.jpg',
    text: 'Sales Fortuna has made sales so much easier for us. It saves time, simplifies the whole process, and helps us land more deals without extra hassle.',
    author: 'Olivia Hayes',
    role: 'Owner, Starlight Creations',
    avatar: '/images//olivia.jpg'
  },
  {
    id: 5,
    company: 'Opulent Living Group',
    logo: '/images/opulent.jpg',
    text: 'Sales Fortuna has simplified our lead generation, helping us attract qualified prospects effortlessly and drive consistent growth.',
    author: 'Alexander Reed',
    role: 'Co-Founder, Opulent Living Group',
    avatar: '/images//alexander.jpg'
  },
  {
    id: 6,
    company: 'Serene Living',
    logo: '/images/sereneLiving.jpg',
    text: 'Sales Fortuna made managing sales easier and helped us focus on customers. Its tools have been crucial for our growth and client satisfaction.',
    author: 'Ethan Morgan',
    role: 'Founder and CEO, Serene Living Products',
    avatar: '/images//ethan.jpg'
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(testimonials);
}
