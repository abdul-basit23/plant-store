export const plants=[
     // Indoor Plants Category
  {
    id: 1,
    name: "Monstera Deliciosa",
    price: 35.99,
    category: "Indoor Plants",
    image: "https://images.pexels.com/photos/6208086/pexels-photo-6208086.jpeg?auto=compress&cs=tinysrgb&w=300"
  },
  {
    id: 2,
    name: "Snake Plant",
    price: 24.99,
    category: "Indoor Plants", 
    image: "https://images.pexels.com/photos/2123482/pexels-photo-2123482.jpeg?auto=compress&cs=tinysrgb&w=300"
  },
  
  // Succulents Category
  {
    id: 3,
    name: "Jade Plant",
    price: 18.99,
    category: "Succulents",
    image: "https://images.pexels.com/photos/1076698/pexels-photo-1076698.jpeg?auto=compress&cs=tinysrgb&w=300"
  },
  {
    id: 4,
    name: "Aloe Vera",
    price: 22.99,
    category: "Succulents",
    image: "https://images.pexels.com/photos/1084178/pexels-photo-1084178.jpeg?auto=compress&cs=tinysrgb&w=300"
  },
  
  // Flowering Plants Category
  {
    id: 5,
    name: "Peace Lily",
    price: 28.99,
    category: "Flowering Plants",
    image: "https://images.pexels.com/photos/4503821/pexels-photo-4503821.jpeg?auto=compress&cs=tinysrgb&w=300"
  },
  {
    id: 6,
    name: "Orchid",
    price: 42.99,
    category: "Flowering Plants",
    image: "https://images.pexels.com/photos/1906794/pexels-photo-1906794.jpeg?auto=compress&cs=tinysrgb&w=300"
  }

]

export const plantsByCatagory=plants.reduce((acc,plant)=>{
    if(!acc[plant.category]){
        acc[plant.category]=[]
    }
    acc[plant.category].push(plant)


    return acc
},{})








