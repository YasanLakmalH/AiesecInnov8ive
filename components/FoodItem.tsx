// components/FoodItem.tsx

import React from 'react';

interface FoodItemProps {
  title: string;
  imageUrl: string;
}

const FoodItem: React.FC<FoodItemProps> = ({ title,imageUrl }) => {
  return (
    <div className="w-28 rounded overflow-hidden shadow-lg">
      <img className="w-full" src={imageUrl} alt={title} />
      <div className="p-1">
        <div className="font-bold text-xl mb-2">{title}</div>
      </div>
    
    </div>
  );
};

export default FoodItem;
