"use client"

import { useState } from "react"
import { Upload, FileText, Users, Save, Send, Info, AlertCircle } from "lucide-react"

export default function SubmitPage() {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    subCategory: "",
    abstract: "",
    firstSemesterSlides: null as File | null,
    secondSemesterSlides: null as File | null,
    coAuthors: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSaving, setIsSaving] = useState(false)

  const categories = [
    "Computer Science",
    "Electrical Engineering", 
    "Mechanical Engineering",
    "Civil Engineering",
    "Chemical Engineering",
    "Biomedical Engineering",
    "Surveying & Geoinformatics",
    "Materials & Metallurgical Engineering",
    "Systems Engineering",
    "Petroleum & Gas Engineering"
  ]

  const subCategories = {
    "Computer Science": ["Artificial Intelligence", "Machine Learning", "Data Science", "Cybersecurity", "Software Engineering", "Computer Networks", "Database Systems", "Computer Vision"],
    "Electrical Engineering": ["Power Systems", "Control Systems", "Electronics", "Telecommunications", "Signal Processing", "Microelectronics", "Renewable Energy", "Robotics"],
    "Mechanical Engineering": ["Thermodynamics", "Fluid Mechanics", "Solid Mechanics", "Manufacturing", "Robotics", "Automotive", "Aerospace", "Mechatronics"],
    "Civil Engineering": ["Structural Engineering", "Transportation", "Geotechnical", "Environmental", "Water Resources", "Construction Management", "Urban Planning", "Materials"],
    "Chemical Engineering": ["Process Design", "Reaction Engineering", "Separation Processes", "Biochemical Engineering", "Materials Processing", "Petroleum Processing", "Environmental", "Food Processing"],
    "Biomedical Engineering": ["Medical Devices", "Biomaterials", "Biomechanics", "Medical Imaging", "Tissue Engineering", "Neural Engineering", "Rehabilitation", "Drug Delivery"],
    "Surveying & Geoinformatics": ["Land Surveying", "Geographic Information Systems", "Remote Sensing", "Cartography", "Cadastral Surveying", "Engineering Surveying", "Mining Surveying", "Hydrographic Surveying"],
    "Materials & Metallurgical Engineering": ["Metallurgy", "Ceramics", "Polymers", "Composites", "Nanomaterials", "Corrosion", "Heat Treatment", "Materials Characterization"],
    "Systems Engineering": ["System Design", "Requirements Engineering", "Integration", "Testing", "Project Management", "Quality Assurance", "Risk Management", "Configuration Management"],
    "Petroleum & Gas Engineering": ["Reservoir Engineering", "Drilling Engineering", "Production Engineering", "Petroleum Geology", "Gas Processing", "Enhanced Oil Recovery", "Well Testing", "Pipeline Engineering"]
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value })
  }

  const handleFileChange = (field: string, file: File | null) => {
    setFormData({ ...formData, [field]: file })
  }

  const handleSaveDraft = async () => {
    setIsSaving(true)
    try {
      // Simulate saving draft
      await new Promise(resolve => setTimeout(resolve, 1000))
      console.log("Draft saved:", formData)
      // Handle draft saving logic here
    } catch (error) {
      console.error("Error saving draft:", error)
    } finally {
      setIsSaving(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // Validate required fields
      if (!formData.title || !formData.category || !formData.abstract) {
        alert("Please fill in all required fields")
        return
      }

      // Simulate submission
      await new Promise(resolve => setTimeout(resolve, 2000))
      console.log("Research submitted:", formData)
      
      // Handle submission logic here
      // Redirect to success page or dashboard
    } catch (error) {
      console.error("Error submitting research:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const getFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes"
    const k = 1024
    const sizes = ["Bytes", "KB", "MB", "GB"]
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i]
  }

  return (
    <div className="flex-1 overflow-hidden space-y-4">
      <div className="grid gap-6 grid-cols-1 lg:grid-cols-3">
        {/* Main Form */}
        <div className="lg:col-span-2 space-y-6">
          {/* Header */}
          <div>
            <h1 className="text-lg font-semibold text-gray-900">New Submission</h1>
            <p className="text-sm text-gray-500">FIll out the  form below to submit your research paper</p>
          </div>

          {/* Submission Form */}
          <div className="bg-white border border-[#F3EDF7] rounded-lg p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Title */}
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                  Research Title <span className="text-red-500">*</span>
                </label>
                <input
                  id="title"
                  type="text"
                  required
                  value={formData.title}
                  onChange={(e) => handleInputChange("title", e.target.value)}
                  className="w-full px-3 py-2 border border-[#F2F2F2] rounded-lg text-gray-900 outline-none"
                  placeholder="Enter your research title"
                />
              </div>

              {/* Category and Subcategory */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                    Category <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="category"
                    required
                    value={formData.category}
                    onChange={(e) => {
                      handleInputChange("category", e.target.value)
                      handleInputChange("subCategory", "") // Reset subcategory when category changes
                    }}
                    className="w-full px-3 py-2 border border-[#F2F2F2] rounded-lg text-gray-900 outline-none"
                  >
                    <option value="">Select Category</option>
                    {categories.map((category) => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="subCategory" className="block text-sm font-medium text-gray-700 mb-2">
                    Sub Category <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="subCategory"
                    required
                    value={formData.subCategory}
                    onChange={(e) => handleInputChange("subCategory", e.target.value)}
                    disabled={!formData.category}
                    className="w-full px-3 py-2 border border-[#F2F2F2] rounded-lg text-gray-900 outline-none disabled:bg-gray-50 disabled:cursor-not-allowed"
                  >
                    <option value="">Select Sub Category</option>
                    {formData.category && subCategories[formData.category as keyof typeof subCategories]?.map((subCat) => (
                      <option key={subCat} value={subCat}>{subCat}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Abstract */}
              <div>
                <label htmlFor="abstract" className="block text-sm font-medium text-gray-700 mb-2">
                  Abstract <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="abstract"
                  required
                  rows={6}
                  value={formData.abstract}
                  onChange={(e) => handleInputChange("abstract", e.target.value)}
                  className="w-full px-3 py-2 border border-[#F2F2F2] rounded-lg text-gray-900 outline-none resize-vertical"
                  placeholder="Provide a comprehensive abstract of your research (minimum 150 words)"
                />
                <p className="text-xs text-gray-500 mt-1">
                  {formData.abstract.length} characters (minimum 150 recommended)
                </p>
              </div>

              {/* File Uploads */}
              <div className="space-y-4">
                <h3 className="text-sm font-medium text-gray-700">Defense Slides</h3>
                
                {/* 1st Semester Slides */}
                <div>
                  <label htmlFor="firstSemesterSlides" className="block text-sm font-medium text-gray-700 mb-2">
                    1st Semester Defense Slides <span className="text-red-500">*</span>
                  </label>
                  <div className="border-2 border-dashed border-[#F2F2F2] rounded-lg p-4 text-center hover:border-secondary-400 transition-colors">
                    <input
                      id="firstSemesterSlides"
                      type="file"
                      accept=".pdf,.ppt,.pptx"
                      required
                      onChange={(e) => handleFileChange("firstSemesterSlides", e.target.files?.[0] || null)}
                      className="hidden"
                    />
                    <label htmlFor="firstSemesterSlides" className="cursor-pointer">
                      {formData.firstSemesterSlides ? (
                        <div className="space-y-2">
                          <FileText className="h-8 w-8 text-secondary-600 mx-auto" />
                          <p className="text-sm font-medium text-gray-900">{formData.firstSemesterSlides.name}</p>
                          <p className="text-xs text-gray-500">{getFileSize(formData.firstSemesterSlides.size)}</p>
                        </div>
                      ) : (
                        <div className="space-y-2">
                          <Upload className="h-8 w-8 text-gray-400 mx-auto" />
                          <p className="text-sm font-medium text-gray-900">Click to upload or drag and drop</p>
                          <p className="text-xs text-gray-500">PDF, PPT, or PPTX (max 10MB)</p>
                        </div>
                      )}
                    </label>
                  </div>
                </div>

                {/* 2nd Semester Slides */}
                <div>
                  <label htmlFor="secondSemesterSlides" className="block text-sm font-medium text-gray-700 mb-2">
                    2nd Semester Defense Slides <span className="text-red-500">*</span>
                  </label>
                  <div className="border-2 border-dashed border-[#F2F2F2] rounded-lg p-4 text-center hover:border-secondary-400 transition-colors">
                    <input
                      id="secondSemesterSlides"
                      type="file"
                      accept=".pdf,.ppt,.pptx"
                      required
                      onChange={(e) => handleFileChange("secondSemesterSlides", e.target.files?.[0] || null)}
                      className="hidden"
                    />
                    <label htmlFor="secondSemesterSlides" className="cursor-pointer">
                      {formData.secondSemesterSlides ? (
                        <div className="space-y-2">
                          <FileText className="h-8 w-8 text-secondary-600 mx-auto" />
                          <p className="text-sm font-medium text-gray-900">{formData.secondSemesterSlides.name}</p>
                          <p className="text-xs text-gray-500">{getFileSize(formData.secondSemesterSlides.size)}</p>
                        </div>
                      ) : (
                        <div className="space-y-2">
                          <Upload className="h-8 w-8 text-gray-400 mx-auto" />
                          <p className="text-sm font-medium text-gray-900">Click to upload or drag and drop</p>
                          <p className="text-xs text-gray-500">PDF, PPT, or PPTX (max 10MB)</p>
                        </div>
                      )}
                    </label>
                  </div>
                </div>
              </div>

              {/* Co-authors */}
              <div>
                <label htmlFor="coAuthors" className="block text-sm font-medium text-gray-700 mb-2">
                  Co-authors <span className="text-gray-500 text-xs">(Optional)</span>
                </label>
                <div className="relative">
                  <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    id="coAuthors"
                    type="text"
                    value={formData.coAuthors}
                    onChange={(e) => handleInputChange("coAuthors", e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-[#F2F2F2] rounded-lg text-gray-900 outline-none"
                    placeholder="Enter co-author names separated by commas"
                  />
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  Separate multiple co-authors with commas (e.g., John Doe, Jane Smith)
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-[#F2F2F2]">
                <button
                  type="button"
                  onClick={handleSaveDraft}
                  disabled={isSaving}
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-3 border border-[#F2F2F2] text-secondary-600 hover:bg-secondary-50 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSaving ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-secondary-600"></div>
                      Saving...
                    </>
                  ) : (
                    <>
                      <Save className="h-4 w-4" />
                      Save as Draft
                    </>
                  )}
                </button>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-secondary-600 hover:bg-secondary-700 text-white rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      Submit Research
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Submission Guidelines Panel */}
        <div className="space-y-6 mt-6 lg:mt-0">
          <div className="bg-white border border-[#F3EDF7] rounded-lg p-6">
            <div className="flex items-center gap-2 mb-4">
              <Info className="h-5 w-5 text-secondary-600" />
              <h3 className="text-sm font-medium text-gray-900">Submission Guidelines</h3>
            </div>
            
            <div className="space-y-4 text-sm">
              <div className="space-y-3">
                <h4 className="font-medium text-gray-900">Required Fields</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span>Research title (clear and descriptive)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span>Category and subcategory selection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span>Abstract (minimum 150 words)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span>Both defense slides presentations</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-3">
                <h4 className="font-medium text-gray-900">File Requirements</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-secondary-600 mt-1">•</span>
                    <span>Accepted formats: PDF, PPT, PPTX</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary-600 mt-1">•</span>
                    <span>Maximum file size: 10MB per file</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary-600 mt-1">•</span>
                    <span>Ensure slides are clear and readable</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-3">
                <h4 className="font-medium text-gray-900">Abstract Guidelines</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-secondary-600 mt-1">•</span>
                    <span>Include research objectives and methodology</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary-600 mt-1">•</span>
                    <span>Highlight key findings and conclusions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary-600 mt-1">•</span>
                    <span>Use clear, academic language</span>
                  </li>
                </ul>
              </div>

              <div className="bg-[#FCFCFC] border border-[#F4F2FD] rounded-lg p-4">
                <div className="flex items-start gap-2">
                  <AlertCircle className="h-4 w-4 text-warning-500 mt-0.5 flex-shrink-0" />
                  <div className="text-xs text-gray-600">
                    <p className="font-medium text-gray-900 mb-1">Important Notes:</p>
                    <ul className="space-y-1">
                      <li>• Submissions are reviewed within 48-72 hours</li>
                      <li>• You can save your work as a draft anytime</li>
                      <li>• Submitted research becomes publicly accessible</li>
                      <li>• Contact support if you need to make changes</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
