import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../client';
import Nav from '../componets/navBar';
import { Link } from 'react-router-dom';

function Info(){
    

    //get the id from the url
    const { id } = useParams();

    //set up state variables
    const [character, setCharacter] = useState(null);

    //fetch the character from the database
    useEffect(() => {
        console.log(id);
        const getCharacter = async () => {
            const { data } = await supabase
                .from('crew')
                .select()
                .eq('id', id);

            if (data.length > 0) {
                setCharacter(data[0]);
            }
        };
        getCharacter().catch(console.error);
    }, [id]);

    if (!character) {
        return <h1>Loading...</h1>;
    }

    return(
        <div className="info">
           <Nav />
           <div className="content">
           <h2>Information Page</h2>
                <h1>{character.nickname}</h1>
                <p>Character: {character.character}</p>
                <p>Level: {character.level}</p>
                <p>Attribute: {character.attribute}</p>
                <div className="special-message">
                    {character.level > 50 ? (
                        <p>Wow, {character.nickname} is a high level!</p>
                    ) : (
                        <p>{character.nickname} is a low level.</p>
                    )}

                    {character.attribute == 'captain'? (
                        <p>{character.nickname} is an Awesom Leader!</p>
                    ) : (
                        <p> </p>
                    )}

                    {character.attribute == 'medic'? (
                        <p>{character.nickname} can provide meds.</p>
                    ) : (
                        <p></p>
                    )}

                    {character.attribute == 'attacker'? (
                        <p>{character.nickname} is the first in the fight.</p>
                    ) : (
                        <p></p>
                    )}
                    {character.attribute == 'sharpshooter'? (
                        <p>{character.nickname} is a always sniping from afar.</p>
                    ) : (
                        <p></p>
                    )}
                </div>
           </div>

        
        </div>
    )
}

export default Info