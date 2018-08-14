import axios from 'axios';
import history from '../../utils/history';
import setAuthorizationToken from '../../utils/setAuthorizationToken';
import * as types from './actionTypes';

export function setCurrentUser(user) {
    return { type: types.SET_CURRENT_USER, user }
}

export function logout() {
    return dispatch => {
        localStorage.removeItem('jwtToken');
        setAuthorizationToken(false);
        dispatch(setCurrentUser(""));
        history.push('/auth/login');
    }
}

export function login(data) {

    var params = new URLSearchParams();
    params.append('email', data.email);
    params.append('password', data.password);

    return dispatch => {
        return axios.post(`/auth/login`, params).then(res => {
            const {token} = res.data;
            localStorage.setItem('jwtToken', token);
            setAuthorizationToken(token);
            dispatch(setCurrentUser(token));
        }).catch(error => {
            throw(error);
        });
    }
}
