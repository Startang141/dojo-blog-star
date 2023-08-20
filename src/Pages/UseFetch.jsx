import { useEffect, useState } from "react"

const UseFetch = (url) => {
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [isError, setIsError] = useState(null)

    
    useEffect(() => {
        const abortCont = new AbortController();
        fetch(url, {signal : abortCont.signal})
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
            if(err.name === 'AbortError') {
                console.log('Fetch Aborted');
            } else {
                setIsPending(false);
                setIsError(err.message);
            }
        });

        return () => abortCont.abort()
    }, [url]);
    return {data, isPending, isError}
}

 
export default UseFetch;