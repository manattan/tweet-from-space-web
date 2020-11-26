import Axios from 'axios'

const serverURL = 'http://localhost:8000/api'

 const getISSLocation = async  () => {
    const res = await Axios.get(`${serverURL}/hello`)
    return res.data
}

export default getISSLocation