
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieCard from './MovieCard';
import Liste from './Liste';
import {useState}from 'react'
import Add from './Add';
function App() {
  const [movies, setMovies] = useState([        {
  title: "Cruella",
    description: "The film is set in 1970s London about the story of Corla de Ville's earlier life and childhood before she transforms into the Evil Lady from the animated film 101 Dalmatians, where we will see the factors that led to this transformation.",
    posterUrl: "https://fr.web.img2.acsta.net/pictures/21/02/17/16/12/0290309.jpg",
    rate: "4"
},
{
  title: "Fadherhood",
  description: "The events revolve in a dramatic setting, about a man who loses his wife one day after her birth, only to find himself forced to raise his daughter alone and discover the meaning and world of parenthood for a better future for the child",
  posterUrl: "https://img5.cdn.cinoche.com/images/232e2662367bdba050e380ad699b8808.jpg",
  rate: "2"
},
{
  title: "LUCA",
  description: "In a framework of adventure and fantasy, an Italian boy meets a sea monster disguised as a human, and a strong friendship develops between them, which defies all circumstances on the charming Italian beaches.",
  posterUrl: "https://lumiere-a.akamaihd.net/v1/images/image_2ff75a5c.jpeg?region=0%2C0%2C540%2C810",
  rate: "5" 
}]);
const addF=(newMovies)=>{
  setMovies([...movies,newMovies])
}
  return(
    <>
    <div className='container'>
      <Liste movies ={movies}/>
      </div>
      <Add addF={addF}/>
      </>
   
  )

}

export default App;
