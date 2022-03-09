import axios from "axios";
import showMessage from "@/utils/showMessage";


const instance = axios.create()
instance.interceptors.response.use(response => {
    if (response.data.code !== 0) {
        showMessage({
            content: response.data.msg,
            type: 'error',
        })
        return null
    }
    return response.data.data
}, error => {
    return error
})
export default instance
