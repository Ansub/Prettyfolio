import { ChangeEvent } from "react"

/**
 * mainpage.tsx
 */

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

export interface CategoriesSectionProps {
  handleCategory: (category: string) => void
  selectedButton: string
  handleSearch: (event: ChangeEvent<HTMLInputElement>) => void
  search: string
  setSelectedButton: React.Dispatch<React.SetStateAction<string>>
}

export interface FilterButtonProps {
  selectedButton: string
  setSelectedButton: React.Dispatch<React.SetStateAction<string>>
  handleCategory: (category: string) => void
  title: string
}

/**
 * singlePageComponent.tsx
 */

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
