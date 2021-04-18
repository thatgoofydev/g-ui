export type BaseButtonProps = {
  /**
   * The text to show inside of the button.
   */
  label: string;

  /**
   * The name of the button element
   */
  name?: string;

  /**
   * Whether the button renders disabled.
   */
  disabled?: boolean;

  "data-testid"?: string;
};
