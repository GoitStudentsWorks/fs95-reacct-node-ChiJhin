import css from "./RadioInput.module.css";
import { useForm } from 'react-hook-form';
export default function RadioBtn({ register}) {
  // const { register, handleSubmit } = useForm();

  // function onSubmitButton(data) {
  //   console.log(data);
  // }

  return (
    <>
    
      {/* <h1>Замовити погоду</h1> */}
      {/* <form onSubmit={handleSubmit(onSubmitButton)}> */}
    <div className={css.container}>
        <div className={css.radio}>
          <input {...register('gender')} type="radio" value="woman" id="field-woman" /> 
        <label htmlFor="field-woman" className={css.radioLabel}>
        Woman
        </label>
        </div>

        <div className={css.radio}>
          <input {...register('gender')} type="radio" value="man" id="field-man" /> 
        <label htmlFor="field-man" className={css.radioLabel}>
          Man
        </label>
        </div>
        {/* <div className={css.container}> */}
          {/* ========================== */}
    {/* <div className={css.radio}>   
        <input id="radio-1" name="radio" type="radio" checked />
       <label htmlFor="radio-1" className={css.radioLabel}>
        Woman
      </label>
    </div> */}
    {/* ============================ */}
        {/* <label htmlFor="field-wind">
          <input {...register('weather')} type="radio" value="wind" id="field-wind" /> Багато вітру
        </label>
        <label htmlFor="field-sun">
          <input {...register('weather')} type="radio" value="sun" id="field-sun" /> Сонячно
        </label> */}
        </div>
        {/* <button type="submit">Відправити</button> */}
      {/* </form> */}
    </>
  );
  // return (
  //   <div className={css.container}>
  //     <div className={css.radio}>
  //       <input id="radio-1" name="radio" type="radio" checked />
  //       <label htmlFor="radio-1" className={css.radioLabel}>
  //         Woman
  //       </label>
  //     </div>

  //     <div className={css.radio}>
  //       <input id="radio-2" name="radio" type="radio" />
  //       <label htmlFor="radio-2" className={css.radioLabel}>
  //         Man
  //       </label>
  //     </div>
  //   </div>
  // );
}
// </div >
// <h3 className={css.titleHender}>Your gender identity</h3>

// <div className={css.listHender}>
// <label>
// <input type="radio" name="coffeeSize" value="sm" checked={coffeeSize === "sm"}
//   onChange={handleSizeChange}/>
// Woman
// </label>
// <label>
// <input className={css.inputHender} type="radio" name="coffeeSize" value="md" 
// checked={coffeeSize === "md"} onChange={handleSizeChange}/>
// Man
// </label>

// </div>