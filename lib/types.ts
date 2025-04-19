export interface Product {
  id: string
  name: string
  price: number
  image: string
  shortDescription: string
  description: string
  features: {
    icon: string
    text: string
  }[]
  specs: {
    dimensions: string
    weight: string
    capacity: string
    material: string
  }
}
