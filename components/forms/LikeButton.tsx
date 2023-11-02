"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
interface LikeButtonProps {
  liked: any;
  threadId: string;
  currentUserId: string;
}

const LikeButton: React.FC<LikeButtonProps> = ({
  liked,
  threadId,
  currentUserId,
}) => {
  const [like, setLike] = useState(liked);

  const updateLocalStorage = (likedStatus: boolean) => {
    const likes = JSON.parse(localStorage.getItem("likes") || "{}");
    if (likedStatus) {
      if (!likes[currentUserId]) likes[currentUserId] = [];
      likes[currentUserId].push(threadId);
    } else {
      likes[currentUserId] = likes[currentUserId].filter(
        (id: string) => id !== threadId
      );
    }
    localStorage.setItem("likes", JSON.stringify(likes));
  };
  const handleLike = async () => {
    try {
      const newLikeStatus = !like;
      setLike(newLikeStatus);
      updateLocalStorage(newLikeStatus);
    } catch (error) {
      console.error("Error al dar like:", error);
    }
  };

  useEffect(() => {
    const likes = JSON.parse(localStorage.getItem('likes') || '{}');
    setLike(likes[currentUserId]?.includes(threadId));
  }, [currentUserId, threadId]);

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
