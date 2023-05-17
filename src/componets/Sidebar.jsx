import video from '../assets/vidoe.png'
import menu from '../assets/menu.png'
import movie from '../assets/movie.png'
import Book from '../assets/book.png'
import television from '../assets/tele.png'

import munyeshuri from '../assets/munyeshuri.jpg'
import { Link } from 'react-router-dom'


const Sidebar = () => {
  return (
    <>
      <div className="sideContainer">
        <div className="sideContent">
          <div className="sideIcon">
          <Link to="/">
            <img src={video} />
            </Link>
          </div>
          <div className="sideIcon">
          <Link to="/menu">
            <img src={menu} />
            </Link>
          </div>
          <div className="sideIcon">
          <Link to="/movie">
          <img src={movie} />
          </Link>
          </div>
          <div className="sideIcon">
          <Link to="/Television">
          <img src={television} />
          </Link>
          </div>
          <div className="sideIcon">
          <Link to="/favour">
          <img src={Book} />
          </Link>
          </div>
          
          <div className="sideIcon profile">
          <Link to="/profile">
          <img src={munyeshuri} />
          </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
