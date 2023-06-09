import React from "react";
import PropTypes from "prop-types";
import "./button.css";

/**
 * Primary UI component for user interaction
 */

type ButtonProps = {
  primary?: string;
  backgroundColor?: string;
  size?: string;
  label?: string;
};
export const Button = ({
  primary,
  backgroundColor,
  size,
  label,
  ...props
}: ButtonProps) => {
  const mode = primary
    ? "storybook-button--primary"
    : "storybook-button--secondary";
  return (
    <button
      type="button"
      className={["storybook-button", `storybook-button--${size}`, mode].join(
        " "
      )}
      {...props}
      style={{ backgroundColor: `${backgroundColor}` }}
    >
      {label}
    </button>
  );
};
