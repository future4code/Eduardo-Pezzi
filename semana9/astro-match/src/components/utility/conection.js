import axios from 'axios';

const conection = axios.create({
    baseURL: 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/eduardo-pezzi',
    headers: { 'content-type' : 'application/json' }
});

export function Post (url, data){
    return conection.post(url, data);
}

export function Get(url){
    return conection.get(url);
}

export function Put (url, data){
    return conection.put(url, data);
} 