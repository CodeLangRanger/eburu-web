import axios from 'axios';

export function createAdmin(data) {

    return dispatch => {
        return axios.patch(`/app-admin`, data).then(res => {
        }).catch(error => {
            throw(error);
        });
    }
}
