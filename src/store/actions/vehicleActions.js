import axios from 'axios';
import * as types from './actionTypes';

export function createVehicle(data) {
  console.log(data)
  return dispatch => {
      return axios.post(`/vehicles/create`, data).then(res => {
          const newDate = res.data;
          console.log(newDate)
      }).catch(error => {
          throw(error);
      });
  }
}
