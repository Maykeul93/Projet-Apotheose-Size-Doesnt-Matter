import axios from 'axios';

export default axios.create({
  baseURL: 'https://size-doesnt-matter.herokuapp.com/users',
  timeout: 1000,
});
