
export const updateVillaRequest = async (id, newVilla) => 
    await axios.put(`http://localhost:4100/api/villa/${id}`, newVilla)


