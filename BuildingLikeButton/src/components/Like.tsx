import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

interface LikeProps {
  onClick: () => void;
}

const Like = ({ onClick }: LikeProps) => {
  // Declared a state variable to determine if the heart should be full or empty
  const [status, setStatus] = useState(true);

  const toggleLike = () => {
    setStatus(!status);
    onClick();
  };

  if (status)
    return <AiFillHeart color="#f567bc" size={40} onClick={toggleLike} />;
  return <AiOutlineHeart size={40} onClick={toggleLike} />;
};

export default Like;
