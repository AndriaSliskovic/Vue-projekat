import axios from 'axios'

const apiClient = axios.create({
    baseURL:'http://localhost:3000',
    withCredentials:false,
    headers:{
        Accept:'application/json',
        'Content-Type':'application/json'
    }
})

const apiDbc = axios.create({
    baseURL:'http://localhost:5100/api',
    withCredentials:false,
    headers:{
        Accept:'*/*',
        'Content-Type':'application/json'
    }
})

export default{
    getEvents(){
        return apiClient.get('/events')
    },
    getEvent(id){
        return apiClient.get('/events/'+id)
    },
    getPlans(){
        return apiDbc.get('/plans')
    }
}