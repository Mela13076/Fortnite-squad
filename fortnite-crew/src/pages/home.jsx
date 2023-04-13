import Nav from "../componets/navBar"
import Logo from "../assets/logo.png";
import Characters from "../assets/Fortnite.png"


function Home(){
    
    return(
        
        <div className="home">
            <Nav />
            <div className="content">
                <img src={Logo} alt="fortnite logo" width="auto" height="260px"/>
                <h2>Welcome to Fortnite Squad Creator</h2>
                <h3>
                    Select <i>Create Character</i> to create a squad member with 
                    special abilites before sending them to battle!
                </h3>
                <img className="characterImage" src={Characters} alt="fortnite Characters" width="95%" height="auto"/>
            </div>
        </div>
    )
}

export default Home