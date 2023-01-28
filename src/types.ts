export interface Posts {
  datePublished: string | number | Date
  posts: {
    createdAt: string
    id: string
    publishedAt: string
    slug: string
    title: string
    updatedAt: string
    content: {
      html: string
    }
    featuredImage: {
      url: string
    }
    tag: string
    url: string
  }
}
