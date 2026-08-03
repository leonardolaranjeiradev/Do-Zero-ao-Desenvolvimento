import {useState} from "react";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Field, FieldLabel } from "@/components/ui/field"
import { ButtonGroup } from "@/components/ui/button-group"
import {
DropdownMenu,
DropdownMenuContent,
DropdownMenuItem,
DropdownMenuTrigger,} from "@/components/ui/dropdown-menu"


function Home () {
    const [raca, setRaca] = useState("");
    const [resultado, setResultado] = useState("")
    
    function pesquisar() {
    setResultado(raca)}
    return (

        <div className="pagina">
            <div className="titulo flex justify-center flex-col items-center">
                <h1 className="text-8xl mb-8 mt-8"> 
                🐶 <span className="text-black">Dog</span>
                <span className="text-orange-600">Dex</span> 
                </h1>
                
            </div>            
            <div className="pesquisa flex justify-center flex-col items-center mt-25">
                <Field className="max-w-80 border p-8 rounded-xl bg-blue-300">
                    <FieldLabel htmlFor="input-button-group" class="italic" >Aprenda sobre diferentes raças:</FieldLabel>
                        <ButtonGroup>
                            <Input 
                                id="input-button-group" 
                                placeholder="Digite uma raça"
                                onChange={(e) => {
                                setRaca(e.target.value)}}

                                onKeyDown={(e) => {
                                    if (e.key === "Enter") {
                                        pesquisar()}}}/>

                                <Button variant="outline"
                                class= "bg-orange-300"​ 
                                onClick= {pesquisar}>Pesquisar</Button>
                        </ButtonGroup>
                </Field>
            </div>
            <div className="resultado flex justify-center flex-col items-center mt-30"> 
                <p>Você digitou: {resultado}</p>    
            </div>            
            
            <div className="controles pt-30 pl-10"> 
                <DropdownMenu>
                    <DropdownMenuTrigger className="border bg-purple-200 rounded-xl">
                        Tema ▼
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuItem>
                            Claro
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            Escuro
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>​‌
                <DropdownMenu>
                    <DropdownMenuTrigger className="border bg-green-200 rounded-xl">
                        🌎 Idioma ▼
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuItem>
                            Português
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            Inglês
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>​‌
            </div>    
                        
        </div>    
);
}

export default Home;



