import "../styles/components/sidebar.scss"
import { Link } from "react-router-dom"

const Sidebar = () => {
    return <div className="sidebar">
        <div className="search">
            <input type="text" placeholder="quick search" />
            <button>Go</button>
        </div>
        <div className="links">
            <Link to="/profile">My Profile</Link>
            <Link to="/friends">My Friends</Link>
            <Link to="/groups">My Groups</Link>
            <Link to="/parties">My Parties</Link>
            <Link to="/messages">My Messages</Link>
            <Link to="/account">My Account</Link>
            <Link to="/privacy">My Privacy</Link>
        </div>
    </div>
}

export default Sidebar