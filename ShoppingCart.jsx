import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { increaseQuantity, decreaseQuantity, removeFromCart } from '../store/cartSlice';
import { Plus, Minus, Trash2, ShoppingBag, ArrowLeft } from 'lucide-react';
import toast from 'react-hot-toast';

function ShoppingCart() {

const {items,totalQuantity,totalAmount}=useSelector(state=>state.cart)
const dispatch=useDispatch();

// increase
const handleIncreaese=(id)=>{
  dispatch(increaseQuantity(id));
}
// decrease
const handleDecrease=(id)=>{
  dispatch(decreaseQuantity(id));
}
// remove
const handleRemove=(id)=>{
  dispatch( removeFromCart(id));
}



// empty cart
if(items.length===0){
  return(
    <div>
      <div className='gap-5 w-[75%] my-12 mx-auto h-102  shadow-2xl flex flex-col justify-center items-center'>
        <ShoppingBag  className='h-18 w-18 text-gray-600'/>

        <h1 className='text-blue-950 font-bold text-2xl'>Your Cart is Empty</h1>
        <div>
         <p  className='text-gray-600 '>Start shopping to add some beautiful </p>
        <p  className='text-gray-600 text-center'>plants!</p>
        </div>
       <button  className=' flex gap-3 bg-green-600 transition-transform hover:scale-105 rounded-full text-white text-bold text-xl p-2 ' >
          <ArrowLeft/>
          <Link to='/ProductListing'>Continue Shopping</Link>
        </button>
      </div>

    </div>
  )
}


  return (
<div>
       <div className='mx-auto my-16 w-[90%] h-[75%] shadow-2xl  p-5'>

       <p className='text-center font-bold text-4xl  my-6 text-green-800 hover:scale-105'>Shopping Cart</p>
       
       {
        items.map( (item)=>(
        <div key={item.id}>
          <div className='shadow-2xl my-8 rounded-2xl p-4  flex   justify-around items-center'>
            
            <img className='w-18 h-18 rounded-full ' src={item.image} alt="..." />

            <div className='flex flex-col '>
              <div>{item.name}</div>
              <div><p>$ {item.price} each</p></div>
            </div>

            {/*  */}
            <button className=' bg-green-100 rounded-full p-2 text-red-700' onClick={()=>(handleDecrease(item.id ))}><Minus/></button>
            <div  className=''>{item.quantity}</div>
            <button className=' bg-green-100 rounded-full p-2 text-green-700' onClick={()=>( handleIncreaese(item.id))}><Plus/></button>
            <div className='font-bold font-xl'>$ {(item.price*item.quantity).toFixed(2)}</div>
            <button className=' bg-red-100 rounded-full p-2 text-red-700' onClick={()=>(handleRemove(item.id))}><Trash2/></button>
          </div>

        </div>

        )
        )
       }



      
       {/* total  */}
       <hr className='my-5 text-gray-300' />
       <div className='flex flex-col items-center justify-center mx-auto transition-transform shadow-8xl w-[50%] bg-gray-200 rounded-2xl'>
        <p className='font-bold text-2xl text-gray-600'>Total Items : <span className='text-green-500'>{totalQuantity}</span></p>
        <p className='font-bold text-2xl text-green-900'>Total : <span>{totalAmount.toFixed(2)}</span></p>
       </div>


       {/* constinue shopping button  */}
       <hr className='my-5 text-gray-300' />
       <div className='m-5 rounded-2xl p-3 flex justify-center items-center gap-2 transition-transform hover:scale-105 bg-green-700 hover:bg-green-900 text-white font-bold '>
        <ArrowLeft/>
        <p>Continue Shopping</p>
       </div>


       </div>





     
</div>
  )
}

export default ShoppingCart
