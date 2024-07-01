import FoodItem from '@/components/FoodItem';
import React from 'react'
import Link from 'next/link';
const placeholder = "Enter text";
import MoodSelector from '@/components/MoodSelector';
import TextInput from '@/components/TextInput';

const foods = [
  {
    title   : "food1",
    imageUrl: "./food1.jpg",
  },
  {
    title   : "food2",
    imageUrl: "https://via.placeholder.com/100",
  },
  {
    title   : "food3",
    imageUrl: "https://via.placeholder.com/100",
  }
  
]

const Page = async () => {

  return (
  <div className = 'w-full h-full flex flex-col'>
  <div className = "h-1/3 flex flex-row">
  <div className = "w-1/2 mr-10 ">
  <div className = "flex">
  <div className = "w-1/2">
  <h1  className = "text-xl font-bold mb-3">No idea. Try AI Recommendation</h1>
  </div>
  <div className = "w-1/2">
  <div className = "container mx-auto">
      <MoodSelector placeholder="Select your mood..."  />
    </div>

    <div className="container mx-auto mt-8">
      <TextInput placeholder="Occassion" />
    </div>
    
    <button className = "px-4 py-2 bg-blue-500 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
      Generate
    </button>
  </div>
</div>

          </div>
        <div className = "w-1/2"> AI generate</div>

      </div>
      <div className = "h-1/3">
      <div className = "h-1/3">Mood Navbar</div>
      <div className = "h-2/3">
      <div className = "flex flex-row gap-4">
         {foods.map((food) => (
          <FoodItem title = {food.title} imageUrl = {food.imageUrl} />
         ))}
        </div>
        </div>
      </div>
      <div className = "h-1/3">
      <div className = "h-1/3">Weather Navbar</div>
      <div className = "h-2/3">
      <div className = "flex flex-row gap-4">
          <h1>item1</h1>
          <h1>item2</h1>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Page;
