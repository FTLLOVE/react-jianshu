import * as constants from './constants'
import axios from 'axios'

export const login = (account, password) => {
   return (dispatch) => {
      axios.get('/api/login.json?account=' + account + "&password=" + password)
         .then((res) => {
            const result = res.data.data
            if (result) {
               dispatch(change_login())
            } else {
               console.log("error")
            }
         })
   }
}

export const logout = () => ({
   type: constants.LOGOUT,
   value: false
})

const change_login = () => ({
   type: constants.CHANGE_LOGIN,
   value: true
})