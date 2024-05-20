import { useEffect, useState } from 'react';
import css from './UserSettingsModal.module.css';
import UserSettingsForm from '../UserSettingsForm/UserSettingsForm';
// import axios from 'axios';
import {  useSelector } from 'react-redux';
import { selectUser } from '../../../redux/auth/selectors';

export default function UserSettingsModal({ closeModal,modIsOpen }) {
  const [get_setting, setGet_setting] = useState([]);

  const selector = useSelector(selectUser);
 
    useEffect(() => {
    if(!modIsOpen){
          return}
       setGet_setting(selector);

  }, [modIsOpen]);
  // =========================
  // useEffect(() => {
  //   if(!modIsOpen){
  //         console.log('fdd');
  //         return
  //       }
  //   async function fetchData() {
  //     try {
  //       setGet_setting([])
  //       // setLoading(true);
  //       const response = await axios.get(
  //         'https://aquatrack-it-warriors-backend.onrender.com/api/users/current'
  //       );
  //       setGet_setting(response.data);
  //       // setGet_setting(response.data);
  //       console.log(get_setting);
  //     } catch (error) {
  //       console.log(error);
  //     }finally{
  //       setLoading(false)
  //       // setLoading(false);

  //     }
  //   }

  //   fetchData();
  // }, [loading]);

  return (
    <>
      <h2 className={css.title}> Setting</h2>
      {/* {loading && <p>Loading data, please wait...</p>} */}
      <div className={css.settingBox}>
        {get_setting.length !== 0 && (
          <UserSettingsForm closeModal={closeModal} getSetting={get_setting} />
        )}
      </div>
    </>
  );
}
