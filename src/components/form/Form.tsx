import { FC } from 'react'
import styles from "./Form.module.scss";//+
import {  FieldValues, SubmitHandler, useForm } from 'react-hook-form';

type FormProps = {
  title: string;
  getDataForm: (email: string, password: string) => void;
  firebaseError: string;
}

type Inputs = {
  email: string;
  password: string;
}

const Form: FC<FormProps> = ({ title, getDataForm, firebaseError }) => {

  const {
    register,
    handleSubmit,
    formState : { errors },
    reset,
  } = useForm<Inputs>({mode : "onBlur"});

  const onSubmit : SubmitHandler<FieldValues> = ({email,password}) => {
    getDataForm(email,password);
    reset();
  }



  const userPassword = {
    required: "필수 입니다",
    minLength: {
      value: 4,
      message: "최소 4자를 입력해주세요",
    },
    maxLength: {
      value:13,
      message: "최대 13까지 가능합니다"
    },
    pattern: {
      value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/gm,
      message : `최소 8자, 영문1자, 숫자 1자가 가능합니다`
    }
  };

  const userEmail = {
    required :"필수 입니다",
    pattern : {
      value: 
       /^([A-Z|a-z|0-9](\.|_){0,1})+[A-Z|a-z|0-9]\@([A-Z|a-z|0-9])+((\.){0,1}[A-Z|a-z|0-9]){2}\.[a-z]{2,3}$/gm,
       message : "올바른 이메일 주소를 입력 해주세요"
    }
  };
  
  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input
          type='email'
          placeholder='E-mail'
          {...register("email", userEmail)}
        />
        {errors?.email && 
          <div>
          <span className={styles.form_error}>
            {errors?.email?.message}
          </span>
        </div>
        }
        </div>

      <div>
        <input
          type='password'
          placeholder='Password'
          
          {...register("password", userPassword)}
        />
        {errors?.password && 
          <div>
          <span className={styles.form_error}>
            {errors?.password?.message}
            </span>
        </div>
      }
      </div>

      <button type="submit">{title}</button>
      {firebaseError && (
        <span className={styles.form_error}></span>
      )} 
    </form>
  )
}

export default Form

