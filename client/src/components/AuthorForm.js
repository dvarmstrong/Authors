import React, {useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";


const AuthorForm = (props) => {
    const [name, setName] = useState("");
    const [errors, setErrors] = useState([]);

    const onSubmitHandler =(e) => {
        e.preventDefault();
        const Author ={name};
        setName("");

        axios.post('http://localhost:8000/api/author/new', {
            name
        })
            .then(res => console.log(res))
            .catch(err=>{
                setErrors(err.response.data.errors);
            })
    }
    
    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                <header><h1>Favorite Author</h1></header>
                <Link to={"/"}>Home</Link>
                <div style={{border: "solidblack"}}>
                <h3>Add a new author:</h3>
                    <div>
                        <label>Author Name</label>
                    </div>
                    <div>
                    <input type ="text"onChange={e => setName(e.target.value)}
                        value={name}/>
                        { errors.name ? <p>{errors.name.message}</p>: null }
                    </div>
                <input type="submit"/>
                <button type="cancel">Cancel</button>
                       
                </div>
                    
            </form>
        </div>
    
    
    
    
    )




}

export default AuthorForm;