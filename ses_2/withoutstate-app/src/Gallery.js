import React, { useState } from 'react'
import {sculptureList} from './data'

const Gallerry = () => {
    // let index = 0;
    const [index,setIndex] = useState(0);
    const [showMore,setShowMore] = useState(false);

    console.log("Gallery: index: "+ index);

    function handleClick(){
        // index = index+1;
        setIndex(index+1);
        console.log("handleClick : index: "+ index)
    }

    function handleMoreClick(){
        setShowMore(!showMore)
    }

    let sculpture = sculptureList[index]

    return(
        <>
            <button onClick={handleClick}>Next</button>

            <h2>
                <i>{sculpture.name}</i>
                by {sculpture.artist}
            </h2>

            <h3>
                ({index+1} of {sculptureList.length})
            </h3>

            <button onClick={handleMoreClick}>
                {showMore ? "Hide" : "Show"} DETAILS
            </button>

            <div>
                {showMore && <p>{sculpture.description}</p>}

                <img src={sculpture.url} alt={sculpture.alt}/>
            </div>

            <img src={sculpture.url} alt={sculpture.all} />

            <p>{sculpture.description}</p>
        </>
    )
}

export default Gallerry