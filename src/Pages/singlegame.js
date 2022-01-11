import ReactPlayer from "react-player"
import { Link } from "react-router-dom"

const SingleGame = ({games, match}) => {
    
    const id = parseInt(match.params.id)
    const game = games.find((game) => game.id === id)
    console.log(game)
    return(
        
        
        <div className = 'single'>
            <Link to = "/"><button className = 'home'>HOME</button></Link>
            <div className='singlegame'>
            
            <h1>{game?.title}</h1>
            <div className="player-wrapper">
                <ReactPlayer 
                    className="react-player"
                    url = {game?.video}
                    loop = {true}
                    volume = {0}
                    playing= {true}
                    width = '100%'
                    height = {'400px'}
        
                />
            </div>
    
           
            <p>Publisher: {game?.company}</p>
            <p>Genre: {game?.genre}</p>            
            <img className = "gameimg" src = {game?.image}/>
            <p className='description'>{game?.synopsis}</p>
           
                <ReactPlayer 
                    url={game?.trailer}
                    width = {'500px'}
                    height = {'400px'}
                    className='react-player'
                />
           
            
          
        </div>
        </div>
       
    )
}

export default SingleGame