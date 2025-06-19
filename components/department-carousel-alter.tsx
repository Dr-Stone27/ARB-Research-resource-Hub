"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, MoveLeft, MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface Department {
  name: string;
  shortName: string;
  description: string;
  icon: string;
}

const departments: Department[] = [
  {
    name: "Mechanical Engineering",
    shortName: "Mechanical",
    description: "Design and analysis of physical systems and machinery",
    icon: "M",
  },
  {
    name: "Electrical Engineering",
    shortName: "Electrical",
    description: "Study of electricity, electronics, and electromagnetism",
    icon: "E",
  },
  {
    name: "Civil Engineering",
    shortName: "Civil",
    description: "Design and construction of infrastructure and buildings",
    icon: "C",
  },
  {
    name: "Chemical Engineering",
    shortName: "Chemical",
    description: "Application of chemistry to large-scale production",
    icon: "Ch",
  },
  {
    name: "Computer Engineering",
    shortName: "Computer",
    description: "Design and development of computer systems and software",
    icon: "Co",
  },
  {
    name: "Biomedical Engineering",
    shortName: "Biomedical",
    description: "Application of engineering to healthcare and medicine",
    icon: "B",
  },
  {
    name: "Surveying and Geopharmatics Engineering",
    shortName: "Surveying",
    description: "Measurement and mapping of the Earth's surface",
    icon: "S",
  },
  {
    name: "Materials and Metallurgical Engineering",
    shortName: "Materials",
    description: "Study of properties and applications of materials",
    icon: "Ma",
  },
  {
    name: "Systems Engineering",
    shortName: "Systems",
    description: "Design and management of complex engineering systems",
    icon: "Sy",
  },
  {
    name: "Petroleum and Gas Engineering",
    shortName: "Petroleum",
    description: "Exploration and production of oil and gas resources",
    icon: "P",
  },
];

export function DepartmentCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  const startAutoPlay = () => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    autoPlayRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % departments.length);
    }, 4000);
  };

  const stopAutoPlay = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
      autoPlayRef.current = null;
    }
  };

  useEffect(() => {
    if (isAutoPlaying) {
      startAutoPlay();
    } else {
      stopAutoPlay();
    }

    return () => {
      stopAutoPlay();
    };
  }, [isAutoPlaying]);

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setActiveIndex(
      (prev) => (prev - 1 + departments.length) % departments.length
    );
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setActiveIndex((prev) => (prev + 1) % departments.length);
  };

  const handleDotClick = (index: number) => {
    setIsAutoPlaying(false);
    setActiveIndex(index);
  };

  return (
    //
    <div
      className="relative rounded-3xl bg-[url('/dept_carousel_bg.png')] bg-cover bg-center w-[93%] mx-auto py-12"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Original image (content on right) */}

      {/* Carousel Controls */}
      <div className="absolute -left-4 top-1/2 z-30 -translate-y-1/2">
        <Button
          variant="ghost"
          size="icon"
          className="h-10 w-10 rounded-full bg-white shadow"
          onClick={handlePrev}
        >
          <MoveLeft className="" />
          <span className="sr-only">Previous</span>
        </Button>
      </div>

      <div className="absolute -right-4 top-1/2 z-10 -translate-y-1/2">
        <Button
          variant="ghost"
          size="icon"
          className="h-10 w-10 rounded-full bg-white shadow"
          onClick={handleNext}
        >
          <MoveRight className="h-6 w-6 text-[#21005D]" />
          <span className="sr-only">Next</span>
        </Button>
      </div>

      {/* Carousel Content */}
      <div className="overflow-hidden ">
        <div
          ref={carouselRef}
          className="flex  transition-transform h-full duration-500 ease-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {departments.map((dept, index) => (
            <div key={index} className="w-full flex-shrink-0 px-4 sm:px-6">
              <div className="mx-auto max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="space-y-6">
                    <div className="inline-block rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 p-1">
                      <div className="rounded-full bg-white px-3 py-1 text-sm font-medium">
                        Department {index + 1} of {departments.length}
                      </div>
                    </div>
                    <h3 className="text-3xl font-bold tracking-tight text-white">
                      {dept.name}
                    </h3>
                    <p className="text-lg text-gray-400">{dept.description}</p>
                    <Button
                      className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white"
                      asChild
                    >
                      <Link
                        href={`/categories/${dept.shortName.toLowerCase()}`}
                      >
                        Explore {dept.shortName} Research
                      </Link>
                    </Button>
                  </div>
                  <div className="flex justify-center">
                    <div className="relative w-64 h-64">
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 animate-pulse"></div>
                      <div className="absolute inset-4 rounded-full bg-gradient-to-r from-indigo-500/30 to-purple-500/30 flex items-center justify-center">
                        <div className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
                          {dept.icon}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {departments.map((_, index) => (
            <button
              key={index}
              className={cn(
                "h-2 w-2 rounded-full transition-all",
                activeIndex === index
                  ? "w-8 bg-gradient-to-r from-indigo-500 to-purple-500"
                  : "bg-gray-600 hover:bg-gray-500"
              )}
              onClick={() => handleDotClick(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
