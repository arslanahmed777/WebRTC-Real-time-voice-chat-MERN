import axios from 'axios'
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setAuth } from '../store/authSlice'
export function useLoadingWithRefresh() {
    const [loading, setloading] = useState(true)
    const dispatch = useDispatch()
    useEffect(() => {
        (async () => {
            try {
                const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/api/refresh`, { withCredentials: true })
                setloading(false)
                dispatch(setAuth(data))
            } catch (error) {
                console.log(error);
                setloading(false)
            }
        })()
    }, [dispatch])

    return { loading }
}