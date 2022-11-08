import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className='p-3 bg-slate-400'>
                <h2 className="text-3xl bg-secondary text-white font-bold rounded-md p-2">
                    Difference between SQL and NoSQL?
                </h2>
                <p className='bg-gray font-semibold px-4 pt-2'>
                    <span className='text-orange-600 font-bold'>Ans:</span> SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL.
                </p>
            </div>
            <div className='p-3 bg-slate-400'>
                <h2 className="text-3xl bg-secondary text-white font-bold rounded-md p-2">
                    What is JWT, and how does it work?
                </h2>
                <p className='bg-gray font-semibold px-4 pt-2'>
                    <span className='text-orange-600 font-bold'>Ans:</span> JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object. It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP).
                </p>
            </div>
            <div className='p-3 bg-slate-400'>
                <h2 className="text-3xl bg-secondary text-white font-bold rounded-md p-2">
                    What is the difference between javascript and NodeJS?
                </h2>
                <p className='bg-gray font-semibold px-4 pt-2'>
                    <span className='text-orange-600 font-bold'>Ans:</span> JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language..
                </p>
            </div>
            <div className='p-3 bg-slate-400'>
                <h2 className="text-3xl bg-secondary text-white font-bold rounded-md p-2">
                    How does NodeJS handle multiple requests at the same time?
                </h2>
                <p className='bg-gray font-semibold px-4 pt-2'>
                    <span className='text-orange-600 font-bold'>Ans:</span> NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.
                </p>
            </div>
        </div>
    );
};

export default Blog;