import { Link } from 'react-router-dom';

function Nav(){

    return(
        <div className="sideNav">
             <Link to="/"> Home</Link>
             <Link to="/create"> Create Character</Link>
             <Link to="/gallery"> Gallery </Link>
        </div>
    )
}

export default Nav