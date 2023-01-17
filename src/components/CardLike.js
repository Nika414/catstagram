/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { baseUrl, unsplashJWT } from '../utils/utils';

export default function CardLike({ id, isLiked }) {
  const [isImgLiked, setIsImgLiked] = useState(isLiked);
  function handleLike() {
    if (!isImgLiked) {
      fetch(`${baseUrl}photos/${id}/like`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${unsplashJWT}`,
        },
      }).then((res) => res.json())
        .then((result) => {
          console.log(result);
          setIsImgLiked(!isImgLiked);
        });
    } else {
      fetch(`${baseUrl}photos/${id}/like`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${unsplashJWT}`,
        },
      }).then((res) => res.json())
        .then((result) => {
          setIsImgLiked(!isImgLiked);
        });
    }
  }

  return (
    <svg onClick={handleLike} className={`card__like ${isImgLiked === true && 'card__like_active'}`} width="10" height="9" viewBox="0 0 10 9" fill="white" xmlns="http://www.w3.org/2000/svg">
      <path className={`card__like ${isImgLiked && 'card__like_active'}`} d="M7.27273 0C6.27273 0 5.54545 0.523077 5 1.08974C4.45455 0.566667 3.72727 0 2.72727 0C1.13636 0 0 1.2641 0 2.83333C0 3.61795 0.318182 4.31538 0.909091 4.79487L5 8.5L9.09091 4.79487C9.63636 4.27179 10 3.61795 10 2.83333C10 1.2641 8.86364 0 7.27273 0Z" fill="white" />
    </svg>
  );
}
