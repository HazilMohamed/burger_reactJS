import axios from 'axios';

const instance = axios.create({
    baseURL:'https://react-app-burger-98026.firebaseio.com/'
});
export default instance;