import axios from 'axios'


const api = axios.create({
    baseURL: 'http://localhost:3000/api/auth',
   withCredentials: true
})

export async function register(data) {
  const response = await api.post('/register', data);
  return response.data;
}

export async function login(data) {
  const response = await api.post('/login', data);
  return response.data;
}


export async function get() {
    const response = await api.get('/get');
    return response.data;
}
export async function logout() {
    const response = await api.get('/logout');
    return response.data;
}

