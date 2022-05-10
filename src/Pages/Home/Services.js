import React from 'react';
import image1 from '../../assets/images/cavity.png'
import image2 from '../../assets/images/fluoride.png'
import image3 from '../../assets/images/whitening.png'
import Service from './Service';

const Services = () => {
    const serviceDetail = [
        {"_id":1,"heading":"Cavity Filling","content":'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',"img":image1,"bg":'bg-gradient-to-r from-secondary to-primary'},
        {"_id":2,"heading":"Fluoride Treatment","content":'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',"img":image2,"bg":'bg-accent'},
        {"_id":3,"heading":"Teeth Whitening","content":'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',"img":image3,"bg":'bg-gradient-to-r from-secondary to-primary'},
    ]
    return (
        <div>
            <div className='text-center'>
            <h1 className='capitalize text-primary text-2xl font-bold'>our services</h1>
            <h1 className='capitalize  text-4xl  my-3'> services we provide</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-6 md:mx-10 lg:mx-12 mb-10'>
                {
                    serviceDetail.map(
                        singleSer => <Service key={singleSer._id} singleSer={singleSer}></Service>
                    )
                }
            </div>
        </div>
    );
};

export default Services;