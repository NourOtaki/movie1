import React, { useRef, useState } from "react";
import { movies } from "../../data/data";
import { Link } from "react-router";
import img1 from "../../assets/img/Beast & Belle (2).jpeg"
function Movie() {
  const [data, setData] = useState(movies);
  // const [loading, setLoading] = useState(false);
  const ref = useRef("");
  return (
    <div>
      <h1 className="text-4xl text-red-800">movies</h1>
      <div className="flex my-8 justify-center">
        <input
          type="text"
          className="mt-1 w-5/12 rounded-md  border-gray-200 p-2 shadow-sm sm:text-sm"
          placeholder="Search"
          ref={ref}
          onChange={async () => {
            await setTimeout(() => {}, 2000);
            setData((prev) =>
              movies.filter((movie) => {
                return movie.name.includes(ref.current.value);
              })
            );
          }}
        ></input>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 m-10 gap-8">
        {data.map((item, index) => (
          <div
            key={index}
            className=" flex flex-col gap-5  rounded bg-gray-200"
          >
            <img className="w-full object-cover" src={img1}></img>
            <p className="text-center -left-[1px] relative  text-2xl ">
              {item.name}
            </p>
            <Link
              className=" px-4 text-2xl rounded-lg w-44  text-center relative md:left-28 lg:left-16 xl:left-28 -top-2 hover:bg-gray-300 bg-slate-400 border-gray-400 py-1 text-black"
              to={`/movies/${item.id}`}
            >
              show details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Movie;
