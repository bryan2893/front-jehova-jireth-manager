import axios from 'axios';


export const login = (workerId,password)=>{
    return axios.post('http://localhost:3001/auth/getWorker',{workerId: workerId,password: password});
};