import axios from 'axios';
import { ApiUrl } from '../Constants/Config';


// const authorization_prefix = 'Bearer ';
// const apiToken = ''


export const customHeaders = {
    Accept: 'application/json',
    // 'Content-Type': 'multipart/form-data',
    // 'Access-Control-Allow-Origin': '*',
    // Authorization: `${authorization_prefix}${apiToken}`|| undefined
};

export default axios.create({
    baseURL: ApiUrl,
    headers: customHeaders,
});