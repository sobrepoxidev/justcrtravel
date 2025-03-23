// components/payments/TravelPackButton.jsx
"use client"
import React from "react";


export default function TravelPackButton({ color, amount, createOrder }: { color: string, amount: number, createOrder: (amount: number) => void }) {
  // -------------- state --------------
 
  return (
    <div
      className={`relative flex flex-col items-center justify-center 
                  w-52 h-30 rounded-full text-center`}
      style={{ backgroundColor: color }}
    >
      <h3 className="text-2xl font-bold leading-tight">
        TRAVEL{" "}
        {/* Contenedor que encierra la palabra PACK */}
        <span className="relative inline-block">
          PACK
          {/* Aquí metemos un SVG que dibuja un círculo "a mano" o un trazo alrededor de PACK */}
          <span className="absolute -inset-1">
            <svg
              viewBox="45 0 5 40"
              className="w-full h-full overflow-visible"
            >
              {/* 
                PATH con la forma aproximada de un óvalo (o círculo) 
                alrededor de la palabra. Ajusta el d para la forma que necesites 
              */}
              <path
                d="
                  M10,20 
                  C10,0 90,0 90,20 
                  C90,40 10,40 10,20 Z
                "
                fill="none"
                stroke="#FF0000"
                strokeWidth="3"
                strokeDasharray="200"
                strokeDashoffset="200"
                className="animate-drawCircle"
              />
            </svg>
          </span>
        </span>
      </h3>
      <p className="text-xl mt-0 font-semibold">${amount}</p>
      <button onClick={() => createOrder(amount)} className="bg-blue-700 text-white px-4 py-1  rounded-full mt-2">
        Buy Now
      </button>
    </div>
  );
}
