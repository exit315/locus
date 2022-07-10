import React, { memo, useState } from "react";
import styled from 'styled-components';
import Button from "../elements/button";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 50px 50px 35px;
  border: 1px solid #486958;
`;

const Input = styled.input`
  width: 100%;
  margin-bottom: 37px;
  padding-bottom: 25px;
  font-weight: 500;
  font-size: 25px;
  line-height: 38px;
  border: none;
`;

const InputWithBorder = styled(Input)`
  border-bottom: 1px solid #000000;
`;

const BtnWrapper = styled.div`
  align-self: flex-end;
`;

const ContactForm:React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    description: ''
  });

  const handleTextInput = (tag: string)=> (evt: React.ChangeEvent<HTMLInputElement>): void => {
    setFormData({...formData, [tag]: evt.target.value})
  };
  
  const submitHandler = (evt: React.SyntheticEvent<HTMLButtonElement>): void => {
    evt.preventDefault();
    console.log(formData);
    setFormData({
      name: '',
      address: '',
      description: ''
    })
  };

  return (
    <Form>
      <InputWithBorder type="text" value={formData.name} placeholder="Full name" onChange={handleTextInput('name')} />
      <InputWithBorder type="text" value={formData.address} placeholder="Email address" onChange={handleTextInput('address')} />
      <Input type="text" value={formData.description} placeholder="Description" onChange={handleTextInput('description')} />

      <BtnWrapper>
        <Button title="Send now" clickHandler={submitHandler} type="angle" />
      </BtnWrapper>
    </Form>
  );
};

export default memo(ContactForm);
