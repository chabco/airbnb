import axios from 'axios';

export default(data) => {
    // console.log(data)
    // console.log(data2)
    const loginUrl = `${window.apiHost}/users/login`
    const axiosResponse = axios.post(loginUrl, data)

    // waiting waiting waiting... (via redux-promise - our middleware here)

    return {
        type: "login",
        payload: axiosResponse
    }
}