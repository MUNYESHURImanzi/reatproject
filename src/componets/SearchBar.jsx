import search from "../assets/search.svg";




const SearchBar = (props) => {
  return (
    < div className="search">
      <div className="search-bar">
       
        <div className="search-bar-input">
          
          <div className="searchIcon">
        <img src={search}/>
        </div>
          <input type="search" placeholder={props.placeholder}></input>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
