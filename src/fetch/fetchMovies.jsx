import axios from 'axios';

const URL = 'https://api.themoviedb.org';
const APIK_EY = '4c33f26efea47de01ecb916551cbf5ca';
export async function fetchMovies() {
  try {
    const response = await axios(
      `${URL}/3/trending/all/day?api_key=${APIK_EY}`
    );
    const data = response.data;

    return data;
  } catch (error) {
    console.log('error', error);
  }
}
export async function fetchSearch(query) {
  try {
    const response = await axios(
      `${URL}/3/search/movie?api_key=${APIK_EY}&language=en-US&query=${query}&page=1&include_adult=false`
    );
    const data = response.data;

    return data;
  } catch (error) {
    console.log('error', error);
  }
}
export async function fetchDetails(movieId) {
  try {
    const response = await axios(
      `${URL}/3/movie/${movieId}?api_key=${APIK_EY}&language=en-US`
    );
    const data = response.data;

    return data;
  } catch (error) {
    console.log('error', error);
  }
}
export async function fetchCredits(movieId) {
  try {
    const response = await axios(
      `${URL}/3/movie/${movieId}/credits?api_key=${APIK_EY}&language=en-US`
    );
    const data = response.data;

    return data;
  } catch (error) {
    console.log('error', error);
  }
}
export async function fetchReviews(movieId) {
  try {
    const response = await axios(
      `${URL}/3/movie//${movieId}/reviews?api_key=${APIK_EY}&language=en-US&page=1`
    );
    const data = response.data;

    return data;
  } catch (error) {
    console.log('error', error);
  }
}
