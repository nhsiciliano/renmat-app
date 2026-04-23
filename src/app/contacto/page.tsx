export default function ContactoPage() {
  return (
    <div className="bg-blue-50 px-10 py-5 lg:px-20 lg:py-10">
      <h2 className="text-xl lg:text-2xl text-red-800 mx-5 my-3">Contacto</h2>
      <hr className="border-red-800 mx-5" />
      <br />
      <div className="p-6 text-xl">
        <p>
          Ante cualquier duda con respecto al registro o al acceso al sistema
          REDCap podés comunicarte con nosotros mediante los siguientes medios:
        </p>
        <br />
        <p>
          - Email: <b>registroargmat@gmail.com</b>
        </p>
        <br />
        <p>
          - Teléfonos: <b>4809-1000 / 4809-1022</b>
        </p>
        <br />
        <p>
          Recordá que una vez que se completa el registro mediante nuestra
          plataforma nos pondremos en contacto mediante email para enviar los
          datos de acceso al sistema REDCap.
        </p>
      </div>
    </div>
  );
}
