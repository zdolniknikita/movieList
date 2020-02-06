import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
});

instance.interceptors.request.use((config) => {

    // console.log('config', config)
    return {
        ...config,
        params: {
            api_key: 'ba0611d0e350944869912b478c93ea55',
            language: 'ru',
            ...config.params
    }
    
    }
})

export default instance;