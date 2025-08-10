"use client";

import InsightsPanel from "@/components/insights-panel";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("general");
  const [profileData, setProfileData] = useState({
    // General Profile
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    username: "@johndoe",
    bio: "Passionate researcher in computer science with expertise in machine learning and artificial intelligence.",
    
    // Academic Profile
    institution: "Stanford University",
    department: "Computer Science",
    position: "Research Assistant",
    degree: "Master of Science",
    graduationYear: "2024",
    resumeUrl: "/path/to/resume.pdf",

    // Research Information
    researchInterests: "Machine Learning, Artificial Intelligence, Quantum Computing",
    orcid: "0000-0000-0000-0000",
    researcherId: "A-123-45678",
    googleScholar: "scholar.google.com/citations?user=1234567890",
    researchGate: "researchgate.net/profile/john_doe",
    
    // Social Media
    linkedin: "linkedin.com/in/johndoe",
    twitter: "@johndoe",
    website: "https://johndoe.com",
  });

  const handleInputChange = (field: string, value: string) => {
    setProfileData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSaveChanges = () => {
    // Handle saving changes to backend
    console.log("Saving changes:", profileData);
  };

  const handleResumePreview = () => {
    // Handle resume preview
    window.open(profileData.resumeUrl, '_blank');
  };

  return (
    <div className="flex gap-6 relative">
      <div className="flex-1 space-y-6">
        {/* Header Section */}
        <div className="space-y-1.5">
          <div className="flex items-center gap-2.5">
            <div className="h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center">
              <Image src="/users/user 1.svg" alt="Profile" width={24} height={24} />
            </div>
            <h1 className="text-xl font-bold">
              My Profile
            </h1>
          </div>
          <p className="text-gray-500 text-sm">
            Manage your profile information and academic details.
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
          <div className="px-6 py-4 flex flex-wrap gap-4 items-center justify-between">
            <div className="flex space-x-1 bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setActiveTab("general")}
                className={`px-4 py-2 rounded-md text-xs font-medium transition-colors ${
                  activeTab === "general"
                    ? "bg-white text-primary-400"
                    : "text-gray-400 hover:text-gray-600"
                }`}
              >
                General & Academics
              </button>
              <button
                onClick={() => setActiveTab("research")}
                className={`px-4 py-2 rounded-md text-xs font-medium transition-colors ${
                  activeTab === "research"
                    ? "bg-white text-primary-400"
                    : "text-gray-400 hover:text-gray-600"
                }`}
              >
                Research & Social
              </button>
            </div>
            <button
              onClick={handleSaveChanges}
              className="px-4 py-2 bg-success-500 hover:bg-success-400 text-white font-medium rounded-xl shadow-[inset_0_-2px_8px_rgba(0,102,36,1)] transition-colors"
            >
              Save Changes
            </button>
          </div>

          <div className="p-6">
            {/* General & Academics Tab */}
            {activeTab === "general" && (
              <div className="space-y-12">
                {/* General Profile Information */}
                <div className="space-y-4">
                  <div>
                    <h2 className="text-lg font-semibold text-gray-900">
                      General Profile Information
                    </h2>
                    <p className="text-xs text-gray-400">
                      Update your basic profile details and personal information.
                    </p>
                  </div>

                  <div className="flex max-lg:flex-col gap-4">
                    {/* Profile Image */}
                    <div>
                      <div className="relative h-20 w-20">
                        <div className="h-20 w-20 rounded-full bg-gray-200 flex items-center justify-center">
                          <Image src="/users/user 1.svg" alt="Profile" width={80} height={80} />
                        </div>
                        <button
                          type="button"
                          className="absolute bottom-1 right-1 bg-white rounded-full hover:[&>*]:brightness-150 transition-all"
                          title="Change Image"
                          style={{ transform: "translate(25%, 25%)" }}
                          onClick={() => {
                            const fileInput = document.getElementById('profile-image-input');
                            if (fileInput) {
                              fileInput.click();
                            }
                          }}
                        >
                          <Image src="/icons/edit.svg" alt="Profile" width={24} height={24} />
                        </button>
                        <input
                          id="profile-image-input"
                          type="file"
                          accept="image/*"
                          style={{ display: "none" }}
                          onChange={(e) => {
                            if (e.target.files && e.target.files[0]) {
                              // Convert the file to a data URL for preview or upload
                              const reader = new FileReader();
                              reader.onload = (event) => {
                                if (typeof event.target?.result === "string") {
                                  handleInputChange("profileImage", event.target.result);
                                }
                              };
                              reader.readAsDataURL(e.target.files[0]);
                            }
                          }}
                        />
                      </div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-4 flex-1">
                      {/* First Name */}
                      <div className="space-y-2">
                        <label htmlFor="firstName" className="block text-xs font-medium">
                          First Name
                        </label>
                        <input
                          id="firstName"
                          type="text"
                          value={profileData.firstName}
                          onChange={(e) => handleInputChange("firstName", e.target.value)}
                          placeholder="Enter first name"
                          className="w-full px-3 py-2 bg-[#F7F7F7] placeholder:text-gray-400 rounded-md outline-none text-sm"
                        />
                      </div>

                      {/* Last Name */}
                      <div className="space-y-2">
                        <label htmlFor="lastName" className="block text-xs font-medium">
                          Last Name
                        </label>
                        <input
                          id="lastName"
                          type="text"
                          value={profileData.lastName}
                          onChange={(e) => handleInputChange("lastName", e.target.value)}
                          placeholder="Enter last name"
                          className="w-full px-3 py-2 bg-[#F7F7F7] placeholder:text-gray-400 rounded-md outline-none text-sm"
                        />
                      </div>

                      {/* Email */}
                      <div className="space-y-2">
                        <label htmlFor="email" className="block text-xs font-medium">
                          Email
                        </label>
                        <input
                          id="email"
                          type="email"
                          value={profileData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          placeholder="Enter email"
                          className="w-full px-3 py-2 bg-[#F7F7F7] placeholder:text-gray-400 rounded-md outline-none text-sm"
                        />
                      </div>

                      {/* Bio */}
                      <div className="space-y-2 row-span-2 flex flex-col">
                        <label htmlFor="bio" className="block text-xs font-medium">
                          Bio
                        </label>
                        <textarea
                          id="bio"
                          value={profileData.bio}
                          onChange={(e) => handleInputChange("bio", e.target.value)}
                          placeholder="Enter bio"
                          className="w-full px-3 py-2 bg-[#F7F7F7] placeholder:text-gray-400 rounded-md outline-none text-sm flex-1 resize-none"
                        />
                      </div>

                      {/* Username */}
                      <div className="space-y-2">
                        <label htmlFor="username" className="block text-xs font-medium">
                          Username
                        </label>
                        <input
                          id="username"
                          type="text"
                          value={profileData.username}
                          onChange={(e) => handleInputChange("username", e.target.value)}
                          placeholder="Enter username"
                          className="w-full px-3 py-2 bg-[#F7F7F7] placeholder:text-gray-400 rounded-md outline-none text-sm"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Academic Profile Information */}
                <div className="space-y-4">
                  <div>
                    <h2 className="text-lg font-semibold text-gray-900">
                      Academic Profile Information
                    </h2>
                    <p className="text-xs text-gray-400">
                      Update your academic credentials and institutional details.
                    </p>
                  </div>


                  <div className="grid lg:grid-cols-2 gap-4 flex-1">
                    {/* Institution */}
                    <div className="space-y-2 col-span-full">
                      <label htmlFor="institution" className="block text-xs font-medium">
                        Name of Institution
                      </label>
                      <input
                        id="institution"
                        type="text"
                        value={profileData.institution}
                        onChange={(e) => handleInputChange("institution", e.target.value)}
                        placeholder="Enter institution name"
                        className="w-full px-3 py-2 bg-[#F7F7F7] placeholder:text-gray-400 rounded-md outline-none text-sm"
                      />
                    </div>

                    {/* Department */}
                    <div className="space-y-2">
                      <label htmlFor="department" className="block text-xs font-medium">
                        Department
                      </label>
                      <input
                        id="department"
                        type="text"
                        value={profileData.department}
                        onChange={(e) => handleInputChange("department", e.target.value)}
                        placeholder="Enter department"
                        className="w-full px-3 py-2 bg-[#F7F7F7] placeholder:text-gray-400 rounded-md outline-none text-sm"
                      />
                    </div>

                    {/* Position */}
                    <div className="space-y-2">
                      <label htmlFor="position" className="block text-xs font-medium">
                        Position
                      </label>
                      <input
                        id="position"
                        type="text"
                        value={profileData.position}
                        onChange={(e) => handleInputChange("position", e.target.value)}
                        placeholder="Enter position"
                        className="w-full px-3 py-2 bg-[#F7F7F7] placeholder:text-gray-400 rounded-md outline-none text-sm"
                      />
                    </div>

                    {/* Degree */}
                    <div className="space-y-2">
                      <label htmlFor="degree" className="block text-xs font-medium">
                        Degree
                      </label>
                      <input
                        id="degree"
                        type="text"
                        value={profileData.degree}
                        onChange={(e) => handleInputChange("degree", e.target.value)}
                        placeholder="Enter degree"
                        className="w-full px-3 py-2 bg-[#F7F7F7] placeholder:text-gray-400 rounded-md outline-none text-sm"
                      />
                    </div>

                    {/* Graduation Year */}
                    <div className="space-y-2">
                      <label htmlFor="graduationYear" className="block text-xs font-medium">
                        Graduation Year
                      </label>
                      <input
                        id="graduationYear"
                        type="text"
                        value={profileData.graduationYear}
                        onChange={(e) => handleInputChange("graduationYear", e.target.value)}
                        placeholder="Enter graduation year"
                        className="w-full px-3 py-2 bg-[#F7F7F7] placeholder:text-gray-400 rounded-md outline-none text-sm"
                      />
                    </div>

                    {/* Resume/CV */}
                    <div className="space-y-2 col-span-full">
                      <label htmlFor="resumeUrl" className="block text-xs font-medium">
                        Resume/CV
                      </label>
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <Image src="/icons/file.svg" alt="Resume" width={24} height={24} />

                          <div>
                            <Link href={profileData.resumeUrl} target="_blank" className="text-xs font-semibold text-secondary-600 hover:text-secondary-400">{profileData.firstName}'s Resume</Link>
                            <div className="text-[10px] text-gray-500">Updated on 10/08/2025</div>
                          </div>
                        </div>

                        <button className="text-sm font-semibold text-secondary-600 hover:text-secondary-400 transition-colors flex items-center gap-2" onClick={() => {
                          const fileInput = document.getElementById('resume-input');
                          if (fileInput) {
                            fileInput.click();
                          }
                        }}>
                          Replace
                        </button>

                        <input
                          id="resume-input"
                          type="file"
                          accept="application/pdf"
                          style={{ display: "none" }}
                          onChange={(e) => {
                            if (e.target.files && e.target.files[0]) {
                              // Convert the file to a data URL for preview or upload
                              const reader = new FileReader();
                              reader.onload = (event) => {
                                if (typeof event.target?.result === "string") {
                                  handleInputChange("resumeUrl", event.target.result);
                                }
                              };
                              reader.readAsDataURL(e.target.files[0]);
                            }
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Research & Social Tab */}
            {activeTab === "research" && (
              <div className="space-y-6">
                {/* Research & Social Information */}
                <div className="space-y-4">
                  <div>
                    <h2 className="text-lg font-semibold text-gray-900">
                      Research Information
                    </h2>
                    <p className="text-xs text-gray-400">
                      Manage your research identities and publications.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="orcid" className="block text-xs font-medium">
                        ORCID ID
                      </label>
                      <input
                        id="orcid"
                        type="text"
                        value={profileData.orcid}
                        onChange={(e) => handleInputChange("orcid", e.target.value)}
                        placeholder="Enter ORCID"
                        className="w-full px-3 py-2 bg-[#F7F7F7] placeholder:text-gray-400 rounded-md outline-none text-sm"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="researcherId" className="block text-xs font-medium">
                        Researcher ID
                      </label>
                      <input
                        id="researcherId"
                        type="text"
                        value={profileData.researcherId}
                        onChange={(e) => handleInputChange("researcherId", e.target.value)}
                        placeholder="Enter Researcher ID"
                        className="w-full px-3 py-2 bg-[#F7F7F7] placeholder:text-gray-400 rounded-md outline-none text-sm"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="googleScholar" className="block text-xs font-medium">
                        Google Scholar
                      </label>
                      <input
                        id="googleScholar"
                        type="text"
                        value={profileData.googleScholar}
                        onChange={(e) => handleInputChange("googleScholar", e.target.value)}
                        placeholder="Enter Google Scholar URL"
                        className="w-full px-3 py-2 bg-[#F7F7F7] placeholder:text-gray-400 rounded-md outline-none text-sm"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="researchGate" className="block text-xs font-medium">
                        ResearchGate
                      </label>
                      <input
                        id="researchGate"
                        type="text"
                        value={profileData.researchGate}
                        onChange={(e) => handleInputChange("researchGate", e.target.value)}
                        placeholder="Enter ResearchGate URL"
                        className="w-full px-3 py-2 bg-[#F7F7F7] placeholder:text-gray-400 rounded-md outline-none text-sm"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h2 className="text-lg font-semibold text-gray-900">
                      Social Information
                    </h2>
                    <p className="text-xs text-gray-400">
                      Update your academic background and information.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="linkedin" className="block text-xs font-medium">
                        LinkedIn
                      </label>
                      <input
                        id="linkedin"
                        type="text"
                        value={profileData.linkedin}
                        onChange={(e) => handleInputChange("linkedin", e.target.value)}
                        placeholder="Enter LinkedIn URL"
                        className="w-full px-3 py-2 bg-[#F7F7F7] placeholder:text-gray-400 rounded-md outline-none text-sm"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="twitter" className="block text-xs font-medium">
                        Twitter
                      </label>
                      <input
                        id="twitter"
                        type="text"
                        value={profileData.twitter}
                        onChange={(e) => handleInputChange("twitter", e.target.value)}
                        placeholder="Enter Twitter handle"
                        className="w-full px-3 py-2 bg-[#F7F7F7] placeholder:text-gray-400 rounded-md outline-none text-sm"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="website" className="block text-xs font-medium">
                        Personal Website
                      </label>
                      <input
                        id="website"
                        type="text"
                        value={profileData.website}
                        onChange={(e) => handleInputChange("website", e.target.value)}
                        placeholder="Enter Personal Website URL"
                        className="w-full px-3 py-2 bg-[#F7F7F7] placeholder:text-gray-400 rounded-md outline-none text-sm"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <InsightsPanel />
    </div>
  );
}
