import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const SocialLogIn = () => {
    const { googleSignIn } = useContext(AuthContext);

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(err => console.error(err));
    }
    return (
        <div>
            {/* <p className='text-center'><small>Social Login</small></p> */}
            <p className='text-center'>
                <button onClick={handleGoogleSignIn} className="btn btn-secondary w-2/3">Google</button>
            </p>
        </div>
    );
};

export default SocialLogIn;