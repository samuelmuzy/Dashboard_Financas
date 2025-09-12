interface CardSaldoProp{
    label:string;
    valor:number;
}

export const CardSaldo = ({label,valor}:CardSaldoProp) =>{
    return(
        <>
            <div className="w-72 p-2 m-4 bg-blue-500 h-20 rounded-2xl">
                <p>{label}</p>
                <p className="text-2xl ml-5">{"R$ "+ valor}</p>
            </div>
        </>
    )
}