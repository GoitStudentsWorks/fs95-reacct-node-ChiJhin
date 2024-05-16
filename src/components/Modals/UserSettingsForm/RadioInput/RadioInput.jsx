import css from "./RadioInput.module.css";

export default function RadioBtn({ register, onChangeRadio,selectedValue}) {
      
  return (
    <> 
      
    <div className={css.container}>
        <div className={css.radio}>
          <input {...register('gender')} 
          type="radio" 
          value="woman" 
          id="field-woman" 
          checked={selectedValue === 'woman'}
          onChange={onChangeRadio}
          /> 
        <label htmlFor="field-woman" className={css.radioLabel}>
        Woman
        </label>
        </div>

        <div className={css.radio}>
          <input {...register('gender')} 
          type="radio" 
          value="man" 
          id="field-man" 
          checked={selectedValue === 'man'}
          onChange={onChangeRadio}
          // defaultChecked 
          /> 
        <label htmlFor="field-man" className={css.radioLabel}>
          Man
        </label>
        </div>
        </div>
    </>
  );
  }
  // const dispatch = useDispatch();

  // const onSubmitFormik = ({ name, number }, actions) => {
  //   actions.resetForm();
  //   const contactData = {
  //     name: name,
  //     number: number.replace(/(\d{3})(\d{3})(\d{2})/, '$1-$2-$3'),
  //   };
  //   dispatch(updateContact({ id: id, data: contactData }))
  //     .unwrap()
  //     .then(() => {
  //       notify();
  //     })
  //     .catch(() => {
  //       notifyError();
  //     });
  //   closeModal();
  // };

