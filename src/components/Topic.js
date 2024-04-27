const Topic = ({name,isCompleted}) =>{

    return(
        <>
            <div>
                <li className={isCompleted ? 'topic-completed':'topic-incompleted'}>{name}{isCompleted && '✔️'}</li>
            </div>
        </>
    )
}

export default Topic