import "./style.css";
import Sidebar from "./Sidebar";
import SearchBar from "./SearchBar";
import MovieCard from "./movieCard";
import Avenger from "../assets/Avengers.jpg";
import Captain from "../assets/Captain.jpg";
import Tree from "../assets/pixel.jpg";
import New from "../assets/nwe.jpg";
import black from "../assets/black.jpg";
import Movie from "../assets/movi.jpg";
import sidebar from "./Sidebar";
import fav from "./Fav.jsx";





function App() {
  return (
    <>
      <div className="container">

        <div className="nav">
          <Sidebar />
        </div>
        <div className="mainContent">
          <div>
            <SearchBar placeholder="Search for movies and TV series" />
          </div>
          <div className="div">
            <div>
              <h3 className="whiteTitle">Trending</h3>
            </div>
            <div className="upperContent">
              <div>
                <MovieCard
                fav={fav}
                  backImage={New}
                  movieClass="movie"
                  cardContentClass="moveUp"
                  year="2019"
                  category="Movie"
                  pg="PG"
                  movieName="Beyong Earth"
                />
              </div>
              <div>
                <MovieCard
                  backImage={Captain}
                  movieClass=""
                  cardContentClass="moveUp"
                  year="2019"
                  category="Movie"
                  pg="PG"
                  movieName="Beyong Earth"
                />
              </div>
              
              <div>
                <MovieCard
                  backImage={Avenger}
                  movieClass=""
                  cardContentClass="moveUp"
                  year="2019"
                  category="Movie"
                  pg="PG"
                  movieName="Beyong Earth"
                />
                </div>
            </div>
            <div className="div2">
              <div>
                <h3 className="whiteTitle">Recommended for you</h3>
              </div>
              <div className="lowerContent">
                <div>
                  <MovieCard
                    backImage={Tree}
                    movieClass="small"
                    cardContentClass=""
                    year="2019"
                    category="Movie"
                    pg="PG"
                    movieName="Beyong Earth"
                  />
                </div>
                <div>
                  <MovieCard
                    backImage={Tree}
                    movieClass="small"
                    cardContentClass=""
                    year="2019"
                    category="Movie"
                    pg="PG"
                    movieName="Beyong Earth"
                  />
                </div>
                <div>
                  <MovieCard
                   image={fav}
                    backImage={black}
                    movieClass="small"
                    cardContentClass=""
                    year="2019"
                    category="Movie"
                    pg="PG"
                    movieName="Beyong Earth"
                  />
                </div>
                <div>
                  <MovieCard
                 image2={fav}
                    backImage={Movie}
                    movieClass="small"
                    cardContentClass=""
                    year="2019"
                    category="Movie"
                    pg="PG"
                    movieName="Beyong Earth"
                  />
                </div>
                <div>
                  <MovieCard
                  image2={fav}
                    backImage={Tree}
                    movieClass="small"
                    cardContentClass=""
                    year="2019"
                    category="Movie"
                    pg="PG"
                    movieName="Beyong Earth"
                  />
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
