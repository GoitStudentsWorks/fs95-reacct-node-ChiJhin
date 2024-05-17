import { useSelector } from "react-redux";
import css from "./RadioInput.module.css";
import { selectDay } from "../../../../redux/water/operations";

export default function RadioBtn({ register, onChangeRadio}) {
      const statusRadioBtn = useSelector(selectDay)
  return (
    <> 
      
    <div className={css.container}>
        <div className={css.radio}>
          <input {...register('gender')} 
          type="radio" 
          value="woman" 
          id="field-woman" 
          // checked={selectedValue === 'woman'}
          onChange={onChangeRadio}
          defaultChecked={statusRadioBtn==='woman'}
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
          // checked={selectedValue === 'man'}
          onChange={onChangeRadio}
          defaultChecked={statusRadioBtn==='man'} 
          /> 
        <label htmlFor="field-man" className={css.radioLabel}>
          Man
        </label>
        </div>
        </div>
    </>
  );
  }
  