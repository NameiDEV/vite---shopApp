import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { setUser } from '../../../store/user/user.slice';
import { setUserId } from '../../../store/cart/cart.slice';
import { useAppDispatch } from '../../../hooks/redux';
import Form from '../../../components/form/Form';

const SignIn = () => {

  const navigate = useNavigate();
  const [firebaseError, setFirebaseError] = useState("");
  const dispatch = useAppDispatch();
      
  const handleLogin = (email : string, password : string) => {
  const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            dispatch(
                setUser({
                    email: userCredential.user.email,
                    token: userCredential.user.refreshToken,
                    id: userCredential.user.uid,
                })
            );
          dispatch(setUserId(userCredential.user.uid))
          navigate("/");
        })
        .catch((error) => {
          return error && setFirebaseError("이메일 또는 비밀번호가 잘못 입력되었습니다.")
        })
      };

    return (
       <Form
            title={"로그인"}
            getDataForm={handleLogin}
            firebaseError={firebaseError}
       />
    );
};

export default SignIn