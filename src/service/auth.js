import axios from 'axios';

let login = (workerId,password)=>{
    return axios.post('http://localhost:3001/auth/getWorker',{workerId: workerId,password: password});
};

export {login}