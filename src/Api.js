import axios from 'axios'

class Api {
    static URL = 'http://127.0.0.1:3000';

    static getConfiguration(){
        return Api.get('/helper/configuration');
    }

    static saveConfiguration(configuration){
        return Api.post('/helper/configuration', configuration);
    }

    static resetConfiguration(configuration){
        return Api.get('/helper/resetConfiguration');
    }

    static getUsers(){
        let users = [];

        return Api.get('/helper/users').then((usersObj)=>{
            Object.getOwnPropertyNames(usersObj).forEach((id)=>{
                users.push({id, ...usersObj[id]})
            });

            return users;
        })
    }

    static get(path) {
        return new Promise((resolve, reject) => {
            axios.get(Api.URL + path).then((response) => {
                resolve(response.data)
            }).catch((error) => {
                reject(error);
            })
        });
    }

    static post(path, data){
        return new Promise((resolve, reject) => {
            axios.post(Api.URL + path, data).then((response) => {
                resolve(response.data)
            }).catch((error) => {
                reject(error);
            })
        });
    }

}

export default Api;


