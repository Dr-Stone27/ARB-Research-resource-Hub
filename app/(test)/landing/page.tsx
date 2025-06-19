"use client";

import { DepartmentCarousel } from "@/components/department-carousel-alter";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { SelectTrigger } from "@radix-ui/react-select";
import {
  ArrowRight,
  Facebook,
  Filter,
  Linkedin,
  SearchIcon,
  Twitter,
} from "lucide-react";
import Image from "next/image";
import React, { ReactNode, useState } from "react";

const LandingPage = () => {
  return (
    <div>
      <div className="bg-[url('/bg-watermark.png')] bg-no-repeat bg-cover">
        <TopNav />
        <HeroSection />
      </div>
      <FeatureSection />
      <FeaturedResearchSection />
      <Slider />
      <ReseachHub />
      <LatestNewsSection />
      <section className="bg-gradient-to-r max-md:py-8 px-20 grid md:grid-cols-2 max-sm:mb-0 my-10 from-[#21005D] to-[#4500C3]  mx-auto">
        <div className="flex flex-col justify-center">
          <h4 className="text-white max-sm:text-3xl max-sm:text-center text-7xl font-bold">
            Ready to Share your Research
          </h4>
          <button className="bg-[#7200CC] max-md:mx-auto w-fit px-4 py-2 rounded-lg mt-3 text-white">
            Submit your work
          </button>
        </div>
        <div className="relative hidden sm:block">
          <Image
            src="/man-with-book.png"
            alt="random"
            className="h-[30rem] w-full object-cover"
            width={1000}
            height={700}
          />
          <Image
            src="/magnifying_glass_2.png"
            alt="random"
            className="object-cover  absolute right-0 bottom-0"
            width={200}
            height={300}
          />
        </div>
      </section>

      <Footer />
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="bg-[#F2F2F2]">
      <div className="grid justify-start grid-cols-1 md:grid-cols-2 max-md:gap-9 p-8 sm:px-[6rem] md:px-[8rem] py-[8rem]">
        <div>
          <header className=" md:text-lg py-3 font-bold">
            Research<span className="text-[#21005D]">HUB</span>
          </header>
          <div className="max-w-[35rem] md:text-lg">
            A platform dedicated to showcasing exceptional research projects,
            fostering collaboration, and advancing academic excellence.
          </div>
        </div>
        <div className="flex flex-col max-md:gap-9 md:flex-row justify-between">
          <div className="space-y-4">
            <header className="font-bold">RESOURCES</header>
            <div>Browse Research</div>
            <div>Submit Paper</div>
            <div>Research Guidelines</div>
            <div>Citation Tools</div>
          </div>
          <div className="space-y-4">
            <header className="font-bold">COMPANY</header>
            <div>About Us</div>
            <div>Latest News</div>
            <div>Contact Us</div>
            <div>Careers</div>
          </div>
          <div className="space-y-4">
            <header className="font-bold">WEB</header>
            <div>Privacy</div>
            <div>Terms of Service</div>
            <div>Cookie Policy</div>
          </div>
        </div>
      </div>
      <div className="border-t border-black/10 py-3 sm:flex justify-between px-4 sm:px-8 md:px-14">
        <div>© 2025 ULES-ARB ResourceHUB. All rights reserved.</div>
        <div className="flex gap-4 max-sm:justify-end">
          <Facebook />
          <Linkedin />
          <Twitter />
        </div>
      </div>
    </footer>
  );
};

const LatestNewsSection = () => {
  return (
    <div className="container mx-auto p-8 my-6">
      <h2 className="text-4xl font-bold mb-6 text-center">Latest News</h2>
      <p className="text-center md:text-lg">
        Stay updated with the latest news and announcements from our community
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6 mt-6 justify-items-center">
        {Array.from({ length: 6 }).map((_, index) => (
          <ThirdCard key={index} />
        ))}
      </div>
    </div>
  );
};

