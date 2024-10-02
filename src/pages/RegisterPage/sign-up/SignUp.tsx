import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom"
import { setUser } from "../../../store/user/user.slice";
import { useAppDispatch } from "../../../hooks/redux";
import Form from "../../../components/form/Form";


const SignUp = () => {

  
  const navigate = useNavigate();
  const [firebaseError, setFirebaseError] = useState("");
  const auth = getAuth();
    
  const dispatch = useAppDispatch();
  const hadleSignupAndLogin = (email : string, password : string) => {

    
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      dispatch(
        setUser({
            email: userCredential.user.email,
            token: userCredential.user.refreshToken,
            id: userCredential.user.uid,
        })
    )
      navigate("/");
    })
    .catch((error) => {
      return error && setFirebaseError("이메일 또는 비밀번호가 잘못 입력되었습니다.")
    })
  };
  return (
    <Form
      title={"가입하기"}
      getDataForm={hadleSignupAndLogin}
      firebaseError={firebaseError}
    />
  );
};

export default SignUp