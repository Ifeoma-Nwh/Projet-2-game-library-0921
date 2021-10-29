import './App.css';
import React from 'react';
import Cards from './components/Cards';
import axios from 'axios';
let i =1;
let apiFilter = "https://rawg.io/api/games?key=1ff4a83b9ad54d31a63835f56db9e88d&page=1&page_size=10";

/*filtrer par platerforme parent : &parent_platforms=4*/
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []//permettera de stocker la réponse de l'API
    };
  }
 
   componentDidMount() {
    axios 
    .get(apiFilter)//requête
      .then(
        (res) => {
          //permet de transmettre à items la réponse de l'API grâce à "setState"
          console.log(res.data);
          this.setState({
            isLoaded: true,
            items : res.data.results
          });
        },
        // Remarque : il est important de traiter les erreurs ici
        // au lieu d'utiliser un bloc catch(), pour ne pas passer à la trappe
        // des exceptions provenant de réels bugs du composant.
        (error) => {
          this.setState({
            isLoaded: true,//permet de dire que l'application est entrain de charger l'API
            error
          });
        }
      )
  } 
  componentDidUpdate() {
     apiFilter = "https://rawg.io/api/games?key=1ff4a83b9ad54d31a63835f56db9e88d&page=" + i;
     axios 
     .get(apiFilter)//requête
       .then(
         (res) => {
           //permet de transmettre à items la réponse de l'API grâce à "setState"
           console.log(res.data);
           this.setState({
             isLoaded: true,
             items : res.data.results
           });
         },
         // Remarque : il est important de traiter les erreurs ici
         // au lieu d'utiliser un bloc catch(), pour ne pas passer à la trappe
         // des exceptions provenant de réels bugs du composant.
         (error) => {
           this.setState({
             isLoaded: true,//permet de dire que l'application est entrain de charger l'API
             error
           });
         }
       )
    }
  render() {
    const { error, isLoaded, items } = this.state;//Pour ne plus utiliser "this." par la suite
    console.log(items);
    if (error) {//si erreur on affiche laquel
      return <div>Erreur : {error.message}</div>;
    } else if (!isLoaded) {//si ca charge on affiche "chargement..."
      return <div style={{textAlign:"center"}}>Chargement…</div>;
    } else {
      return (
           <ul className='grid-parent'>
          {/*on va lire le tableau de la réponse parametre par parametre*/}
          {items.map(item => (
             <li key={item.id} style={{listStyle:'none'}} className='grid-enfant'>
               {/*A chaque lecture de parametre on crée une nouvelle carte en fonction du parametre(jeux)*/}
              <Cards image={item.background_image} 
              name={item.name} 
              released={item.released}
              genres={item.genres}  
              platformes={item.parent_platforms}         
              />
            </li> 
          ))}
          <a href="#">
          <button onClick={()=> i++}> plus i </button>
          <button onClick={()=> i--}> moins i </button>
          </a>
          </ul>
      );
    }
  }
}

export default App;