const TopNav = () => {
  return (
    <nav className="p-4">
      <div className="container mx-auto flex justify-between border border-black/[0.1] py-3 rounded-xl items-center">
        <div className="md:text-lg font-bold">
          Resource<span className="text-[#21005D]">HUB</span>
        </div>
        <div className="space-x-4 hidden sm:block">
          <a href="/" className="">
            Browse
          </a>
          <a href="/about" className="">
            Submit
          </a>
          <a href="/contact" className="">
            About
          </a>
          <a href="/contact" className="">
            News
          </a>
        </div>
        <div className="space-x-4">
          <Button className="!text-[#21005D] border rounded-md bg-white">
            Login
          </Button>
          <Button className="!bg-[#21005D] text-white">
            Sign Up <ArrowRight className=" pl-3 !rounded-lg " />
          </Button>
        </div>
      </div>
    </nav>
  );
};

const HeroSection = () => {
  return (
    <div>
      <div className="p-8 text-center">
        <h1 className="text-3xl md:text-6xl font-bold mb-4">
          Discover & Share <span>Research!</span>
        </h1>
        <p className="md:text-lg mb-6 max-w-[40rem] mx-auto">
          A platform dedicated to showcasing exceptional engineering research
          projects, fostering collaboration, and advancing academic excellence.
        </p>
        <div>
          <Button className=" !bg-[#21005D] text-white hover:bg-gray-200">
            Browser Research <ArrowRight className=" pl-3 !rounded-lg " />
          </Button>
          <Button className="ml-4 bg-white border-black/[0.2] border rounded-md !text-[#21005D]">
            Submit your work{" "}
          </Button>
        </div>
      </div>
      <div className="bg-[#F2F2F2] max-sm:hidden overflow-hidden sm:p-5 rounded-3xl border-[4px] border-black/20 h-[30rem] sm:h-[40rem] mx-auto max-w-[80rem]">
        <Image
          src="/hero_image.png"
          width={1000}
          height={800}
          className="w-full h-full object-cover object-left"
          alt="" /*fill={true} */
        />
      </div>
    </div>
  );
};

const FeatureSection = () => {
  return (
    <div className="container mx-auto">
      <div className="container mx-auto p-8 my-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Our Features</h2>
        <p className="text-center md:text-lg">
          Take a look at some of our core features that makes the platform easy
          to use
        </p>
      </div>
      <div className="sm:grid gap-3 max-sm:space-y-4 w-full sm:grid-cols-[2] md:grid-cols-[1fr_1fr_1.3fr] mx-auto">
        <Div1 />
        <Div2 />
        <Div3 />
        <Div4 />
      </div>
    </div>
  );
};

const Badge = ({ children, color }: { children: ReactNode; color: string }) => {
  return (
    <span
      style={{ color: color, borderColor: color }}
      className={` border-opacity-10 border p-1 px-2 text-sm uppercase rounded-md border-black/[0.2]`}
    >
      {children}
    </span>
  );
};

const Div1 = () => {
  return (
    <div className="grid sm:grid-cols-2 relative gap-8 col-span-2 p-9 bg-[#F6EBFF] rounded-2xl">
      <div>
        <Badge color="#7200CC">FILTER PAPERS</Badge>
        <h4 className="sm:text-2xl text-xl my-3">
          Find Research Papers easily with our Filter System
        </h4>
        <p className="">
          Find research papers easily based on your interests and field of study
          with our easy to use filter system
        </p>
      </div>
      <div className="text-black/50">
        <div className="bg-white p-2 px-3 mb-2 flex items-center justify-between rounded-md">
          <div className="flex items-center gap-2">
            <SearchIcon /> <span>Find Research</span>
          </div>
          <Filter className="h-5 w-5 text-black/50" />
          <Image
            src="/magnifying_glass.png"
            alt="filter"
            width={80}
            height={80}
            className="absolute max-sm:top-[14rem] right-1 top-5 "
          />
        </div>
        <ul className="p-2 rounded-md space-y-2 bg-white">
          <li>Trending this Week</li>
          <li>Latest Uploads</li>
          <li>Featured Papers</li>
        </ul>
      </div>
    </div>
  );
};

