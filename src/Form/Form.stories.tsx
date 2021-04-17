import React from "react";
import { Meta, Story } from "@storybook/react";
import { FormActions, FormErrors } from "./types";
import { Form } from "./Form";
import { Field } from "../Field";
import { Button } from "../Button/Button";
import { sleep } from "../util";

const meta: Meta = {
  title: "Form",
  component: Form,
  subcomponents: {
    Field
  }
};

/* BasicFormStory */

interface IFormModel {
  name: string;
  date?: string;
}

const BasicFormStory: Story = (_) => {
  const initialValues: IFormModel = {
    name: "Hazel Nutt",
    date: "2021-04-15"
  };

  const onValidate = (
    values: IFormModel,
    actions: FormActions,
    errors: FormErrors<IFormModel>
  ) => {
    if (!values.name) {
      errors.name = "Name is required";
    }
    if (new Date(values.date) < new Date()) {
      errors.date = "Date has to be later than today";
    }
  };

  const onSubmit = async (values: IFormModel, actions: FormActions) => {
    await sleep(1500);
    alert(JSON.stringify(values, null, 2));
    await actions.displaySuccess();
  };

  return (
    <Form
      initialValues={initialValues}
      onValidate={onValidate}
      onSubmit={onSubmit}
    >
      <Field type="text" name="name" label="Text" />
      <Field type="date" name="date" label="Date" />
      <Button type="submit" label="Submit" />
    </Form>
  );
};
BasicFormStory.storyName = "Basic";

/* DeepPropFieldStory */

interface IDeepPropsFormModel {
  person: IPerson;
}

interface IPerson {
  birthday: string;
  address: IAddress;
}

interface IAddress {
  street: string;
}

const DeepPropFieldStory: Story = (_) => {
  const initialValues: IDeepPropsFormModel = {
    person: {
      birthday: "1998-09-01",
      address: {
        street: "Somestreet"
      }
    }
  };

  const onValidate = (
    values: IDeepPropsFormModel,
    actions: FormActions,
    errors: FormErrors<IDeepPropsFormModel>
  ) => {
    if (!values.person.address.street) {
      errors.person.address.street = "required";
    }
  };

  const onSubmit = async (
    values: IDeepPropsFormModel,
    actions: FormActions
  ) => {
    await sleep(1500);
    alert(JSON.stringify(values, null, 2));
    await actions.displaySuccess();
  };

  return (
    <Form
      initialValues={initialValues}
      onValidate={onValidate}
      onSubmit={onSubmit}
    >
      <Field type="text" name="person.address.street" label="Street" />
      <Field type="date" name="person.birthday" label="Birthday" />
      <Button type="submit" label="Submit" />
    </Form>
  );
};
DeepPropFieldStory.storyName = "Deep properties";

export default meta;
export { BasicFormStory, DeepPropFieldStory };
