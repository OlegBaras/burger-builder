import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-my-burger-d87de.firebaseio.com/'
});

export default instance;
