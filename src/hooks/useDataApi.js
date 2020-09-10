import {useState, useEffect} from 'react';
import {makeApiCall} from '../services/services'

/**
 * 
 * @param {*} data 
 * @param {*} api 
 * @param {*} method 
 * this hooks is common to make any CRUD(GET POST,PUT,DELETE) operation just need to pass
 * these three params;
 */
const useDataApi = (data,apiUrl,method, params) => {
    const [newData, setNewData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [errorMsg, setError] = useState('');

    /**
     * call useEffect here that takes a call back function and work like
     * life cycles of statefull component:
     * componentDidMount, componentDidUpdate, componentWillUnmount
     * Note: Do not put useEffect in any conditional blocks its always on top.
     * */
    useEffect(() => {
        //safe to call any api or subscribe some observable or event.
        const fetchData = async () => {
            setIsLoading(true);
            setError(null);
            try{
            const apiResponse = await makeApiCall(apiUrl, data, method, params)
            setNewData(apiResponse.data);
            setIsLoading(false);
            } catch(error){
                setError(error.message);
            }
        }
        fetchData();

    }, [newData.length]); //sescond arguments you give that will render if [apiUrl(propety)] will
    // change like if we get url

    //return the object with this updated values.
    return {isLoading, newData, errorMsg}
}

export default useDataApi