//Importar estilos globales
import "./globals.css";

// Importar la fuente Manrope desde Google Fonts
import{Urbanist} from "next/font/google"



// // Metadatos de la aplicación
export const metadata = {
  title: "TICWAY | Empresa de Informática y Tecnología en Vitoria", // Título de la Página Web
  description: "Outsourcing Tecnológico",
};


// Configuración de la fuente Urbanist
const Urbanistfont = Urbanist({
  subsets: ["latin"],
  weight: [ '200' ,'300' , '400' , '500' , '600' , '700'],
  display: "swap"
})


// Componente de diseño principal
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link
  rel="stylesheet"
  type="text/css"
  charset="UTF-8"
  href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
/>
<link
  rel="stylesheet"
  type="text/css"
  href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
/>
      </head>
        {/* Cuerpo de la página con la clase de la fuente Manrope */}
      <body className={Urbanistfont.className}>{children}</body>
    </html>
  );
}
