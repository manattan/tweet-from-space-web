import Axios from 'axios'
import firebase from '../auth/Firebase'

const serverURL = 'http://localhost:8000/api'
const Auth = firebase.auth()

export const getISSLocation = async  () => {
    const res = await Axios.get(`${serverURL}/locations`)
    return res.data
}

export const sendDirectMessage = async (message: any) => {
    const token = await Auth.currentUser?.getIdToken()
    const res = await Axios.post(`${serverURL}/sendDM`,{
        headers: {
          Authorization: `Bearer ${token}`,
        }
    }, message)
    return res.data
}
