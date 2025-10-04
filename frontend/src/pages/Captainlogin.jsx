import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';


const Captainlogin = () => {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ captainData, setCaptainData ] = useState({})
    const SubmitHandler = (e) => {
            e.preventDefault();
            const captainData = {
              email: email,
              password: password
            };
            setEmail('');
            setPassword('');
        };
    return (
        <div className='p-8 h-screen flex flex-col justify-between'>
                   <div>
                       <img className='w-20 mb-3' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSVCO4w_adxK32rCXFeKq3_NbLcR9b_js14w&s" alt="" />
                   <form onSubmit={(e) => SubmitHandler(e)}>
                       <h3 className='text-lg font-medium mb-2'>What's your email?</h3>
                       <input required value={email} onChange={(e) => setEmail(e.target.value)} className='bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-base' type="email" placeholder="email@example.com" />
                       <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
                       <input required value={password} onChange={(e) => setPassword(e.target.value)} className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base' type="password" placeholder="password" />
                       <button className='bg-[#111] text-white font-semibold mb-3 rounded-lg px-4 py-2 w-full text-lg placeholder:text-base'>Login</button>
                   </form>
                    <p className='text-center mb-2'>Join a fleet? <Link to='/captain-signup' className='text-blue-600 mb-3'>Register as a Captain</Link></p>
                   </div>
                   <div>
                    <Link
                      to='/login'
                   className='bg-[#edac1f] flex items-center justify-center text-white font-semibold mb-6 rounded-lg px-4 py-2 w-full text-lg placeholder:text-base'
                   >Sign in as User</Link>
                   </div>
               </div>
    );
};

export default Captainlogin;