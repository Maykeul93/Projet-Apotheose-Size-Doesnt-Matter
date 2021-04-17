import axios from 'axios';

export default axios.create({
  baseURL: 'https://size-doesnt-matter.herokuapp.com',
  timeout: 1000,
});
