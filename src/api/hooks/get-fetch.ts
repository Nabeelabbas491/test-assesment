import { useEffect, useState } from "react";
import axiosInstance from "../axiosConfig";

function useGetData(endPoint: string) {

    const [data, setData] = useState<any>(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const getData = async (payLoad?: any) => {
        try {
            let url = `${``}${endPoint}`
            if (payLoad) {
                for (let key in payLoad) {
                    url = `${url}${!url.includes('?') ? '?' : '&'}${key}=${payLoad[key]}`
                }
            }
            setLoading(true)
            const response = await axiosInstance.get(url)
            setData(response)
        } catch (error: unknown | any) {
            setError(error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getData();
    }, [])

    return { data, loading, error, getData }
}

export default useGetData;