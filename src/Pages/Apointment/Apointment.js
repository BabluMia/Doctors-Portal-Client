import React, { useState } from 'react';
import Footer from '../Footer/Footer';
import ApointmentBanner from './ApointmentBanner';
import AvailableApointment from './AvailableApointment';

const Apointment = () => {
    const [date , setDate] = useState(new Date())
    return (
        <div>
            <ApointmentBanner date={date} setDate={setDate} />
            <AvailableApointment date={date} setDate={setDate} />
            <Footer/>
        </div>
    );
};

export default Apointment;