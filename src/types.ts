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

export interface SinglePostProps {
  title: string
  datePublished: string
  description: string
  tags: string[]
  slug: string
  url: string
  image: string
  featuredImage: {
    url: string
  }
  content: {
    html: string
  }
  techstack: {
    tech: string[]
  }
}
