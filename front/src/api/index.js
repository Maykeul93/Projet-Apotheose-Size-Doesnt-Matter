import axios from 'axios';

export default axios.create({
  baseURL: 'http://localhost:3006',
  timeout: 1000,
});
