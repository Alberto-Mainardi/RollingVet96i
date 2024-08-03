import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import facebookLogo from '../assets/media/facebookLogo.svg'
import instagramLogo from '../assets/media/instagramLogo.svg'
import youtubeLogo from '../assets/media/youtubeLogo.svg'
const Footer = () => {
    return (
        <footer className='d-flex flex-column justify-content-center bg-navBar w-100 text-white
         flex-lg-row justify-content-between  align-items-center  '>

            <div className='d-xl-flex align-items-start'>
                <iframe className='rounded-5 d-none d-lg-block ms-lg-3 my-lg-3' src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d7122.043846658648!2d-65.24575391572102!3d-26.807430555734165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sveterinaria%20del%20sol!5e0!3m2!1ses-419!2sar!4v1722474639817!5m2!1ses-419!2sar" width="200" height="200" title="Responsive Google Map" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                <ul className='d-none d-xl-block list-style-none text-start
                 fs-5 my-3'>
                    <li>Lun-Vie: 9:00-20:00</li>
                    <li>Sáb: 9:00-14:00</li>
                    <li>Dom: Cerrado</li>
                </ul>
            </div>





            <div className='my-4'>
                <a href=""><img src="" alt="logoRollingVet" /></a>
                <a href="" className='text-decoration-none text-reset'><h3 className='fs-2  my-4'>ROLLINGVET</h3></a>
                <div className='mt-4'>
                    <a className='mx-3' href="Instagram.com"><img src={instagramLogo} alt="instagramLogo" /></a>
                    <a className='mx-3' href="Facebook.com"><img src={facebookLogo} alt="facebookLogo" /></a>
                    <a className='mx-3' href="Youtube.com"><img src={youtubeLogo} alt="youtubeLogo" /></a>
                </div>
                <p className='mt-4'>CopyRight 2024. Protegido por derechos de autor.</p>
            </div>

            <ul className='fs-4 list-style-none p-0 text-center
              me-lg-3'>
                <li>Contactanos:</li>
                <li>3815623589</li>
                <li>RollingVet@gmail.com</li>
            </ul>
        </footer>
    )
}

export default Footer