import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const DisplayAuthors = () => {
    const {authors, setAuthors} = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/author/")
            .then((res) => {
                console.log(res.data);
                setAuthors(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])
   
    return(
       
       <div>

            <h1>Favorite authors</h1>
            <h3>We have quotes by:</h3>
            <Link to={"/new"}>Add Author</Link>
            
                <table>
                    <thead>
                        <th>Author Name:</th>
                        <th> Actions </th>
                    </thead>
                    <tbody>
                        {authors.map((author,index) => {
                            return(
                                <tr key={index}>
                                    <td>{author.name}</td>
                                    
                                </tr>
                            )
                        }
                        )}
                    </tbody>

                </table> 
           
           
        </div>

    )

   
   
   
   
   
   
   



}

export default DisplayAuthors;