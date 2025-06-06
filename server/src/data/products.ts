// server/data/products.ts
const products = [
  {
    id: 'prod1',
    name: 'Elegant Armchair',
    description: 'A comfortable and stylish armchair, perfect for any living space.',
    price: 320,
    imageUrl: 'https://plus.unsplash.com/premium_photo-1706560278216-101f0dcb868e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8RWxlZ2FudCUyMEFybWNoYWlyfGVufDB8fDB8fHww',
    category: 'Furniture',
    rating: 4.8,
    numReviews: 12,
    countInStock: 5,
  },
  {
    id: 'prod2',
    name: 'Modern Desk Lamp',
    description: 'LED desk lamp with adjustable brightness and flexible neck.',
    price: 45,
    imageUrl: 'https://media.istockphoto.com/id/534400418/photo/desk-lamp.webp?a=1&b=1&s=612x612&w=0&k=20&c=UKxxWQ5fXNnopD6s2KvBVNRSc4s-wiFI-VZvtfCQXDA=',
    category: 'Lighting',
    rating: 4.4,
    numReviews: 18,
    countInStock: 15,
  },
  {
    id: 'prod3',
    name: 'Wooden Study Table',
    description: 'Spacious wooden table for your work-from-home setup.',
    price: 220,
    imageUrl: 'https://plus.unsplash.com/premium_photo-1720884611740-f5e807d7c77e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fFdvb2RlbiUyMFN0dWR5JTIwVGFibGV8ZW58MHx8MHx8fDA%3D',
    category: 'Furniture',
    rating: 4.7,
    numReviews: 10,
    countInStock: 8,
  },
  {
    id: 'prod4',
    name: 'Cozy Floor Rug',
    description: 'Soft, woven rug to add warmth and texture to your floor.',
    price: 90,
    imageUrl: 'https://media.istockphoto.com/id/1213695547/photo/3d-rendering-of-an-elegant-bedroom.webp?a=1&b=1&s=612x612&w=0&k=20&c=jswcSM68zoLPkx-BAfIGp1gedm_Zx4O-DElOKp4LrGo=',
    category: 'Decor',
    rating: 4.2,
    numReviews: 7,
    countInStock: 12,
  },
  {
    id: 'prod5',
    name: 'Minimalist Wall Clock',
    description: 'A sleek, modern wall clock for your living room or kitchen.',
    price: 38,
    imageUrl: 'https://plus.unsplash.com/premium_photo-1670537439541-d2eb20e1f6ce?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TWluaW1hbGlzdCUyMFdhbGwlMjBDbG9ja3xlbnwwfHwwfHx8MA%3D%3D',
    category: 'Decor',
    rating: 4.1,
    numReviews: 6,
    countInStock: 20,
  },
  {
    id: 'prod6',
    name: 'Ergonomic Office Chair',
    description: 'High-back mesh chair with lumbar support and adjustable height.',
    price: 165,
    imageUrl: 'https://images.unsplash.com/photo-1688578735972-b61ec274df7b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8RXJnb25vbWljJTIwT2ZmaWNlJTIwQ2hhaXJ8ZW58MHx8MHx8fDA%3D',
    category: 'Furniture',
    rating: 4.6,
    numReviews: 22,
    countInStock: 9,
  },
  {
    id: 'prod7',
    name: 'Smart LED Strip',
    description: 'RGB light strip controllable via app and voice assistant.',
    price: 29,
    imageUrl: 'https://images.unsplash.com/photo-1528922087877-3f44f53a8f7d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8U21hcnQlMjBMRUQlMjBTdHJpcHxlbnwwfHwwfHx8MA%3D%3D',
    category: 'Lighting',
    rating: 4.3,
    numReviews: 11,
    countInStock: 30,
  },
  {
    id: 'prod8',
    name: 'Nordic Coffee Table',
    description: 'Round coffee table with natural wood finish.',
    price: 180,
    imageUrl: 'https://plus.unsplash.com/premium_photo-1668472271984-fd54ed105325?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Furniture',
    rating: 4.5,
    numReviews: 9,
    countInStock: 7,
  },
  {
    id: 'prod9',
    name: 'Indoor Plant Set',
    description: 'Set of 3 air-purifying indoor plants in ceramic pots.',
    price: 60,
    imageUrl: 'https://plus.unsplash.com/premium_photo-1680127401354-ccc306081883?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8SW5kb29yJTIwUGxhbnQlMjBTZXR8ZW58MHx8MHx8fDA%3D',
    category: 'Plants',
    rating: 4.9,
    numReviews: 20,
    countInStock: 25,
  },
  {
    id: 'prod10',
    name: 'Glass Pendant Light',
    description: 'Modern hanging light for kitchen or dining area.',
    price: 95,
    imageUrl: 'https://images.unsplash.com/photo-1580168907206-72a78eeda4ad?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8R2xhc3MlMjBQZW5kYW50JTIwTGlnaHR8ZW58MHx8MHx8fDA%3D',
    category: 'Lighting',
    rating: 4.0,
    numReviews: 14,
    countInStock: 10,
  },
  {
    id: 'prod11',
    name: 'Double Bed Frame',
    description: 'Solid wood bed frame with headboard and storage.',
    price: 420,
    imageUrl: 'https://plus.unsplash.com/premium_photo-1661962340349-6ea59fff7e7b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8RG91YmxlJTIwQmVkJTIwRnJhbWV8ZW58MHx8MHx8fDA%3D',
    category: 'Furniture',
    rating: 4.7,
    numReviews: 17,
    countInStock: 4,
  },
  {
    id: 'prod12',
    name: 'Kitchen Organizer Rack',
    description: '3-tier kitchen rack for utensils and spices.',
    price: 35,
    imageUrl: 'https://images.unsplash.com/photo-1714322148798-57ab6b252074?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8S2l0Y2hlbiUyME9yZ2FuaXplciUyMFJhY2t8ZW58MHx8MHx8fDA%3D',
    category: 'Kitchen',
    rating: 4.2,
    numReviews: 13,
    countInStock: 18,
  },
  {
    id: 'prod13',
    name: 'Decorative Wall Mirror',
    description: 'Sunburst style mirror for home entrance or bedroom.',
    price: 110,
    imageUrl: 'https://images.unsplash.com/photo-1566483380350-2af3fc2de89e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fERlY29yYXRpdmUlMjBXYWxsJTIwTWlycm9yfGVufDB8fDB8fHww',
    category: 'Decor',
    rating: 4.6,
    numReviews: 8,
    countInStock: 6,
  },
  {
    id: 'prod14',
    name: 'Bean Bag Chair',
    description: 'Large, comfy bean bag with washable cover.',
    price: 75,
    imageUrl: 'https://plus.unsplash.com/premium_photo-1661582611532-f3aa2cb5b370?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QmVhbiUyMEJhZyUyMENoYWlyfGVufDB8fDB8fHww',
    category: 'Furniture',
    rating: 4.5,
    numReviews: 19,
    countInStock: 10,
  },
  {
    id: 'prod15',
    name: 'Wooden Bookshelf',
    description: '5-tier wooden shelf for books, plants, and decor.',
    price: 150,
    imageUrl: 'https://images.unsplash.com/photo-1730165867812-913d003b75c2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8V29vZGVuJTIwQm9va3NoZWxmfGVufDB8fDB8fHww',
    category: 'Furniture',
    rating: 4.8,
    numReviews: 25,
    countInStock: 3,
  },
  {
    id: 'prod16',
    name: 'Luxury Bedsheet Set',
    description: '100% cotton king size bedsheet with 2 pillow covers.',
    price: 49,
    imageUrl: 'https://images.unsplash.com/photo-1623175788405-46d2c0356c12?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8THV4dXJ5JTIwQmVkc2hlZXQlMjBTZXR8ZW58MHx8MHx8fDA%3D',
    category: 'Bedding',
    rating: 4.3,
    numReviews: 16,
    countInStock: 21,
  },
  {
    id: 'prod17',
    name: 'Floor Standing Lamp',
    description: 'Tall standing lamp with warm lighting and fabric shade.',
    price: 85,
    imageUrl: 'https://images.unsplash.com/photo-1632090944927-8dd1068e5f40?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Rmxvb3IlMjBTdGFuZGluZyUyMExhbXB8ZW58MHx8MHx8fDA%3D',
    category: 'Lighting',
    rating: 4.4,
    numReviews: 10,
    countInStock: 14,
  },
  {
    id: 'prod18',
    name: 'Canvas Wall Art Set',
    description: '3-piece nature theme canvas paintings for living room.',
    price: 65,
    imageUrl: 'https://images.unsplash.com/photo-1696862048447-3ab8435ce5f1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q2FudmFzJTIwV2FsbCUyMEFydCUyMFNldHxlbnwwfHwwfHx8MA%3D%3D',
    category: 'Decor',
    rating: 4.5,
    numReviews: 12,
    countInStock: 11,
  },
  {
    id: 'prod19',
    name: 'Modular Shoe Rack',
    description: 'Compact shoe organizer for hallway or closet.',
    price: 55,
    imageUrl: 'https://plus.unsplash.com/premium_photo-1731628562434-2a0fa0237303?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fE1vZHVsYXIlMjBTaG9lJTIwUmFja3xlbnwwfHwwfHx8MA%3D%3D',
    category: 'Storage',
    rating: 4.1,
    numReviews: 7,
    countInStock: 15,
  },
  {
    id: 'prod20',
    name: 'Antique Table Clock',
    description: 'Vintage brass-finish table clock for retro vibes.',
    price: 40,
    imageUrl: 'https://images.unsplash.com/photo-1632492745314-df363f950cb9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fEFudGlxdWUlMjBUYWJsZSUyMENsb2NrfGVufDB8fDB8fHww',
    category: 'Decor',
    rating: 4.0,
    numReviews: 9,
    countInStock: 10,
  },
  {
    id: 'prod1',
    name: 'Elegant Armchair',
    description: 'A comfortable and stylish armchair, perfect for any living space.',
    price: 320,
    imageUrl: 'https://plus.unsplash.com/premium_photo-1706560278216-101f0dcb868e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8RWxlZ2FudCUyMEFybWNoYWlyfGVufDB8fDB8fHww',
    category: 'Furniture',
    rating: 4.8,
    numReviews: 12,
    countInStock: 5,
  },
  {
    id: 'prod2',
    name: 'Modern Desk Lamp',
    description: 'LED desk lamp with adjustable brightness and flexible neck.',
    price: 45,
    imageUrl: 'https://media.istockphoto.com/id/534400418/photo/desk-lamp.webp?a=1&b=1&s=612x612&w=0&k=20&c=UKxxWQ5fXNnopD6s2KvBVNRSc4s-wiFI-VZvtfCQXDA=',
    category: 'Lighting',
    rating: 4.4,
    numReviews: 18,
    countInStock: 15,
  },
  {
    id: 'prod3',
    name: 'Wooden Study Table',
    description: 'Spacious wooden table for your work-from-home setup.',
    price: 220,
    imageUrl: 'https://plus.unsplash.com/premium_photo-1720884611740-f5e807d7c77e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fFdvb2RlbiUyMFN0dWR5JTIwVGFibGV8ZW58MHx8MHx8fDA%3D',
    category: 'Furniture',
    rating: 4.7,
    numReviews: 10,
    countInStock: 8,
  },
  {
    id: 'prod4',
    name: 'Cozy Floor Rug',
    description: 'Soft, woven rug to add warmth and texture to your floor.',
    price: 90,
    imageUrl: 'https://media.istockphoto.com/id/1213695547/photo/3d-rendering-of-an-elegant-bedroom.webp?a=1&b=1&s=612x612&w=0&k=20&c=jswcSM68zoLPkx-BAfIGp1gedm_Zx4O-DElOKp4LrGo=',
    category: 'Decor',
    rating: 4.2,
    numReviews: 7,
    countInStock: 12,
  },
  {
    id: 'prod5',
    name: 'Minimalist Wall Clock',
    description: 'A sleek, modern wall clock for your living room or kitchen.',
    price: 38,
    imageUrl: 'https://plus.unsplash.com/premium_photo-1670537439541-d2eb20e1f6ce?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TWluaW1hbGlzdCUyMFdhbGwlMjBDbG9ja3xlbnwwfHwwfHx8MA%3D%3D',
    category: 'Decor',
    rating: 4.1,
    numReviews: 6,
    countInStock: 20,
  },
  {
    id: 'prod6',
    name: 'Ergonomic Office Chair',
    description: 'High-back mesh chair with lumbar support and adjustable height.',
    price: 165,
    imageUrl: 'https://images.unsplash.com/photo-1688578735972-b61ec274df7b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8RXJnb25vbWljJTIwT2ZmaWNlJTIwQ2hhaXJ8ZW58MHx8MHx8fDA%3D',
    category: 'Furniture',
    rating: 4.6,
    numReviews: 22,
    countInStock: 9,
  },
  {
    id: 'prod7',
    name: 'Smart LED Strip',
    description: 'RGB light strip controllable via app and voice assistant.',
    price: 29,
    imageUrl: 'https://images.unsplash.com/photo-1528922087877-3f44f53a8f7d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8U21hcnQlMjBMRUQlMjBTdHJpcHxlbnwwfHwwfHx8MA%3D%3D',
    category: 'Lighting',
    rating: 4.3,
    numReviews: 11,
    countInStock: 30,
  },
  {
    id: 'prod8',
    name: 'Nordic Coffee Table',
    description: 'Round coffee table with natural wood finish.',
    price: 180,
    imageUrl: 'https://plus.unsplash.com/premium_photo-1668472271984-fd54ed105325?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Furniture',
    rating: 4.5,
    numReviews: 9,
    countInStock: 7,
  },
  {
    id: 'prod9',
    name: 'Indoor Plant Set',
    description: 'Set of 3 air-purifying indoor plants in ceramic pots.',
    price: 60,
    imageUrl: 'https://plus.unsplash.com/premium_photo-1680127401354-ccc306081883?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8SW5kb29yJTIwUGxhbnQlMjBTZXR8ZW58MHx8MHx8fDA%3D',
    category: 'Plants',
    rating: 4.9,
    numReviews: 20,
    countInStock: 25,
  },
  {
    id: 'prod10',
    name: 'Glass Pendant Light',
    description: 'Modern hanging light for kitchen or dining area.',
    price: 95,
    imageUrl: 'https://images.unsplash.com/photo-1580168907206-72a78eeda4ad?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8R2xhc3MlMjBQZW5kYW50JTIwTGlnaHR8ZW58MHx8MHx8fDA%3D',
    category: 'Lighting',
    rating: 4.0,
    numReviews: 14,
    countInStock: 10,
  },
  {
    id: 'prod11',
    name: 'Double Bed Frame',
    description: 'Solid wood bed frame with headboard and storage.',
    price: 420,
    imageUrl: 'https://plus.unsplash.com/premium_photo-1661962340349-6ea59fff7e7b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8RG91YmxlJTIwQmVkJTIwRnJhbWV8ZW58MHx8MHx8fDA%3D',
    category: 'Furniture',
    rating: 4.7,
    numReviews: 17,
    countInStock: 4,
  },
  {
    id: 'prod12',
    name: 'Kitchen Organizer Rack',
    description: '3-tier kitchen rack for utensils and spices.',
    price: 35,
    imageUrl: 'https://images.unsplash.com/photo-1714322148798-57ab6b252074?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8S2l0Y2hlbiUyME9yZ2FuaXplciUyMFJhY2t8ZW58MHx8MHx8fDA%3D',
    category: 'Kitchen',
    rating: 4.2,
    numReviews: 13,
    countInStock: 18,
  },
  {
    id: 'prod13',
    name: 'Decorative Wall Mirror',
    description: 'Sunburst style mirror for home entrance or bedroom.',
    price: 110,
    imageUrl: 'https://images.unsplash.com/photo-1566483380350-2af3fc2de89e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fERlY29yYXRpdmUlMjBXYWxsJTIwTWlycm9yfGVufDB8fDB8fHww',
    category: 'Decor',
    rating: 4.6,
    numReviews: 8,
    countInStock: 6,
  },
  {
    id: 'prod14',
    name: 'Bean Bag Chair',
    description: 'Large, comfy bean bag with washable cover.',
    price: 75,
    imageUrl: 'https://plus.unsplash.com/premium_photo-1661582611532-f3aa2cb5b370?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QmVhbiUyMEJhZyUyMENoYWlyfGVufDB8fDB8fHww',
    category: 'Furniture',
    rating: 4.5,
    numReviews: 19,
    countInStock: 10,
  },
  {
    id: 'prod15',
    name: 'Wooden Bookshelf',
    description: '5-tier wooden shelf for books, plants, and decor.',
    price: 150,
    imageUrl: 'https://images.unsplash.com/photo-1730165867812-913d003b75c2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8V29vZGVuJTIwQm9va3NoZWxmfGVufDB8fDB8fHww',
    category: 'Furniture',
    rating: 4.8,
    numReviews: 25,
    countInStock: 3,
  },
  {
    id: 'prod16',
    name: 'Luxury Bedsheet Set',
    description: '100% cotton king size bedsheet with 2 pillow covers.',
    price: 49,
    imageUrl: 'https://images.unsplash.com/photo-1623175788405-46d2c0356c12?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8THV4dXJ5JTIwQmVkc2hlZXQlMjBTZXR8ZW58MHx8MHx8fDA%3D',
    category: 'Bedding',
    rating: 4.3,
    numReviews: 16,
    countInStock: 21,
  },
  {
    id: 'prod17',
    name: 'Floor Standing Lamp',
    description: 'Tall standing lamp with warm lighting and fabric shade.',
    price: 85,
    imageUrl: 'https://images.unsplash.com/photo-1632090944927-8dd1068e5f40?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Rmxvb3IlMjBTdGFuZGluZyUyMExhbXB8ZW58MHx8MHx8fDA%3D',
    category: 'Lighting',
    rating: 4.4,
    numReviews: 10,
    countInStock: 14,
  },
  {
    id: 'prod18',
    name: 'Canvas Wall Art Set',
    description: '3-piece nature theme canvas paintings for living room.',
    price: 65,
    imageUrl: 'https://images.unsplash.com/photo-1696862048447-3ab8435ce5f1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q2FudmFzJTIwV2FsbCUyMEFydCUyMFNldHxlbnwwfHwwfHx8MA%3D%3D',
    category: 'Decor',
    rating: 4.5,
    numReviews: 12,
    countInStock: 11,
  },
  {
    id: 'prod19',
    name: 'Modular Shoe Rack',
    description: 'Compact shoe organizer for hallway or closet.',
    price: 55,
    imageUrl: 'https://plus.unsplash.com/premium_photo-1731628562434-2a0fa0237303?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fE1vZHVsYXIlMjBTaG9lJTIwUmFja3xlbnwwfHwwfHx8MA%3D%3D',
    category: 'Storage',
    rating: 4.1,
    numReviews: 7,
    countInStock: 15,
  },
  {
    id: 'prod20',
    name: 'Antique Table Clock',
    description: 'Vintage brass-finish table clock for retro vibes.',
    price: 40,
    imageUrl: 'https://images.unsplash.com/photo-1632492745314-df363f950cb9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fEFudGlxdWUlMjBUYWJsZSUyMENsb2NrfGVufDB8fDB8fHww',
    category: 'Decor',
    rating: 4.0,
    numReviews: 9,
    countInStock: 10,
  },
];

export default products;

