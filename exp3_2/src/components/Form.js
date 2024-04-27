import { useState } from "react"

const Form = () => {

    const allInterests = ['C','C++','JAVA','Python'];

    const initialState = {

        firstname: '',
        lastname: '',
        gender: '',
        knowsHindi: false,
        knowsGujarati : false,
        knowsEnglish : false,
        interests:[]
        
        };
        
    const [state,setState] = useState(initialState)

    function handleSubmit(event) {
        event.preventDefault();

        console.log("state: ",state);

        return false;

    }

    function handleSelectChange(event){

        const option = Array.from(event.target.option, (option)=>option.value)

        setState({
            ...state,
            interests:option
        })

    }

    function handleChange(event){
        const value = event.target.type == 'checkbox'?event.target.checked : event.target.value; 
        setState({...state,[event.target.name]:value});


    }


    return(
        <div>

        <h1>Application Form</h1>

        <form onSubmit={handleSubmit}>

            FirstName : <input name='firstname' value={state.firstname} onChange={handleChange}/>

            LastName : <input name='lastname' value={state.lastname} onChange={handleChange}/>

            <div>

            Gender:

            Male <input type='radio' value="Male" name="gender" onChange={handleChange} checked={state.gender=="Male"}/>

            Female <input type='radio' value="Female" name="gender" onChange={handleChange} checked={state.gender=="Female"}/>

            </div>

            <div>

                Known Languages :

                Hindi <input type='checkbox' checked={state.knowsRajkot} name='knowsRajkot' onChange={handleChange}/> Rajkot <input type='checkbox' checked={state.knowsJamnagar} name='knowsJamnagar' onChange={handleChange}/> Jamnagar <input type='checkbox'
                checked={state.knowsJunagadh} name='knowsJunagadh' onChange={handleChange}/>

            </div>

            <div>

                Interests:

                <select multiple name='interests' value={state.interests} onChange={handleSelectChange}>
                    {allInterests.map((interest)=>(

                        <option value={interest} key={interest}> {interest} </option>
                    ))}

                </select>

            </div>

            <button type='submit'>Submit</button> </form>

            <h1>Form Data</h1>

            <div>First Name : {state.firstname}</div>

            <div>Last Name : {state.lastname}</div>
            <div>Gender : {state.gender}</div> <div> Rajkot : { ""+state.knowsRajkot}</div> <div> Jamnagar :{ ""+state.knowsJamnagar}</div> <div>Junagadh : { ""+state.knowsJunagadh}</div> <div>Interest : { " "+ state.interests}</div>

        </div>

    )

}

export default Form