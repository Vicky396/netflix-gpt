import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import {addTrailerVideo} from "../utils/movieSlice";

const useMovieTrailer =(movieId)=>{
const dispatch =useDispatch();
   
  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + movieId + "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    const filterData = json.results.filter((video) => video.type == "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];
    dispatch(addTrailerVideo(trailer))
  };
  useEffect(() => {
    getMovieVideos();
  }, []);
  
}

export default useMovieTrailer;