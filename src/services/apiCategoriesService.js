import axios from '../utils/axiosCustomize';

const getAllCategories = (id)=> {
    return axios.get(`api/get-all-categories?id=${id}`)
}

export {
    getAllCategories
}