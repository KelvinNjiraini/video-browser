import qs from 'qs';
import axios from 'axios';

const CLIENT_ID = 'c3f3b4a20841ec3';
const ROOT_URL = 'https://api.imgur.com';


export default {
    login() {
        const querystring = {
            client_id: CLIENT_ID,
            response_type: 'token'
        }

        window.location = `${ROOT_URL}/oauth2/authorize?${qs.stringify(querystring)}`
    },
    fetchImages(token) {
        axios.get(`${ROOT_URL}/3/account/me/images`, {
            Authorization: `Bearer ${token}`
        })
    }
}