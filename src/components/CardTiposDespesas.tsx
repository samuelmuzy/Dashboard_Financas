import { FaSackDollar } from "react-icons/fa6";

interface CardTiposDespesasProps{
    tipoDespesa:string,
    valorGasto:number;
}

export const CardTiposDespesas = ({tipoDespesa,valorGasto}:CardTiposDespesasProps) =>{
    return(
        <div className="border-l-2 border-cyan-700 h-16 m-6 p-2 flex items-center gap-6 rounded-2xl">
            <FaSackDollar className="text-cyan-700 h-full border-2 rounded-4xl p-2 w-20"/>
            <div>
                <p className="text-cyan-700">{tipoDespesa}</p>
                <p className="text-cyan-700">{"R$ " + valorGasto}</p>

            </div>
        </div>
    )
}