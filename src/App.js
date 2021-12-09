import {useState, useEffect} from 'react'
import { useMatch, Route, Routes, Link } from "react-router-dom";
import './App.css';
import Home from './Pages/home'
import SingleGame from './Pages/singlegame'
import SearchBar from './Component/search';
import Footer from './Component/footer';

function App() {

const url = "https://videogame-628.herokuapp.com/videogame/"
const [game, setGames] = useState([])
const getGames = async() => {
  const response = await fetch(url)
  const data = await response.json()
  setGames(data)
  console.log(data)
  console.log(setGames)
}

const {search} = window.location
const query = new URLSearchParams(search).get('s')
const filterGames = (game, query) => {
  if (!query) {
    return game
  }
  return game.filter((game) => {
    const gameTitle = game.title.toLowerCase()
    return gameTitle.includes(query.toLowerCase())
  })
}

const filteredGames = filterGames(game, query)

console.log(getGames)
useEffect (() => {getGames()}, [])
  return (
    <div className="App">     
    <h1 className="title">Find a Game</h1>
     <Routes>
       
      <Route path = "/" element={<Home game = {game} filteredGame = {filteredGames}/>}>
      
        </Route>
        
        <Route path = '/:id'  element = {<SingleGame  games = {game} match={useMatch("/:id")}/>}></Route>

       
              
              
     
      
     </Routes>     
     <Footer />
    </div>
  );
}

export default App;
