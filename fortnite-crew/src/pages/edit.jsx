import React from "react";
import { useParams } from 'react-router-dom';
import { supabase } from '../client';
import Nav from "../componets/navBar";
import Characters from '../assets/Fortnite.png'

function Edit(){

    //get the id from the url
    const { id } = useParams();

    //set up state variables
    const [post, setPost] = React.useState(null);

    //fetch the crewmate from the database
    React.useEffect(() => {
        const getPost = async () => {
            const {data} = await supabase
            .from('crew')
            .select()
            .eq('id', id)

            if(data.length > 0){
                setPost(data[0]);
            }
        }
        getPost().catch(console.error);
    }, [id]);

    //update the crewmate
    const updatePost = async (e) => {
        e.preventDefault();

        //update the crewmember in the database
        await supabase.from('crew').update({
            nickname: post.nickname,
            character: post.character,
            attribute: post.attribute,
            level: post.level
        }).eq('id', id);

        //redirect to the home page
        window.location = '/';
    }

    //delete the crewmate
    const deletePost = async (e) => {
        e.preventDefault();

        //delete the crewmate from the database
        await supabase.from('crew').delete().eq('id', id);

        //redirect to the home page
        window.location = '/';
    }

    if (!post) {
        return <h1>Loading...</h1>
    }


    return(
        <div className="edit">
            <Nav />
            <div className="content">
            <h2>Edit a Squad Member</h2>
                <img className="characterImage" src={Characters} alt="fortnite Characters" width="95%" height="auto"/>
                <form onSubmit={updatePost}>
                    <div className="mini-container">
                        <label>Nickname:</label>
                        <input type="text" value={post.nickname} onChange={(e) => setPost({...post, nickname: e.target.value})}/>
                    </div>

                    <div className="mini-container">
                        <label>Level:</label>
                        <input type="number" value={post.level} onChange={(e) => setPost({...post, level: e.target.value})}/>
                    </div>
                    
                    <div className="mini-container">
                        <label>Character:</label>
                        <label>
                            <input type="radio" name="character" value="1" checked={post.character === '1'} onChange={(e) => setPost({...post, character: e.target.value})}/>
                            <span className="character"></span>
                            Kenji
                        </label>
                        <label>
                            <input type="radio" name="character" value="2" checked={post.character === '2'} onChange={(e) => setPost({...post, character: e.target.value})}/>
                            <span className="character"></span>
                            Recon Specialist
                        </label>
                        <label>
                            <input type="radio" name="character" value="3" checked={post.character === '3'} onChange={(e) => setPost({...post, character: e.target.value})}/>
                            <span className="character"></span>
                            Alpine Ace German Male
                        </label>
                        <label>
                            <input type="radio" name="character" value="4" checked={post.character === '4'} onChange={(e) => setPost({...post, character: e.target.value})}/>
                            <span className="character"></span>
                            Mogul Master China Female
                        </label>
                        <label>
                            <input type="radio" name="character" value="5" checked={post.character === '5'} onChange={(e) => setPost({...post, character: e.target.value})}/>
                            <span className="character"></span>
                            Omega
                        </label>
                        <label>
                            <input type="radio" name="character" value="6" checked={post.character === '6'} onChange={(e) => setPost({...post, character: e.target.value})}/>
                            <span className="character"></span>
                            Drift
                        </label>
                        <label>
                            <input type="radio" name="character" value="7" checked={post.character === '7'} onChange={(e) => setPost({...post, character: e.target.value})}/>
                            <span className="character"></span>
                            Alpine Ace China Male
                        </label>
                        <label>
                            <input type="radio" name="character" value="8" checked={post.character === '8'} onChange={(e) => setPost({...post, character: e.target.value})}/>
                            <span className="character"></span>
                            Thanos
                        </label>
                        <label>
                            <input type="radio" name="character" value="9" checked={post.character === '9'} onChange={(e) => setPost({...post, character: e.target.value})}/>
                            <span className="character"></span>
                            Raven
                        </label>
                        <label>
                            <input type="radio" name="character" value="10" checked={post.character === '10'} onChange={(e) => setPost({...post, character: e.target.value})}/>
                            <span className="character"></span>
                            DJ Yonder
                        </label>
                        <label>
                            <input type="radio" name="character" value="11" checked={post.character === '11'} onChange={(e) => setPost({...post, character: e.target.value})}/>
                            <span className="character"></span>
                            Alpine Ace Korean Male
                        </label>
                        <label>
                            <input type="radio" name="character" value="12" checked={post.character === '12'} onChange={(e) => setPost({...post, character: e.target.value})}/>
                            <span className="character"></span>
                            Jack Gourdon
                        </label>
                        <label>
                            <input type="radio" name="character" value="13" checked={post.character === '13'} onChange={(e) => setPost({...post, character: e.target.value})}/>
                            <span className="character"></span>
                            Mogul Master German Female
                        </label>
                        <label>
                            <input type="radio" name="character" value="14" checked={post.character === '14'} onChange={(e) => setPost({...post, character: e.target.value})}/>
                            <span className="character"></span>
                            Ghoul Trooper
                        </label>
                        <label>
                            <input type="radio" name="character" value="15" checked={post.character === '15'} onChange={(e) => setPost({...post, character: e.target.value})}/>
                            <span className="character"></span>
                            Mogul Master Korean Female
                        </label>
                        <label>
                            <input type="radio" name="character" value="16" checked={post.character === '16'} onChange={(e) => setPost({...post, character: e.target.value})}/>
                            <span className="character"></span>
                            Zorii Bliss
                        </label>
                    </div>
                    <div className="mini-container">
                    <label>Attribute:</label>
                        <label>
                            <input type="radio" name="attribute" value="captain" checked={post.attribute === 'captain'} onChange={(e) => setPost({...post, attribute: e.target.value})}/>
                            <span className="attribute"></span>
                            Captain
                        </label>
                        <label>
                            <input type="radio" name="attribute" value="medic" checked={post.attribute === 'medic'} onChange={(e) => setPost({...post, attribute: e.target.value})}/>
                            <span className="attribute"></span>
                            Medic
                        </label>
                        <label>
                            <input type="radio" name="attribute" value="attacker" checked={post.attribute === 'attacker'} onChange={(e) => setPost({...post, attribute: e.target.value})}/>
                            <span className="attribute"></span>
                            Attacker
                        </label>
                        <label>
                            <input type="radio" name="attribute" value="sharpshooter" checked={post.attribute === 'sharpshooter'} onChange={(e) => setPost({...post, attribute: e.target.value})}/>
                            <span className="attribute"></span>
                            Sharpshooter
                        </label>
                    </div>
                    <button type="submit">Update</button>
                    <button onClick={deletePost}>Delete</button>
                </form>
            </div>
        </div>
    )
}

export default Edit