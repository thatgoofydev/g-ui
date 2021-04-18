export type BaseFieldProps = {
  /**
   * The name of the input field.
   *
   * This needs to match the path in the form value object.
   */
  name: string;

  /**
   * The label that should be shown on the field.
   */
  label: string;

  /**
   * The placeholder of the field.
   */
  placeholder?: string;

  /**
   * Whether the field should render disabled or not.
   */
  disabled?: boolean;

  "data-testid"?: string;
};