const Div2 = () => {
  return (
    <div className="flex bg-[#EBFFF2] p-7 h-[fit] rounded-2xl">
      <div>
        <div>
          <Badge color="#00A63B">milestone badges</Badge>
        </div>
        <h4 className="sm:text-2xl text-xl my-2">Gamification and Milestones</h4>
        <div>
          <div className="py-3">
            Celebrate milestones and collect badges for achieving various goals
            and objectives
          </div>
        </div>
      </div>
      <div className="">
        <Image
          src="/trophy.png"
          alt="trophy"
          width={300}
          height={290}
          className="object-cover max-sm:top-[8.5rem] relative left-7 top-[5rem]"
        />
      </div>
    </div>
  );
};

const Div3 = () => {
  return (
    <div className="p-5 rounded-2xl bg-[#FFEBEC]">
      <Image src="/track_upload.png" width={500} height={200} alt="" />
      <div className="pt-5 pb-4">
        <Badge color="#DB000E">upload tracker</Badge>
      </div>
      <h4 className="sm:text-2xl text-xl my-3">Track Uploads Easily</h4>
    </div>
  );
};

const Div4 = () => {
  return (
    <div className="bg-[#FDF4EC] sm:row-start-1 sm:row-end-3  sm:col-start-3 p-9 flex flex-col justify-between rounded-2xl">
      <div className="h-[15rem]">
        <Image
          src="/choose_a_file.png"
          width={500}
          height={200}
          alt="upload papers"
          className="object-cover w-full"
        />
      </div>
      <div>
        <Badge color="#EB801D">upload papers</Badge>
        <h4 className="text-2xl my-3">
          Upload your Final Year Research Papers
        </h4>
        <div>
          Make use of our platform to upload and publish your final year project
          manuscripts to aid learning for your predecessors
        </div>
      </div>
    </div>
  );
};

const Tag = ({ children }: { children: ReactNode }) => {
  return (
    <div className="p-0.5 px-2 w-fit bg-[#FFE5E7] text-[#DB000E] text-sm border rounded-md border-[#FFCCCF]">
      {children}
    </div>
  );
};

const FirstCard = () => {
  return (
    <div className="p-3 px-6 border border-black/[0.1] max-w-[32rem] rounded-lg space-y-5">
      <div className="flex gap-2">
        <Tag>#structures</Tag>
        <Tag>#materials</Tag>
      </div>
      <div>
        <h4>Effects of Water Quality on Compress...</h4>
        <p className="py-2 text-black/50">
          This Paper explores the various effects water quality may have on the
          compressive strength of cement based mortar.
        </p>
        <MultipleImages />
      </div>
      <div className="flex justify-between">
        <span>256 downloads</span>
        <span className="text-[#21005D]">View Paper</span>
      </div>
    </div>
  );
};

const SecondCard = () => {
  return (
    <div className="border-black/[0.1] max-w-[30rem] border p-4 rounded-lg space-y-3">
      <div className="flex justify-between py-2">
        <span className="text-black/40">Video Files</span>
        <span className="text-black/40">May, 2024</span>
      </div>
      <div className="space-y-3">
        <h4 className="text-xl text-black">
          Effects of Water Quality on Compress.
        </h4>
        <p className="text-black/50">
          This Paper explores the various effects water quality may have on the
          compressive strength of cement based mortar.
        </p>
        <div>
          <Tag>#materials</Tag>
        </div>
      </div>
      <div className="py-2 text-right text-[#21005D]">
        <Button>
          View Resource <ArrowRight className="h-4 w-6" />
        </Button>
      </div>
    </div>
  );
};

const ThirdCard = () => {
  return (
    <div className="rounded-3xl max-w-[30rem] border-[#F2F2F280] border-[8px] overflow-hidden">
      <div className="w-full">
        <Image
          src="/doctor-microscope.png"
          className="w-full"
          width={400}
          height={100}
          alt=""
        />
        <span className="px-4 pt-2 block text-black/50">May, 2024</span>
      </div>
      <h4 className="py-2 font-bold px-4">
        Annual Undergraduate Research Symposium
      </h4>
      <p className="px-4">
        This Paper explores the various effects water quality may have on the
        compressive strength of cement based mortar.
      </p>

      <Button className="px-4 pt-9 pb-4 text-[#21005D]">
        Read Full Story <ArrowRight className="h-4 w-6" />
      </Button>
    </div>
  );
};

