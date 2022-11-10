import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';

const AddServices = () => {
    const [insertServices, setInsertServices] = useState([]);
    useEffect(() => {
        fetch('https://awesome-clicks-server.vercel.app/services')
            .then(res => res.json())
            .then(data => setInsertServices(data))
    }, []);

    const handleServiceInsert = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const price = form.price.value;
        const details = form.details.value;
        const img = form.img.value;
        const insertServices = {
            name,
            price,
            details,
            img,

        }
        fetch('https://awesome-clicks-server.vercel.app/service', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(insertServices)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast('Service Added')
                    form.reset();

                }
            })
            .catch(er => console.error(er));
    }
    return (
        <div className='text-center my-16'>
            <h2 className="text-5xl my-4">Set a new service here</h2>
            <form onSubmit={handleServiceInsert}>
                <div className=''>
                    <input type="text" name='name' placeholder="Service Title" className="input input-bordered input-primary w-full max-w-xs" /><br />
                    <input type="text" name='price' placeholder="price" className="input input-bordered input-primary w-full max-w-xs my-2" /><br />
                    <input type="text" name='details' placeholder="Details" className="input input-bordered input-primary w-full max-w-xs" /><br />
                    <input type="text" name='img' placeholder="Image URL" className="input input-bordered input-primary w-full max-w-xs my-2" /><br />
                    <button className="btn btn-secondary">Insert Service</button>
                </div>
            </form>
            <ToastContainer></ToastContainer>
        </div >
    );
};

export default AddServices;