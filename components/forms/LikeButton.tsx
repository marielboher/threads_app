"use client";
import { likeThread } from "@/lib/actions/thread.actions";
import Image from "next/image";
import { useState } from "react";
interface LikeButtonProps {
  threadId: string;
  currentUserId: string;
  liked: boolean;
}

const LikeButton: React.FC<LikeButtonProps> = ({ liked, threadId, currentUserId }) => {
  const [like, setLike] = useState(liked);
  const handleLike = async () => {
    try {
      await likeThread(threadId, currentUserId);
    } catch (error) {
      console.error("Error al dar like:", error);
    }
  };
  return (
    <div className="flex items-center cursor-pointer">
      {like ? (
        <Image
          src="/assets/heart-red.svg"
          alt="heart"
          width={24}
          height={24}
          className="object-contain"
          onClick={() => {
            setLike(!like);
            handleLike();
          }}
        />
      ) : (
        <Image
          src="/assets/heart-gray.svg"
          alt="heart"
          width={24}
          height={24}
          className="object-contain"
          onClick={() => {
            setLike(!like);
            handleLike();
          }}
        />
      )}
    </div>
  );

};

export default LikeButton;
