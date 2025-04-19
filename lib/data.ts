import type { Product } from "./types"

export const products: Product[] = [
  {
    id: "expedition-pro-75",
    name: "Expedition Pro 75",
    price: 299.99,
    image: "/hero.jpeg",
    shortDescription: "Heavy-duty cooler for extended outdoor adventures",
    description:
      "The Expedition Pro 75 is our flagship cooler, designed for serious outdoor enthusiasts. With superior insulation technology and rugged construction, it keeps ice frozen for up to 7 days, even in extreme conditions. Perfect for extended camping trips, fishing expeditions, or as a reliable backup during power outages.",
    features: [
      {
        icon: "clock",
        text: "7-day ice retention",
      },
      {
        icon: "shield",
        text: "Bear-resistant certification",
      },
      {
        icon: "weight",
        text: "75-quart capacity",
      },
    ],
    specs: {
      dimensions: '33.1" × 17.7" × 18.5"',
      weight: "37 lbs (empty)",
      capacity: "75 quarts / 71 liters",
      material: "Rotomolded polyethylene",
    },
  },
  {
    id: "trailblazer-45",
    name: "Trailblazer 45",
    price: 199.99,
    image: "/product2.jpeg",
    shortDescription: "Mid-sized cooler perfect for weekend trips",
    description:
      "The Trailblazer 45 strikes the perfect balance between capacity and portability. Ideal for weekend camping trips or day outings with friends and family. Features our premium insulation that keeps contents cold for up to 5 days, along with a convenient drain system and non-slip feet.",
    features: [
      {
        icon: "clock",
        text: "5-day ice retention",
      },
      {
        icon: "shield",
        text: "UV-resistant exterior",
      },
      {
        icon: "weight",
        text: "45-quart capacity",
      },
    ],
    specs: {
      dimensions: '26.7" × 16.5" × 16.3"',
      weight: "25 lbs (empty)",
      capacity: "45 quarts / 42.6 liters",
      material: "Rotomolded polyethylene",
    },
  },
  {
    id: "daytrip-20",
    name: "Daytrip 20",
    price: 149.99,
    image: "/product3.jpeg",
    shortDescription: "Compact cooler for day trips and lunch outings",
    description:
      "Don't let the compact size fool you - the Daytrip 20 delivers serious cooling performance in a portable package. Perfect for day trips, lunch outings, or as a personal cooler for road trips. The comfortable carrying handle and lightweight design make it easy to take anywhere.",
    features: [
      {
        icon: "clock",
        text: "3-day ice retention",
      },
      {
        icon: "shield",
        text: "Impact-resistant construction",
      },
      {
        icon: "weight",
        text: "20-quart capacity",
      },
    ],
    specs: {
      dimensions: '18.5" × 13.6" × 14.7"',
      weight: "15 lbs (empty)",
      capacity: "20 quarts / 18.9 liters",
      material: "Rotomolded polyethylene",
    },
  },
  {
    id: "arctic-tote-30",
    name: "Arctic Tote 30",
    price: 129.99,
    image: "/product4.jpeg",
    shortDescription: "Soft-sided cooler with premium insulation",
    description:
      "The Arctic Tote 30 combines the convenience of a soft cooler with exceptional cooling performance. The waterproof exterior and leak-proof liner protect against spills, while the padded shoulder strap makes it comfortable to carry. Perfect for picnics, beach days, or boating trips.",
    features: [
      {
        icon: "clock",
        text: "48-hour ice retention",
      },
      {
        icon: "shield",
        text: "Waterproof exterior",
      },
      {
        icon: "weight",
        text: "30-quart capacity",
      },
    ],
    specs: {
      dimensions: '19.7" × 11.8" × 15.7"',
      weight: "5.5 lbs (empty)",
      capacity: "30 quarts / 28.4 liters",
      material: "High-density waterproof fabric",
    },
  },
  {
    id: "glacier-electric-40",
    name: "Glacier Electric 40",
    price: 349.99,
    image: "/product5.jpeg",
    shortDescription: "Electric cooler for road trips and camping",
    description:
      "The Glacier Electric 40 offers the convenience of electric cooling with the versatility to run on either 12V DC (vehicle) or 110V AC (standard outlet) power. No ice needed - just plug it in and set your desired temperature. Perfect for road trips, RVs, boats, or as a secondary refrigerator.",
    features: [
      {
        icon: "clock",
        text: "Temperature range: -4°F to 50°F",
      },
      {
        icon: "shield",
        text: "Dual power options (12V DC/110V AC)",
      },
      {
        icon: "weight",
        text: "40-quart capacity",
      },
    ],
    specs: {
      dimensions: '23.2" × 16.5" × 17.7"',
      weight: "29 lbs (empty)",
      capacity: "40 quarts / 37.9 liters",
      material: "High-impact plastic with insulation",
    },
  },
  {
    id: "summit-wheeled-55",
    name: "Summit Wheeled 55",
    price: 249.99,
    // image: "/placeholder.svg?height=600&width=800",
    image: "/product6.jpeg",
    shortDescription: "Rugged wheeled cooler for easy transport",
    description:
      "The Summit Wheeled 55 combines our premium insulation technology with the convenience of all-terrain wheels and a telescoping handle. Easily transport your cooler across parking lots, beaches, or campgrounds without breaking a sweat. The elevated design keeps your contents away from hot surfaces for maximum cooling efficiency.",
    features: [
      {
        icon: "clock",
        text: "6-day ice retention",
      },
      {
        icon: "shield",
        text: "All-terrain wheels",
      },
      {
        icon: "weight",
        text: "55-quart capacity",
      },
    ],
    specs: {
      dimensions: '29.5" × 18.9" × 19.8"',
      weight: "32 lbs (empty)",
      capacity: "55 quarts / 52.1 liters",
      material: "Rotomolded polyethylene",
    },
  },
  {
    id: "summit-wheeled-25",
    name: "Summit Wheeled 55",
    price: 249.99,
    // image: "/placeholder.svg?height=600&width=800",
    image: "/product7.jpeg",
    shortDescription: "Rugged wheeled cooler for easy transport",
    description:
      "The Summit Wheeled 55 combines our premium insulation technology with the convenience of all-terrain wheels and a telescoping handle. Easily transport your cooler across parking lots, beaches, or campgrounds without breaking a sweat. The elevated design keeps your contents away from hot surfaces for maximum cooling efficiency.",
    features: [
      {
        icon: "clock",
        text: "6-day ice retention",
      },
      {
        icon: "shield",
        text: "All-terrain wheels",
      },
      {
        icon: "weight",
        text: "55-quart capacity",
      },
    ],
    specs: {
      dimensions: '29.5" × 18.9" × 19.8"',
      weight: "32 lbs (empty)",
      capacity: "55 quarts / 52.1 liters",
      material: "Rotomolded polyethylene",
    },
  },
  {
    id: "summit-wheeled-85",
    name: "Summit Wheeled 55",
    price: 249.99,
    // image: "/placeholder.svg?height=600&width=800",
    image: "/product8.jpeg",
    shortDescription: "Rugged wheeled cooler for easy transport",
    description:
      "The Summit Wheeled 55 combines our premium insulation technology with the convenience of all-terrain wheels and a telescoping handle. Easily transport your cooler across parking lots, beaches, or campgrounds without breaking a sweat. The elevated design keeps your contents away from hot surfaces for maximum cooling efficiency.",
    features: [
      {
        icon: "clock",
        text: "6-day ice retention",
      },
      {
        icon: "shield",
        text: "All-terrain wheels",
      },
      {
        icon: "weight",
        text: "55-quart capacity",
      },
    ],
    specs: {
      dimensions: '29.5" × 18.9" × 19.8"',
      weight: "32 lbs (empty)",
      capacity: "55 quarts / 52.1 liters",
      material: "Rotomolded polyethylene",
    },
  },
  {
    id: "summit-wheeled-5",
    name: "Summit Wheeled 55",
    price: 249.99,
    // image: "/placeholder.svg?height=600&width=800",
    image: "/product9.jpeg",
    shortDescription: "Rugged wheeled cooler for easy transport",
    description:
      "The Summit Wheeled 55 combines our premium insulation technology with the convenience of all-terrain wheels and a telescoping handle. Easily transport your cooler across parking lots, beaches, or campgrounds without breaking a sweat. The elevated design keeps your contents away from hot surfaces for maximum cooling efficiency.",
    features: [
      {
        icon: "clock",
        text: "6-day ice retention",
      },
      {
        icon: "shield",
        text: "All-terrain wheels",
      },
      {
        icon: "weight",
        text: "55-quart capacity",
      },
    ],
    specs: {
      dimensions: '29.5" × 18.9" × 19.8"',
      weight: "32 lbs (empty)",
      capacity: "55 quarts / 52.1 liters",
      material: "Rotomolded polyethylene",
    },
  },
  {
    id: "summit-wheeled-215",
    name: "Summit Wheeled 55",
    price: 249.99,
    // image: "/placeholder.svg?height=600&width=800",
    image: "/product10.jpeg",
    shortDescription: "Rugged wheeled cooler for easy transport",
    description:
      "The Summit Wheeled 55 combines our premium insulation technology with the convenience of all-terrain wheels and a telescoping handle. Easily transport your cooler across parking lots, beaches, or campgrounds without breaking a sweat. The elevated design keeps your contents away from hot surfaces for maximum cooling efficiency.",
    features: [
      {
        icon: "clock",
        text: "6-day ice retention",
      },
      {
        icon: "shield",
        text: "All-terrain wheels",
      },
      {
        icon: "weight",
        text: "55-quart capacity",
      },
    ],
    specs: {
      dimensions: '29.5" × 18.9" × 19.8"',
      weight: "32 lbs (empty)",
      capacity: "55 quarts / 52.1 liters",
      material: "Rotomolded polyethylene",
    },
  },
]
