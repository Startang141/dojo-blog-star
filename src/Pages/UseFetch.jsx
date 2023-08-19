import { useEffect, useState } from "react"

const UseFetch = (url) => {
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [isError, setIsError] = useState(null)

    useEffect(() => {
        fetch(url)
        .then(res => {
            if(!res.ok){
                throw Error('Could Not Fetch Data')
            }
            return res.json();
        }).then((data)=> {
            setData(data);
            setIsPending(false);
            setIsError(null);
        }).catch((err)=> {
            setIsPending(false);
            setIsError(err.message)
        })
    }, [url]);
    return {data, isPending, isError}
}

 
export default UseFetch;