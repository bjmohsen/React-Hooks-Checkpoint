import Filmlist from "./Filmlist";
import { useState } from "react";
import useFiltre from "./Filtre";
import useAdd from "./Addfilm"
function App() {
  const [film,setfilm]=useState (
    [
        {
            titre : "aufhslc",
            description :"kzgfvv c" ,
            posterURL :"cHJB" ,
            note : 5
        },
        {
            titre : "QECE",
            description :"TUJT" ,
            posterURL :"JT" ,
            note :6
        },
        {
            titre : "EET",
            description :"E(" ,
            posterURL :"XVT" ,
            note :2
        }
    ]
  
)
const {add, handleChange, addFilm} = useAdd (film)
const {filtre ,setFiltre,filtreFilm}=useFiltre (film)
  return (
    <div>
      <div>

        <input placeholder="filtre by name" type ='text' value={filtre.name}
        onChange={(e)=>setFiltre({...filtre , name:e.target.value})} ></input>



        <input placeholder="filtre by rate" type ='number' value={filtre.rate}
        onChange={(e)=>setFiltre({...filtre , rate:e.target.value})}></input>
        
      </div>
      <Filmlist film={filtreFilm}/>
      <addFilm film={addFilm} />
     <div>
      title:<input placeholder="titre" type='text' name='titre' value={add.titre} onChange={handleChange}></input>
      description:<input placeholder="description" type='text' name='description' value={add.description} onChange={handleChange}></input>
      posterURL:<input placeholder="posterURL" type='text' name='posterURL' value={add.posterURL} onChange={handleChange} ></input>
      note:<input placeholder="note" type='numbre' name='note' value={add.note} onChange={handleChange} ></input>
      <button onClick={addFilm}>add</button>
     </div>
    </div>
  );
}

export default App;
