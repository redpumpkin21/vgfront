
import { Link } from "react-router-dom"
import SearchBar from "../Component/search"
const Home = (props) => {
    
    return(
        
        <div>
            <SearchBar />
            <div className ='container'>
            
            {props.filteredGame.map((game, index) => {
                return(
                    <div className = "homep">
                    <h1>{game.title}</h1>
                    <p>{game.genre}</p>
                    <p>{game.company}</p>
                    <Link to = {`/${game.id}`}>
                    <img src={game.image}/>
                    </Link>
                    
                    </div>
                    
                )
            })}
            
        </div>
        </div>
        
    )
}
export default Home