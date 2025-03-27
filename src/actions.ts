"use server";

import { sendMail } from '@/lib/email';

// Define interfaces for type safety
interface VacationFormData {
  what: string[];
  where: string[];
  arrival: string;
  departure: string;
  adults: number;
  kids: number;
  firstName: string;
  lastName: string;
  phone?: string;
  email: string;
  comments?: string;
}

// Mapping for activities and destinations
const ACTIVITIES = {
  'ATV': '🏍️ ATV Adventure',
  'Canopy': '🌳 Canopy Tour',
  'Canyoning': '🏞️ Canyoning',
  'Catamaran': '⛵ Catamaran Tour',
  'ChocolateTours': '🍫 Chocolate Tours',
  'CityTours': '🏙️ City Tours',
  'CoffeeTour': '☕ Coffee Tour',
  'Diving': '🤿 Diving',
  'HangingBridges': '🌉 Hanging Bridges',
  'Hiking': '🥾 Hiking Expedition',
  'HorsebackRiding': '🐎 Horseback Riding',
  'LearnSpanish': '📚 Learn Spanish',
  'Rafting': '🛶 Rafting',
  'Snorkeling': '🤿 Snorkeling',
  'SUP': '🏄 SUP (Stand Up Paddle)',
  'VisitToFarms': '🚜 Visit to Farms',
  'Waterfalls': '💦 Waterfall Exploration'
};

const DESTINATIONS = {
  'Arenal': 'Arenal - Volcanic Paradise',
  'Conchal': 'Conchal - Beach Getaway',
  'Flamingo': 'Flamingo - Coastal Charm',
  'ManuelAntonio': 'Manuel Antonio - National Park',
  'Monteverde': 'Monteverde - Cloud Forest',
  'Papagayo': 'Papagayo - Peninsula Escape',
  'Samara': 'Samara - Laid-back Beach',
  'Sarapiqui': 'Sarapiquí - Rainforest Adventure',
  'Tamarindo': 'Tamarindo - Surf Town'
};

export async function handleVacationForm(_: unknown, formData: FormData) {
  // Parse form data with multi-select support
  const data: VacationFormData = {
    what: formData.get("what")?.toString().split(',') || [],
    where: formData.get("where")?.toString().split(',') || [],
    arrival: formData.get("arrival")?.toString() || '',
    departure: formData.get("departure")?.toString() || '',
    adults: parseInt(formData.get("adults")?.toString() || '0', 10),
    kids: parseInt(formData.get("kids")?.toString() || '0', 10),
    firstName: formData.get("firstName")?.toString() || '',
    lastName: formData.get("lastName")?.toString() || '',
    phone: formData.get("phone")?.toString(),
    email: formData.get("email")?.toString() || '',
    comments: formData.get("comments")?.toString()
  };

  // Create a more detailed and visually appealing HTML email
  const html = `
  <!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      line-height: 1.4;
      color: #333;
      max-width: 600px;
      margin: 0 auto;
      padding: 15px;
      background-color: #f4f4f4;
    }
    .container {
      background-color: white;
      border-radius: 10px;
      padding: 20px;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    }
    .header {
      background-color: #2563eb;
      color: white;
      text-align: center;
      padding: 10px;
      border-radius: 5px;
      margin-bottom: 15px;
    }
    .section {
      margin-bottom: 15px;
      border-bottom: 1px solid #e0e0e0;
      padding-bottom: 10px;
    }
    .detail {
      display: flex;
      justify-content: space-between;
      margin-bottom: 8px;
    }
    .label {
      font-weight: bold;
      color: #2563eb;
    }
    .value {
      text-align: right;
    }
    .activities, .destinations {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }
    .badge {
      background-color: #e0f2fe;
      color: #0284c7;
      padding: 4px 8px;
      border-radius: 15px;
      font-size: 1.2em;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>🌴 Nueva Solicitud de Vacaciones - Just Costa Rica Travel 🏖️</h1>
    </div>

    <div class="section">
      <h2>Datos Personales</h2>
      <div class="detail">
        <span class="label">Nombre</span>
        <span class="value">${data.firstName} ${data.lastName}</span>
      </div>
      <div class="detail">
        <span class="label">Correo</span>
        <span class="value">${data.email}</span>
      </div>
      <div class="detail">
        <span class="label">Teléfono</span>
        <span class="value">${data.phone || 'No proporcionado'}</span>
      </div>
    </div>

    <div class="section">
      <h2>Detalles del Viaje</h2>
      <div class="detail">
        <span class="label">Llegada</span>
        <span class="value">${data.arrival}</span>
      </div>
      <div class="detail">
        <span class="label">Salida</span>
        <span class="value">${data.departure}</span>
      </div>
      <div class="detail">
        <span class="label">Viajeros</span>
        <span class="value">${data.adults} Adultos, ${data.kids} Niños</span>
      </div>
    </div>

    <div class="section">
      <h2>Actividades Seleccionadas</h2>
      <div class="activities">
        ${data.what.map(activity => 
          `<span class="badge">${ACTIVITIES[activity as keyof typeof ACTIVITIES] || activity}</span>`
        ).join('')}
      </div>
    </div>

    <div class="section">
      <h2>Destinos de Interés</h2>
      <div class="destinations">
        ${data.where.map(destination => 
          `<span class="badge">${DESTINATIONS[destination as keyof typeof DESTINATIONS] || destination}</span>`
        ).join('')}
      </div>
    </div>

    ${data.comments ? `
    <div class="section">
      <h2>Notas Adicionales</h2>
      <p style="background-color: #f0f9ff; padding: 10px; border-radius: 5px;">
        ${data.comments}
      </p>
    </div>
    ` : ''}

    <div style="text-align: center; margin-top: 15px; color: #718096;">
      <p>📆 Procesado el: ${new Date().toLocaleString()}</p>
    </div>
  </div>
</body>
</html>
  `;

  try {
    await sendMail('Nueva Solicitud de Vacaciones - Just CR Travel', html);
    return { success: true, message: 'Correo enviado con éxito' };
  } catch (error: unknown) {
    console.error("Error enviando correo:", error);
    return { success: false, message: 'Hubo un error al enviar el correo' };
  }
}