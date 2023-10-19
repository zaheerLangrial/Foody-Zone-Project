import React, { useEffect, useState } from 'react'
import ellips from '../../Assests/Ellipse.png'
import axios from 'axios'

function HeroSection() {

    const [data , setData] = useState([])
    
    useEffect(() => {
        handleData()
    },[])
    const handleData = async () => {
        try {
            const res = await axios.get('http://localhost:3000/posts')
        setData(res.data)
        } catch (error) {
            console.log(error)
        }
    }
    const handleBreatFast = () => {
        const BreakfastData = data.filter((item) => item.type === 'breakfast')
        setData(BreakfastData)
    }
    const handleLanch = () => {
        const Breaklunch = data.filter((item) => item.type === 'lunch')
        setData(Breaklunch)
    }
    const handleDinner = () => {
        const BreakDinner = data.filter((item) => item.type === 'dinner')
        setData(BreakDinner)
    }
    const handleAllItems = () => {
        const BreakDinner = data.map((item) => item)
        setData(BreakDinner)
    }
    
  return (
    <>
    <ul className="flex justify-center items-center space-x-3 text-base py-8">
            <li className=" bg-[#FF0909] py-1 px-2 rounded-md cursor-pointer hover:scale-105 duration-300" onClick={handleData}>All</li>
            <li className=" bg-[#FF0909] py-1 px-2 rounded-md cursor-pointer hover:scale-105 duration-300" onClick={handleBreatFast}>Breakfast</li>
            <li className=" bg-[#FF0909] py-1 px-2 rounded-md cursor-pointer hover:scale-105 duration-300" onClick={handleLanch}>Lunch</li>
            <li className=" bg-[#FF0909] py-1 px-2 rounded-md cursor-pointer hover:scale-105 duration-300" onClick={handleDinner}>Dinner</li>
        </ul>
        <div className="w-full h-screen" id="sectionImg">
            <ul className="max-w-5xl py-5 grid md:grid-cols-3  gap-3 mx-auto px-5">
                {
                    data.map((item ,index) => {
                        return (
                            <li key={index} className="bg-gray-500 bg-opacity-50 rounded-2xl py-1 shadow-sm shadow-white border-white border">
                  <div className="flex space-x-3">
                    <div className="">
                    <img src={ellips} width={300}/>
                    </div>
                    <div>
                    <h1 className="text-base py-1 font-medium">
                    {item.name}
                    </h1>
                    <p className="text-sm">
                    {item.text}
                    </p>
                    <div className="flex justify-end">
                    <button className="mr-5 bg-[#FF4343] text-[14px] py-1 px-2 rounded-md text-white mt-3">${item.price}.00</button>
                    </div>
                    </div>
                  </div>
                   
                </li>
                        )
                    })
                }
                
            </ul>
       </div>
    </>
    
  )
}

export default HeroSection