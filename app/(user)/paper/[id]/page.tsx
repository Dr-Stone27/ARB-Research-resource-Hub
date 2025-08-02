import Link from "next/link"
import { ArrowLeft, BookOpen, Download, MessageSquare, Share2, ThumbsUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"

export default function PaperPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <div className="container py-8">
          <div className="grid gap-8 grid-cols-1 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-6">
              <div>
                <Link href="/browse" className="text-sm text-emerald-600 hover:underline flex items-center">
                  <ArrowLeft className="mr-1 h-4 w-4" />
                  Back to Browse
                </Link>
                <h1 className="mt-4 text-3xl font-bold">Quantum Computing Applications in Cryptography</h1>
                <div className="mt-2 flex flex-wrap gap-2">
                  <Badge variant="outline">Computer Science</Badge>
                  <Badge variant="outline">Quantum Computing</Badge>
                  <Badge variant="outline">Cryptography</Badge>
                </div>
                <div className="mt-4 flex items-center">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src="/images/placeholder.svg?height=40&width=40" alt="Alex Johnson" />
                    <AvatarFallback>AJ</AvatarFallback>
                  </Avatar>
                  <div className="ml-3">
                    <p className="text-sm font-medium">Alex Johnson</p>
                    <p className="text-xs text-muted-foreground">University of California, Berkeley</p>
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap gap-4 text-sm text-muted-foreground">
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

              <Tabs defaultValue="abstract" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="abstract">Abstract</TabsTrigger>
                  <TabsTrigger value="fulltext">Full Text</TabsTrigger>
                  <TabsTrigger value="figures">Figures & Data</TabsTrigger>
                  <TabsTrigger value="discussion">Discussion</TabsTrigger>
                </TabsList>

                <TabsContent value="abstract" className="mt-4 space-y-4">
                  <div className="prose max-w-none">
                    <p>
                      This research explores the potential applications of quantum computing in modern cryptographic
                      systems. As quantum computers continue to advance, traditional encryption methods face
                      unprecedented challenges. This paper presents a comprehensive analysis of how quantum algorithms,
                      particularly Shor's algorithm, threaten current public-key cryptography and proposes several
                      quantum-resistant alternatives.
                    </p>
                    <p>
                      We examine the theoretical foundations of quantum-resistant cryptography and provide experimental
                      results from simulated quantum attacks on various encryption schemes. Our findings suggest that
                      lattice-based cryptographic systems offer the most promising defense against quantum computing
                      threats, with hash-based and multivariate cryptographic systems serving as viable alternatives.
                    </p>
                    <p>
                      Additionally, we discuss the practical implementation challenges of quantum-resistant cryptography
                      in existing systems and propose a transition framework for organizations to migrate from
                      vulnerable encryption methods to quantum-secure alternatives. This research contributes to the
                      growing field of post-quantum cryptography and provides valuable insights for security
                      professionals preparing for the quantum computing era.
                    </p>
                  </div>

                  <div className="rounded-lg border p-4">
                    <h3 className="text-lg font-medium">Keywords</h3>
                    <div className="mt-2 flex flex-wrap gap-2">
                      <Badge>Quantum Computing</Badge>
                      <Badge>Cryptography</Badge>
                      <Badge>Shor's Algorithm</Badge>
                      <Badge>Post-Quantum Cryptography</Badge>
                      <Badge>Lattice-based Cryptography</Badge>
                      <Badge>Cybersecurity</Badge>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="fulltext" className="mt-4">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-medium">Full Text</h3>
                    <Button className="bg-emerald-600 hover:bg-emerald-700">
                      <Download className="mr-2 h-4 w-4" />
                      Download PDF
                    </Button>
                  </div>
                  <div className="rounded-lg border p-8 bg-gray-50 text-center">
                    <BookOpen className="h-12 w-12 mx-auto text-gray-400" />
                    <p className="mt-4 text-muted-foreground">
                      Preview not available. Please download the PDF to view the full text.
                    </p>
                    <Button className="mt-4 bg-emerald-600 hover:bg-emerald-700">
                      <Download className="mr-2 h-4 w-4" />
                      Download PDF
                    </Button>
                  </div>
                </TabsContent>

                <TabsContent value="figures" className="mt-4 space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Figures & Tables</h3>

                    <Card>
                      <CardHeader>
                        <CardTitle>Figure 1: Quantum vs. Classical Encryption Breaking Time</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="aspect-video bg-gray-100 flex items-center justify-center">
                          <img
                            src="/images/placeholder.svg?height=400&width=800"
                            alt="Quantum vs. Classical Encryption Breaking Time"
                            className="max-h-full"
                          />
                        </div>
                        <p className="mt-2 text-sm text-muted-foreground">
                          Comparison of time required to break various encryption methods using classical vs. quantum
                          computing approaches.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Figure 2: Lattice-Based Cryptography Security Levels</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="aspect-video bg-gray-100 flex items-center justify-center">
                          <img
                            src="/images/placeholder.svg?height=400&width=800"
                            alt="Lattice-Based Cryptography Security Levels"
                            className="max-h-full"
                          />
                        </div>
                        <p className="mt-2 text-sm text-muted-foreground">
                          Security levels of different lattice-based cryptographic schemes against quantum attacks.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Table 1: Comparison of Post-Quantum Cryptographic Methods</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="overflow-x-auto">
                          <table className="w-full border-collapse">
                            <thead>
                              <tr className="border-b">
                                <th className="py-2 px-4 text-left">Method</th>
                                <th className="py-2 px-4 text-left">Security Level</th>
                                <th className="py-2 px-4 text-left">Key Size</th>
                                <th className="py-2 px-4 text-left">Performance</th>
                                <th className="py-2 px-4 text-left">Implementation Complexity</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="border-b">
                                <td className="py-2 px-4">Lattice-based</td>
                                <td className="py-2 px-4">High</td>
                                <td className="py-2 px-4">Medium</td>
                                <td className="py-2 px-4">Good</td>
                                <td className="py-2 px-4">Medium</td>
                              </tr>
                              <tr className="border-b">
                                <td className="py-2 px-4">Hash-based</td>
                                <td className="py-2 px-4">Very High</td>
                                <td className="py-2 px-4">Large</td>
                                <td className="py-2 px-4">Moderate</td>
                                <td className="py-2 px-4">Low</td>
                              </tr>
                              <tr className="border-b">
                                <td className="py-2 px-4">Code-based</td>
                                <td className="py-2 px-4">High</td>
                                <td className="py-2 px-4">Very Large</td>
                                <td className="py-2 px-4">Good</td>
                                <td className="py-2 px-4">High</td>
                              </tr>
                              <tr className="border-b">
                                <td className="py-2 px-4">Multivariate</td>
                                <td className="py-2 px-4">Medium</td>
                                <td className="py-2 px-4">Large</td>
                                <td className="py-2 px-4">Poor</td>
                                <td className="py-2 px-4">Very High</td>
                              </tr>
                              <tr>
                                <td className="py-2 px-4">Isogeny-based</td>
                                <td className="py-2 px-4">Medium</td>
                                <td className="py-2 px-4">Small</td>
                                <td className="py-2 px-4">Poor</td>
                                <td className="py-2 px-4">Very High</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Supplementary Data</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-base">Simulation Code</CardTitle>
                          <CardDescription>Python implementation of quantum attack simulations</CardDescription>
                        </CardHeader>
                        <CardFooter>
                          <Button variant="outline" className="w-full">
                            <Download className="mr-2 h-4 w-4" />
                            Download Code (ZIP)
                          </Button>
                        </CardFooter>
                      </Card>
                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-base">Experimental Data</CardTitle>
                          <CardDescription>Raw data from encryption breaking experiments</CardDescription>
                        </CardHeader>
                        <CardFooter>
                          <Button variant="outline" className="w-full">
                            <Download className="mr-2 h-4 w-4" />
                            Download Data (CSV)
                          </Button>
                        </CardFooter>
                      </Card>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="discussion" className="mt-4 space-y-6">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-medium">Discussion (8 comments)</h3>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <ThumbsUp className="mr-2 h-4 w-4" />
                        Recommend (42)
                      </Button>
                      <Button variant="outline" size="sm">
                        <Share2 className="mr-2 h-4 w-4" />
                        Share
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="rounded-lg border p-4">
                      <div className="flex items-start gap-4">
                        <Avatar>
                          <AvatarImage src="/images/placeholder.svg?height=40&width=40" />
                          <AvatarFallback>DR</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="font-medium">Dr. Rebecca Chen</p>
                              <p className="text-xs text-muted-foreground">Stanford University</p>
                            </div>
                            <p className="text-xs text-muted-foreground">2 days ago</p>
                          </div>
                          <div className="mt-2">
                            <p>
                              Excellent analysis of the quantum threat landscape. I particularly appreciated the section
                              on lattice-based cryptography. Have you considered the recent advancements in NTRU
                              lattices as a potential solution?
                            </p>
                          </div>
                          <div className="mt-2 flex gap-2">
                            <Button variant="ghost" size="sm">
                              <ThumbsUp className="mr-1 h-3 w-3" />
                              Like (5)
                            </Button>
                            <Button variant="ghost" size="sm">
                              <MessageSquare className="mr-1 h-3 w-3" />
                              Reply
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-lg border p-4">
                      <div className="flex items-start gap-4">
                        <Avatar>
                          <AvatarImage src="/images/placeholder.svg?height=40&width=40" />
                          <AvatarFallback>JM</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="font-medium">Prof. James Miller</p>
                              <p className="text-xs text-muted-foreground">MIT</p>
                            </div>
                            <p className="text-xs text-muted-foreground">1 week ago</p>
                          </div>
                          <div className="mt-2">
                            <p>
                              I have some concerns about the performance metrics used in your comparison of post-quantum
                              cryptographic methods. The overhead of lattice-based systems might be understated in
                              real-world implementations.
                            </p>
                          </div>
                          <div className="mt-2 flex gap-2">
                            <Button variant="ghost" size="sm">
                              <ThumbsUp className="mr-1 h-3 w-3" />
                              Like (2)
                            </Button>
                            <Button variant="ghost" size="sm">
                              <MessageSquare className="mr-1 h-3 w-3" />
                              Reply
                            </Button>
                          </div>

                          <div className="mt-4 ml-8 rounded-lg border p-3">
                            <div className="flex items-start gap-4">
                              <Avatar className="h-8 w-8">
                                <AvatarImage src="/images/placeholder.svg?height=32&width=32" />
                                <AvatarFallback>AJ</AvatarFallback>
                              </Avatar>
                              <div className="flex-1">
                                <div className="flex items-center justify-between">
                                  <div>
                                    <p className="font-medium">Alex Johnson</p>
                                    <p className="text-xs text-muted-foreground">Author</p>
                                  </div>
                                  <p className="text-xs text-muted-foreground">5 days ago</p>
                                </div>
                                <div className="mt-2">
                                  <p>
                                    Thank you for your feedback, Professor Miller. You raise a valid point. We've
                                    conducted additional benchmarks on resource-constrained devices that we'll include
                                    in our follow-up paper.
                                  </p>
                                </div>
                                <div className="mt-2 flex gap-2">
                                  <Button variant="ghost" size="sm">
                                    <ThumbsUp className="mr-1 h-3 w-3" />
                                    Like (3)
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <Separator />

                    <div className="space-y-4">
                      <h4 className="font-medium">Add a Comment</h4>
                      <Textarea placeholder="Share your thoughts on this research..." className="min-h-[100px]" />
                      <div className="flex justify-end">
                        <Button className="bg-emerald-600 hover:bg-emerald-700">Post Comment</Button>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            <div className="space-y-6 mt-6 lg:mt-0">
              <Card>
                <CardHeader>
                  <CardTitle>Citation</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="rounded-lg bg-gray-50 p-3 text-sm">
                    <p>
                      Johnson, A. (2023). Quantum Computing Applications in Cryptography.{" "}
                      <em>Journal of Undergraduate Research</em>, 15(2), 112-128.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <Button variant="outline" size="sm">
                      Copy BibTeX
                    </Button>
                    <Button variant="outline" size="sm">
                      Copy APA
                    </Button>
                    <Button variant="outline" size="sm">
                      Copy MLA
                    </Button>
                    <Button variant="outline" size="sm">
                      Copy Chicago
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Author Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-col items-center">
                    <Avatar className="h-20 w-20">
                      <AvatarImage src="/images/placeholder.svg?height=80&width=80" alt="Alex Johnson" />
                      <AvatarFallback>AJ</AvatarFallback>
                    </Avatar>
                    <h3 className="mt-2 font-medium">Alex Johnson</h3>
                    <p className="text-sm text-muted-foreground">University of California, Berkeley</p>
                    <Button variant="outline" size="sm" className="mt-2">
                      View Profile
                    </Button>
                  </div>
                  <Separator />
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium">Research Interests</h4>
                    <div className="flex flex-wrap gap-1">
                      <Badge variant="outline">Quantum Computing</Badge>
                      <Badge variant="outline">Cryptography</Badge>
                      <Badge variant="outline">Computer Security</Badge>
                      <Badge variant="outline">Algorithms</Badge>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium">Other Publications</h4>
                    <ul className="space-y-2 text-sm">
                      <li>
                        <a href="#" className="hover:underline">
                          Secure Multi-Party Computation in the Quantum Era
                        </a>
                      </li>
                      <li>
                        <a href="#" className="hover:underline">
                          Evaluating Quantum-Resistant VPN Protocols
                        </a>
                      </li>
                      <li>
                        <a href="#" className="hover:underline">
                          A Survey of Post-Quantum Cryptographic Standards
                        </a>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Related Research</CardTitle>
                </CardHeader>
                <CardContent>
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
                      <div key={index} className="rounded-lg border p-3">
                        <h4 className="font-medium">{paper.title}</h4>
                        <p className="text-sm text-muted-foreground">
                          {paper.author} • {paper.date}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    View More
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4 md:h-24">
          <p className="text-sm text-gray-500">© 2023 ResearchHub. All rights reserved.</p>
          <nav className="flex items-center gap-4 text-sm">
            <Link href="#" className="text-gray-500 hover:underline">
              Terms
            </Link>
            <Link href="#" className="text-gray-500 hover:underline">
              Privacy
            </Link>
            <Link href="#" className="text-gray-500 hover:underline">
              Contact
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}
