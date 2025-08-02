"use client";

import { DepartmentCarousel } from "@/components/department-carousel-alter";
import {
  ArrowRight,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function LandingPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const [researchTab, setResearchTab] = useState("All");
  const researchTabs = ["All", "Experimental", "Analytical", "Additional"]

  const getResearchTabPosition = () => {
    const tabIndex = researchTabs.indexOf(researchTab);
    return tabIndex * 100;
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMobileMenuOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node) &&
        menuButtonRef.current &&
        !menuButtonRef.current.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  return (
    <div className="bg-[url('/images/bg-watermark.png')] bg-no-repeat bg-contain">
      {/* Top Nav */}
      <section className="p-4 sticky top-5 z-50">
        <div className="container mx-auto flex justify-between shadow-sm py-3 rounded-full items-center bg-white">
          <Link
          href="/"
          className="md:text-xl font-bold transition ease-in-out duration-300 hover:opacity-80"
          aria-label="ResearchHub Home"
          >
            Resource<span className="text-magenta">HUB</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/browse" className="hover:text-magenta opacity-60 transition-colors">
              Browse
            </Link>
            <Link href="/submit" className="hover:text-magenta opacity-60 transition-colors">
              Submit
            </Link>
            <Link href="/about" className="hover:text-magenta opacity-60 transition-colors">
              About
            </Link>
            <Link href="/news" className="hover:text-magenta opacity-60 transition-colors">
              News
            </Link>
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/auth/login"
              className="px-4 py-2 rounded-xl text-magenta border-[1.5px] border-gray-200 shadow-[inset_0_-2px_8px_rgba(0,0,0,0.08)] hover:opacity-80 transition-opacity duration-300"
            >
              Login
            </Link>
            <Link
              href="/auth/login"
              className="px-4 py-2 rounded-xl bg-magenta text-white shadow-[inset_0_-2px_4px_rgba(255,255,255,0.35)] drop-shadow-[inset_0_2px_8px_rgba(33,0,93,0.2)] flex items-center gap-2 hover:opacity-80 transition-opacity duration-300"
            >
              <span>Sign Up</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            ref={menuButtonRef}
            className="md:hidden rounded-lg hover:text-magenta hover:opacity-80 transition-all duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isMobileMenuOpen && (
          <div 
            ref={mobileMenuRef}
            className="md:hidden mt-2 bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
          >
            <nav className="flex flex-col py-4 px-8">
              <Link 
                href="/browse" 
                className="py-3 hover:bg-gray-50 transition-colors hover:text-magenta"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Browse
              </Link>
              <Link 
                href="/submit" 
                className="py-3 hover:bg-gray-50 transition-colors hover:text-magenta"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Submit
              </Link>
              <Link 
                href="/about" 
                className="py-3 hover:bg-gray-50 transition-colors hover:text-magenta"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/news" 
                className="py-3 hover:bg-gray-50 transition-colors hover:text-magenta"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                News
              </Link>
            </nav>
            <div className="border-t border-gray-100 px-6 py-4 space-y-4">
              <Link
                href="/auth/login"
                className="w-fit text-center px-4 py-2 rounded-xl text-magenta border-[1.5px] border-gray-200 shadow-[inset_0_-2px_8px_rgba(0,0,0,0.08)] hover:opacity-80 transition-opacity duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Login
              </Link>
              <Link
                href="/auth/login"
                className="w-fit text-center px-4 py-2 rounded-xl bg-magenta text-white shadow-[inset_0_-2px_4px_rgba(255,255,255,0.35)] drop-shadow-[inset_0_2px_8px_rgba(33,0,93,0.2)] flex items-center justify-center gap-2 hover:opacity-80 transition-opacity duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span>Sign Up</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        )}
      </section>

      {/* Hero Section */}
      <section className="my-12 px-8">
        <div className="text-center max-w-[40rem] mx-auto flex flex-col items-center gap-4">
          <h1 className="text-4xl md:text-7xl font-black font-schibstedGrotesk">
            <span>Discover & Share</span>
            <span className="block bg-gradient-to-r from-[rgba(33,0,93,1)] via-[rgba(33,0,93,1)] to-[rgba(114,0,204,1)] text-transparent bg-clip-text">Research!</span>
          </h1>
          <p className="md:text-lg mx-auto text-gray-400">
            A platform dedicated to showcasing exceptional engineering research
            projects, fostering collaboration, and advancing academic excellence.
          </p>
          <div className="flex flex-col md:flex-row items-center gap-4">
            <Link
              href="/auth/login"
              className="px-4 py-1.5 rounded-xl bg-magenta text-white shadow-[inset_0_-2px_4px_rgba(255,255,255,0.35)] drop-shadow-[inset_0_2px_8px_rgba(33,0,93,0.2)] flex items-center gap-2 hover:opacity-80 transition-opacity duration-300"
            >
              <span>Browse Research</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/auth/login"
              className="px-4 py-1.5 rounded-xl text-magenta border-[1.5px] bg-white border-gray-200 shadow-[inset_0_-2px_8px_rgba(0,0,0,0.08)] hover:opacity-80 transition-opacity duration-300"
            >
              Submit your work
            </Link>
          </div>
        </div>
        <div className="mt-12 max-sm:hidden overflow-hidden rounded-3xl h-fit mx-auto max-w-[80rem]">
          <Image
            src="/images/hero_image.svg"
            width={1200}
            height={400}
            className="w-full object-cover object-center"
            alt="hero image"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="mx-auto bg-magenta/5 px-4 py-10 md:py-20">
        <div className="mx-auto mb-6 text-center space-y-3">
          <h1 className="text-2xl md:text-5xl font-bold">
            Our Features
          </h1>
          <p className="text-center md:text-lg text-gray-400">
            Take a look at some of our core features that makes the platform easy
            to use
          </p>
        </div>

        {/* Features Grid */}
        <div className="sm:grid gap-6 max-sm:space-y-4 w-full sm:grid-cols-[2] md:grid-cols-[1fr_1fr_1.3fr] mx-auto max-w-[80rem]">
          {/* Filter Papers */}
          <div className="grid sm:grid-cols-2 relative gap-8 col-span-2 p-9 bg-[#F6EBFF] rounded-2xl overflow-hidden">
            <div className="order-1 md:order-2">
              <Image
                src="/features/search-filter.svg"
                alt="filter"
                width={80}
                height={80}
                className="w-full"
              />
            </div>
            <div className="order-2 md:order-1">
              <div className="px-2 py-1 border border-magenta w-fit text-sm rounded-lg">FILTER PAPERS</div>
              <h4 className="text-xl md:text-2xl my-3">
                Find research papers easily with our filter system
              </h4>
              <p className="text-gray-400">
                Find research papers easily based on your interests and field of study
                with our easy to use filter system
              </p>
            </div>
          </div>

          {/* Milestone Badges */}
          <div className="flex flex-col md:grid sm:grid-cols-3 relative gap-8 col-span-1 p-9 bg-[#EBFFF2] rounded-2xl overflow-hidden">
            <div className="order-1 md:order-2 col-span-full md:col-span-1 flex flex-col justify-end">
              <Image
                src="/features/trophy.svg"
                alt="filter"
                width={150}
                height={150}
                className="max-sm:w-1/3 mx-auto md:scale-[2]"
              />
            </div>
            <div className="order-2 md:order-1 col-span-2 md:col-span-2">
              <div className="px-2 py-1 border border-[#00A63B] text-[#00A63B] w-fit text-sm rounded-lg">MILESTONE BADGES</div>
              <h4 className="text-xl md:text-2xl my-3">
                Gamification and Milestones
              </h4>
              <p className="text-gray-400">
                Celebrate milestones and collect badges for achieving various goals
                and objectives
              </p>
            </div>
          </div>

          {/* Upload Tracker */}
          <div className="space-y-6 relative col-span-1 p-9 bg-[#FFEBEC] rounded-2xl overflow-hidden">
            <div>
              <Image
                src="/features/file-upload.svg"
                alt="filter"
                width={500}
                height={200}
                className="w-full"
              />
            </div>
            <div className="space-y-2">
              <div className="px-2 py-1 border border-[#DB000E] text-[#DB000E] w-fit text-sm rounded-lg">UPLOAD TRACKER</div>
              <h4 className="text-xl md:text-2xl my-3">
                Track Uploads Easily
              </h4>
              <p className="text-gray-400">
                Celebrate milestones and collect badges for achieving various goals
                and objectives
              </p>
            </div>
          </div>

          {/* Upload Papers */}
          <div className="bg-[#FDF4EC] sm:row-start-1 sm:row-end-3 sm:col-start-3 p-9 flex flex-col justify-between rounded-2xl">
            <div className="h-[15rem]">
              <Image
                src="/features/upload-papers.svg"
                width={500}
                height={200}
                alt="upload papers"
                className="object-cover w-full"
              />
            </div>
            <div className="space-y-2">
              <div className="px-2 py-1 border border-[#EB801D] text-[#EB801D] w-fit text-sm rounded-lg">UPLOAD PAPERS</div>
              <h4 className="text-xl md:text-2xl my-3">
                Upload your Final Year Research Papers
              </h4>
              <p className="text-gray-400 mt-6">
                Make use of our platform to upload and publish your final year project
                manuscripts to aid learning for your predecessors
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Research Section */}
      <section className="max-w-[80rem] px-8 mx-auto py-10 md:py-20">
        <div className="mx-auto mb-6 text-center space-y-3">
          <h1 className="text-2xl md:text-5xl font-bold">
            Featured Research
          </h1>
          <p className="text-center md:text-lg text-gray-400">
            Explore research across our 10 engineering departments
          </p>
        </div>
        <nav className="relative grid grid-cols-4 gap-1 p-1 border rounded-full w-fit mx-auto border-gray-200 my-5 bg-white">
          {/* Animated Background */}
          <div 
            className="absolute top-1 left-1 h-[calc(100%-0.5rem)] bg-magenta rounded-full transition-all duration-300 ease-in-out"
            style={{ 
              width: 'calc(25% - 0.125rem)',
              transform: `translateX(${getResearchTabPosition()}%)`
            }}
          />
          
          {researchTabs.map((tab, index) => (
            <button
              key={index}
              className={`relative px-5 py-2 rounded-full transition-colors duration-300 text-[10px] md:text-sm flex items-center justify-center ${
                researchTab === tab ? "text-white" : "text-gray-400 hover:text-magenta"
              }`}
              onClick={() => setResearchTab(tab)}
            >
              {tab}
            </button>          
          ))}
        </nav>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="p-3 px-6 border border-black/[0.1] max-w-[32rem] rounded-lg space-y-5">
              <div className="flex gap-2 items-center flex-wrap text-[10px]">
                <div className="p-0.5 px-2 bg-[#E5FFEF] text-[#00A63B] border rounded-md border-[#CCFFDE]">
                  #civileng
                </div>
                <div className="p-0.5 px-2 bg-[#FFE5E7] text-[#DB000E] border rounded-md border-[#FFCCCF]">
                  #structures
                </div>
                <div className="p-0.5 px-2 bg-[#FDF2E8] text-[#EB801D] border rounded-md border-[#FBE5D0]">
                  #materials
                </div>
              </div>
              <div>
                <h4 className="font-semibold line-clamp-1">Effects of Water Quality on Compressive Strength</h4>
                <p className="py-2 text-gray-400 text-sm">
                  This Paper explores the various effects water quality may have on the
                  compressive strength of cement based mortar.
                </p>
                <div className="flex gap-3 items-center py-2 text-sm">
                  <div className="flex gap-1">
                    <Image src="/users/user 1.svg" alt="user" width={25} height={25} />
                    <Image
                      src="/users/user 2.svg"
                      className="-ml-1"
                      alt="user"
                      width={25}
                      height={25}
                    />
                    <Image
                      src="/users/user 3.svg"
                      className="-ml-1"
                      alt="user"
                      width={25}
                      height={25}
                    />
                  </div>
                  <span>Dr. A. Adeokun, et. al.</span>
                </div>
              </div>
              <div className="flex justify-between">
                <span>256 downloads</span>
                <span className="text-magenta">View Paper</span>
              </div>
            </div>
          ))}
        </section>
        <div className="text-right mt-4">
          <Link
            href="/browse"
            className="px-4 py-1 rounded-lg text-magenta border-[1.5px] bg-white border-gray-200 shadow-[inset_0_-2px_8px_rgba(0,0,0,0.08)] hover:opacity-80 transition-opacity duration-300"
          >
            View All Research
          </Link>
        </div>
      </section>

      {/* Department Carousel Section */}
      <section className="py-10 md:py-20">
        <div className="mx-auto mb-6 text-center space-y-3">
          <h1 className="text-2xl md:text-5xl font-bold">
            Faculty Of Engineering
          </h1>
          <p className="text-center md:text-lg text-gray-400">
            Explore research across our 10 engineering departments
          </p>
        </div>

        <DepartmentCarousel />
      </section>

      {/* Resource Hub Section */}
      <section className="mx-auto px-8 py-10 md:py-20 bg-magenta/5">
        <div className="mx-auto mb-6 text-center space-y-3">
          <h1 className="text-2xl md:text-5xl font-bold">
            Resource Hub
          </h1>
          <p className="text-center md:text-lg text-gray-400">
            Access curated research resources to enhance your academic journey
          </p>
        </div>

        <div className="flex items-center justify-between my-6 max-w-[80rem] mx-auto">
          <span className="font-bold">Browse Resources</span>
          <div className="relative">
            <div className="relative inline-block">
              <select
                className="cursor-pointer hover:opacity-80 pr-8 pl-4 py-1 rounded-md bg-white outline:none focus:outline-none transition-opacity appearance-none"
                style={{
                  backgroundImage: "none",
                }}
                defaultValue="all"
              >
                <option value="all">All Types</option>
                <option value="pdf">PDF</option>
                <option value="video">Video</option>
                <option value="link">Link</option>
                <option value="guide">Guide</option>
              </select>
              <ChevronDown className="w-4 h-4 pointer-events-none absolute right-3 top-1/2 -translate-y-1/2" />
            </div>
          </div>
        </div>

        <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-[1fr_1fr_1fr] justify-items-center max-w-[80rem] mx-auto">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="bg-white border border-magenta/10 w-full p-4 rounded-lg space-y-3">
              <div className="flex justify-between py-2 text-[10px] text-gray-400">
                <span>Video Files</span>
                <span>May, 2024</span>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold">
                  Effects of Water Quality on Compress.
                </h4>
                <p className="text-sm text-gray-400">
                  This Paper explores the various effects water quality may have on the
                  compressive strength of cement based mortar.
                </p>
                <div className="flex gap-2 items-center flex-wrap text-[10px]">
                  <div className="p-0.5 px-2 bg-[#E5FFEF] text-[#00A63B] border rounded-md border-[#CCFFDE]">
                    #civileng
                  </div>
                  <div className="p-0.5 px-2 bg-[#FFE5E7] text-[#DB000E] border rounded-md border-[#FFCCCF]">
                    #structures
                  </div>
                  <div className="p-0.5 px-2 bg-[#FDF2E8] text-[#EB801D] border rounded-md border-[#FBE5D0]">
                    #materials
                  </div>
                </div>
              </div>
              <button className="ms-auto flex items-center gap-2 py-1 rounded-lg text-magenta hover:opacity-80 transition-opacity duration-300 text-sm">
                View Resource <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          ))}

        <div className="text-right mt-4 ms-auto col-span-full">
          <Link
            href="/browse"
            className="px-4 py-1 rounded-lg text-magenta border-[1.5px] bg-white border-gray-200 shadow-[inset_0_-2px_8px_rgba(0,0,0,0.08)] hover:opacity-80 transition-opacity duration-300"
          >
            View All Resources
          </Link>
        </div>
        </div>
      </section>

      {/* Latest News Section */}
      <div className="mx-auto px-8 py-10 md:py-20">
        <div className="mx-auto mb-6 text-center space-y-3">
          <h1 className="text-2xl md:text-5xl font-bold">
            Latest News
          </h1>
          <p className="text-center md:text-lg text-gray-400">
            Stay updated with the latest news and announcements from our community
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6 mt-6 justify-items-center max-w-[80rem] mx-auto">
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="rounded-3xl max-w-[30rem] shadow-[inset_0_0px_0px_5px_rgba(242,242,242,0.5)] overflow-hidden">
              <div className="w-full">
                <Image
                  src="/images/doctor-microscope.png"
                  className="w-full rounded-t-3xl border-[5px] border-b-0 border-[rgba(242,242,242,0.5)] border-opacity-20"
                  width={400}
                  height={100}
                  alt=""
                />
              </div>

              <div className="px-5 py-4 space-y-4">
                <span className="block text-gray-400 text-xs">May, 2024</span>
                <h4 className="font-semibold">
                  Annual Undergraduate Research Symposium
                </h4>
                <p className="text-xs text-gray-400">
                  This Paper explores the various effects water quality may have on the
                  compressive strength of cement based mortar.
                </p>

                <button className="!mt-16 flex items-center gap-2 py-1 rounded-lg text-magenta hover:opacity-80 transition-opacity duration-300 text-sm">
                  Read Full Story <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <section className="bg-gradient-to-r max-md:py-8 px-20 py-10 md:py-20 grid md:grid-cols-2 max-sm:mb-0 from-magenta to-[#4500C3]  mx-auto">
        <div className="flex flex-col justify-center gap-6 md:gap-12">
          <h4 className="text-white max-sm:text-3xl max-sm:text-center text-7xl font-bold">
            Ready to Share your Research
          </h4>
          <button className="bg-[#7200CC] max-md:mx-auto w-fit px-4 py-2 rounded-lg mt-3 text-white">
            Submit your work
          </button>
        </div>
        <div className="relative hidden sm:block">
          <Image
            src="/images/man-with-book.svg"
            alt="random"
            className="h-[30rem] w-full object-cover"
            width={1000}
            height={700}
          />
          <Image
            src="/features/magnifying-glass.svg"
            alt="random"
            className="object-cover  absolute right-0 bottom-0"
            width={200}
            height={300}
          />
        </div>
      </section>

      {/* Footer Section */}
      <footer className="border">
        <div className="grid justify-start grid-cols-1 md:grid-cols-2 max-md:gap-9 px-8 md:px-20 py-10 md:py-20">
          <div className="space-y-3">
            <header className="md:text-lg font-bold">
              Resource<span className="text-magenta">HUB</span>
            </header>
            <div className="max-sm:text-sm max-w-[25rem] text-justify">
              A platform dedicated to showcasing exceptional research projects,
              fostering collaboration, and advancing academic excellence.
            </div>
          </div>
          <div className="flex flex-col max-md:gap-9 md:flex-row justify-between">
            <div className="space-y-4 [&>*]:block">
              <header className="font-bold">RESOURCES</header>
              <Link href="/browse" className="hover:opacity-60 transition-opacity">Browse Research</Link>
              <Link href="/submit" className="hover:opacity-60 transition-opacity">Submit Paper</Link>
              <Link href="/guidelines" className="hover:opacity-60 transition-opacity">Research Guidelines</Link>
              <Link href="/citation" className="hover:opacity-60 transition-opacity">Citation Tools</Link>
            </div>
            <div className="space-y-4 [&>*]:block">
              <header className="font-bold">COMPANY</header>
              <Link href="/about" className="hover:opacity-60 transition-opacity">About Us</Link>
              <Link href="/news" className="hover:opacity-60 transition-opacity">Latest News</Link>
              <Link href="/contact" className="hover:opacity-60 transition-opacity">Contact Us</Link>
              <Link href="/careers" className="hover:opacity-60 transition-opacity">Careers</Link>
            </div>
            <div className="space-y-4 [&>*]:block">
              <header className="font-bold">WEB</header>
              <Link href="/privacy" className="hover:opacity-60 transition-opacity">Privacy</Link>
              <Link href="/terms" className="hover:opacity-60 transition-opacity">Terms of Service</Link>
              <Link href="/cookie" className="hover:opacity-60 transition-opacity">Cookie Policy</Link>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 py-5 flex max-sm:flex-col gap-6 max-sm:items-center justify-between px-4 sm:px-8 md:px-14 text-sm">
          <div>&copy; 2025 ULES ARB ResourceHUB. All rights reserved.</div>
          <div className="flex gap-4 max-sm:justify-end">
            <Link href="https://instagram.com/ulesarb">
              <Image
                src="/socials/instagram.svg"
                alt="instagram"
                width={24}
                height={24}
              />
            </Link>
            <Link href="https://www.linkedin.com/company/ules-arb/">
              <Image
                src="/socials/linkedin.svg"
                alt="linkedin"
                width={20}
                height={20}
              />
            </Link>
            <Link href="https://x.com/ulesarbteam">
              <Image
                src="/socials/twitter-x.svg"
                alt="twitter"
                width={20}
                height={20}
              />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
