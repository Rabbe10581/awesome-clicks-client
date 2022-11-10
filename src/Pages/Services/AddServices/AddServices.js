import React from 'react';

const AddServices = () => {
    const handleServiceInsert = event => {
        event.preventDefault()
    }
    return (
        <div>
            <form onSubmit={handleServiceInsert}>
                <input type="text" name='name' placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />
                <input type="text" name='price' placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" /><br />
                <input type="text" name='details' placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />
                <input type="text" name='img' placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />
            </form>
        </div >
    );
};

export default AddServices;