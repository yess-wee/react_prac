import Topic from "./Topic"
import { topics } from "../data/data"


const TopicList = () =>{

    const topicItems = topics.map(topic=>(

        <Topic name={topic.name} isCompleted={topic.isCompleted} key={topic.id}/>
        
    ))
        

    return(
        <>
            {topicItems}
        </>
    )
}

export default TopicList