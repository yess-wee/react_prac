import {useState, useEffect} from 'react'
import axios from 'axios'

const ApiData = ()=> {

    const [data,setData] = useState();
    const [error,setError] = useState();

    useEffect(()=>{
        const fetchData = async ()=> {
                try {
                    const response = await axios.get("https://jsonplaceholder.typicode.com/photos/1")

                    setData(response.data)

                } catch (error) {

                    setError(error)
                    
                }
        }

        fetchData();
    },[])
    return(<>

        {data ? (
            <div> {data.title}
                  <img src={data.url} width='500'/>
            </div>
        ): error ? (<p>{error.message}</p>) : (<p>Pending</p>)}
    
    </>)
}

export default ApiData