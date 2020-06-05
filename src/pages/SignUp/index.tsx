import React from 'react';
import { Form } from '@unform/web';

import { FiArrowLeft, FiMail, FiUser, FiLock } from 'react-icons/fi';
import logo from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background } from './styles';

const SignIn: React.FC = () => {
  function handleSubmit(data: object): void {
    console.log(data);
  }
  return (
    <Container>
      <Background />
      <Content>
        <img src={logo} alt="GoBarv=barber" />
        <Form onSubmit={handleSubmit}>
          <h1>Faça seu cadastro</h1>
          <Input icon={FiUser} name="user" type="text" placeholder="Nome" />
          <Input icon={FiMail} name="email" type="text" placeholder="E-mail" />
          <Input
            icon={FiLock}
            name="password"
            type="password"
            placeholder="Senha"
          />
          <Button type="submit">Cadastrar</Button>
        </Form>
        <a href="/cadastro">
          <FiArrowLeft />
          voltar para logon
        </a>
      </Content>
    </Container>
  );
};

export default SignIn;
