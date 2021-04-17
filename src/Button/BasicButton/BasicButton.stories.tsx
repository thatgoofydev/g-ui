import React from "react";
import { Meta, Story } from "@storybook/react";
import { Button } from "../Button";

const meta: Meta = {
  title: "Form/Buttons/Basic",
  component: Button
};

const BasicButtonStory: Story = (_) => {
  const noop = () => {};

  return (
    <>
      <Button label="Default" onClick={noop} />
      <Button label="Disabled" onClick={noop} disabled />

      <Button label="Default (outline)" onClick={noop} style="outline" />
      <Button
        label="Disabled (outline)"
        onClick={noop}
        style="outline"
        disabled
      />
    </>
  );
};
BasicButtonStory.storyName = "default";

export default meta;
export { BasicButtonStory };
