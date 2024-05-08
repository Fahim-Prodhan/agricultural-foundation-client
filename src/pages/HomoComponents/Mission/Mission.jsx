import React from 'react';
import img1 from '../../../assets/images/mission.png'
import img2 from '../../../assets/images/vision.png'
import 'aos/dist/aos.css';

const Mission = () => {

    return (
        <div>
            <h1 className='text-center pb-12 text-3xl md:text-5xl font-bold'>Mission & Vision</h1>
            <div data-aos="fade-right" data-aos-duration="800" className='grid lg:grid-cols-2 items-center gap-6'>
                <div>
                    <h1 className='text-3xl font-black pb-4 text-[#03AED2]'>Our Mission</h1>
                    <p className='md:text-xl'>Fundaprotan is an ONG oriented towards the permanent socioeconomic, cultural and educational development of the Colombian Caribbean region; seeks the prosperity of our patrons through the construction of productive, recreational, pedagogical and infrastructure projects; implement sustainable means of production, focused on less favored individuals or populations and focused on comprehensive human development.</p>
                </div>
                <div className='order-first lg:order-last'>
                    <img src={img1} alt="" />
                </div>
            </div>

            <div data-aos="zoom-in" data-aos-duration="800" className='grid lg:grid-cols-2 items-center mt-12 gap-6'>
                <div>
                    <img src={img2} alt="" />
                </div>
                <div>
                    <h1 className='text-3xl font-black pb-4 text-[#03AED2]'>Our Vision</h1>
                    <p className='md:text-xl'>To be a perennial ONG, recognized nationally and internationally for its work, good management systematic of allocated resources; establish itself with the construction of works and services tangible and intangible that promote collective well-being with decent living standards; achieve the promotion of ethical, democratic values, motivate productivity in small or medium producers, to consolidate in the 21st century, generating, building or sponsoring, multiplicity of projects.</p>
                </div>
            </div>

        </div>
    );
};

export default Mission;