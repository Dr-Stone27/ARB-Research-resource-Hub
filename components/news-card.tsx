import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export interface NewsItem {
  id: string
  title: string
  date: string
  content: string
  image: string
  url: string
}

interface NewsCardProps {
  news: NewsItem
}

export function NewsCard({ news }: NewsCardProps) {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_rgba(79,70,229,0.3)] hover:scale-[1.02] bg-[#1c1c2b]/80 backdrop-blur-sm border-gray-800 rounded-2xl h-full flex flex-col">
      <div className="aspect-video w-full overflow-hidden bg-[#151525]">
        <img
          src={news.image || "/placeholder.svg"}
          alt={news.title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardHeader className="pb-2">
        <div className="text-sm text-gray-500 mb-2">{news.date}</div>
        <CardTitle className="text-xl text-white line-clamp-2">{news.title}</CardTitle>
      </CardHeader>
      <CardContent className="pb-2 flex-grow">
        <p className="text-gray-400 line-clamp-3">{news.content}</p>
      </CardContent>
      <CardFooter className="pt-2">
        <Button
          variant="ghost"
          className="text-indigo-400 hover:text-indigo-300 hover:bg-indigo-900/20 p-0 border-0"
          asChild
        >
          <Link href={news.url}>
            Read Full Story <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
