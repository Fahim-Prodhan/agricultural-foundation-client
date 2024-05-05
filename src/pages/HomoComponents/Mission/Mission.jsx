import React from 'react';
import img1 from '../../../assets/images/mission.png'
import img2 from '../../../assets/images/vision.png'

const Mission = () => {
    return (
        <div>
            <h1 className='text-center pb-12 md:text-5xl font-bold'>Mission & Vision</h1>
            <div className='grid grid-cols-2 items-center gap-6'>
                <div>
                    <h1 className='text-3xl font-black pb-4 text-[#03AED2]'>Our Mission</h1>
                    <p className='text-xl'>Fundaprotan es una ONG orientada hacia el permanente desarrollo socioeconómico, cultural y
                        educativo de la región Caribe colombiana; busca la prosperidad de nuestros patrocinados
                        mediante la construcción de proyectos productivos, recreativos, pedagógicos y de
                        infraestructura; implantar medios de producción sostenibles, enfocados en los individuos o
                        poblaciones menos favorecidas y orientados en el desarrollo integral humano. </p>
                </div>
                <div>
                    <img src={img1} alt="" />
                </div>
            </div>

            <div className='grid grid-cols-2 items-center mt-12 gap-6'>
                <div>
                    <img src={img2} alt="" />
                </div>
                <div>
                    <h1 className='text-3xl font-black pb-4 text-[#03AED2]'>Our Vision</h1>
                    <p className='text-xl'>Ser una ONG perenne, reconocida nacional e internacionalmente por su labor, buen manejo
                        sistemático de los recursos asignados; afianzarse con la construcción de obras y servicios
                        tangibles e intangibles que favorezcan el bienestar colectivo con estándares de vida dignos;
                        alcanzar la promoción de valores éticos, democráticos, motivar la productividad en pequeños
                        o medianos productores, para consolidarse en el siglo XXI, generando, construyendo o
                        auspiciando, multiplicidad de proyectos.</p>
                </div>
            </div>
        </div>
    );
};

export default Mission;