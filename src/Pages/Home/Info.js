import React from 'react';
import clock from '../../assets/icons/clock.svg'
import marker from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'
import InfoCard from './InfoCard';

const Info = () => {
    const cardDetail = [
        {"_id":1,"heading":"Opening Hours","content":'Lorem Ipsum is simply dummy text of the pri',"img":clock,"bg":'bg-gradient-to-r from-secondary to-primary'},
        {"_id":2,"heading":"Visit our location","content":'Brooklyn, NY 10036, United States',"img":marker,"bg":'bg-accent'},
        {"_id":3,"heading":"Contact us now","content":'+000 123 456789',"img":phone,"bg":'bg-gradient-to-r from-secondary to-primary'},
    ]
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 mx-8 mb-10'>
            {
                cardDetail.map(singleCard => <InfoCard key={singleCard._id} singleCard={singleCard}></InfoCard>)
            }
            {/* <InfoCard img={clock} />
            <InfoCard img={clock} />
            <InfoCard img={clock} /> */}
        </div>
    );
};

export default Info;