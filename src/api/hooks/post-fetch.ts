import { useState } from "react";
import axiosInstance from "../axiosConfig";

function usePostData(endPoint: string) {

    // const [data, setData] = useState<any>(null)
    // const [loading, setLoading] = useState(false)
    // const [error, setError] = useState(null)

    // const postData = async (payLoad: any) => {
    //     try {
    //         setLoading(true)
    //         const response = await axiosInstance.post(endPoint, payLoad)
    //         setData(response)
    //     } catch (error: unknown | any) {
    //         setError(error)
    //     } finally {
    //         setLoading(false)
    //     }
    // }

    // return { data, loading, error, postData }
}

export default usePostData;