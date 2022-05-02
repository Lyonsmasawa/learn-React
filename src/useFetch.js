import {
    useState,
    useEffect
} from "react";

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null)

    useEffect(() => {
        setTimeout(() => {
            fetch(url)
                .then(res => {
                    // console.log(res)
                    if (!res.ok) {
                        throw Error("could not fetch the data for that resource");
                    }
                    return res.json() //passes the json into a javascript object for us
                })
                .then(data => {
                    console.log(data);
                    setData(data)
                    setIsPending(false)
                    setError(null)
                })
                .catch(err => {
                    setError(err.message)
                    setIsPending(false)
                    console.log(err.message)
                })
        }, 1000); //just to simulate loading
    }, [url]);

    return { data, isPending, error }
}

export default useFetch;