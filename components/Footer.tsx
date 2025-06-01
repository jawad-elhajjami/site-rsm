import React from 'react'

const Footer = () => {
  return (
    <footer>
        <div className="bg-slate-900 text-white py-8">
            <div className="container mx-auto text-center">
            <p className="text-sm">
                © {new Date().getFullYear()} Master Réseaux et Services Mobiles. Tous droits réservés.
            </p>
            <p className="text-sm mt-2 font-medium">
                Conçu avec ❤️ par <a href="https://elhajjami.tech/" target='_blank' className='text-blue-600 underline'>EL HAJJAMI Jawad </a>& <a href="https://www.linkedin.com/in/ikram-chamsi-80ab75228/" target='_blank' className='text-blue-600 underline'>CHAMSI Ikram</a>
            </p>
            </div>
        </div>
    </footer>
  )
}

export default Footer
