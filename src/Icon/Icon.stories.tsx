import React from "react";
import { Meta, Story } from "@storybook/react";
import { Icon, IconProps } from "./Icon";

const meta: Meta = {
  title: "General/Icon",
  component: Icon
};

/* Default Icon */

const IconStory: Story<IconProps> = (props) => {
  return (
    <>
      <Icon {...props} />
    </>
  );
};
IconStory.storyName = "All Icons";
IconStory.args = {
  icon: "check"
};

export default meta;
export { IconStory };
