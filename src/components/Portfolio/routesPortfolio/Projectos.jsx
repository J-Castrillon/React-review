import React from 'react';
import { Proyectos } from '../Data/Proyectos';
import fla from '../images/fla.png';

export const Projectos = () => {
    return (
        <div className='page '>
            <h2 className='heading'>Algunos de mis proyectos realizados</h2>

            <div className="works">
                {
                    Proyectos.map(project => {
                        return (
                            <article className='article-projects' key={project.id}>
                                <div className="images">
                                    <img src={`/images/${project.image}.png`} alt={project.id} title={project.id} />
                                </div>
                                <h3>{project.nombre}</h3>
                                <p><strong className='strong-projects'>Tecnologías: </strong>{project.tecnologias}</p>
                                <a href={project.url} target='_blank'>Url directa</a>
                                <hr />
                                <p><strong className='strong-projects'>Categoría: </strong>{project.categoria}</p>
                            </article>
                        )
                    })
                }

            </div>


        </div>
    )
}
