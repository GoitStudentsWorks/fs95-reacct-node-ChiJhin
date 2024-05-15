import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import css from './UserSettingsForm.module.css';
import RadioBtn from './RadioInput/RadioInput';
import AvatarInput from './AvatarInput/AvatarInput';

export default function UserSettingsForm() {
  const [selectedValueRadio, setSelectedValueRadio] = useState('');
  const [result, setResult] = useState(null); 
  const [volume, setSelectedVolume] =useState('')
  const [M, setM]=useState(null)
  const [T, setT]=useState(null)

 
  const handleRadioChange = (event) => {
    setSelectedValueRadio(event.target.value);
    console.log(`Selected value: ${event.target.value}`);
  };
  const handleChange = (setSelected, event)=>{
    setSelected(event.target.value)
    console.log(event.target.value);
  }
  useEffect(() => {
    
    if (selectedValueRadio !== '') {
      if (selectedValueRadio === 'woman') {
        const V = (M * 0.03) + (T * 0.4);
        setResult(V);
        console.log('result', V);
      } else {
        const V = (M * 0.04) + (T * 0.6);
        setResult(V);
        console.log('result', V);
      }
    }
  }, [selectedValueRadio, M,T]);

  const {
    control,
    setValue,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  setValue('lastEmail', "sad@gmail.com");
  
  const onSubmit = (data) => {
    const file = data.avatar[0];
    console.log(data,file);

    if (file) {
      const blob = new Blob([file]);
      console.log(blob);
      const objectURL = URL.createObjectURL(blob);
      console.log(objectURL);
      //   setAvatar(objectURL);
    }
  };

  return (
    <>
      {/* =============================== */}
      <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
        <AvatarInput control={control} register={register} />
        <div>
          <h3 className={css.titleHender}>Your gender identity</h3>
        </div>
        <RadioBtn
        onChangeRadio={handleRadioChange}
        selectedValue={selectedValueRadio}  
        register={register}
        />
        <div className={css.sectionBox}>

        <section>
          <div className={css.box}>
            <label className={css.labelName}>Your name</label>
            <input {...register('lastName', { value: 'name'})} 
            />
          </div>
        

          <div className={css.box}>
            <label className={css.labelName}>Email</label>
            {/* <ErrorMessage name="number" component="span" className={css.span} /> */}
            <input {...register('lastEmail', { required: true })} />
            {errors.lastEmail && <p>Last name is required.</p>}
          </div>

          {/* ================================= */}
          <h2 className={css.titleNormaFormula}>My daily norma</h2>
          <ul className={css.listFormula}>
            <li>
              <p>For woman:</p>
              <span>V=(M*0,03) + (T*0,4)</span>
            </li>
            <li>
              <p>For man:</p>
              <span>V=(M*0,04) + (T*0,6)</span>
            </li>
            <li>
              <div className={css.textBox}>
                <p>
                  <span>*</span> V is the volume of the water norm in liters per
                  day, M is your body weight,T is the time of active sports,or
                  another type of activity commensurate in terms of loads (in
                  the absence of these, you must set 0)
                </p>
              </div>
            </li>
            <li>
              <p>
                <span className={css.vector}>!</span>Active time in hours
              </p>
            </li>
          </ul>
        </section>
        {/* =========================================== */}
        <section>
          <div className={css.formKilo}>
            <label>Your weight in kilograms:</label>
            <input {...register('lastKilo')} 
          onChange={(event) => handleChange(setM, event)}
          />
          </div>

          <div className={css.formKilo}>
            <label>The time of active participation in sports:</label>
            <input {...register('lastTime', { required: true })} 
          onChange={(event) => handleChange(setT, event)}
          />
            {errors.lastTime && <p>Last name is required.</p>}
          </div>

          <p className={css.amountWater}>
            The required amount of water in liters per day:<span className={css.amount}>
               {result}   L
            </span>
          </p>

          <div className={css.youWater}>
            <label >
              Write down how much water you will drink:
            </label>
            <input {...register('lastValume')} 
            onChange={(event) => handleChange(setSelectedVolume, event)}
            />
          </div>
        </section>
        </div>
        <button className={css.btnSave} type="submit">
          <span>Save</span>
        </button>
      </form>
    </>
  );
}
