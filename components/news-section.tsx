import { NewsCard, type NewsItem } from "@/components/news-card"
import { Button } from "@/components/ui/button"

interface NewsSectionProps {
  title: string
  description?: string
  news: NewsItem[]
  viewAllUrl?: string
}

export function NewsSection({ title, description, news, viewAllUrl = "#" }: NewsSectionProps) {
  return (
    <section className="w-full py-16 md:py-24 bg-[#0f0f1a] border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2 max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl text-white">{title}</h2>
            {description && <p className="text-lg text-gray-400">{description}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item) => (
            <NewsCard key={item.id} news={item} />
          ))}
        </div>

        {viewAllUrl && (
          <div className="flex justify-center mt-10">
            <Button
              variant="outline"
              className="mx-auto border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white"
              asChild
            >
              <a href={viewAllUrl}>View All News</a>
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
