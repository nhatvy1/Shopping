import axios from '../utils/axiosCustomize';

const postCreateUser = (obj)=> {
    console.log('>> Check data form service: ', obj)
    return axios.post('api/register-user', obj)
}

const getAllUsers = (page)=> {
    return axios.get(`api/get-users?page=${page}`)
}

export {
    postCreateUser, getAllUsers
}