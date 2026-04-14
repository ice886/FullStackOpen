import axios from 'axios'
const basdeUrl = '/api/login'
const login = async creadentials => {
  const response = await axios.post(basdeUrl, creadentials)
  return response.data
}

export default { login }