import React, { useState, useEffect } from 'react';
import { supabase } from '../client';
import Nav from '../componets/navBar';
import { Link } from 'react-router-dom';
import Characters from '../assets/Fortnite.png'

function Gallery(){
    
     //set up state variables
     const [characters, setcharacters] = useState([]);

     //get the characters from the database
     useEffect(() => {
        
         //get the characters from the database
         const getPosts = async () => {
             const {data} = await supabase
             .from('crew')
             .select()
             .order('created_at', {ascending: false});
         
         //set characters data
         setcharacters(data);
         }
         getPosts().catch(console.error);
     }, []);


    return(
        <div className="gallery">
        <Nav />
        <div className="content">
        <h2>Gallery of characters</h2>
            <img className="characterImage" src={Characters} alt="fortnite Characters" width="95%" height="auto"/>
            <div className="characters">
            {
                characters && characters.length > 0 ? characters.map((character) => (
                    <div className="charactersPage" key={character.id}>
                        <h3>
                            <Link to={`/edit/${character.id}`}>{character.nickname}</Link>
                        </h3>
                        <p>Level: {character.level}</p>
                        <p>Character: {character.character}</p>
                        <p>Attribute: {character.attribute}</p>
                        <Link to={`/edit/${character.id}`}>Edit</Link>
                    </div>
                )) : (
                    <div>
                        <h3>No characters yet! :( </h3>
                    </div>
                )
            }
            </div>
        </div>

        </div>
    )
}


export default Gallery