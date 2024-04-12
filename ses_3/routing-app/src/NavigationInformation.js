import React from 'react'
import {useLocation, useSearchParams} from 'react-router-dom'


const NavigationInformation = () => {
    const location = useLocation();
    const [search,setSearchParam] = useSearchParams();
    console.log("Location : ",location)
    const expertise = search.get("expertise")

    return (
    <div>
      <h1>Navigation Information</h1>
      <p>Location Object : {JSON.stringify(location)}</p>
      <p>Search Param: expertise: {JSON.stringify(expertise)}</p>
    </div>
  )
}

export default NavigationInformation
