import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { SelectTrigger } from "@radix-ui/react-select";
import { ArrowRight, Facebook, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import React, { ReactNode } from "react";

const LandingPage = () => {
  return (
    <div className="">
      <TopNav />
      <HeroSection />
      <FeatureSection />
      <FeaturedResearchSection />
      <Slider />
      <ReseachHub />
      <LatestNewsSection />
      <section className="bg-gradient-to-r px-20 grid grid-cols-2 my-10 from-[#21005D] to-[#4500C3]  mx-auto">
        <div className="flex flex-col justify-center">
          <h4 className="text-white text-7xl font-bold">
            Ready to Share your Research
          </h4>
          <button className="bg-[#7200CC] w-fit px-4 py-2 rounded-lg mt-3 text-white">
            Submit your work
          </button>
        </div>
        <div>
          <Image
            src="/man-with-book.png"
            alt="random"
            className="h-[30rem] w-full object-cover"
            width={1000}
            height={700}
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
      <div className="grid grid-cols-2 gap-0 p-8  px-[8rem] py-[8rem]">
        <div>
          <header className=" text-lg py-3 font-bold">
            Research<span className="text-[#21005D]">HUB</span>
          </header>
          <div className="max-w-[35rem]">
            A platform dedicated to showcasing exceptional research projects,
            fostering collaboration, and advancing academic excellence.
          </div>
        </div>
        <div className="flex justify-between">
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
      <div className="border-t border-black/10 py-3 flex justify-between px-14">
        <div>© 2025 ULES-ARB ResourceHUB. All rights reserved.</div>
        <div className="flex gap-4">
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
      <p className="text-center">
        Stay updated with the latest news and announcements from our community
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
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
        <div className=" text-lg font-bold">
          Resource<span className="text-[#21005D]">HUB</span>
        </div>
        <div className="space-x-4">
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
        <h1 className="text-6xl font-bold mb-4">
          Discover & Share <span>Research!</span>
        </h1>
        <p className="text-lg mb-6 max-w-[40rem] mx-auto">
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
      <div className="bg-[#F2F2F2] p-3 rounded-lg h-[40rem] mx-auto max-w-[80rem]">
        <Image
          src="/hero_image.png"
          width={10000}
          height={800}
          className="w-full"
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
        <h2 className="text-4xl font-bold mb-6 text-center">Our Features</h2>
        <p className="text-center">
          Take a look at some of our core features that makes the platform easy
          to use
        </p>
      </div>
      <div className="grid gap-3 grid-cols-[1fr_1fr_1.5fr] max-w-[80rem] mx-auto">
        <Div1 />
        <Div2 />
        <Div3 />
        <Div4 />
      </div>
    </div>
  );
};

const Badge = ({ children }: { children: ReactNode }) => {
  return (
    <span className="text-purple-700 border p-1 px-2 text-sm uppercase rounded-md border-black/[0.2]">
      {children}
    </span>
  );
};

const Div1 = () => {
  return (
    <div className="grid grid-cols-[1fr_1fr] col-span-2 p-4 bg-[#F6EBFF] rounded-md">
      <div>
        <Badge>FILTER PAPERS</Badge>
        <h4 className="text-3xl my-3">
          Find Research Papers easily with our Filter System
        </h4>
        <p className="">
          Find research papers easily based on your interests and field of study
          with our easy to use filter system
        </p>
      </div>
      <div>
        <div className="bg-white p-2 px-3 mb-2 rounded-md"> Find Research </div>
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
    <div className=" bg-[#EBFFF2] p-4 rounded-md">
      <div>
        <Badge>milestone badges</Badge>
      </div>
      <h4 className="text-3xl my-3">Gamification and Milestones</h4>
      <div className="flex">
        <div>
          Celebrate milestones and collect badges for achieving various goals
          and objectives
        </div>
        <div>
          <Image
            src="/trophy.png"
            alt="trophy"
            width={200}
            height={200}
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};

const Div3 = () => {
  return (
    <div className="p-4 rounded-md bg-[#FFEBEC]">
      <Image src="/track_upload.png" width={500} height={200} alt="" />
      <div className="pt-2">
        <Badge>upload tracker</Badge>
      </div>
      <h4 className="text-3xl my-3">Track Uploads Easily</h4>
    </div>
  );
};

const Div4 = () => {
  return (
    <div className="bg-[#FDF4EC] row-start-1 row-end-3 col-start-3 p-4 rounded-md">
      <div className="h-[15rem] w-[20rem]">
        <Image
          src="/choose_a_file.png"
          width={500}
          height={200}
          alt="upload papers"
          className="object-cover"
        />
      </div>
      <Badge>upload papers</Badge>
      <h4 className="text-3xl my-3">Upload your Final Year Research Papers</h4>
      <div>
        Make use of our platform to upload and publish your final year project
        manuscripts to aid learning for your predecessors
      </div>
    </div>
  );
};

const Tag = ({ children }: { children: ReactNode }) => {
  return (
    <div className="p-0.5 px-2 w-fit bg-[#FFE5E7] text-[#DB000E] border rounded-md border-[#FFCCCF]">
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
    <div className="py-6 max-w-[80rem] mx-auto">
      <h2 className="text-4xl font-bold mb-4 text-center">Featured Research</h2>
      <p className="text-center">
        Explore research across our 10 engineering departments
      </p>
      <CircularTab />
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  ">
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
  return (
    <nav>
      <div className="flex justify-center space-x-4 p-1 border text-white rounded-full w-fit mx-auto border-black/10 my-5">
        <button className="px-5 py-1 rounded-full bg-blue-500">All</button>
        <button className="px-5 py-1 rounded-full text-black">
          Experimental
        </button>
        <button className="px-5 py-1 rounded-full text-black">
          Analytical
        </button>
        <button className="px-5 py-1 rounded-full text-black">
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

      <div className="h-[20rem] w-full bg-slate-300"></div>
    </div>
  );
};

const ReseachHub = () => {
  return (
    <section className="container max-w-[80rem] mx-auto p-8 my-6">
      <h2 className="text-4xl font-bold mb-4 text-center">Resource Hub</h2>
      <p className="text-center text-black/10">
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
      <div className="grid gap-3 grid-cols-[1fr_1fr_1fr]">
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
