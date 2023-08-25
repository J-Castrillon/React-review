import React from 'react';
import { Proyectos } from '../Data/Proyectos';
import { Link } from 'react-router-dom';

export const ListWorks = ({projectLimit}) => {
    return (
        <div className="works">
            {
                Proyectos.slice(0,projectLimit).map(project => {
                    return (
                        <article className='article-projects' key={project.id}>
                            <div className="images">
                                <Link to={`/proyecto/${project.id}`} ><img src={`/images/${project.image}.png`} alt={project.id} title={project.id} /> </Link>
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
    )
}