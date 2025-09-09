import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '.cartSlice.js';
import { plantsByCatagory } from './plant.js';
import { Plus, Check, Key } from 'lucide-react';
import toast from 'react-hot-toast';

function ProductListingPage() {
  const cartItems=useSelector(state=>state.cart.items);
  const dispatch=useDispatch();
  
  const handleAddToCart=(plant)=>{
    dispatch(addToCart(plant)) ;
    toast.success(`${plant.name} added to cart`) 

  }

  const isInCart=(plantId)=>{
   return cartItems.some(item=>item.id===plantId)
  }

  return (
    <div>
     
     {/* header note */}
     <div className='flex flex-col justify-center items-center mt-18 mb-12 gap-4 text-center'>
      <h2 className='text-4xl text-green-800 font-bold'>Our Plant Collection</h2>
      <p className='text-xl text-gray-400'>Discover the perfect plants for your home</p>
     </div>

     {/* product listing  */}
     {
      
     Object.entries(plantsByCatagory).map(([plantCategory, Plants])=> (
       <div className='text-center text-2xl font-bold text-green-950' key={plantCategory}>
        <div className='text-center my-3 text-green-600'>{plantCategory}</div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  gap-6 mx-10 md:mx-32 lg:mx-52 mb-12'>
            {
               Plants.map((plant)=>(
                 <div key={plant.id}>
                  <div className='transition-transform hover:scale-105 flex flex-col gap-3  border border-gray-400 shadow-2xl p-5 w-90 md:w-70 md:m-2 lg:w-90   '>
                    <img className='bg-cover w-120 h-60' src={plant.image} alt="..." />
                    <p   className='' >{plant.name}</p>
                    <p   className='text-green-500 font-bold text-4xl ' >{plant.price} $</p>
                    <button disabled={isInCart(plant.id)} className=' w-auto h-auto' onClick={()=>handleAddToCart(plant)}>
                      {isInCart(plant.id)?(<div className='bg-green-200 text-green-800 text-2xl  font-bold flex gap-3  items-center justify-center p-5 rounded-full transition-transform hover:scale-105 cursor-none'><Check/><p>Added to cart</p></div>) : (<div className='bg-green-700 font-bold text-2xl flex gap-3 text-white items-center justify-center p-5 rounded-full transition-transform hover:scale-105'><Plus/><span>Add to cart</span></div>)}
                    </button>
                  </div>

                 </div>
               )
               )

            }

        </div>
        
        </div>
        
      
      
      ))


       



     }



    </div>
  )
}

export default ProductListingPage

