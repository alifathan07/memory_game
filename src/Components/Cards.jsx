import axios from "axios";
import React, { useState, useEffect } from "react";

const Cards = () => {
  const heros = [1, 2, 3, 5, 6, 7, 8, 9];
  const [score, setScore] = useState(0); // This is the real score
  const [bestScore, setBestScore] = useState(0); // This is the best score

  const [images, setImage] = useState([]);
  const [clickedImage, setClickedImage] = useState([]);

  useEffect(() => {
    const getImages = async () => {
      try {
        const responses = await axios.get(`https://dragonball-api.com/api/characters`);
        const imagelist = responses.data.items;
        const filterData = imagelist.filter((hero) => heros.includes(hero.id));
        const arrayArrange = filterData.sort(() => Math.random() - 0.5);
        
        setImage(arrayArrange);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    getImages();
  }, [clickedImage]);

  const handleClick = (id) => {
    if (!clickedImage.includes(id)) {
      setClickedImage((prev) => [...prev, id]);
      setScore((prev) => prev + 1)
      
    } else {
      console.log("Sorry, it's duplicated!");
      if (score > bestScore) {
        setBestScore(score)
      }
      setScore(0)
      setClickedImage([]); // Reset clicked images
      
      // Check if the current score is the best score
     
    }
  };

  return (
    <>
      <p className="score">Score: {score}</p>
      <p className="score">Best Score: {bestScore}</p>
      <div className="game-board">
        {images.map((image, index) => (
          <div  onClick={() => handleClick(image.id)} key={image.id} className="card">
            <img onClick={() => handleClick(image.id)} src={image.image} alt={`${index}`} />
            <p>{image.name}</p>
            <p></p>
          </div>
        ))}
        {clickedImage.join(",")}
      </div>
    </>
  );
};

export default Cards;
