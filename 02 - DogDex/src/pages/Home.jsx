import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Field, FieldLabel } from "@/components/ui/field"
import { ButtonGroup } from "@/components/ui/button-group"
import {
DropdownMenu,
DropdownMenuContent,
DropdownMenuItem,
DropdownMenuTrigger,} from "@/components/ui/dropdown-menu"
import { buscarRaca, buscarTodasRacas } from "../services/dogApi"
import ResultadoCard from "../components/ResultadoCard"
import logo from "../assets/logo.png"

function Home () {
    const [raca, setRaca] = useState("");
    const [resultado, setResultado] = useState("");
    const [dadosRaca, setDadosRaca] = useState(null);
    const [sugestoes, setSugestoes] = useState([])
    const [todasRacas, setTodasRacas] = useState([])

    useEffect(() => {
        async function carregarRacas() {
            const dados = await buscarTodasRacas()
            setTodasRacas(dados)
        }
        carregarRacas()
    }, [])


    async function buscarSugestoes(valorDigitado) {
        setRaca(valorDigitado)

        if(valorDigitado.length < 1) {
            setSugestoes([])
            return
        }
        const resultadoFiltro = todasRacas.filter((raca) =>
            raca.name.toLowerCase().includes(valorDigitado.toLowerCase()))
        setSugestoes(resultadoFiltro)
    }

    async function pesquisar() {
        const dados = await buscarRaca(raca)
        setDadosRaca(dados[0])
    }
    
    return (

        <div className="pagina min-h-screen bg-gray-200">
            <div className="titulo flex justify-center flex-col items-center">
                <div className="flex items-center gap-4 mb-8 mt-8">
                    <img 
                        src={logo}
                        alt="DogDex"
                        className="w-30"/>
                    <h1 className="text-7xl">                        
                        <span className="text-black">Dog</span>
                        <span className="text-orange-600">Dex</span>
                    </h1>
                        

                </div>
                
                
            </div>            
            <div className="pesquisa flex justify-center flex-col items-center mt-10">
                <Field className="max-w-80 border p-8 rounded-xl bg-blue-800">
                    <FieldLabel htmlFor="input-button-group" className="italic text-white" >Aprenda sobre diferentes raças:</FieldLabel>
                        <ButtonGroup>
                            <Input 
                                id="input-button-group" 
                                value={raca}
                                placeholder="Digite uma raça"
                                className="placeholder:text-white/60"
                                onChange={(e) => {
                                buscarSugestoes(e.target.value)}}

                                onKeyDown={(e) => {
                                    if (e.key === "Enter") {
                                        pesquisar()}}}/>

                                <Button variant="outline"
                                className= "bg-orange-400 text-white"​ 
                                onClick= {pesquisar}>Pesquisar</Button>
                        </ButtonGroup>
                        {sugestoes.length > 0 && (
                            <div className="mt-2 w-full bg-white rounded-lg border">
                                
                                {sugestoes.slice(0,5).map((raca) => (
                                    <div
                                        key={raca.id}
                                        className="p-2 cursor-pointer hover:bg-gray-100"
                                        onClick={() => {
                                            setRaca(raca.name)
                                            setDadosRaca(raca)
                                            setSugestoes([])
                                        }}
                                    >
                                        {raca.name}

                                    </div>

                                ))}
                            </div>
                        )}
                </Field>
            </div>         
            <ResultadoCard dadosRaca={dadosRaca}/>   
            
            <div className="controles fixed bottom-5 left-5"> 
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



