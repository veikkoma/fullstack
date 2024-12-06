import axios from 'axios';

const baseUrl = 'http://localhost:3001/persons';

const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const create = async (newPerson) => {
  const response = await axios.post(baseUrl, newPerson);
  return response.data;
};

const update = async (id, updatedPerson) => {
    await axios.delete(`${baseUrl}/${id}`); 
    const response = await axios.post(baseUrl, updatedPerson);
    return response.data;
  };
  
  

const remove = async (id) => {
  await axios.delete(`${baseUrl}/${id}`);
};

export default { getAll, create, update, remove };