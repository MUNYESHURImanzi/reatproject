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
import log from "../assets/tele.png"
import sidebar from "./Sidebar";






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
                 logo={log}
               
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
                  logo={log}
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
                   logo={log}
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
                    logo={log}
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
                 
                    backImage={black}
                    movieClass="small"
                    cardContentClass=""
                    logo={log}
                    year="2019"
                    category="Movie"
                    pg="PG"
                    movieName="Beyong Earth"
                  />
                </div>
                <div>
                  <MovieCard
                 
                    backImage={Movie}
                    movieClass="small"
                    cardContentClass=""
                    year="2019"
                    category="Movie"
                    pg="PG"
                    movieName="Beyong Earth"
                    logo={log}
                  />
                </div>
                <div>
                  <MovieCard
                   logo={log}
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
