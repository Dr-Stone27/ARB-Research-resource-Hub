'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { DepartmentCarousel } from '@/components/department-carousel';
import { FeaturedCategories } from '@/components/featured-categories';
import {
  ResearchCard,
  type ResearchPaper,
  type ResearchCategory,
} from '@/components/research-card';
import { NewsSection } from '@/components/news-section';
import { ResourceHub } from '@/components/resource-hub';
import { Resource } from '@/components/resource-card';

// Sample research papers data
const researchPapers: ResearchPaper[] = [
  {
    id: '1',
    title: 'Quantum Computing Applications in Cryptography',
    author: 'Alex Johnson',
    abstract:
      "This research explores the potential applications of quantum computing in modern cryptographic systems. As quantum computers continue to advance, traditional encryption methods face unprecedented challenges. This paper presents a comprehensive analysis of how quantum algorithms, particularly Shor's algorithm, threaten current public-key cryptography and proposes several quantum-resistant alternatives.",
    category: 'analytical',
    tags: ['Quantum Computing', 'Cryptography', 'Security'],
    date: 'May 2023',
    downloads: 342,
    department: 'Computer Science',
  },
  {
    id: '2',
    title: 'Climate Change Impact on Coastal Ecosystems',
    author: 'Maria Rodriguez',
    abstract:
      'A comprehensive analysis of how rising sea levels affect biodiversity in coastal regions. This study combines field observations with advanced climate models to predict ecosystem changes over the next century.',
    category: 'experimental',
    tags: ['Climate Change', 'Ecosystems', 'Environmental Science'],
    date: 'June 2023',
    downloads: 287,
    department: 'Environmental Science',
  },
  {
    id: '3',
    title: 'Neural Networks for Early Disease Detection',
    author: 'Priya Patel',
    abstract:
      'Investigating the application of deep learning algorithms in identifying early markers of neurodegenerative diseases. This research demonstrates how convolutional neural networks can detect subtle patterns in medical imaging that often escape human observation.',
    category: 'simulation',
    tags: ['Neural Networks', 'Healthcare', 'AI'],
    date: 'July 2023',
    downloads: 423,
    department: 'Biomedical Engineering',
  },
  {
    id: '4',
    title: 'Economic Impacts of Remote Work Policies',
    author: 'David Chen',
    abstract:
      'An analysis of how the shift to remote work has affected urban economies and commercial real estate markets. This paper examines data from major metropolitan areas before and after the pandemic to identify emerging economic trends.',
    category: 'analytical',
    tags: ['Economics', 'Remote Work', 'Urban Planning'],
    date: 'March 2023',
    downloads: 198,
    department: 'Economics',
  },
  {
    id: '5',
    title: 'Sustainable Architecture in Urban Planning',
    author: 'Sophia Kim',
    abstract:
      'Exploring innovative approaches to integrating sustainable design principles in high-density urban environments. This research presents case studies of successful green building projects and their impact on energy consumption and quality of life.',
    category: 'experimental',
    tags: ['Architecture', 'Sustainability', 'Urban Design'],
    date: 'May 2023',
    downloads: 231,
    department: 'Architecture',
  },
  {
    id: '6',
    title: 'Machine Learning Approaches to Climate Prediction',
    author: 'James Wilson',
    abstract:
      'This paper examines how machine learning algorithms can improve the accuracy of climate models. By analyzing historical weather data and atmospheric patterns, we demonstrate a 15% improvement in prediction accuracy compared to traditional methods.',
    category: 'simulation',
    tags: ['Machine Learning', 'Climate Science', 'Data Analysis'],
    date: 'April 2023',
    downloads: 156,
    department: 'Computer Science',
  },
];

