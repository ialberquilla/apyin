import axios, {
  } from 'axios';


  const BASE_URL = 'https://api.aleth.io/v1/';
  const instance = axios.create({
    baseURL: BASE_URL,
    headers: {
      post: {        // can be common or any other method
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }
  });


  export default instance;