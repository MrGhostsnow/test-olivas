"use client";
import { useState } from "react";
import {
  Container,
  Form,
  Input,
  TextArea,
  Button,
  SuccessMessage,
} from "./styles";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    setSuccess(true); // Simula o envio com sucesso
  };

  return (
    <Container>
      <h2>Contato</h2>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="name"
          placeholder="Nome"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <Input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <TextArea
          name="message"
          placeholder="Sua mensagem"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <Button type="submit">Enviar</Button>
      </Form>
      {success && (
        <SuccessMessage>Mensagem enviada com sucesso!</SuccessMessage>
      )}
    </Container>
  );
};

export default ContactForm;
