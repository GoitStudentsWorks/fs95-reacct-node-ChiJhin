import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../../redux/auth/operations'; 
import { showNotification } from '../../../utils/notification';
import css from './LogOutModal.module.css';

const title = 'Log out';

export default function LogOutModal({ isOpen, closeModal }) {
    const dispatch = useDispatch();
    const [isLoggingOut, setIsLoggingOut] = useState(false);
  
    const handleLogout = async () => {
      setIsLoggingOut(true);
      try {
        
        dispatch(logout());
   
        showNotification('You have been logged out successfully!', 'success');
         
         //import not found: useHistory  from 'react-router-dom'.???
         
         // Redirect user to the public homepage after a delay
         setTimeout(() => {
           window.location.href = '/'; // Redirect to the public homepage
         }, 1000); // Adjust delay as needed
         closeModal();
       
       } catch (error) {
         // Show error notification
         showNotification('Failed to log out. Please try again.', 'error');
         console.error('Logout operation failed:', error);
       } finally {
         setIsLoggingOut(false);
         closeModal(); // Close modal regardless of logout success or failure
       }
     };
   
     const handleCancel = () => {
       closeModal(); // Close the modal if Cancel button is clicked
     };



    return (<>
    <div className={css.modalBox}>
        <h2 className={css.title}>{title}</h2>
        <p>Do you really want to leave?</p>
    <div className={css.btnBox}>
        <button className={css.btn}>Log out</button>
        <button className={css.btnCancel}>Cancel</button>
    </div></div>
    </>)
}


