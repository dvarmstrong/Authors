import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Update = (props) => {
    const {id} = useParams();
    const [name, setName] = useState();
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();


    useEffect(() => {
        axios.get(`http://localhost:8000/api/author/${id}`)
            .then((res) => {
                setName(res.data.name);
            })
            .catch((err) => console.log(err));
    }, [])

    const Update = (e) => {
        e.preventDefault();
        const Author ={name};
        setName("");
        axios.put(`http://localhost:8000/api/author/update/${id}`, {
            name
        })
            .then(res => { 
            console.log(res);
            navigate("/");
            })
            .catch(err=>{
                setErrors(err.response.data.errors);
        })
    
}


    return (
       
       <div>
            <h1>Favorite Author</h1>
            <Link to={"/"}>Home</Link>
            <h3>Edit this author:</h3>
            <form onSubmit={Update}>
                <div>
                    <label>Author Name</label>
                    <input type="text" value={name} name="name"
                        onChange={e => setName(e.target.value)}/>
                        { errors.name ? <p>{errors.name.message}</p>: null }
                </div>
                <input type="submit" value="Update"/>
            </form>

        </div>
    );
}




export default Update;