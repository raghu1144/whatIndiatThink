import React from "react";
import "./login.css";
import back from "../../assets/images/my-account.jpg";
import { useState, useEffect } from 'react';
import { registerPassword } from '../../api';

export const RegsiterPassword = () => {

  const [password, setPassword] = useState('');
  const [userid, setUserid] = useState('');
  const [status, setStatus] = useState('');
 

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    try {
      const formData = new FormData();
      formData.append('userid', userid);
      formData.append('password', password );

      const result = await registerPassword(formData);
      console.log(result);
      if(result.status){
        window.location.href = '/login';
      }
      setStatus(result);
    } catch (error) {
      console.error('Error registering user:', error);
      setStatus('Error registering user.');
    }
  };

  useEffect(() => { 
    setUserid(localStorage.getItem('userid'));
  }, []);


  return (
    <>
      <section className="login">
        <div className="container">
          <div className="backImg">
            <img src={back} alt="" />
            <div className="text">
              <h3>Register</h3>
              <h1>My account</h1>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <span>Password</span>
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            <span>Conform Password</span>
            <input type="password" required />
            <button type="submit" className="button">Proceed</button>
          </form>
        </div>
      </section>
    </>
  );
};
