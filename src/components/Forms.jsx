// El objetivo de la creación de este login, es practicar el uso del useEffect
// Para lo cual vamos a estar usando los estados para la validación de formularios
// Y para el montaje y desmontaje de componentes. 

import React from 'react'
import first from '../resources/first.jpg';
import second from '../resources/second.jpg';


export const Forms = () => {

    const clicked = e => {
        e.preventDefault();

    }

    return (
        <div id='login-content' className=''>
            <section className="image display-center">
                <figure id='image-figure' className='display-center'>
                    <img src={first} alt="Wallpaper" id="image" /> {/* La idea de este ejemplo es que cambie la imagen al completar el formulario */}
                </figure>
            </section>
            <section id="form-section" className='display-center'>
                <form action="#" id="form-login" className='display-center'>
                    <div className="inputs-content ">
                        <label htmlFor="name" id="name-label" className=''>
                            Name:
                        </label>
                        <input type="text" id='name' autoComplete='name' placeholder='Your Name' />
                    </div>
                    <div className="inputs-content ">
                        <label htmlFor="email" id="email-label" className=''>
                            Email:
                        </label>
                        <input type="email" id='email' autoComplete='email' placeholder='Your Email' />
                    </div>
                    <div className="inputs-content ">
                        <label htmlFor="pass" id="pass-label" className=''>
                            Password:
                        </label>
                        <input type="password" id='pass' placeholder='Your Pass' />
                    </div>
                    <div id="button-content" className='display-center'>
                        <button type='submit' id="button-login" onClick={e => {
                            clicked(e);
                        }}>Sign Up</button>
                    </div>

                </form>
                <div id="result"></div>

            </section>
        </div>
    )
}
