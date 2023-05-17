import Search from './SearchBar.jsx'
import Sidebar from "./Sidebar.jsx";

function MainLayout({children}) {

    return(
        <>
      <Search/>
      <Sidebar/>
      {children}

        </>
    )
    
}
export default MainLayout