import React, { useEffect, useState } from 'react'
import movieDB from '../api/movieDB';
import { MovieCredits } from '../intefaces/movieCreditsInterface';
import { MovieDBResponse } from '../intefaces/movieInterface';
import { MovieDetailResp } from '../intefaces/movieDetailInterface';

interface MovieDetails {
    isLoading: boolean,
    movieDetails?: MovieDetailResp,
    cast: any[]
}

export const useMovieDetails = (movieId: number) => {
    const [state, setstate] = useState<MovieDetails>({
        isLoading: true,
        movieDetails: undefined,
        cast: []
    });
    const getMovieDetails = async() => {
        const moiveDetailsPromise =  movieDB.get<MovieDetailResp>(`/${movieId}`);
        const movieCastPromise =  movieDB.get<MovieCredits>(`/${movieId}/credits`);
        const [ movieDetailsResp, movieCastResp ] =  await Promise.all([moiveDetailsPromise, movieCastPromise]);
        setstate({
            isLoading: false,
            movieDetails: movieDetailsResp.data,
            cast: movieCastResp.data.cast
        })
    }
  
    useEffect(() => {
      getMovieDetails();
    }, [])

    return {
        ...state
    }
}
    
    
