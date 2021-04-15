import React from "react";
import { Meta, Story } from "@storybook/react";
import { Field } from "../Field";
import { Form } from "../../Form/Form";
import { FormErrors } from "../../Form";
import { FormActions } from "../../Form/types";

const meta: Meta = {
  title: "Form/Fields",
  component: Field
};

/* BasicFieldStory */

interface IFormModel {
  name: string;
  date?: string;
}

const BasicFieldStory: Story = (_) => {
  const initialValues: IFormModel = {
    name: "Hazel Nutt",
    date: "2021-04-15"
  };

  const onValidate = (
    values: IFormModel,
    actions: FormActions,
    errors: FormErrors<IFormModel>
  ) => {
    if (!values.name || values.name == "") {
      errors.name = "Name is required";
    }
  };

  const onSubmit = async (values: IFormModel, actions: FormActions) => {};

  return (
    <Form
      initialValues={initialValues}
      onValidate={onValidate}
      onSubmit={onSubmit}
    >
      <Field type="text" name="name" label="Text" />
      <Field type="date" name="date" label="Date" />
    </Form>
  );
};
BasicFieldStory.storyName = "Basic";

export default meta;
export { BasicFieldStory };
