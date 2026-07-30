import {useState} from "react";

function Home () {
    const [raca, setRaca] = useState("");
    return (
        <div>
            <h1>🐶 DogDex</h1>
            <p>Pesquise, descubra e aprenda sobre diferentes raças.</p>
            <input                 
                placeholder="Digite uma raça"
                onChange={(e) => {
                setRaca(e.target.value)}}/>​‌             
            <button>Pesquisar</button>
            <p>Você digitou: {raca}</p>
        </div>    
);
}

export default Home;