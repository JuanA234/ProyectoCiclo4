import { useQuery } from '@apollo/react-hooks';
import { AccordionStyled, AccordionSummaryStyled, AccordionDetailsStyled, } from 'components/shared/Acordeon';
import { PROYECTOS } from 'graphql/proyectos/queries';
import React, { useEffect, useState, useRef } from 'react'

const Proyectos = () => {

    const { data: queryData, loading } = useQuery(PROYECTOS)

    useEffect(() => {
        console.log("datos proyectos", queryData)
    }, [queryData])

    if (loading) return <div>Cargando...</div>

    if (queryData.Proyectos) {
        return (
            <div className='p-10 flex flex-col'>
                <div className='flex w-full items-center justify-center'>
                    <h1 className='text-2xl font-extrabold text-gray-800'>
                        Lista de Proyectos
                    </h1>
                </div>
                {queryData.Proyectos.map((proyecto) => (
                    <AcordeonProyecto proyecto={proyecto} />
                ))}
            </div>
        )
    }

    return <></>;

}

const AcordeonProyecto = ({ proyecto }) => {

    return (
        <>
            <AccordionStyled>
                <AccordionSummaryStyled expandIcon={<i className='fas fa-chevron-down' />}>
                    <div className='flex w-full justify-between'>
                        <div className='uppercase font-bold text-gray-100 '>
                            {proyecto.nombre} - {proyecto.estado}
                        </div>
                    </div>
                </AccordionSummaryStyled>
                <AccordionDetailsStyled>
                    <div className='flex'>
                        {proyecto.objetivos.map((objetivo, index) => (
                            <Objetivo
                                index={index}
                                _id={objetivo._id}
                                idProyecto={proyecto._id}
                                tipo={objetivo.tipo}
                                descripcion={objetivo.descripcion}
                            />
                        ))}
                    </div>
                </AccordionDetailsStyled>
            </AccordionStyled>
        </>
    )

}

const Objetivo = ({ index, _id, idProyecto, tipo, descripcion }) => {

    return (
        <div className='mx-5 my-4 bg-gray-50 p-8 rounded-lg flex flex-col items-center justify-center shadow-xl'>
            <div className='text-lg font-bold'>{tipo}</div>
            <div>{descripcion}</div>
        </div>
    )
}

export default Proyectos;
