import {useState} from "react";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Field, FieldLabel } from "@/components/ui/field"
import { ButtonGroup } from "@/components/ui/button-group"

function Home () {
    const [raca, setRaca] = useState("");
    return (
        <div className="flex justify-center flex-col items-center">
            <h1 class="text-4xl">🐶 DogDex</h1>           
            <Field className="max-w-80">
                <FieldLabel htmlFor="input-button-group" class="italic" >Aprenda sobre diferentes raças:</FieldLabel>
                 <ButtonGroup>
                    <Input 
                        id="input-button-group" 
                        placeholder="Digite uma raça" 
                        onChange={(e) => {
                        setRaca(e.target.value)}}
                        />
                        <Button variant="outline">Pesquisar</Button>
                </ButtonGroup>
            </Field>
            <p>Você digitou: {raca}</p>
        </div>    
);
}

export default Home;

