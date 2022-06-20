import axios from "axios";


export const getVillaRequests = async (id) => await axios.get('http://localhost:4800/api/villa/' + id)

export const updateVillaRequest = async (id, villa) => {
    await axios.put(`http://localhost:4800/api/villa/${id}`,villa) }

export const getAllVillasRequests = async () => await axios.get('http://localhost:4800/api/villa')

export const createVillaRequest = async (villa) => await axios.post('http://localhost:4800/api/villa', villa) 

export const deleteVillaRequest = async (id) => await axios.delete('http://localhost:4800/api/villa/' + id)

export const loginRequest = async (user) => await axios.post('http://localhost:4800/api/login', user)

export const signupRequest = async (user) => await axios.post('http://localhost:4800/api/signup', user)

