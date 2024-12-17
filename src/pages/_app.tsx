import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";

export default function App({ Component, pageProps }: AppProps) {
  const formatDate = new Date().toLocaleDateString('es-ES', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
  return (
    <div className="container-navbar">
      <div className="navbar">
        <img src="/img/logo.jpg" alt="Zone Sports Logo" className="logo"/>
        <Link href='/'>Inicio</Link>
        <Link href='/catalog'>Catálogo</Link>
        <Link href='/contact'>Contacto</Link>
      </div>
      <Component {...pageProps} />
      <footer className='footer'>
        <p>&copy; {formatDate} - Los mejores articulos deportivos. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
