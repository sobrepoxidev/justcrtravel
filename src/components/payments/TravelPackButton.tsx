// components/payments/TravelPackButton.jsx
"use client"
import React from "react";


export default function TravelPackButton({ color, amount }: { color: string, amount: number }) {
  // -------------- state --------------
 
  return (
    <form
      action="https://www.paypal.com/cgi-bin/webscr"
      method="post"
      target="_blank"
      className="relative flex flex-col items-center justify-center 
                 w-52 h-30 rounded-full text-center"
      style={{ backgroundColor: color }}
    >
      {/* Inputs ocultos de PayPal */}
      <input type="hidden" name="cmd" value="_xclick" />
      {/* Correo del “merchant” (tu cuenta PayPal) */}
      <input type="hidden" name="business" value="Info@justcostaricatravel.com" />
      {/* Nombre del producto/servicio */}
      <input type="hidden" name="item_name" value="TRAVEL PACK" />
      {/* Monto en USD */}
      <input type="hidden" name="amount" value={amount} />
      <input type="hidden" name="currency_code" value="USD" />

      <h3 className="text-2xl font-bold leading-tight">
        TRAVEL{" "}
        {/* Contenedor que encierra la palabra PACK */}
        <span className="relative inline-block">
          PACK
          {/* SVG que dibuja un círculo “a mano” alrededor de PACK */}
          <span className="absolute -inset-1">
            <svg viewBox="45 0 5 40" className="w-full h-full overflow-visible">
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

      {/* Botón que envía el formulario a PayPal */}
      <button
        type="submit"
        className="bg-blue-700 text-white px-4 py-1 rounded-full mt-2"
      >
        Buy Now
      </button>
    </form>
  );
}
