import React from "react";
import { Meta, Story } from "@storybook/react";
import { Field } from "../Field";
import { Form } from "../../Form/Form";
import { FormErrors } from "../../Form";
import { FormActions } from "../../Form/types";
import { Button } from "../../Button";

const meta: Meta = {
  title: "Form/Fields",
  component: Field
};

/* BasicFieldStory */

interface IFormModel {
  date: string;
  email: string;
  month: string;
  number: number;
  password: string;
  search: string;
  tel: string;
  text: string;
  time: string;
  url: string;
  week: string;
}

const BasicFieldStory: Story = (_) => {
  const initialValues: IFormModel = {
    date: "2021-04-15",
    email: "dunstan@example.com",
    month: "2021-02",
    number: 0,
    password: "password",
    search: "Search something...",
    tel: "",
    text: "Hazel Nutt",
    time: "15:52",
    url: "https://goofy.dev",
    week: "2021-W05"
  };

  const onValidate = (
    values: IFormModel,
    actions: FormActions,
    errors: FormErrors<IFormModel>
  ) => {
    if (!values.text || values.text == "") {
      errors.text = "Name is required";
    }
  };

  const onSubmit = async (values: IFormModel, actions: FormActions) => {
    alert(JSON.stringify(values, null, 2));
    await actions.displaySuccess();
  };

  return (
    <Form
      initialValues={initialValues}
      onValidate={onValidate}
      onSubmit={onSubmit}
    >
      <Field type="date" name="date" label="Date" />
      <Field type="email" name="email" label="Email" />
      <Field type="month" name="month" label="Month" />
      <Field type="number" name="number" label="Number" />
      <Field type="password" name="password" label="Password" />
      <Field type="search" name="search" label="Search" />
      <Field type="tel" name="tel" label="Tel" />
      <Field type="text" name="text" label="Text" />
      <Field type="time" name="time" label="Time" />
      <Field type="url" name="url" label="Url" />
      <Field type="week" name="week" label="Week" />

      <Button type="submit" label="Submit" />
    </Form>
  );
};
BasicFieldStory.storyName = "Basic";

export default meta;
export { BasicFieldStory };
