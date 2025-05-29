export interface Product {
     id: number
     name: string
     description: string
     price: number
     image: string
   }
   
   export const products: Product[] = [
     {
       id: 1,
       name: "Stylish Sneakers",
       description: "Comfortable and trendy sneakers for everyday wear.",
       price: 59.99,
       image: "https://source.unsplash.com/random/400x400?shoes",
     },
     {
       id: 2,
       name: "Classic Watch",
       description: "Elegant watch with leather strap.",
       price: 149.99,
       image: "https://source.unsplash.com/random/400x400?watch",
     },
     {
       id: 3,
       name: "Sunglasses",
       description: "UV protected stylish sunglasses.",
       price: 89.99,
       image: "https://source.unsplash.com/random/400x400?sunglasses",
     },
     {
       id: 4,
       name: "Backpack",
       description: "Durable backpack for travel and daily use.",
       price: 75.5,
       image: "https://source.unsplash.com/random/400x400?backpack",
     }
   ]
   