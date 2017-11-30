import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://auth-vue-b0059.firebaseio.com'
})


export default instance