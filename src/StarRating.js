import { useState } from 'react';

export default function StarRating() {
  const [rating, setRating] = useState(0);
  return (
    <div className="star-rating">
      {[...Array(5)].map((_, index) => {
        const isActive = index <= rating - 1;

        return (
          <div
            className={`star ${isActive ? 'active' : ''}`}
            key={index}
            onClick={() => {
              setRating(index + 1);
            }}
          >
            {isActive ? <>&#9733;</> : <>&#9734;</>}
          </div>
        );
      })}
    </div>
  );
}
