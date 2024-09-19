"use client";
import { useState } from "react";
import {
  Container,
  ContainerContent,
  TitleForm,
  FormBlock,
  FormBlockMessage,
  Form,
  FormGrid,
  FormInput,
  Label,
  Input,
  Option,
  TextArea,
  Button,
  Checkbox,
  SuccessMessage,
} from "./styles";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    function: "",
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
      <ContainerContent>
        <TitleForm>
          <h2>
            Entre em contato e{" "}
            <span style={{ color: "#C6B92D" }}>receba atendimento</span>
          </h2>
          <p>
            Por favor, preencha o formulário abaixo com suas informações e a sua
            mensagem. Nossa equipe entrará em contato com você o mais breve
            possível.
          </p>
        </TitleForm>
        <Form onSubmit={handleSubmit}>
          <FormGrid>
            <FormBlock>
              <Label htmlFor="name">
                Nome completo <span style={{ color: "#C6B92D" }}>*</span>
              </Label>
              <Input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </FormBlock>
            <FormBlock>
              <Label htmlFor="email">
                Email Corporativo <span style={{ color: "#C6B92D" }}>*</span>
              </Label>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </FormBlock>
            <FormBlock>
              <Label htmlFor="phone">
                Telefone <span style={{ color: "#C6B92D" }}>*</span>
              </Label>
              <Input
                type="number"
                name="phoneer"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </FormBlock>
            <FormBlock>
              <Label htmlFor="job">
                Qual a sua função na empresa?{" "}
                <span style={{ color: "#C6B92D" }}>*</span>
              </Label>
              <Option name="job" value={formData.function} required />
            </FormBlock>
          </FormGrid>
          <FormBlockMessage style={{ width: "870px" }}>
            <Label htmlFor="message">
              Mensagem <span style={{ color: "#C6B92D" }}>*</span>
            </Label>
            <TextArea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </FormBlockMessage>
          <FormInput>
            <Checkbox type="checkbox" />
            <p>
              Ao informar meus dados, eu concordo com a Política de
              Privacidade e concordo em receber comunicações.
            </p>
          </FormInput>
        </Form>
        <Button type="submit">Receber atendimento</Button>
        {success && (
          <SuccessMessage>Mensagem enviada com sucesso!</SuccessMessage>
        )}
      </ContainerContent>
    </Container>
  );
};

export default ContactForm;
