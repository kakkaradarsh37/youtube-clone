import axios from "axios";

const BASE_URL = "https://youtube138.p.rapidapi.com";
//const REQUEST_DELAY = 1000; // Delay in milliseconds

const options = {

    params: {
      q: 'desp',
      hl: 'en',
      gl: 'US'
    },
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_YOUTUBE_API_KEY || "YOUR_API_KEY",
      'X-RapidAPI-Host': 'youtube138.p.rapidapi.com',
    }
  };

 export const fetchDataFromApi= async(url)=>{

    const {data}=  await axios.get(`${BASE_URL}/${url}`, options);
    return data;
  }

// export const fetchDataFromApi = async (url) => {
//   await new Promise((resolve) => setTimeout(resolve, REQUEST_DELAY)); // Introduce delay

//   const { data } = await axios.get(`${BASE_URL}/${url}`, options);
//   return data;
// };