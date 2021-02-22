import React from 'react'
import { withFormik, FormikProps } from "formik";
import * as Yup from 'yup';
import Head from 'next/head'
import { useAuth } from '../hooks/auth'
import TextField from '../components/TextField'
import Button from '../components/Button'
import {
  Container,
  Main,
  Title,
  SubTitle,
  Retangulo,
  Form,
  Label,
  RegisterContainer,
  RegisterLabel
} from '../styles/pages/Home'


interface FormValues {
  email: string;
  password: string;
}

interface MyFormProps {
  initialEmail?: string;
  initialPassword?: string;
}

const Home: React.FC = () => {
  const { signIn } = useAuth()

  const handleLogin = async (email: string, password: string) => {
    await signIn(email, password)
  }

  const InnerForm = (props: FormikProps<FormValues>) => {
    const {
      values,
      errors,
      touched,
      handleSubmit,
      handleChange,
      handleBlur,
    } = props;

    return (
      <Form onSubmit={handleSubmit}>
        <Label>E-MAIL</Label>
        <TextField
          type="email"
          name="email"
          value={values.email}
          placeholder='user.name@mail.com'
          onChange={handleChange}
          onBlur={handleBlur}
          border={touched.email && errors.email && "1px solid red !important"}
        />
        <Label>SENHA</Label>
        <TextField
          type="password"
          name="password"
          placeholder='*******'
          onBlur={handleBlur}
          value={values.password}
          border={
            touched.password && errors.password && "1px solid red !important"
          }
          onChange={handleChange}
        />
        <Button type="submit">Submit</Button>
      </Form >
    );
  };

  const AppForm = withFormik<MyFormProps, FormValues>({
    mapPropsToValues: props => ({
      email: props.initialEmail || "",
      password: props.initialPassword || ""
    }),

    validationSchema: Yup.object().shape({
      email: Yup.string()
        .email("Email not valid")
        .required("Email is required"),
      password: Yup.string().required("Password is required")
    }),

    handleSubmit(
      { email, password }: FormValues,
      { props, setSubmitting, setErrors }
    ) {
      handleLogin(email, password)
    }
  })(InnerForm);



  return (
    <Container>
      <Head>
        <title>Wiser Educação</title>
      </Head>
      <Retangulo />
      <Main>
        <Title>Olá, seja bem-vindo!</Title>
        <SubTitle>Para acessar a plataforma, faça seu login.</SubTitle>
        <AppForm />
        <RegisterContainer>
          <RegisterLabel>Esqueceu seu login ou senha? Clique aqui</RegisterLabel>
        </RegisterContainer>
      </Main>
    </Container>
  )
}

export default Home
