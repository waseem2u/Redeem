import React, { useEffect, useState } from "react";

type BitselProps = {
  massage: string; // External prop to determine the currently selected image
};

const BitselRewardCard = ({ massage }: BitselProps) => {
  console.log("massage", massage);
  const [selectedRewards, setSelectedRewards] = useState<typeof REWARD>([]); // Filtered rewards based on `massage`

  // Filter rewards whenever `massage` changes
  useEffect(() => {
    const filteredRewards = REWARD.filter((reward) => reward.img === massage);
    setSelectedRewards(filteredRewards);
  }, [massage]);

  return (
    <div className="flex flex-col items-center gap-6">
      {/* Display the filtered rewards */}
      <div className="flex justify-center items-center flex-wrap gap-6">
        {selectedRewards.map((reward) => (
          <div
            key={reward.id}
            className="w-[250px] h-[350px] border border-gray-300"
          >
            <img
              src={reward.img}
              alt={`Selected Reward ${reward.id}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Render all reward cards */}
      <div className="flex justify-center items-center flex-wrap gap-12">
        
      </div>
    </div>
  );
};

export default BitselRewardCard;

const REWARD = [
  {
    id: 1,
    img: "/bitsel-reward/bitsel-card2.svg",
  },
  {
    id: 2,
    img: "/bitsel-reward/bitsel-card1.svg",
  },
];
