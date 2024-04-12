import {useState} from 'react'

function getInTwoDigits(value){
    if(value<10){
        value = "0"+value
    }
    return value
}

function getCurrentTime(){
    const today = new Date();
    const h = today.getHours();
    const m = today.getMinutes();
    const s = today.getSeconds();

    return `${h}::${getInTwoDigits(m)}::${getInTwoDigits(s)}`
}

export default function Form(){
    const [answer,setAnswer] = useState("")
    const [error,setError] = useState(null)
    const [status,setStatus] = useState("typing")

    console.log(getCurrentTime(),":")

    

    if(status === "success"){
        return <h1>Successed!!!</h1>
    }

    async function handleSubmit(e){
        e.preventDefault();

        setStatus("Submitting")

        try{
            await submitForm(answer)
            setStatus("success")

        }catch(e){
            setError(e)
        }
    }

    function handleTextAreaChange(e){
        setAnswer(e.target.value)
    }

    return (
        <>
            <h2>Quiz site</h2>

            <p>
                Which is your favourite color?
            </p>

            <form onSubmit={handleSubmit}>
                <textarea
                    value={answer}
                    onChange={handleTextAreaChange}
                    disabled={status === "submitting"}/>
                
                <br/>

                <button disabled={answer.length === 0 || status === "submitting"}>
                    Submit
                </button>

                {error !== null && <p className='Error'>{error.message}</p>}
            </form>
        </>
    )

    function submitForm(answer){
        return new Promise((resolve,reject) => {
            setTimeout(()=> {
                let shouldError = answer.toLowerCase() !== "blue";

                if(shouldError){
                    reject(new Error("Try Again"))
                }
                else{
                    resolve()
                }
            })
        })
    }
}

