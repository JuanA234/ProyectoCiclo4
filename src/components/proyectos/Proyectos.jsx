
import React, { useEffect, useState, useRef } from 'react'

const Proyectos = () => {


    return (
        <div className='flex h-full w-full flex-col items-center justify-start p-6'>
            <div className='flex flex-col w-full'>
                <h1 className='text-3xl font-bold text-gray-800'>Página de gestión de proyectos</h1>
                <FormularioRegistroProyectos />
            </div>
        </div>
    )
}


const TablaProyectos = () => {
    return(
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nombre del proyecto</th>
                        <th>Objetivos generales</th>
                        <th>Objetivos específicos</th>
                        <th>presupuesto</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
            </table>
        </div>
    )
} 

const FormularioRegistroProyectos = () => {
    return(

        <div className='min-h-screen flex flex-col items-center justify-center bg-gray-50 py-2 px-4 sm:px-6 lg:px-8'>
            <div className='max-w-md w-full'>
            <h2 className='mt-6 text-center text-2xl  font-extrabold text-gray-700'>Registrar Proyecto</h2>
            <form className='mt-8 space-y-6'>
                <div className = 'rounded-md shadow-sm grid grid-cols-2 gap-2'>
                <label htmlFor = 'nombreLider'>
                    Nombre del líder
                    <input
                    name='nombreLider'
                    type='text'
                    autoComplete = 'email'
                    required
                    className = 'appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                    />
                </label>
                <label htmlFor='documento'>
                    Documento de identidad
                    <input
                    name='documento'
                    type='number'
                    required
                    className = 'appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm' 
                    />
                </label>
                <label htmlFor = 'nombreProyecto'>
                    Nombre del proyecto
                    <input
                    name='nombreProyecto'
                    type='text'
                    className = 'appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                    />
                </label>
                <label htmlFor='ObjetivosGen'>
                    Objetivos generales 
                    <input
                    name = 'ObjtivosGen'
                    type='text'
                    required
                    className = 'appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                    />
                </label>
                <label htmlFor='objetivosEsp'>
                    Objetivos específicos
                    <input
                    name='objetivosEsp'
                    type='text'
                    required
                    className = ''
                    />
                </label>
                <label htmlFor = 'presupuesto'>
                    presupuesto
                    <input 
                    name='presupuesto'
                    type='number'
                    required
                    className = 'appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                    />
                </label>
                <label htmlFor = 'inicio'>
                    Fecha de inicio
                    <input
                    name = 'inicio'
                    type='date'
                    required
                    className = 'appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                    />
                </label>
                <label htmlFor='final'>
                    Fecha final
                    <input
                    name='final'
                    type = 'date'
                    required
                    className = 'appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus   :ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                    />
                </label>
                <label htmlFor='estado'>
                    Estado del proyecto
                    <select
                     name='estado'
                     required
                     defaultValue={0} 
                     className = 'appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                    >
                    <option>Inactivo</option>
                    <option>Activo</option>
                    </select>
                </label>
                <label htmlFor='fase'>
                   Fase del proyecto
                    <select
                    name = 'fase'
                    required
                    defaultValue = {0}
                    className = 'appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'>
                     <option disabled value = {0}>Seleccione una opción</option>  
                     <option>Iniciado</option>   
                     <option>En desarrollo</option>   
                     <option>Terminado</option>   
                    </select>
                </label>
                </div>
            </form>
        </div>
        </div>
    )
}

export default Proyectos
