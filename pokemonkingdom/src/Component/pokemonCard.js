import { useState } from "react";
import ExpendededView from "./ExpendedView";
import '../App.css';

function PokemonCard(props) {
   const[isModalVisible,setModalVisible]=useState(false);
    const { pokemon} = props;
    const {id,name,image,type,height,weight,prop1,prop2}=pokemon;

    //get the states details

    function getStaticstics(){
    const nameStat1=pokemon.stats[0].stat.name;
    const Stat1Point=pokemon.stats[0].base_stat;

    const nameStat2=pokemon.stats[1].stat.name;
    const Stat2Point=pokemon.stats[1].base_stat;

    const nameStat3=pokemon.stats[2].stat.name;
    const Stat3Point=pokemon.stats[2].base_stat;

    const nameStat4=pokemon.stats[3].stat.name;
    const Stat4Point=pokemon.stats[3].base_stat;

    const nameStat5=pokemon.stats[4].stat.name;
    const Stat5Point=pokemon.stats[4].base_stat;

    const nameStat6=pokemon.stats[5].stat.name;
    const Stat6Point=pokemon.stats[5].base_stat;

    const statesObj={nameStat1,nameStat2,nameStat3,nameStat4,nameStat5,nameStat6,
      Stat1Point,Stat2Point,Stat3Point,Stat4Point,Stat5Point,Stat6Point,
    }
    return statesObj;
    }


    const handleModalOpen=()=>{
      if(!isModalVisible){
        setModalVisible(true);
      }
    }
    return (
      <>
      <div className={`card-container ${type}`}>
        <div className='number'>{id}</div>
        <img src={image} alt={name} />
        <div className={"detail-container"}>
          <h2>{name.toUpperCase()}</h2>
          <h3>Type: {type.toUpperCase()}</h3>
        </div>
        <button className="pokeInfo" onClick={handleModalOpen}>Know-More</button>
      </div>
      {isModalVisible === true ?(<ExpendededView 
        height={height} weight={weight}
      type={type} setVisible={setModalVisible} 
      data={getStaticstics()} visble={isModalVisible} 
      image={image} name={name}
      />):null}
      </>
    );
  }
export default PokemonCard;