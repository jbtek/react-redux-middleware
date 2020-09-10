import {useState, useEffect} from 'react';
import {getApi, postApi, putApi, deleteApi} from '../services/services'

/**
 * 
 * @param {*} data 
 * @param {*} api 
 * @param {*} method 
 * this hooks is common to make any CRUD(GET POST,PUT,DELETE) operation just need to pass
 * these three params;
 */
const useDataApi = (data,apiUrl,method) => {
    const [newData, setNewData] = useState();
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
            try{
            const postApiRes = await postApi(apiUrl, data)
            setIsLoading(false);
            setNewData(postApiRes.data);
            } catch(error){
                setError(error.message);
            }
        }
        fetchData();

    }, [api]); //sescond arguments you give that will render if [api(propety)] will
    // change like if we get url

    
    return {isLoading, newData, errorMsg}
}