import FoodItem from '@/components/FoodItem';
import React from 'react'

const foods = [
  {
    title: "food1",
    imageUrl: "./food1.jpg",
  },
  {
    title: "food2",
    imageUrl: "https://via.placeholder.com/100",
  },
  {
    title: "food3",
    imageUrl: "https://via.placeholder.com/100",
  }
  
]

const Page = async () => {

  return (
    <div className='w-full h-full flex flex-col'>
      <div className="h-1/3 flex flex-row">
        <div className="w-1/2">
          <h1>No idea. Try AI Recommendations</h1></div>
        <div className="w-1/2"> AI generate</div>

      </div>
      <div className="h-1/3">
        <div className="h-1/3">Mood Navbar</div>
        <div className="h-2/3">
        <div className="flex flex-row gap-4">
         {foods.map((food) => (
          <FoodItem title={food.title} imageUrl={food.imageUrl} />
         ))}
        </div>
        </div>
      </div>
      <div className="h-1/3">
        <div className="h-1/3">Weather Navbar</div>
        <div className="h-2/3">
        <div className="flex flex-row gap-4">
          <h1>item1</h1>
          <h1>item2</h1>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Page;
