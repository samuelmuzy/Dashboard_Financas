"use client";

import { useState } from "react";
import BarChart from "@/components/BarChart";
import BarTemporalChart from "@/components/BarTemporalChart";
import { CardSaldo } from "@/components/CardSaldo";
import { MenuLateral } from "@/components/MenuLateral";
import { Pizza } from "@/components/PizzaChat";

export default function Home() {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  return (
    <div className="flex h-full">
      {sidebarVisible && <MenuLateral />}
      <div className="bg-amber-50 w-full">
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
        </div>
        <div className="flex border-2 w-full">
          <BarChart />
          <Pizza/>
        </div>
        <div className="flex border-2 ">
          <BarTemporalChart/>
        </div>
        </div>
      </div>
    </div>
  );
}
