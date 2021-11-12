import ReactPlayer from "react-player"
import { Link } from "react-router-dom"
const SingleGame = ({games, match}) => {
    
    const id = parseInt(match.params.id)
    const game = games.find((game) => game.id === id)
    console.log(game)
    return(
        <div>
            <Link to = "/"><button>HOME</button></Link>
            <div className='singlegame'>
            
            <h1>{game?.title}</h1>
            <ReactPlayer 
            url = {game?.video}
            loop = {true}
            volume = {0}
            playing= {true}
            width = {'400px'}
            />
            <p>Publisher: {game?.company}</p>
            <p>Genre: {game?.genre}</p>            
            <img className = "gameimg" src = {game?.image}/>
            <p className='description'>{game?.synopsis}</p>
            <ReactPlayer 
            url={game?.trailer}
            width = {'400px'}
            />
           
        </div>
        </div>
       
    )
}

export default SingleGame