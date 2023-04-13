import Characters from "../assets/Fortnite.png";
import Nav from "../componets/navBar.jsx"
import { supabase } from "../client";

function Create(){
    
        const createPost = async (e) => {
            e.preventDefault();
            
            //Get the values from from the form
            const nickname = document.getElementById('nickname').value;
            const level = document.getElementById('level').value;
            const character = document.getElementById('character').value;
            const attribute = document.getElementById('role').value;
        
    
            //Create a new post
            const post = {
                nickname: nickname,
                character: character,
                attribute: attribute,
                level: level
            }
    
    
            await supabase
            .from('crew')
            .insert(post)
            .select();
    
    
            //Redirect to the home page
            window.location = '/';
            
    
        }


    return(
        <div className="create">
            
            <Nav />
            <div className="content">
                {/* <img src={Logo} alt="fortnite logo" width="auto" height="260px"/> */}
                <h2>Create a New Squad Member</h2>
                <img className="characterImage" src={Characters} alt="fortnite Characters" width="95%" height="auto"/>
                <form onSubmit={createPost}>
                    <div className="mini-container">
                        <label>Nickname:</label>
                        <input type="text" placeholder="enter nickname" id="nickname" required/>
                    </div>

                    <div className="mini-container">
                        <label>Level:</label>
                        <input type="number" placeholder="from 1-200" id="level" required/>
                    </div>
                    
                    <div className="mini-container">
                        <label>Character:</label>
                        <label>
                            <input type="radio" name="character" id="character" value="1" required/>
                            <span className="character"></span>
                            Kenji
                        </label>
                        <label>
                            <input type="radio" name="character" id="character" value="2" required/>
                            <span className="character"></span>
                            Recon Specialist
                        </label>
                        <label>
                            <input type="radio" name="character" id="character" value="3" required/>
                            <span className="character"></span>
                            Alpine Ace German Male
                        </label>
                        <label>
                            <input type="radio" name="character" id="character" value="4" required/>
                            <span className="character"></span>
                            Mogul Master China Female
                        </label>
                        <label>
                            <input type="radio" name="character" id="character" value="5" required/>
                            <span className="character"></span>
                            Omega
                        </label>
                        <label>
                            <input type="radio" name="character" id="character" value="6" required/>
                            <span className="character"></span>
                            Drift
                        </label>
                        <label>
                            <input type="radio" name="character" id="character" value="7" required/>
                            <span className="character"></span>
                            Alpine Ace China Male
                        </label>
                        <label>
                            <input type="radio" name="character" id="character" value="8" required/>
                            <span className="character"></span>
                            Thanos
                        </label>
                        <label>
                            <input type="radio" name="character" id="character" value="9" required/>
                            <span className="character"></span>
                            Raven
                        </label>
                        <label>
                            <input type="radio" name="character" id="character" value="10" required/>
                            <span className="character"></span>
                            DJ Yonder
                        </label>
                        <label>
                            <input type="radio" name="character" id="character" value="11" required/>
                            <span className="character"></span>
                            Alpine Ace Korean Male
                        </label>
                        <label>
                            <input type="radio" name="character" id="character" value="12" required/>
                            <span className="character"></span>
                            Jack Gourdon
                        </label>
                        <label>
                            <input type="radio" name="character" id="character" value="13" required/>
                            <span className="character"></span>
                            Mogul Master German Female
                        </label>
                        <label>
                            <input type="radio" name="character" id="character" value="14" required/>
                            <span className="character"></span>
                            Ghoul Trooper
                        </label>
                        <label>
                            <input type="radio" name="character" id="character" value="15" required/>
                            <span className="character"></span>
                            Mogul Master Korean Female
                        </label>
                        <label>
                            <input type="radio" name="character" id="character" value="16" required/>
                            <span className="character"></span>
                            Zorii Bliss
                        </label>
                    </div>
                    <div className="mini-container">
                    <label>Attribute:</label>
                        <label>
                            <input type="radio" name="attribute" id="role" value="captain" required/>
                            <span className="attribute"></span>
                            Captain
                        </label>
                        <label>
                            <input type="radio" name="attribute" id="role" value="medic" required/>
                            <span className="attribute"></span>
                            Medic
                        </label>
                        <label>
                            <input type="radio" name="attribute" id="role" value="attacker" required/>
                            <span className="attribute"></span>
                            Attacker
                        </label>
                        <label>
                            <input type="radio" name="attribute" id="role" value="sharpshooter" required/>
                            <span className="attribute"></span>
                            Sharpshooter
                        </label>
                    </div>
                    <button type="submit">Create</button>
                </form>
            </div>
        
        </div>
    )
}

export default Create