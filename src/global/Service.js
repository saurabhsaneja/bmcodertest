//import : axios
import axios from 'axios';
import Toast from 'react-native-simple-toast';
//endpoint : base_url
export const BASE_URL = `https://tor.appdevelopers.mobi/api/`

export const REGISTER = `register`

export const LOGIN = `login`

//endpoint : endpoints user
//function :  get api
export const getApi = endPoint =>
    axios
        .get(`${BASE_URL}${endPoint}`)
        .then(res => {
            return res;
        })
        .catch(error => {
            if (error?.response?.status === 422) {
                // Alert.alert('', `${error.response.data.message}`);
                Toast.show(error.response.data.message, Toast.SHORT)
                console.log('data', error.response.data);
                console.log('status', error.response.status);
                console.log(error.response.headers);
            } else if (error?.response?.status === 404) {
                // Alert.alert('', `${error.response.data.message}`);
                Toast.show(error.response.data.message, Toast.SHORT)
                console.log('data', error.response.data);
                console.log('status', error.response.status);
            } else if (error?.response?.status === 401) {
                // Alert.alert('', `${error.response.data.message}`);
                Toast.show(error.response.data.message, Toast.SHORT)
                console.log('data', error.response.data);
                console.log('status', error.response.status);
            } else if (error?.response?.status === 500) {
                // Alert.alert('', `${error.response.data.message}`);
                Toast.show(error.response.data.message, Toast.SHORT)
                console.log('data', error.response.data);
                console.log('status', error.response.status);
            } else {
                // Alert.alert('', `${error.response.data.message}`);
                Toast.show(error.response.data.message, Toast.SHORT)
                console.log('data', error.response.data);
                console.log('status', error.response.status);
            }
        });
//function :  get api with token
export const getApiWithToken = (token, endPoint) =>
    axios
        .get(`${BASE_URL}${endPoint}`, {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: `Bearer ${token}`,
            },
        })
        .then(res => {
            return res;
        })
        .catch(error => {
            if (error?.response?.status === 422) {
                // Alert.alert('', `${error.response.data.message}`);
                Toast.show(error.response.data.message, Toast.SHORT)
                console.log('data', error.response.data);
                console.log('status', error.response.status);
                console.log(error.response.headers);
            } else if (error?.response?.status === 404) {
                // Alert.alert('', `${error.response.data.message}`);
                Toast.show(error.response.data.message, Toast.SHORT)
                console.log('data', error.response.data);
                console.log('status', error.response.status);
            } else if (error?.response?.status === 401) {
                // Alert.alert('', `${error.response.data.message}`);
                Toast.show(error.response.data.message, Toast.SHORT)
                console.log('data', error.response.data);
                console.log('status', error.response.status);
            } else if (error?.response?.status === 500) {
                // Alert.alert('', `${error.response.data.message}`);
                Toast.show(error.response.data.message, Toast.SHORT)
                console.log('data', error.response.data);
                console.log('status', error.response.status);
            } else {
                // Alert.alert('', `${error.response.data.message}`);
                Toast.show(error.response.data.message, Toast.SHORT)
                console.log('data', error.response.data);
                console.log('status', error.response.status);
            }
        });
//function :  post api
export const postApi = (endPoint, data) =>
    axios
        .post(`${BASE_URL}${endPoint}`, data, {
            headers: {
                'Content-Type': 'multipart/form-data',
                Accept: '*/*',
            },
        })
        .then(res => {
            return res;
        })
        .catch(error => {
            console.log('data', error.response.data);
            console.log('status', error.response.status);
            console.log('header', error.response.headers);
            if (error?.response?.status === 422) {
                // Alert.alert('', `${error.response.data.message}`);
                Toast.show(error.response.data.message, Toast.SHORT)
                console.log('error status', error?.response?.status)
                console.log('error message', error.response.data.message)
            } else if (error?.response?.status === 404) {
                // Alert.alert('', `${error.response.data.message}`);
                Toast.show(error.response.data.message, Toast.SHORT)
                console.log('error status', error?.response?.status)
                console.log('error message', error.response.data.message)
            } else if (error?.response?.status === 401) {
                // Alert.alert('', `${error.response.data.message}`);
                Toast.show(error.response.data.message, Toast.SHORT)
                console.log('error status', error?.response?.status)
                console.log('error message', error.response.data.message)
            } else if (error?.response?.status === 500) {
                // Alert.alert('', `${error.response.data.message}`);
                Toast.show(error.response.data.message, Toast.SHORT)
                console.log('error status', error?.response?.status)
                console.log('error message', error.response.data.message)
            } else if (error?.response?.status === 0) {
                // Alert.alert(
                //   '',
                //   `Internet connection appears to be offline. Please check your internet connection and try again.`,
                // );
                Toast.show('Internet connection appears to be offline. Please check your internet connection and try again.', Toast.SHORT)
            } else {
                // Alert.alert('', `${error.response.data.message}`);
                Toast.show(error.response.data.message, Toast.SHORT)
                console.log('error status', error?.response?.status)
                console.log('error message', error.response.data.message)
            }
        });

