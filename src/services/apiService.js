import axios from '../utils/axiosCustomize';

const postCreateUser = (obj)=> {
    console.log('>> Check data form service: ', obj)
    return axios.post('api/register-user', obj)
}

const getAllUsers = (id)=> {
    return axios.get(`api/get-all-users?id=${id}`)
}

const getUserWithPaginate = (page, limit)=> {
    return axios.get(`api/v1/participant?page=${page}&limit=${limit}`)
}

export {
    postCreateUser, getAllUsers
}