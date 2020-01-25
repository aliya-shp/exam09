import axios from 'axios';

const axiosContacts = axios.create({
    baseURL: 'https://contacts-app-exam.firebaseio.com/'
});

export default axiosContacts;