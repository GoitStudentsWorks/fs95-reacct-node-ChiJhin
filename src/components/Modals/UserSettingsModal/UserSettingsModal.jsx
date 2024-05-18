import { useEffect, useState } from 'react';
import css from './UserSettingsModal.module.css';
import UserSettingsForm from '../UserSettingsForm/UserSettingsForm';
import axios from 'axios';
import { set } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../../redux/auth/selectors';

export default function UserSettingsModal({closeModal}) {
const [get_setting, setGet_setting]=useState([])
// const [loading, setLoading] = useState(false);

    // const dispatch = useDispatch();
    const selector = useSelector(selectUser)
    
    useEffect(()=>{
      // setGet_setting([])
      // setLoading(true);
      setGet_setting(selector)
      
      console.log(get_setting);
    },[])
// useEffect(() => {
//   async function fetchData() {
//     try {
//       setGet_setting([])
//       setLoading(true);
//       const response = await axios.get(
//         'https://aquatrack-it-warriors-backend.onrender.com/api/users/current'
//       );
//       setGet_setting(response.data);
//       // console.log(get_setting);
//     } catch (error) {
//       console.log(error);
//     }finally{
//       setLoading(false);
//       // setGet_setting(response.data);

//     }
//   }

//   fetchData();
// }, []);

  return (
    <>
      <h2 className={css.title}> Setting</h2>
      {/* {loading && <p>Loading data, please wait...</p>} */}
      <div className={css.settingBox}>
        
    {get_setting.length !==0 && (
      <UserSettingsForm 
      closeModal={closeModal}
      getSetting={get_setting}
      
      />
     )}
      </div>
    </>
  );
}