const MultipleImages = () => {
  return (
    <div className="flex gap-3 items-center py-2">
      <div className="flex">
        <Image src="/Ellipse 1.svg" alt="" width={25} height={25} />
        <Image
          src="/Ellipse 3.svg"
          className="-ml-1"
          alt=""
          width={25}
          height={25}
        />
        <Image
          src="/Ellipse 4.svg"
          className="-ml-1"
          alt=""
          width={25}
          height={25}
        />
      </div>
      <span>Dr. A. Adeokun, et. al.</span>
    </div>
  );
};

const FeaturedResearchSection = () => {
  return (
    <div className="py-6 max-w-[80rem] px-4 mx-auto">
      <h2 className="text-4xl font-bold mb-4 text-center">Featured Research</h2>
      <p className="text-center md:text-lg">
        Explore research across our 10 engineering departments
      </p>
      <CircularTab />
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {Array.from({ length: 6 }).map((_, index) => (
          <FirstCard key={index} />
        ))}
      </section>
      <div className="text-right mt-4">
        <button className="px-5 py-1 rounded-lg border border-black/10 text-[#21005D]">
          View All Research
        </button>
      </div>
    </div>
  );
};

const CircularTab = () => {
  const [selectedTab, setSelectedTab] = useState("All");
  return (
    <nav>
      <div className="flex justify-center space-x-4 p-1 gap-y-3  max-[450px]:flex-wrap min-[450px]:border text-white rounded-full w-fit mx-auto border-black/10 my-5">
        <button
          className={`px-5 py-1 rounded-full max-[450px]:shadow ${
            selectedTab === "All" ? "bg-blue-500" : "text-black"
          }`}
          onClick={() => setSelectedTab("All")}
        >
          All
        </button>
        <button
          className={`px-5 py-1 rounded-full max-[450px]:shadow ${
            selectedTab === "Experimental" ? "bg-blue-500" : "text-black"
          }`}
          onClick={() => setSelectedTab("Experimental")}
        >
          Experimental
        </button>
        <button
          className={`px-5 py-1 rounded-full max-[450px]:shadow ${
            selectedTab === "Analytical" ? "bg-blue-500" : "text-black"
          }`}
          onClick={() => setSelectedTab("Analytical")}
        >
          Analytical
        </button>
        <button
          className={`px-5 py-1 rounded-full max-[450px]:shadow ${
            selectedTab === "Additional" ? "bg-blue-500" : "text-black"
          }`}
          onClick={() => setSelectedTab("Additional")}
        >
          Additional
        </button>
      </div>
    </nav>
  );
};

const Slider = () => {
  return (
    <div>
      <div className="container max-w-[70rem] mx-auto p-8 my-6">
        <h2 className="text-4xl font-bold mb-6 text-center">
          Faculty Of Engineering
        </h2>
        <p className="text-center">
          Explore research across our 10 engineering departments
        </p>
      </div>

      <DepartmentCarousel />
    </div>
  );
};

const ReseachHub = () => {
  return (
    <section className="container max-w-[80rem] mx-auto p-8 my-6">
      <h2 className="text-4xl font-bold mb-4 text-center">Resource Hub</h2>
      <p className="text-center text-black/60">
        Access curated research resources to enhance your academic journey
      </p>

      <div className="flex items-center justify-between my-6 ">
        <span className="font-bold">Browse Resources</span>
        <Select name="resource-type">
          <SelectTrigger className="border border-black/10 rounded-md px-5 py-1">
            <SelectValue placeholder="Filter by type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Types</SelectItem>
            <SelectItem value="pdf">PDF</SelectItem>
            <SelectItem value="video">Video</SelectItem>
            <SelectItem value="link">Link</SelectItem>
            <SelectItem value="guide">Guide</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-[1fr_1fr_1fr] justify-items-center">
        {Array.from({ length: 6 }).map((_, index) => (
          <SecondCard key={index} />
        ))}
      </div>
      <div className="text-right mt-4">
        <button className="px-5 py-1 rounded-lg border border-black/10 text-[#21005D]">
          View All Resource
        </button>
      </div>
    </section>
  );
};

export default LandingPage;
