import axios from 'axios';

export function register(data) {

    return dispatch => {
        return axios.post(`/owners/create`, data).then(res => {
        }).catch(error => {
            throw(error);
        });
    }
}
