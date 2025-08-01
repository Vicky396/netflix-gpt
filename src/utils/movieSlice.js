import { createSlice } from "@reduxjs/toolkit";

const movieSlice =createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        popularMovies:null,
        upcomingMovies:null,
        topRatedMovies:null,
        trailerVideo:null
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies=action.payload;
        },
        addPopularMovies:(state,action)=>{
            state.popularMovies=action.payload;
        },
        addUpcomingMovies:(state,action)=>{
            state.upcomingMovies=action.payload;
        },
        addTopRatedMovies:(state,action)=>{
            state.topRatedMovies=action.payload;
        },
        addTrailerVideo:(state,action)=>{
            state.trailerVideo=action.payload;

        }
    }
})
export const {addNowPlayingMovies,addPopularMovies,addUpcomingMovies ,addTopRatedMovies,addTrailerVideo}=movieSlice.actions;
export default movieSlice.reducer;