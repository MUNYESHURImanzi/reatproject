import '../Css/Navbar.css'
import { Link } from 'react-router-dom'
const Navbar =()=>{
    return(
        <>
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/movie'>movie</Link></li>
            <li><Link to='/video'>video</Link></li>
            <li><Link to='/television'>television</Link></li>
            <li><Link to='/profile'>profile</Link></li>
        </ul>
        </>
    )
}
export default Navbar