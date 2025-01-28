import React from 'react';
import ReactDOM from 'react-dom/client';
import { Outlet,RouterProvider,createBrowserRouter } from 'react-router';
import Navbar from './components/layout/navbar'
import Home from './components/pages/home'
import About from './components/pages/about'
import Movie from './components/pages/movie'
import MovieId from './components/pages/movieId'
import "swiper/css";
import "swiper/css/pagination";
import "./index.css";
const root = ReactDOM.createRoot(document.getElementById('root'));
const route = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Outlet />
      </>
    ),
    children: [
      {
        path: "*",
        element: (
          <>
            <h1 className=" text-center font-bold text-bold text-4xl text-red-500">
              not found
            </h1>
          </>
        ),
      },
      { index: true, element: <Home /> },
      { path: "/about", element: <About /> },
      {
        path: "/movies",
        element: <Outlet />,
        children: [
          { index: true, element: <Movie /> },
          { path: ":movieId", element: <MovieId /> },
        ],
      },
    ],
  },
]);
root.render(
  <>
    <RouterProvider router={route}>
      </RouterProvider>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
