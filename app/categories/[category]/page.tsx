import Link from "next/link"
import { ArrowRight, Download, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function CategoryPage({ params }: { params: { category: string } }) {
  // This would normally come from a database or API
  const categoryName = params.category
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-emerald-50 to-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  {categoryName} Research
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                  Explore the latest undergraduate research in {categoryName.toLowerCase()}.
                </p>
              </div>
              <div className="w-full max-w-sm">
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder={`Search ${categoryName.toLowerCase()} papers...`}
                    className="w-full pl-8"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-1 sm:grid-cols-3">
                <TabsTrigger value="all">All Papers</TabsTrigger>
                <TabsTrigger value="popular">Most Popular</TabsTrigger>
                <TabsTrigger value="recent">Recently Added</TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    {
                      title: "Quantum Computing Applications in Cryptography",
                      author: "Alex Johnson",
                      abstract:
                        "This research explores the potential applications of quantum computing in modern cryptographic systems...",
                      downloads: 342,
                      subcategory: "Quantum Computing",
                      date: "May 2023",
                    },
                    {
                      title: "Neural Networks for Early Disease Detection",
                      author: "Priya Patel",
                      abstract:
                        "Investigating the application of deep learning algorithms in identifying early markers of neurodegenerative diseases...",
                      downloads: 423,
                      subcategory: "Machine Learning",
                      date: "July 2023",
                    },
                    {
                      title: "Blockchain-Based Supply Chain Verification",
                      author: "Michael Chen",
                      abstract:
                        "A novel approach to supply chain verification using blockchain technology to ensure product authenticity...",
                      downloads: 187,
                      subcategory: "Blockchain",
                      date: "June 2023",
                    },
                    {
                      title: "Optimizing Cloud Resource Allocation",
                      author: "Sarah Williams",
                      abstract:
                        "This paper presents a new algorithm for optimizing resource allocation in cloud computing environments...",
                      downloads: 256,
                      subcategory: "Cloud Computing",
                      date: "April 2023",
                    },
                    {
                      title: "Secure Multi-Party Computation Protocols",
                      author: "David Kim",
                      abstract:
                        "An analysis of secure multi-party computation protocols for privacy-preserving data analysis...",
                      downloads: 198,
                      subcategory: "Cybersecurity",
                      date: "March 2023",
                    },
                    {
                      title: "Edge Computing for IoT Applications",
                      author: "Emily Rodriguez",
                      abstract:
                        "Exploring the benefits of edge computing in reducing latency and improving performance for IoT applications...",
                      downloads: 312,
                      subcategory: "Internet of Things",
                      date: "May 2023",
                    },
                  ].map((paper, index) => (
                    <Card key={index} className="flex flex-col h-full">
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <Badge variant="outline" className="mb-2">
                            {paper.subcategory}
                          </Badge>
                          <span className="text-sm text-gray-500">{paper.date}</span>
                        </div>
                        <CardTitle className="text-xl">{paper.title}</CardTitle>
                        <div className="text-sm text-gray-500">by {paper.author}</div>
                      </CardHeader>
                      <CardContent className="flex-grow">
                        <p className="text-gray-600">{paper.abstract}</p>
                      </CardContent>
                      <CardFooter className="flex justify-between border-t pt-4">
                        <div className="flex items-center text-sm text-gray-500">
                          <Download className="h-4 w-4 mr-1" />
                          {paper.downloads} downloads
                        </div>
                        <Button variant="ghost" size="sm">
                          Read More
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
                <div className="flex justify-center mt-8">
                  <Button variant="outline" className="mx-2">
                    Previous
                  </Button>
                  <Button variant="outline" className="mx-2">
                    Next
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="popular" className="mt-6">
                {/* Popular papers would be displayed here */}
              </TabsContent>

              <TabsContent value="recent" className="mt-6">
                {/* Recent papers would be displayed here */}
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-emerald-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Ready to Contribute?</h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                  Share your {categoryName.toLowerCase()} research with the academic community and contribute to the
                  growing body of knowledge.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="bg-emerald-600 hover:bg-emerald-700">
                  <Link href="/submit">
                    Submit Your Research <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline">Learn About Our Review Process</Button>
              </div>
            </div>
          </div>
        </section>
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
