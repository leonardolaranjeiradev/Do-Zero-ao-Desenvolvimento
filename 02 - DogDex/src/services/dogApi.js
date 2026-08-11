export async function buscarRaca(raca) {
    const resposta = await fetch(`https://api.thedogapi.com/v1/breeds/search?q=${raca}`, {
        headers: {
            "x-api-key": "live_01PmB9SDXdrk1JF8cB1IiPXLQCm7QjcGBkWLC4ETDyX9vZPVeYZC9DK5RBFCAuJ7"
        }
    }
    )
    const dados = await resposta.json()
    return dados    
    }

    export async function buscarTodasRacas() {
        const resposta = await fetch("https://api.thedogapi.com/v1/breeds",
        {
        headers: {"x-api-key": "live_01PmB9SDXdrk1JF8cB1IiPXLQCm7QjcGBkWLC4ETDyX9vZPVeYZC9DK5RBFCAuJ7"}
        }) 
        const dados = await resposta.json()
         
        return dados
        }