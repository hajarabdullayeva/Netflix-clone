import {useState, useEffect} from "react";
import axios from "axios";

const useHttps = function (url) {
    const [response, setResponse] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();

    useEffect(() => {
        setLoading(true);
        const getData = async function () {
            try {
                const data = await axios.get(url);
                setResponse(data);
            } catch (e) {
                setError(e);
            } finally {
                setLoading(false);
            }
        };
        getData();
    }, [url]);

    return [response, loading, error];
};

export default useHttps;
