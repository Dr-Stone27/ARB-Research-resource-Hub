import Link from "next/link"
import { ArrowLeft, Download } from "lucide-react"

export default function PaperPage() {
  return (
    <div className="flex-1 overflow-hidden space-y-4">
      <div className="grid gap-6 grid-cols-1 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-6">
              <div>
            <Link href="/browse" className="text-xs text-secondary-600 hover:text-secondary-700 flex items-center">
                  <ArrowLeft className="mr-1 h-4 w-4" />
                  Back to Browse
                </Link>
            <h1 className="mt-4 text-lg font-semibold text-gray-900">Quantum Computing Applications in Cryptography</h1>
                <div className="mt-2 flex flex-wrap gap-2">
              <span className="px-2 py-1 text-xs bg-[#E5FFEF] text-[#00A63B] border border-[#CCFFDE] rounded-md">Computer Science</span>
              <span className="px-2 py-1 text-xs bg-[#FFE5E7] text-[#DB000E] border border-[#FFCCCF] rounded-md">Quantum Computing</span>
              <span className="px-2 py-1 text-xs bg-[#FDF2E8] text-[#EB801D] border border-[#FBE5D0] rounded-md">Cryptography</span>
                </div>
                <div className="mt-4 flex items-center">
              <div className="h-10 w-10 bg-secondary-100 rounded-full flex items-center justify-center text-sm font-semibold text-secondary-700">
                AJ
              </div>
                  <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">Alex Johnson</p>
                <p className="text-xs text-gray-500">University of California, Berkeley</p>
                  </div>
                </div>
            <div className="mt-4 flex flex-wrap gap-4 text-xs text-gray-500">
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-1 h-4 w-4"
                    >
                      <rect width="18" height="18" x="3" y="3" rx="2" />
                      <path d="M3 9h18" />
                    </svg>
                    Published: May 15, 2023
                  </div>
                  <div className="flex items-center">
                    <Download className="mr-1 h-4 w-4" />
                    342 downloads
                  </div>
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-1 h-4 w-4"
                    >
                      <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 2v4c0 1.244.756 2 2 2h2c1.244 0 2-.756 2-2v-1c0-1-4 0-4-3" />
                      <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 2v4c0 1.244.757 2 2 2h2c1.243 0 2-.756 2-2v-1c0-1-4 0-4-3" />
                    </svg>
                    12 citations
                  </div>
                </div>
              </div>

          {/* Tabs Navigation */}
          <div className="bg-white border border-[#F3EDF7] rounded-lg p-6">
            <div className="flex border-b border-[#F2F2F2] mb-6">
              <button className="px-4 py-2 text-sm font-medium text-secondary-600 border-b-2 border-secondary-600">
                Abstract
              </button>
              <button className="px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-700">
                Full Text
              </button>
              <button className="px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-700">
                Figures & Data
              </button>
              <button className="px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-700">
                Discussion
              </button>
            </div>

            {/* Abstract Content */}
            <div className="space-y-4">
                  <div className="prose max-w-none">
                <p className="text-sm text-gray-900">
                      This research explores the potential applications of quantum computing in modern cryptographic
                      systems. As quantum computers continue to advance, traditional encryption methods face
                      unprecedented challenges. This paper presents a comprehensive analysis of how quantum algorithms,
                      particularly Shor's algorithm, threaten current public-key cryptography and proposes several
                      quantum-resistant alternatives.
                    </p>
                <p className="text-sm text-gray-900">
                      We examine the theoretical foundations of quantum-resistant cryptography and provide experimental
                      results from simulated quantum attacks on various encryption schemes. Our findings suggest that
                      lattice-based cryptographic systems offer the most promising defense against quantum computing
                      threats, with hash-based and multivariate cryptographic systems serving as viable alternatives.
                    </p>
                <p className="text-sm text-gray-900">
                      Additionally, we discuss the practical implementation challenges of quantum-resistant cryptography
                      in existing systems and propose a transition framework for organizations to migrate from
                      vulnerable encryption methods to quantum-secure alternatives. This research contributes to the
                      growing field of post-quantum cryptography and provides valuable insights for security
                      professionals preparing for the quantum computing era.
                    </p>
                  </div>

              <div className="bg-[#FCFCFC] border border-[#F4F2FD] rounded-lg p-4">
                <h3 className="text-sm font-medium text-gray-900 mb-2">Keywords</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 text-xs bg-[#E5FFEF] text-[#00A63B] border border-[#CCFFDE] rounded-md">Quantum Computing</span>
                  <span className="px-2 py-1 text-xs bg-[#FFE5E7] text-[#DB000E] border border-[#FFCCCF] rounded-md">Cryptography</span>
                  <span className="px-2 py-1 text-xs bg-[#FDF2E8] text-[#EB801D] border border-[#FBE5D0] rounded-md">Shor's Algorithm</span>
                  <span className="px-2 py-1 text-xs bg-[#E5FFEF] text-[#00A63B] border border-[#CCFFDE] rounded-md">Post-Quantum Cryptography</span>
                  <span className="px-2 py-1 text-xs bg-[#FFE5E7] text-[#DB000E] border border-[#FFCCCF] rounded-md">Lattice-based Cryptography</span>
                  <span className="px-2 py-1 text-xs bg-[#FDF2E8] text-[#EB801D] border border-[#FBE5D0] rounded-md">Cybersecurity</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

        <div className="space-y-6 mt-6 lg:mt-0">
          {/* Citation Card */}
          <div className="bg-white border border-[#F3EDF7] rounded-lg p-6">
            <h3 className="text-sm font-medium text-gray-900 mb-4">Citation</h3>
                    <div className="space-y-4">
              <div className="bg-[#FCFCFC] border border-[#F4F2FD] rounded-lg p-3">
                <p className="text-xs text-gray-900">
                      Johnson, A. (2023). Quantum Computing Applications in Cryptography.{" "}
                      <em>Journal of Undergraduate Research</em>, 15(2), 112-128.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                <button className="px-3 py-2 text-xs border border-[#F2F2F2] rounded-lg text-secondary-600 hover:bg-gray-50 transition-colors shadow-[inset_0_-2px_4px_rgba(0,0,0,0.04)]">
                      Copy BibTeX
                </button>
                <button className="px-3 py-2 text-xs border border-[#F2F2F2] rounded-lg text-secondary-600 hover:bg-gray-50 transition-colors shadow-[inset_0_-2px_4px_rgba(0,0,0,0.04)]">
                      Copy APA
                </button>
                <button className="px-3 py-2 text-xs border border-[#F2F2F2] rounded-lg text-secondary-600 hover:bg-gray-50 transition-colors shadow-[inset_0_-2px_4px_rgba(0,0,0,0.04)]">
                      Copy MLA
                </button>
                <button className="px-3 py-2 text-xs border border-[#F2F2F2] rounded-lg text-secondary-600 hover:bg-gray-50 transition-colors shadow-[inset_0_-2px_4px_rgba(0,0,0,0.04)]">
                      Copy Chicago
                </button>
              </div>
            </div>
                  </div>

          {/* Author Information */}
          <div className="bg-white border border-[#F3EDF7] rounded-lg p-6">
            <h3 className="text-sm font-medium text-gray-900 mb-4">Author Information</h3>
            <div className="space-y-4">
                  <div className="flex flex-col items-center">
                <div className="h-20 w-20 bg-secondary-100 rounded-full flex items-center justify-center text-lg font-semibold text-secondary-700">
                  AJ
                </div>
                <h3 className="mt-2 text-sm font-medium text-gray-900">Alex Johnson</h3>
                <p className="text-xs text-gray-500">University of California, Berkeley</p>
                <button className="mt-2 px-3 py-2 text-xs border border-[#F2F2F2] rounded-lg text-secondary-600 hover:bg-gray-50 transition-colors shadow-[inset_0_-2px_4px_rgba(0,0,0,0.04)]">
                      View Profile
                </button>
                  </div>
              <hr className="border-[#F2F2F2]" />
                  <div className="space-y-2">
                <h4 className="text-xs font-medium text-gray-900">Research Interests</h4>
                    <div className="flex flex-wrap gap-1">
                  <span className="px-2 py-1 text-xs bg-[#E5FFEF] text-[#00A63B] border border-[#CCFFDE] rounded-md">Quantum Computing</span>
                  <span className="px-2 py-1 text-xs bg-[#FFE5E7] text-[#DB000E] border border-[#FFCCCF] rounded-md">Cryptography</span>
                  <span className="px-2 py-1 text-xs bg-[#FDF2E8] text-[#EB801D] border border-[#FBE5D0] rounded-md">Computer Security</span>
                  <span className="px-2 py-1 text-xs bg-[#E5FFEF] text-[#00A63B] border border-[#CCFFDE] rounded-md">Algorithms</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                <h4 className="text-xs font-medium text-gray-900">Other Publications</h4>
                <ul className="space-y-2 text-xs">
                      <li>
                    <a href="#" className="text-secondary-600 hover:text-secondary-700 hover:underline">
                          Secure Multi-Party Computation in the Quantum Era
                        </a>
                      </li>
                      <li>
                    <a href="#" className="text-secondary-600 hover:text-secondary-700 hover:underline">
                          Evaluating Quantum-Resistant VPN Protocols
                        </a>
                      </li>
                      <li>
                    <a href="#" className="text-secondary-600 hover:text-secondary-700 hover:underline">
                          A Survey of Post-Quantum Cryptographic Standards
                        </a>
                      </li>
                    </ul>
                  </div>
            </div>
          </div>

          {/* Related Research */}
          <div className="bg-white border border-[#F3EDF7] rounded-lg p-6">
            <h3 className="text-sm font-medium text-gray-900 mb-4">Related Research</h3>
                  <div className="space-y-4">
                    {[
                      {
                        title: "Quantum-Resistant Blockchain Protocols",
                        author: "Sarah Zhang",
                        date: "April 2023",
                      },
                      {
                        title: "Implementing NIST PQC Standards in IoT Devices",
                        author: "Michael Brown",
                        date: "June 2023",
                      },
                      {
                        title: "Performance Analysis of Lattice-Based Cryptography",
                        author: "David Lee",
                        date: "March 2023",
                      },
                    ].map((paper, index) => (
                <div key={index} className="bg-[#FCFCFC] border border-[#F4F2FD] rounded-lg p-3">
                  <h4 className="text-sm font-medium text-gray-900">{paper.title}</h4>
                  <p className="text-xs text-gray-500">
                          {paper.author} • {paper.date}
                        </p>
                      </div>
                    ))}
                  </div>
            <div className="mt-4">
              <button className="w-full px-3 py-2 text-xs border border-[#F2F2F2] rounded-lg text-secondary-600 hover:bg-gray-50 transition-colors shadow-[inset_0_-2px_4px_rgba(0,0,0,0.04)]">
                    View More
              </button>
            </div>
          </div>
        </div>
        </div>
    </div>
  )
}
