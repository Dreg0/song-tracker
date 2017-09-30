import api from '@/services/api'

export default{
  register (credentials) {
    return api().post('register', credentials)
  }
}

// authServ.register({
//   email: 'test@gmail.com',
//   password: '123456'
// })
