import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate, NavLink } from 'react-router-dom';
import { ShoppingCart, Leaf } from 'lucide-react';
function Header() {
  const cartitems = useSelector((state) => state.cart.totalQuantity)
  return (


    <>
      <div className='border-b border-green-100 my-0 shadow-md'>

        <div className='my-4 h-12 sticky top-0  mx-10 md:mx-32 lg:mx-52'>

          <div className='flex justify-between'>
            {/* leaf */}
            <div>
              <NavLink
                className={" hover:opacity-80 transition-opacity text-green-900 text-xl font-extrabold"} to={"/"}>
                <h1 className='flex'><Leaf className='text-green-700 mx-2' /> GreenThumb</h1>
              </NavLink>
            </div>

            {/* ... */}
            <div className='flex justify-between gap-6'>
              <NavLink to={"/"}
                className={({ isActive }) => `hover:text-green-600 font-semibold ${isActive ? "text-green-600 font-semibold" : "text-gray-600"}`}
              > Home</NavLink>
              <NavLink
                className={({ isActive }) => `hover:text-green-600 font-semibold ${isActive ? "text-green-600 font-semibold" : "text-gray-600"}`} to={"/ProductListing"}> Plants</NavLink>
              <NavLink
                className={({ isActive }) => `hover:text-green-600 font-semibold ${isActive ? "text-green-600 font-semibold" : "text-gray-600"}`} to={"/ShoppingCart"}>
                <div className='flex bg-green-100 hover:bg-green-200 hover:opacity-80 rounded-2xl w-24 h-8 justify-center item-center'>

                  <span>Cart</span>
                  <ShoppingCart />
                  {
                    cartitems > 0 && <span className='mb-8 text-bold text-xl text-white bg-red-600 w-6 h-6 rounded-full text-center '>{cartitems}</span>
                  }
                </div>
              </NavLink>
            </div>


          </div>

        </div>
      </div>

    </>
  )
}

export default Header