//function : post api with token
export const postApiWithToken = (token, endPoint, data) =>
    axios
        .post(`${BASE_URL}${endPoint}`, data, {
            headers:
                Object.keys(data).length > 0
                    ? {
                        'Content-Type': 'multipart/form-data',
                        Accept: '*/*',
                        Authorization: `Bearer ${token}`,
                    }
                    : {
                        'Content-Type': 'application/json',
                        Accept: 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
        })
        .then(res => {
            return res;
        })
        .catch(error => {
            if (error?.response?.status === 422) {
                // Alert.alert('', `${error.response.data.message}`);
                Toast.show(error.response.data.message, Toast.SHORT)
                console.log('data', error.response.data);
                console.log('status', error.response.status);
                console.log(error.response.headers);
            } else if (error?.response?.status === 404) {
                // Alert.alert('', `${error.response.data.message}`);
                Toast.show(error.response.data.message, Toast.SHORT)
                console.log('error status', error?.response?.status)
                console.log('error message', error.response.data.message)
            } else if (error?.response?.status === 401) {
                // Alert.alert('', `${error.response.data.message}`);
                Toast.show(error.response.data.message, Toast.SHORT)
                console.log('error status', error?.response?.status)
                console.log('error message', error.response.data.message)
            } else if (error?.response?.status === 500) {
                // Alert.alert('', `${error.response.data.message}`);
                Toast.show(error.response.data.message, Toast.SHORT)
                console.log('error status', error?.response?.status)
                console.log('error message', error.response.data.message)
            } else {
                // Alert.alert('', `${error}`);
                Toast.show(error.response.data.message, Toast.SHORT)
                console.log('error status', error?.response?.status)
                console.log('error message', error.response.data.message)
            }
        });
//function : post api with json data
export const postJsonApiWithToken = (token, endPoint, data) =>
    axios
        .post(`${BASE_URL}${endPoint}`, data, {
            headers: {
                'Content-Type': 'application/json',
                Accept: '*/*',
                Authorization: `Bearer ${token}`,
            },
        })
        .then(res => {
            return res;
        })
        .catch(error => {
            if (error?.response?.status === 422) {
                // Alert.alert('', `${error.response.data.message}`);
                Toast.show(error.response.data.message, Toast.SHORT)
                console.log('data', error.response.data);
                console.log('status', error.response.status);
                console.log(error.response.headers);
            } else if (error?.response?.status === 404) {
                // Alert.alert('', `${error.response.data.message}`);
                Toast.show(error.response.data.message, Toast.SHORT)
                console.log('data', error.response.data);
                console.log('status', error.response.status);
            } else if (error?.response?.status === 401) {
                // Alert.alert('', `${error.response.data.message}`);
                Toast.show(error.response.data.message, Toast.SHORT)
                console.log('data', error.response.data);
                console.log('status', error.response.status);
            } else if (error?.response?.status === 500) {
                // Alert.alert('', `${error.response.data.message}`);
                Toast.show(error.response.data.message, Toast.SHORT)
                console.log('data', error.response.data);
                console.log('status', error.response.status);
            } else {
                // Alert.alert('', `${error}`);
                Toast.show(error.response.data.message, Toast.SHORT)
                console.log('data', error.response.data);
                console.log('status', error.response.status);
            }
        });