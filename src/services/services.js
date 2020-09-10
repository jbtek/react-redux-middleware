import axios from 'axios'
const API = {
    GET: 'get',
    POST: 'post',
    PUT: 'put',
    DELETE: 'delete'
}
export const makeApiCall = (url,data,method,params) => {
    switch(method){
        case API.GET:
            console.log('GET CALLED');
            return getApi(url,params);
        case API.POST:
            return postApi(url,data);
        case API.PUT:
            return putApi(url,data);
        case API.DELETE:
            return deleteApi(url,data);
            
        default:
            return getApi(url, data, params);
    }
}
export const getApi = async(url,params) => {
    return axios({
        'url':url,
        'method':API.GET
    })
}

export const postApi = async(url,data) => {
    return axios({
        'url':url,
        'method':API.POST,
        'data':data
    })
}

export const putApi = async(url,data) => {
    return axios({
        'url':url,
        'method':API.PUT,
        'data':data
    })
}

export const deleteApi = async(url,data,params) => {
    return axios({
        'url':url,
        'method':API.DELETE,
        'data':data
    })
}