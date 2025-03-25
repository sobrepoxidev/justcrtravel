// src/actions.ts
"use server";

import { sendMail } from '@/lib/email';

export async function handleVacationForm(_: any, formData: FormData) {
  const data = {
    what: formData.get("what"),
    where: formData.get("where"),
    arrival: formData.get("arrival"),
    departure: formData.get("departure"),
    adults: formData.get("adults"),
    kids: formData.get("kids"),
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    phone: formData.get("phone"),
    email: formData.get("email"),
  };

  const html = `
    <h2>Nueva Solicitud de Vacaciones</h2>
    <ul>
      <li><b>Tipo:</b> ${data.what}</li>
      <li><b>Lugar:</b> ${data.where}</li>
      <li><b>Llegada:</b> ${data.arrival}</li>
      <li><b>Salida:</b> ${data.departure}</li>
      <li><b>Adultos:</b> ${data.adults}</li>
      <li><b>Niños:</b> ${data.kids}</li>
      <li><b>Nombre:</b> ${data.firstName} ${data.lastName}</li>
      <li><b>Teléfono:</b> ${data.phone}</li>
      <li><b>Email:</b> ${data.email}</li>
    </ul>
  `;

  try {
    await sendMail('Nueva Solicitud de Vacaciones', html);
    return { success: true, message: 'Correo enviado con éxito' };
  } catch (error: unknown) {
    console.error("Error enviando correo:", error);
    return { success: false, message: 'Hubo un error al enviar el correo' };
  }
}
