import React from 'react'
import { food } from '../assets'
import MyButton from './MyButton'
import { orders } from '../constants'
import '../index.css'

const MyOrders = () => {

  return (
    <div className="w-full p-2 flex flex-col gap-3 mt-5">
      {
        orders.map((item, index) => (
          <div className="w-full flex sm:flex-row flex-col p-2 gap-2 rounded-[15px] shadow">
            <div className="flex items-center justify-center">
              <img src={food} alt="Food_Image" className="w-[100px] rounded-full" />
            </div>

            <div className="flex flex-1 flex-col gap-3 p-3">
              <div key={index} className="">
                <h1 className="font-semibold text-3xl">{item.itemName}</h1>
                <h4 className="font-normal text-xl max-w-[500px] my-2">{item.description}</h4>
                <h5 className="font-bold text-xl text-green-600"><span className="text-green-500 text-xl">Order Amt :</span> <br /> Rs. {item.amount}</h5>

                <div className="flex justify-center items-center sm:mt-2 mt-10">
                  <MyButton text="Cancel Order" />
                </div>
              </div>


            </div>

          </div>
        )
        )
      }
    </div>
  )
}

export default MyOrders