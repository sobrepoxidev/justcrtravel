"use client"
import Navbar from "@/components/general/NavBar";
import Footer from "@/components/general/Footer";
import TravelPackButton from "@/components/payments/TravelPackButton";
import Step3_PayPal from "@/components/payments/StepPaypal";
import AnimatedBlobShape from '@/components/payments/BlobShape';
import { supabase } from "@/lib/supabaseClient";
import { useState } from "react";



export default function Payments() {
  const [createdOrderId, setCreatedOrderId] = useState(null);
  const [ amount, setAmount ] = useState(0);
  // -------------- createOrder() y resto --------------
  const createOrder = async (amount: number) => {
    // 1) Crear la orden en BD
    const totalAmount = amount;

    console.log("Creating order for amount: ", totalAmount);

    // Creamos la orden con estado "pending"
    const { data: orderInsert, error: orderError } = await supabase
      .from("TravelOrders")
      .insert({
        payment_status: "pending",
        total_amount: totalAmount
      })
      .select()
      .single();

    if (orderError || !orderInsert) {
      alert("Error creando la orden en la BD");
      return;
    }

    // 3) Guardamos orderId en el state
    setCreatedOrderId(orderInsert.id);
    setAmount(totalAmount);

    // 4) (Opcional) No vaciamos el carrito todavía, porque no está pagado
    // Esperamos a la confirmación final en PayPal
  };
  return (
    <div>
      <Navbar />
      <div className="container max-w-5xl mx-auto pt-36 ">
        {/* Sección con blob + texto */}
        <div className="flex flex-row mb-12">
          <div className="basis-1/3 flex items-center justify-center">
            <AnimatedBlobShape />
          </div>
          <h2 className="basis-2/3 pt-2 sm:pl-20 text-2xl font-mono">
            Enjoy your vacation in Costa Rica. Pay directly through Paypal or Card.
          </h2>
        </div>

        {/* Sección con los “travel packs” */}
        <div className="flex flex-row justify-center gap-8">

          <TravelPackButton color="#00d4ff" amount={50} createOrder={createOrder} />
          <TravelPackButton color="#57ff00" amount={100} createOrder={createOrder} />
          <TravelPackButton color="#ffc400" amount={500} createOrder={createOrder} />

        </div>
        <div className=" w-full max-w-full flex flex-col items-center justify-center">
          {createdOrderId && (
            <Step3_PayPal
              createdOrderId={createdOrderId}
              amount={amount}
              onPaymentSuccess={() => {
                alert("Pago completado!");
              }}
              onPaymentError={(msg) => {
                alert(msg);
              }}
            />
          )
          }
        </div>
      </div>
      <Footer />
    </div>
  );
}