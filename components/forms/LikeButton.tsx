"use client";
import Image from "next/image";
import { useState } from "react";
interface LikeButtonProps {
  liked: any;
}

const LikeButton: React.FC<LikeButtonProps> = ({ liked }) => {
  const [like, setLike] = useState(liked);
  const handleLike = async () => {
    try {
      setLike(!like); 
    } catch (error) {
      console.error("Error al dar like:", error);
    }
  };

  return (
    <div className="flex items-center cursor-pointer" onClick={handleLike}>
      {like ? (
        <Image
          src="/assets/heart-red.svg"
          alt="heart"
          width={24}
          height={24}
          className="object-contain"
        />
      ) : (
        <Image
          src="/assets/heart-gray.svg"
          alt="heart"
          width={24}
          height={24}
          className="object-contain"
        />
      )}
    </div>
  );
};

export default LikeButton;