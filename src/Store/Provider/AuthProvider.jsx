import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { initiallogin } from "../Slices/auth_slice"; // ✅ FIXED PATH
import axios from 'axios'

const Authprovider = ({ children }) => {
    const dispatch = useDispatch()
    const token = localStorage.getItem("token")
    console.log("provider jsx token:", token)

    useEffect(() => {
        const getverify = async () => {
            try {
                const config = {
                    headers: {
                        authorization: `${token}` 
                    }
                }

                const response = await axios.post("http://localhost:5001/login/authverify", {}, config)

                if (response.data.status) {
                    dispatch(initiallogin(response.data.data.data))
                } else {
                    localStorage.removeItem("token")
                }
            } catch (error) {
                console.log("SK:", error)
            }
        }

        if (token) {
            getverify()
        }

    }, [token, dispatch])

    return <>{children}</>
}

export default Authprovider
