import axios from 'axios';

const api = axios.create({ baseURL: 'https://fullstack-backend-5fyg.onrender.com/api/persons' });

const personsService = {
  getAll: () => api.get('/').then(response => response.data),
  create: (newPerson) => api.post('/', newPerson).then(response => response.data),
  update: (id, updatedPerson) => api.put(`/${id}`, updatedPerson).then(response => response.data),
  remove: (id) => api.delete(`/${id}`),
};

export default personsService;