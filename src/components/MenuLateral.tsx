export const MenuLateral = () =>{
    return(
        <div className="bg-blue-950 p-3 flex flex-col rounded-2xl ">
            
            <p>Conta</p>
            <input type="select" />

            <div>
                <div>
                    <p>contas</p>
                    <p>Saldos</p>
                </div>
                <div>
                    <p>Itau</p>
                    <p>700,00R$</p>
                </div>
            </div>

            <div>
                <p>perido</p>
                <div>
                    <input type="datetime" name="" id="" />
                    <input type="datetime" name="" id="" />
                </div>
            </div>

            <div>
                <p>Ano</p>
                <input type="hidden" name="" />
            </div>
            <button>Limpar Filtros</button>
        </div>
    )
}