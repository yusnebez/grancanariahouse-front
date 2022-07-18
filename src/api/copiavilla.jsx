
export const updateVillaRequest = async (id, newVilla) => 
    await axios.put(`http://localhost:4001/api/villa/${id}`, newVilla)


