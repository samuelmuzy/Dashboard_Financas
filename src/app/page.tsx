"use client";

import { useState } from "react";
import BarChart from "@/components/BarChart";
import BarTemporalChart from "@/components/BarTemporalChart";
import { CardSaldo } from "@/components/CardSaldo";
import { MenuLateral } from "@/components/MenuLateral";
import { Pizza } from "@/components/PizzaChat";
import { CardTiposDespesas } from "@/components/CardTiposDespesas";
import { PizzaAsinaturas } from "@/components/PizzaAsinaturas";

export default function Home() {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  return (
    <div className="flex h-full ">
      {sidebarVisible && <MenuLateral />}
      <div className="bg-amber-50 w-full flex flex-col justify-center items-center">
        <div className="p-4">
          <button
            onClick={() => setSidebarVisible(!sidebarVisible)}
            className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          >
            {sidebarVisible ? 'Ocultar' : 'Mostrar'} Menu Lateral
          </button>

          <div className="flex justify-center">
            <CardSaldo label="Saldo" valor={12.00} />
            <CardSaldo label="Entrada" valor={12.00} />
            <CardSaldo label="Despesas" valor={12.00} />
            <CardSaldo label="Lucro" valor={12.00} />
          </div>
          <div className="flex w-full justify-center">
            <BarChart />
            <Pizza />
          </div>
          <div className="flex justify-center">
            <BarTemporalChart />
          </div>
          <div className="flex justify-center">
              <PizzaAsinaturas/>
            <div className="border-2 rounded-2xl border-cyan-700 flex p-6 m-2 h-3/5">
              <div className="p-5 m-5">
                <CardTiposDespesas tipoDespesa="Lazer" valorGasto={2000} />
                <CardTiposDespesas tipoDespesa="Moradia" valorGasto={13000} />
              </div>
              <div className="p-5 m-5">
                <CardTiposDespesas tipoDespesa="Cartão" valorGasto={1000} />
                <CardTiposDespesas tipoDespesa="Transporte" valorGasto={12000} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
