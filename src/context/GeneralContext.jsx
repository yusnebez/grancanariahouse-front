import {useState, useContext, createContext, useEffect} from 'react'
import {
    getAllVillasRequests, createVillaRequest, 
    deleteVillaRequest, updateVillaRequest, 
    loginRequest, signupRequest,
    getVillaRequests} from '../api/villa'

import {useNavigate} from 'react-router-dom'

const villaContext = createContext ()

export const useVilla = () => {
    const context = useContext(villaContext)
    return context
}

export const GeneralProvider = ({children}) =>{

    const [villa, setVilla] = useState ([])
    const [user, setUser] = useState ([])
    const navigate = useNavigate()

    
    const getAllVillas = async () => {
        const res = await getAllVillasRequests()
        setVilla(res.data)
    } 

    const getVilla = async (id) => {
        const res = await getVillaRequests(id)
        return res.data
    } 
    
    const createVilla = async (villa) => {
        const res = await createVillaRequest(villa)
        setVilla( (oldvilla) => [...oldvilla, res.data])
       
    }

    const deleteVilla = async (id) =>{
        const res= await deleteVillaRequest(id)
    }

    const updateVilla = async (id,villa) => {
        const res= await updateVillaRequest(id,villa)
       
    }

    const signup = async (user) => {
        const res = await signupRequest(user)
        

    }

    const login = async (user) => {
        const res = await loginRequest(user)
        setUser(res.data)
        navigate('/panelcontrol')
    }

    
    useEffect( () => {
        getAllVillas()
    }, [villa])

    
    return <villaContext.Provider value={{
        villa,
        user,
        getAllVillas,
        createVilla,
        deleteVilla,
        updateVilla,
        getVilla,
        login,
        signup
    }}>
       {children}
    </villaContext.Provider>

    
}