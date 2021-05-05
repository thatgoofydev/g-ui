import React from "react";
import { Meta, Story } from "@storybook/react";
import { FieldArray } from "./FieldArray";
import { Field } from "../Field/Field";
import { Form, FormActions, FormErrors } from "../Form";
import { sleep } from "../util";
import { Button } from "../Button";

const meta: Meta = {
  title: "Form/FieldArray",
  component: FieldArray,
  subcomponents: {
    Field
  }
};

/* BasicFieldArrayStory */

interface IFormModel {
  name: string;
  definitions: IDefinition[];
}

interface IDefinition {
  name: string;
  percentage: number;
}

const EMPTY_DEFINITION: IDefinition = {
  name: "",
  percentage: 100
};

const BasicFieldArrayStory: Story = (args, context) => {
  const initialValues: IFormModel = {
    name: "Bob Sponge",
    definitions: [EMPTY_DEFINITION]
  };

  const onValidate = (
    values: IFormModel,
    actions: FormActions,
    errors: FormErrors<IFormModel>
  ) => {
    if (values.definitions) {
      values.definitions.forEach((definition, index) => {
        if (!definition.name) {
          errors.definitions[index].name = "Name is required";
        }
        if (!definition.percentage) {
          errors.definitions[index].percentage = "Percentage is required";
        }
        if (definition.percentage && definition.percentage < 20) {
          errors.definitions[index].percentage =
            "Percentage should be more then 20";
        }
      });
    }
  };

  const onSubmit = async (values: IFormModel, actions: FormActions) => {
    await sleep(1500);
    alert(JSON.stringify(values, null, 2));
    await actions.displaySuccess();
  };

  return (
    <>
      <Form
        initialValues={initialValues}
        onValidate={onValidate}
        onSubmit={onSubmit}
      >
        <FieldArray name="definitions">
          {(fields) => (
            <>
              {fields.map((name, index) => (
                <div key={name}>
                  <Field type="text" label="Name" name={`${name}.name`} />
                  <Field
                    type="text"
                    label="Percentage"
                    name={`${name}.percentage`}
                  />
                  <Button label="Remove" onClick={() => fields.remove(index)} />
                </div>
              ))}
              <Button
                label="Add"
                onClick={() => fields.push(EMPTY_DEFINITION)}
              />
            </>
          )}
        </FieldArray>

        <Button label="Submit" type="submit" />
      </Form>
    </>
  );
};
BasicFieldArrayStory.storyName = "'Basic";

export default meta;
export { BasicFieldArrayStory };
