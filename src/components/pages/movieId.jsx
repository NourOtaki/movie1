import React from "react";
import img3 from "../../assets/img/Iron man HD wallpaper _ 4k wallpaper _ Marvel (1).jpeg";
import {movies} from '../../data/data';
import { useParams } from "react-router";
import Button from "../../ui/button";
function MovieId() {
  const { movieId } = useParams();
  const product = movies.find((item) => item.id === parseInt(movieId));
  return (
    <>
      {product && (
        <div className="flex md:flex-row flex-col p-28 mt-5 h-dvh justify-center  gap-16">
          <img src={img3} className="rounded-xl " alt="Product Image" />
          <div className=" flex flex-col gap-10 relative top-9 text-3xl  ">
            <p> {product.name}</p>
            <p>{product.description}</p>
            <div className="">
              <Button title="Buy now" />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default MovieId;


