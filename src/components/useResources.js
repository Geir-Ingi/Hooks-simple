import {useState, useEffect} from 'react';
import axios from 'axios';

const useResource = (resource) => {
    const [resources, setResource] = useState([]);
    const fetchResource = async (resource) =>{
        //console.log(resource);
        const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);
        setResource(response.data);
    };
    useEffect(() => {
        fetchResource(resource);
    }, 
    [resource]);
    return resources;
};

export default useResource;