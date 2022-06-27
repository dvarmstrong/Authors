import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const DisplayAuthors = () => {
    const [authors, setAuthors] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/author")
            .then((res) => {
                console.log(res.data);
                setAuthors(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const handleDeleteAuthor = (id) => {
        axios.delete(`http://localhost:8000/api/author/${id}`)
            .then((res) => {
                console.log("Author deleted");
                console.log(res);
                const filteredAuthors = authors.filter((author) => {
                    return author._id !== id;
                    });
                setAuthors(filteredAuthors);
            })
            .catch((err) => {
                console.log("error deleting author", err.res);

            });
    }

   
    return(
       
       <div>

            <h1>Favorite authors</h1>
            <h3>We have quotes by:</h3>
            <Link to={"/new"}>Add Author</Link>
            
                <table>
                    <thead>
                        <th>Author Name:</th>
                        <th> Edit </th>
                        <th> Delete </th>
                    </thead>
                    <tbody>
                        {authors.map((author,index) => {
                            return(
                                <tr key={author._id}>
                                    <td>{author.name}</td>
                                    <td>
                                       <button><Link to={"/edit/"+ author._id}>Edit</Link></button> 
                                    </td> 
                                    <td>
                                        <button onClick={() => handleDeleteAuthor(author._id)}>Delete</button>
                                    
                                    </td>   
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



   
   
   
   
   

   
   


