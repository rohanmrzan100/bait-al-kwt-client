import React from "react";
import Container from "../../components/Container";
import FormWrap from "../../components/formwrap/FormWrap";
import RegisterForm from "./RegisterForm";

const Register = () => {
  return (
    <Container>
      <FormWrap>
        <RegisterForm />
      </FormWrap>
    </Container>
  );
};

export default Register;
