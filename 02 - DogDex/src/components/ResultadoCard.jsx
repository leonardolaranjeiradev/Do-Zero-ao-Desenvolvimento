function ResultadoCard({ dadosRaca }) {
    if (!dadosRaca) {
        return null
    }
    return (

        <div className="resultado flex justify-center flex-col items-center mt-5"> 
                        <div className="max-w-4xl border p-8 rounded-xl bg-blue-100">
                            <h2 className="mb-4"><strong>{dadosRaca?.name}</strong></h2>
                            <div className="flex gap-6">
                                <img className="w-45 rounded-xl"
                                src={dadosRaca?.image?.url}
                                alt={dadosRaca?.name}/>
                                <div className="informacoes flex flex-col gap-2">
                                    <p><strong>Raça:</strong> {dadosRaca?.name}</p>
                                    <p><strong>Origem:</strong> {dadosRaca?.origin}</p>
                                    <p><strong>Temperamento:</strong> {dadosRaca?.temperament}</p>
                                    <p><strong>Peso:</strong> {dadosRaca?.weight?.metric}</p>
                                    <p><strong>Expectativa de vida:</strong> {dadosRaca?.life_span}</p>
                                </div>
                            </div>
                        </div>
        </div>     
)}
export default ResultadoCard       