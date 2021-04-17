import React from "react";
import { Meta, Story } from "@storybook/react";
import { Button } from "../Button";
import { Form, FormActions } from "../../Form";
import { sleep } from "../../util";

const meta: Meta = {
  title: "Form/Buttons/Submit",
  component: Button
};

const SubmitButtonStory: Story = (_) => {
  const noop = () => {};

  const onSubmitSuccess = async (values: {}, actions: FormActions) => {
    await sleep(1500);
    await actions.displaySuccess();
  };

  const onSubmitError = async (values: {}, actions: FormActions) => {
    await sleep(1500);
    await actions.displayError();
  };

  return (
    <>
      <Form initialValues={{}} onValidate={noop} onSubmit={onSubmitSuccess}>
        <Button type="submit" label="Success" />
      </Form>
      <Form initialValues={{}} onValidate={noop} onSubmit={onSubmitError}>
        <Button type="submit" label="Error" />
      </Form>
      <Form initialValues={{}} onValidate={noop} onSubmit={onSubmitSuccess}>
        <Button type="submit" label="Disabled" disabled />
      </Form>
    </>
  );
};
SubmitButtonStory.storyName = "default";

export default meta;
export { SubmitButtonStory };
