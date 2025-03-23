import { redirect } from "next/navigation";   // Para redirigir en el servidor
import Navbar from "@/components/general/NavBar";
import Footer from "@/components/general/Footer";

// 1) Server Action en el mismo archivo (gracias a "use server")
export async function handleVacationForm(formData: FormData) {
  "use server"; // Esto indica que la acción se ejecuta en el servidor

  // Lee cada campo por su "name" en el formulario
  const what = formData.get("what");
  const where = formData.get("where");
  const arrival = formData.get("arrival");
  const departure = formData.get("departure");
  const adults = formData.get("adults");
  const kids = formData.get("kids");
  const firstName = formData.get("firstName");
  const lastName = formData.get("lastName");
  const phone = formData.get("phone");
  const email = formData.get("email");

  // Aquí podrías guardar en DB, llamar a un servicio de email, etc.
  console.log("Form data del Server Action:", {
    what,
    where,
    arrival,
    departure,
    adults,
    kids,
    firstName,
    lastName,
    phone,
    email,
  });

  // Redirige a donde gustes:
  redirect("/thank-you");
}

// 2) Server Component que incluye el formulario
export default function BuildYourVacations() {
  return (
    <div>
      <Navbar />

      <div className="max-w-5xl mx-auto pt-36 pb-12">
        <h1 className="text-5xl font-bold text-start mb-8">
          BUILD YOUR VACATION
        </h1>

        {/* Formulario que apunta a la Server Action definida arriba */}
        <form
          action={handleVacationForm}
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
      </div>

      <Footer />
    </div>
  );
}
