/**
 * The function `WorkWhitUs` renders a form for users to apply to join the team, with fields for name,
 * contact information, country, job position, and CV upload, along with a button to submit the
 * application.
 * @returns The `WorkWhitUs` component is being returned, which contains JSX elements for a form to
 * apply for a job position within a company. The form includes fields for name, contact number, email,
 * country, job vacancies, and the option to upload a CV. Additionally, there is a button to submit the
 * form and a section at the bottom mentioning to stay updated on news and job vacancies through
 */
import React from "react";
import '../styles/pages/WorkWhitUs.css'
import Header from '../dashboard/Header'
import { LinkedIn } from '../icons/LinkedIn'
export default function WorkWhitUs() {
  return (
    <section>
      <Header />
      <div className="team-head-container">
        <h1>Sé parte de</h1>
        <span>Nuestro equipo</span>
      </div>
      <main className="team-form-container">
        <form action="">
          <div>
            <label htmlFor="input">Nombre completo</label>
            <input type="text" placeholder="Nombres y apellidos" />
          </div>
          <div>
            <label htmlFor="input">Número de contacto</label>
            <input type="text" placeholder="Teléfono de contacto" />
          </div>
          <div>
            <label htmlFor="input">Correo electrónico</label>
            <input type="text" placeholder="Correo electrónico de contacto" />
          </div>
          <div>
            <label htmlFor="form-name">Pais</label>
            <select type="text" placeholder="Colombia">
              <option value="">Colombia</option>
              <option value="">Panamá</option>
              <option value="">México</option>
              <option value="">Chile</option>
              <option value="">Ecuador</option>
              <option value="">Peru</option>
            </select>
          </div>
          <div>
            <label htmlFor="form-name">Vacantes</label>
            <select type="text" placeholder="Servicio al cliente">
              <option value="">Servicio al cliente</option>
              <option value="">Comercial</option>
              <option value="">Logística</option>
              <option value="">Administrativo</option>
              <option value="">Recursos Humanos</option>
              <option value="">Desarrollo</option>
              <option value="">Diseño</option>
              <option value="">Marketing</option>
            </select>
          </div>
          <div>
            <label htmlFor="">Adjunta tu CV</label>
            <input className="form-file" type="file" name="" id="" />
          </div>
        </form>
        <div className="button-form">
          <button>Enviar</button>
        </div>
      </main>
      <div className="span-footer-ofertas">
        <h1>Entérate de nuestras novedades y vacantes en </h1>
        <div>
          <LinkedIn />
        </div>
      </div>
    </section>
  )
}