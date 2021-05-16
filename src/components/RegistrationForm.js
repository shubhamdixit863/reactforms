import React, {useState} from 'react'

function RegistrationForm() {

    const [state, setstate] = useState({
        error: {
            book: null,
            email: null
        },
        book:null,
        email:null

    })


    const CheckValues = () => {
        ///let flag = true;

        /*

        // will return false if state values are empty or error is not null
        Object.values(state).forEach(ele => {
            if (typeof ele !== "object") {

                if (ele.length == 0) {
                    flag = false;
                }
            }

        })


        Object.values(state.error).forEach(ele => {
            if (ele !== null) {
                flag = false;
            }


        })


        return flag;
        */
console.log(JSON.stringify(state));

if(state.error.book=== null && state.error.email===null && state.book!==null && state.email!==null)
{
    return true;
}


return false;


    }

    const valiDate = (parameter) => {

        if (parameter.name === "book") {
            
            if (parameter.value.length < 5) {
                return {error:true,text:"Book Length Should Be OF 5 Alphabets"};
            }

            else{
                return {error:false,text:null};

            }
        } else if (parameter.name === "email") {

            let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
            if (regex.test(parameter.value)) {
                return {error:false,text:null};

             
            } else {
                return {error:true,text:"Email is not formatted"};

            }

        }


        return {error:true,text:""};


    }

    const handleChange = (event) => {
    
        let data=valiDate({name: event.target.name, value: event.target.value})
        if (data.error===false) {

            setstate({
                ...state,
                [event.target.name]: event.target.value,
                error: {
                    ...state.error,
                    [event.target.name]: null
                }
            })


        } else { // we will show an error

            setstate({
                ...state,/// destructuring 
                error: {
                    ...state.error,
                    [event.target.name]: data.text
                }
            })
        }


    }

    const submit = (e) => {

        e.preventDefault();
        if (CheckValues()) {
            console.log("submitted");

        } else {
            alert("Error Exist in form");
        }

    }

    return (
        <div>
            <form>
                <label>{
                    state.error.book
                }</label>
                <input type="text" placeholder="Book Name" name="book"
                    onChange={handleChange}/>
                <label>{
                    state.error.email
                }</label>
                <input type="email" placeholder="Email Address" name="email"
                    onChange={handleChange}/>
                <button type="submit"
                    onClick={submit}>Search Book</button>
            </form>
        </div>
    )
}

export default RegistrationForm
