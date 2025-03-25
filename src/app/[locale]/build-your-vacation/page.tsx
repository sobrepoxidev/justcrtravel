//src\app\[locale]\build-your-vacation\page.tsx
'use client';
import { useActionState } from 'react';
import { handleVacationForm } from "../../../actions";

import Navbar from "@/components/general/NavBar";
import Footer from "@/components/general/Footer";
import WhatsAppButton from "@/components/general/WhatsAppButton";

// 2) Server Component que incluye el formulario
export default function BuildYourVacations() {
  const [state, formAction] = useActionState(handleVacationForm, null);
  return (
    <div>
      <Navbar />

      <div className="max-w-5xl mx-auto pt-36 pb-12">
        <h1 className="text-5xl font-bold text-start mb-8">
          BUILD YOUR VACATION
        </h1>

        {/* Formulario que apunta a la Server Action definida arriba */}
        <form
          action={formAction}
          className="grid grid-cols-2 gap-6"
        >
          {/* Columna Izquierda */}
          <div>
            <label className="block mb-1 font-medium">What?</label>
            <select name="what" className="border w-full mb-4 p-2">
              <option value="ATV">ATV</option>
              <option value="Canopy">Canopy</option>
              <option value="Waterfalls">Waterfalls</option>
              <option value="Hiking">Hiking</option>
              {/* Agrega más opciones según necesites */}
            </select>

            <label className="block mb-1 font-medium">ARRIVAL</label>
            <input
              type="date"
              name="arrival"
              className="border w-full mb-4 p-2"
            />

            <label className="block mb-1 font-medium">DEPARTURE</label>
            <input
              type="date"
              name="departure"
              className="border w-full mb-4 p-2"
            />

            <label className="block mb-1 font-medium">First Name *</label>
            <input
              type="text"
              name="firstName"
              required
              className="border w-full mb-4 p-2"
            />

            <label className="block mb-1 font-medium">Phone</label>
            <input
              type="tel"
              name="phone"
              className="border w-full mb-4 p-2"
            />
          </div>

          {/* Columna Derecha */}
          <div>
            <label className="block mb-1 font-medium">Where?</label>
            <select name="where" className="border w-full mb-4 p-2">
              <option value="Arenal">Arenal</option>
              <option value="Monteverde">Monteverde</option>
              <option value="Manuel Antonio">Manuel Antonio</option>
              {/* Agrega más opciones según necesites */}
            </select>

            <label className="block mb-1 font-medium">ADULTS</label>
            <input
              type="number"
              name="adults"
              className="border w-full mb-4 p-2"
            />

            <label className="block mb-1 font-medium">KIDS</label>
            <input
              type="number"
              name="kids"
              className="border w-full mb-4 p-2"
            />

            <label className="block mb-1 font-medium">Last Name *</label>
            <input
              type="text"
              name="lastName"
              required
              className="border w-full mb-4 p-2"
            />

            <label className="block mb-1 font-medium">Email *</label>
            <input
              type="email"
              name="email"
              required
              className="border w-full mb-4 p-2"
            />
          </div>

          {/* Botón de Submit */}
          <div className="col-span-2 flex justify-end">
            <button
              type="submit"
              className="bg-gray-800 text-white py-2 px-8 rounded"
            >
              Submit
            </button>
          </div>
        </form>
        {state && (
          <p className={state.success ? 'text-green-600' : 'text-red-600'}>
            {state.message}
          </p>
        )}
      </div>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
