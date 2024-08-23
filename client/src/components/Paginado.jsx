import React, { useState } from 'react';
import Card from './Card';
import '../CSS/home.css'


export const PaginatedList = ({ items }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerPage = 6;

    const nextPage = () => {
        setCurrentIndex((prevIndex) => Math.min(prevIndex + itemsPerPage, items.length));
    };

    const prevPage = () => {
        setCurrentIndex((prevIndex) => Math.max(prevIndex - itemsPerPage, 0));
    };

    const currentItems = items.slice(currentIndex, currentIndex + itemsPerPage);

    return (
        <div className='container p-5'>
            <ul className='d-flex flex-wrap'>
                {currentItems.map((user, index) => (
                    <li className='p-2 col-4 d-flex justify-content-center list-group-item' key={index}>
                        <Card
                            NombreUsuario={user.NombreUsuario}
                            Genero={user.Genero}
                            Pais={user.Pais}
                            Roles={user.Roles}
                            TipoSangre={user.TipoSangre}
                        />
                    </li>
                ))}
            </ul>
            <div className='d-flex justify-content-center'> 
                <button onClick={prevPage} disabled={currentIndex === 0}>
                    Anterior
                </button>
                <button onClick={nextPage} disabled={currentIndex + itemsPerPage >= items.length}>
                    Siguiente
                </button>
            </div>
        </div>
    );
};