// Sample news data
const newsItems = [
  {
    id: '1',
    title: 'Annual Undergraduate Research Symposium',
    date: 'August 15, 2023',
    content:
      'Registration is now open for our annual symposium showcasing exceptional undergraduate research projects across all disciplines. Join us for three days of presentations, workshops, and networking opportunities.',
    image: '/images/placeholder.svg?height=200&width=400',
    url: '/news/symposium',
  },
  {
    id: '2',
    title: 'New Research Grant Opportunities',
    date: 'July 28, 2023',
    content:
      'The National Science Foundation has announced new grant opportunities specifically for undergraduate researchers in STEM fields. Applications are due by September 30th with funding starting in January.',
    image: '/images/placeholder.svg?height=200&width=400',
    url: '/news/grants',
  },
  {
    id: '3',
    title: 'Research Mentorship Program Launch',
    date: 'July 10, 2023',
    content:
      'Our new mentorship program connecting undergraduate researchers with industry professionals and academic experts is now accepting applications. The program runs for 6 months with weekly mentoring sessions.',
    image: '/images/placeholder.svg?height=200&width=400',
    url: '/news/mentorship',
  },
];

// Sample resources data
const resourceItems: Resource[] = [
  {
    id: '1',
    title: 'Guide to Writing Research Papers',
    type: 'pdf',
    summary:
      'A comprehensive guide to writing effective research papers, including formatting, citation styles, and best practices for academic writing.',
    tags: ['Writing', 'Research Methods', 'Academic'],
    url: '/resources/writing-guide.pdf',
    date: 'June 2023',
  },
  {
    id: '2',
    title: 'Introduction to Statistical Analysis',
    type: 'video',
    summary:
      'A video tutorial series covering the basics of statistical analysis for research, including hypothesis testing, regression analysis, and data visualization.',
    tags: ['Statistics', 'Data Analysis', 'Research Methods'],
    url: '/resources/statistics-tutorial',
    date: 'May 2023',
  },
  {
    id: '3',
    title: 'Research Ethics Framework',
    type: 'guide',
    summary:
      'A comprehensive framework for ethical considerations in research, including informed consent, data privacy, and responsible reporting.',
    tags: ['Ethics', 'Research Methods', 'Guidelines'],
    url: '/resources/ethics-framework',
    date: 'July 2023',
  },
  {
    id: '4',
    title: 'Open Access Research Repositories',
    type: 'link',
    summary:
      'A curated list of open access repositories where you can find and share research papers across various disciplines.',
    tags: ['Open Access', 'Publishing', 'Resources'],
    url: '/resources/repositories',
    date: 'April 2023',
  },
  {
    id: '5',
    title: 'Data Visualization Techniques',
    type: 'pdf',
    summary:
      'Learn how to create effective data visualizations for your research papers, including chart selection, color theory, and accessibility considerations.',
    tags: ['Data Visualization', 'Graphics', 'Presentation'],
    url: '/resources/data-viz.pdf',
    date: 'March 2023',
  },
  {
    id: '6',
    title: 'Funding Opportunities for Undergraduate Research',
    type: 'guide',
    summary:
      'A comprehensive guide to finding and applying for research funding as an undergraduate student, including grants, scholarships, and fellowships.',
    tags: ['Funding', 'Grants', 'Opportunities'],
    url: '/resources/funding-guide',
    date: 'June 2023',
  },
];

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<
    ResearchCategory | 'all'
  >('all');

  // Filter research papers based on active category
  const filteredPapers =
    activeCategory === 'all'
      ? researchPapers
      : researchPapers.filter((paper) => paper.category === activeCategory);

  // Handle tag click
  const handleTagClick = (tag: string) => {
    console.log(`Tag clicked: ${tag}`);
    // Here you would typically filter by tag or navigate to a tag page
  };

  return (
    <div className='flex min-h-screen flex-col bg-[#0f0f1a]'>
      {/* Hero Section */}
      <section className='w-full py-16 md:py-24 lg:py-32 bg-gradient-to-b from-[#121220] to-[#0f0f1a]'>
        <div className='container mx-auto px-4 sm:px-6 max-w-7xl'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
            <div className='flex flex-col space-y-6'>
              <div>
                <h1 className='text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-white'>
                  Discover and Share Research
                </h1>
                <p className='mt-4 text-lg text-gray-400 max-w-xl'>
                  A platform dedicated to showcasing exceptional engineering
                  research projects, fostering collaboration, and advancing
                  academic excellence.
                </p>
              </div>
              <div className='flex flex-col sm:flex-row gap-4'>
                <Button
                  size='lg'
                  className='border-2 border-indigo-500 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white rounded-xl px-6 py-3 h-auto'
                  asChild
                >
                  <Link href='/browse'>
                    Browse Research <ArrowRight className='ml-2 h-4 w-4' />
                  </Link>
                </Button>
                <Button
                  size='lg'
                  variant='outline'
                  className='border-2 border-indigo-500 text-gray-300 hover:bg-indigo-600 hover:text-white rounded-xl px-6 py-3 h-auto'
                  asChild
                >
                  <Link href='/submit'>Submit Your Work</Link>
                </Button>
              </div>
              <div className='relative max-w-md mt-4'>
                <Search className='absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500' />
                <Input
                  type='search'
                  placeholder='Search for research topics...'
                  className='pl-10 h-12 rounded-full bg-[#1c1c2b] border-gray-700 text-gray-300 focus:border-indigo-500 focus:ring-indigo-500'
                />
              </div>
            </div>
            <div className='hidden md:flex justify-center'>
              <div className='relative w-full max-w-md aspect-square'>
                <div className='absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 opacity-70 animate-pulse'></div>
                <div className='absolute inset-4 rounded-full bg-[#1c1c2b] shadow-[0_0_15px_rgba(79,70,229,0.3)] flex items-center justify-center'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='url(#gradient)'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='h-24 w-24'
                  >
                    <defs>
                      <linearGradient
                        id='gradient'
                        x1='0%'
                        y1='0%'
                        x2='100%'
                        y2='100%'
                      >
                        <stop offset='0%' stopColor='#4f46e5' />
                        <stop offset='100%' stopColor='#8b5cf6' />
                      </linearGradient>
                    </defs>
                    <path d='M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20' />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Faculty Departments Section */}
      <section className='w-full bg-[#0f0f1a] border-t border-gray-800'>
        <div className='text-center pt-16 pb-8'>
          <h2 className='text-3xl font-bold tracking-tight text-white'>
            Faculty of Engineering
          </h2>
          <p className='mt-4 text-lg text-gray-400 max-w-2xl mx-auto'>
            Explore research across our 10 engineering departments
          </p>
        </div>

        <DepartmentCarousel />
      </section>

      {/* Featured Research Section */}
      <section className='w-full py-16 md:py-24 bg-[#121220] border-t border-gray-800'>
        <div className='container mx-auto px-4 sm:px-6 max-w-7xl'>
          <div className='flex flex-col items-center justify-center space-y-4 text-center mb-12'>
            <div className='space-y-2 max-w-3xl'>
              <h2 className='text-3xl font-bold tracking-tight md:text-4xl text-white'>
                Featured Research
              </h2>
              <p className='text-lg text-gray-400'>
                Explore groundbreaking engineering research across various
                disciplines
              </p>
            </div>
          </div>

          <FeaturedCategories
            activeCategory={activeCategory}
            onCategoryChange={(category) => setActiveCategory(category)}
          />

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {filteredPapers.map((paper) => (
              <ResearchCard
                key={paper.id}
                paper={paper}
                onTagClick={handleTagClick}
              />
            ))}
          </div>

          <div className='flex justify-center mt-10'>
            <Button
              variant='outline'
              className='mx-auto border-2 border-indigo-500 text-gray-300 hover:bg-indigo-600 hover:text-white rounded-xl px-6 py-3 h-auto'
              asChild
            >
              <Link href='/browse'>View All Research</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* News Section */}
      <NewsSection
        title='Latest News'
        description='Stay updated with the latest events, opportunities, and achievements in research'
        news={newsItems}
        viewAllUrl='/news'
      />

      {/* Resource Hub Section */}
      <ResourceHub
        title='Resource Hub'
        description='Access curated research resources to enhance your academic journey'
        resources={resourceItems}
        viewAllUrl='/resources'
      />

      {/* Stats Section */}
      <section className='w-full py-16 bg-gradient-to-r from-indigo-900/20 to-purple-900/20 border-t border-gray-800'>
        <div className='container mx-auto px-4 sm:px-6 max-w-7xl'>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
            {[
              { number: '10,000+', label: 'Research Papers' },
              { number: '5,000+', label: 'Researchers' },
              { number: '500+', label: 'Institutions' },
              { number: '50+', label: 'Countries' },
            ].map((stat, index) => (
              <div
                key={index}
                className='flex flex-col items-center text-center'
              >
                <div className='text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400 mb-2'>
                  {stat.number}
                </div>
                <div className='text-gray-400'>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className='w-full py-16 md:py-24 bg-[#121220] border-t border-gray-800'>
        <div className='container mx-auto px-4 sm:px-6 max-w-7xl'>
          <div className='flex flex-col md:flex-row gap-12 items-center'>
            <div className='flex-1 space-y-6'>
              <h2 className='text-3xl font-bold tracking-tight md:text-4xl text-white'>
                Ready to Share Your Research?
              </h2>
              <p className='text-lg text-gray-400'>
                Join our community of researchers and showcase your work to a
                global audience. Get recognized for your contributions and
                connect with peers in your field.
              </p>
              <div className='flex flex-col sm:flex-row gap-4'>
                <Button
                  size='lg'
                  className='border-2 border-indigo-500 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white rounded-xl px-6 py-3 h-auto'
                  asChild
                >
                  <Link href='/auth/signup'>Submit Your Research</Link>
                </Button>
                <Button
                  size='lg'
                  variant='outline'
                  className='border-2 border-indigo-500 text-gray-300 hover:bg-indigo-600 hover:text-white rounded-xl px-6 py-3 h-auto'
                  asChild
                >
                  <Link href='/browse'>Learn More</Link>
                </Button>
              </div>
            </div>
            <div className='flex-1 flex justify-center'>
              <div className='relative w-full max-w-md'>
                <div className='absolute inset-0 bg-indigo-500/10 rounded-2xl rotate-3 opacity-30'></div>
                <div className='absolute inset-0 bg-purple-500/10 rounded-2xl -rotate-3 opacity-30'></div>
                <div className='relative bg-[#1c1c2b] rounded-2xl shadow-[0_0_15px_rgba(79,70,229,0.2)] p-8 border border-gray-800'>
                  <div className='flex items-center justify-center mb-6'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='url(#gradient-icon)'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      className='h-12 w-12'
                    >
                      <defs>
                        <linearGradient
                          id='gradient-icon'
                          x1='0%'
                          y1='0%'
                          x2='100%'
                          y2='100%'
                        >
                          <stop offset='0%' stopColor='#4f46e5' />
                          <stop offset='100%' stopColor='#8b5cf6' />
                        </linearGradient>
                      </defs>
                      <path d='M12 20h9' />
                      <path d='M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z' />
                    </svg>
                  </div>
                  <h3 className='text-xl font-bold text-center mb-2 text-white'>
                    Submission Process
                  </h3>
                  <ul className='space-y-3'>
                    {[
                      'Create an account',
                      'Upload your research paper',
                      'Add metadata and keywords',
                      'Submit for review',
                      'Get published and cited',
                    ].map((step, index) => (
                      <li
                        key={index}
                        className='flex items-center text-gray-300'
                      >
                        <div className='w-6 h-6 rounded-full bg-gradient-to-r from-indigo-600/30 to-purple-600/30 text-white flex items-center justify-center mr-3 text-sm font-medium'>
                          {index + 1}
                        </div>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className='w-full py-12 bg-[#0a0a14] border-t border-gray-800'>
        <div className='container mx-auto px-4 sm:px-6 max-w-7xl'>
          <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
            <div className='col-span-1 md:col-span-2'>
              <div className='flex items-center gap-2 mb-4'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='url(#gradient-footer)'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='h-6 w-6'
                >
                  <defs>
                    <linearGradient
                      id='gradient-footer'
                      x1='0%'
                      y1='0%'
                      x2='100%'
                      y2='100%'
                    >
                      <stop offset='0%' stopColor='#4f46e5' />
                      <stop offset='100%' stopColor='#8b5cf6' />
                    </linearGradient>
                  </defs>
                  <path d='M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20' />
                </svg>
                <span className='text-xl font-bold text-white'>
                  ResearchHub
                </span>
              </div>
              <p className='text-gray-400 mb-4 max-w-md'>
                A platform dedicated to showcasing exceptional research
                projects, fostering collaboration, and advancing academic
                excellence.
              </p>
              <div className='flex space-x-4'>
                <a
                  href='#'
                  className='text-gray-500 hover:text-indigo-400 transition ease-in-out duration-300'
                >
                  <svg
                    className='h-6 w-6'
                    fill='currentColor'
                    viewBox='0 0 24 24'
                    aria-hidden='true'
                  >
                    <path
                      fillRule='evenodd'
                      d='M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z'
                      clipRule='evenodd'
                    />
                  </svg>
                </a>
                <a
                  href='#'
                  className='text-gray-500 hover:text-indigo-400 transition ease-in-out duration-300'
                >
                  <svg
                    className='h-6 w-6'
                    fill='currentColor'
                    viewBox='0 0 24 24'
                    aria-hidden='true'
                  >
                    <path d='M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84' />
                  </svg>
                </a>
                <a
                  href='#'
                  className='text-gray-500 hover:text-indigo-400 transition ease-in-out duration-300'
                >
                  <svg
                    className='h-6 w-6'
                    fill='currentColor'
                    viewBox='0 0 24 24'
                    aria-hidden='true'
                  >
                    <path
                      fillRule='evenodd'
                      d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z'
                      clipRule='evenodd'
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className='text-sm font-semibold text-white tracking-wider uppercase mb-4'>
                Resources
              </h3>
              <ul className='space-y-3'>
                <li>
                  <Link
                    href='/browse'
                    className='text-gray-400 hover:text-indigo-400 transition ease-in-out duration-300'
                  >
                    Browse Research
                  </Link>
                </li>
                <li>
                  <Link
                    href='/submit'
                    className='text-gray-400 hover:text-indigo-400 transition ease-in-out duration-300'
                  >
                    Submit Paper
                  </Link>
                </li>
                <li>
                  <Link
                    href='#'
                    className='text-gray-400 hover:text-indigo-400 transition ease-in-out duration-300'
                  >
                    Research Guidelines
                  </Link>
                </li>
                <li>
                  <Link
                    href='#'
                    className='text-gray-400 hover:text-indigo-400 transition ease-in-out duration-300'
                  >
                    Citation Tools
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className='text-sm font-semibold text-white tracking-wider uppercase mb-4'>
                Company
              </h3>
              <ul className='space-y-3'>
                <li>
                  <Link
                    href='#'
                    className='text-gray-400 hover:text-indigo-400 transition ease-in-out duration-300'
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href='#'
                    className='text-gray-400 hover:text-indigo-400 transition ease-in-out duration-300'
                  >
                    News
                  </Link>
                </li>
                <li>
                  <Link
                    href='#'
                    className='text-gray-400 hover:text-indigo-400 transition ease-in-out duration-300'
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    href='#'
                    className='text-gray-400 hover:text-indigo-400 transition ease-in-out duration-300'
                  >
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className='mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center'>
            <p className='text-sm text-gray-500'>
              © 2023 ResearchHub. All rights reserved.
            </p>
            <div className='flex space-x-6 mt-4 md:mt-0'>
              <Link
                href='#'
                className='text-sm text-gray-500 hover:text-indigo-400 transition ease-in-out duration-300'
              >
                Privacy Policy
              </Link>
              <Link
                href='#'
                className='text-sm text-gray-500 hover:text-indigo-400 transition ease-in-out duration-300'
              >
                Terms of Service
              </Link>
              <Link
                href='#'
                className='text-sm text-gray-500 hover:text-indigo-400 transition ease-in-out duration-300'
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
