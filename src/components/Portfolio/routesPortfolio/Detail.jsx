import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Proyectos } from '../Data/Proyectos';

export const Detail = () => {

    const params = useParams();
    const [detailProject, setDetailProject] = useState({});

    useEffect(() => {
        let proyecto = Proyectos.filter(work => work.id == params.id); // Para filtrar por identificadores; 
        setDetailProject(proyecto[0]);
    }, []);

    return (
        <div>
            <h1>Detalles del proyecto <span id='name-detail-project'>{detailProject.id}</span></h1>
            <div className="images">
                <img src={`/images/${detailProject.image}.png`} alt={detailProject.id} title={detailProject.nombre} />
            </div>
            <h3>{detailProject.nombre}</h3>
            <p><strong className='strong-projects'>Tecnologías: </strong>{detailProject.tecnologias}</p>
            <a href={detailProject.url} target='_blank'>Url directa</a>
            <hr />
            <p><strong className='strong-projects'>Categoría: </strong>{detailProject.categoria}</p>
        </div>
    )
}
