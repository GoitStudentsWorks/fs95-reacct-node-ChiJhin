import React, { useState } from 'react';
import Modal from '../Modal/Modal';
import { useDispatch } from 'react-redux';
import { logout } from '../../../redux/auth/operations'; 
import { showNotification } from '../../../utils/notification';
import css from './LogOutModal.module.css';

export default function LogOutModal({ isOpen, closeModal }) {
  const dispatch = useDispatch();
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const handleLogout = async () => {
    setIsLoggingOut(true);

    try {
     // Make API request to delete the user session on the backend
     await axios.post(`https://aquatrack-it-warriors-backend.onrender.com/api/users/logout}`);
      
      // Dispatch the 'logout' thunk to initiate the logout process
       dispatch(logout());

      // Show success notification
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

  return (
    <Modal isOpen={isOpen} closeModal={closeModal} styleVariant="modalLogOut">
      <h3 className={css.logoutTitle}>Log out</h3>
      <p className={css.logoutQuestion}>Do you really want to leave?</p>
      <div className={css.buttonGroup}>
        <button
          className={css.logoutButton}
          onClick={handleLogout}
          disabled={isLoggingOut}
        >
          {isLoggingOut ? 'Logging Out...' : 'Log Out'}
        </button>
        <button className={css.cancelButton} onClick={handleCancel} disabled={isLoggingOut}>
          Cancel
        </button>
      </div>
    </Modal>
  );
}


