import axios from 'axios'
const API = {
    GET: 'get',
    POST: 'post',
    PUT: 'put',
    DELETE: 'delete'
}
export const getApi = async(url,data, params) => {
    return axios({
        'url':url,
        'method':API.GET,
        'data':data
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