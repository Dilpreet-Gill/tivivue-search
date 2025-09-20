import axios from 'axios';

const API_HOST = "https://chicotv.top";
const USERNAME = "zD3HBEPnpS";
const PASSWORD = "VAGHcveSTD";

const baseURL = `${API_HOST}/player_api.php`;


const apiClient = axios.create({
    baseURL,
    timeout: 10000,
});


export const getAllSeries = async () => {
  try {
    const response = await apiClient.get('', {
      params: {
        username: USERNAME,
        password: PASSWORD,
        action: 'get_series',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Failed to fetch series:', error.message);
    return [];
  }
};


export const getAllMovies = async () => {
  try {
    const response = await apiClient.get('', {
      params: {
        username: USERNAME,
        password: PASSWORD,
        action: 'get_vod_streams',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Failed to fetch movies:', error.message);
    return [];
  }
};


export const getAllLiveStreams = async () => {
  try {
    const response = await apiClient.get('', {
      params: {
        username: USERNAME,
        password: PASSWORD,
        action: 'get_live_streams',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Failed to fetch live streams:', error.message);
    return [];
  }
};