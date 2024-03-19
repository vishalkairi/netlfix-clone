import styled from "styled-components";
import BackgroudImage from "../components/BackgroudImage";
import Header from "../components/Header";
import { useState } from "react";
import { firebaseAuth } from "../utils/firebase-config";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
export default function Login() {
  const navigate = useNavigate();
  const [isPasswordIncorrect, setIsPasswordIncorrect] = useState(false);
  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
  });

  const login = async () => {
    console.log(formValue);
    const { email, password } = formValue;
    try {
      const response = await signInWithEmailAndPassword(
        firebaseAuth,
        email,
        password
      );
      console.log(response);
    } catch (error) {
      console.log(error);
      setIsPasswordIncorrect(true);
    }
  };
  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) {
      navigate("/");
    }
  });
  return (
    <Container>
      <BackgroudImage />
      <div className="content">
        <Header />
        <div className="body flex column a-center j-center">
          <div className="text flex column">
            <h1>Login</h1>
            <div className="form">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formValue.email}
                onChange={(e) =>
                  setFormValue({ ...formValue, email: e.target.value })
                }
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formValue.password}
                onChange={(e) =>
                  setFormValue({ ...formValue, password: e.target.value })
                }
              />
              {isPasswordIncorrect && <p>Username or password is incorrect</p>}
            </div>
            <button className="login-btn" onClick={login}>
              Log In
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  .content {
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    height: 100vh;
    width: 100vw;
    display: grid;
    grid-template-rows: 15vh 85vh;
    .body {
      gap: 1rem;
      .text {
        gap: 1rem;
        text-align: center;
        font-size: 2rem;
        h1 {
          padding: 0 25rem;
        }
      }
      .form {
        display: grid;
        grid-template-rows: 1fr 1fr;
        width: 60%;
        margin: 0 auto;
        input {
          color: black;
          border: none;
          padding: 1rem;
          font-size: 1.2rem;
          border: 1px solid black;
          margin: 1rem 0;
          &:focus {
            outline: none;
          }
        }
        p {
          color: #e50914;
        }
      }
    }
    .login-btn {
      padding: 0.5rem 1rem;
      background-color: #e50914;
      border: none;
      cursor: pointer;
      color: white;
      font-weight: bolder;
      font-size: 1.05rem;
      width: 60%;
      margin: 0 auto;
    }
  }
`;
