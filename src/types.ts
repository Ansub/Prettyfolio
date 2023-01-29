export interface Posts {
  createdAt: string
  id: string
  publishedAt: string
  slug: string
  title: string
  updatedAt: string
  datePublished: string | number | Date
  featuredImage: {
    url: string
  }
  url: string
  category: {
    name: string[]
  }
}
