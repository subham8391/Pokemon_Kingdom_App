import logo from './logo.svg';
import {useState,useEffect} from "react";
import './App.css';
import PokemonCard from './Component/pokemonCard';
import LoadingAnimation from './Component/LoadingAnimation';

function App() {
  const[pokemonList,setpokemonList]=useState([]);
  const[looding,setLooding]=useState(true);
  const[url,setUrl]=useState("https://content.newtonschool.co/v1/pr/64ccef982071a9ad01d36ff6/pokemonspages1")
  async function createPokemonObject(data){
    const{results=[]}=data;
    let newPokemonList=[];
      for(const pokemon of results){
        // api call again to get the sata of pokemon
        const{url}=pokemon;
        const response=await fetch(url);
        const data=await response.json();
        newPokemonList.push(data[0]);
      }
      setpokemonList((prevPokemonList)=>[...prevPokemonList,...newPokemonList]);
    
  }
  async function getAllPokemon(){
    const response=await fetch(url,{method: "get"});
    let data= await response.json();
    data=data[0];
    await createPokemonObject(data);
    //Resating the looding
    setLooding(false);
    //update url
    setUrl(data.next);
  }
  // side effect=>api call
  useEffect(()=>{
   getAllPokemon();
  //  return ()=>{
  //   setpokemonList([]);
  //  }
  },[]);
  return (
    <div className="App">
      {/* <h1>Pokemon Kingdom</h1> */}
      {looding ?(<LoadingAnimation/>):(
      <div className='main-container'>
        {/* headder section */}
        <div className='heading-section'>
          <h1>Pokemon Kingdom</h1>
          <h1>Pokemon Kingdom</h1>
        </div>
        {/* Pokemon container */}
        <div className='pokemon-container'>
            {
              pokemonList&&pokemonList.length && pokemonList.map((pokemon)=>{
                return <PokemonCard key={pokemon.id} pokemon={pokemon} />;
              })
            }
        </div>

        <button className={'nextBtn'} onClick={()=>{getAllPokemon()}}>Load-More</button>
      </div>
      )}
    </div>
  );
}

export default App;





//////////////////////////////////////////

// Sites that pay you for this: 1. UserTesting https://www.usertesting.com/ 2. UTest https://www.utest.com/ 3. Enroll https://enrollapp.com/ 4. StartUpLift https://startuplift.com/get-paid-to-p... 5. UserFeel 6. TryMyUI 7. UserZoom 8. TestBirds 9.