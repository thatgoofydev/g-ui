import React from "react";
import cn from "classnames";

import styles from "./Icon.module.scss";

const icons = {
  check: (
    <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" />
  ),
  cross: (
    <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" />
  )
} as const;

type IconType = keyof typeof icons;

export type IconProps = {
  /**
   * The type of icon to render.
   */
  icon: IconType;

  /**
   * The size (in px) of the icon.
   */
  size?: number;

  className?: string;
};

const Icon = ({ icon, size = 24, className }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={cn(className, styles.icon)}
    >
      {icons[icon]}
    </svg>
  );
};

export { Icon };
