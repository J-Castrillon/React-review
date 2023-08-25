import React from 'react';
import { Link } from 'react-router-dom';
import { ListWorks } from './ListWorks';

export const Projectos = () => {
    return (
        <div className='page '>
            <h2 className='heading'>Algunos de mis proyectos realizados</h2>

            <ListWorks />            


        </div>
    )
}
