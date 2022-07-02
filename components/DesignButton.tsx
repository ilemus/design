/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

export interface ButtonProps {
  color?: string;
  variant?: string;
  children?: any;
}

function _textColor(color?: string) {
  let textColor = 'black'
  if (color !== undefined) {
    // TODO: need to adjust based on color type (primary, secondary, etc.)
    textColor = color;
  }
  return textColor
}

export default function DesignButton(props: ButtonProps) {
  const textColor = _textColor(props.color);
  const buttonClass = tw`text(${textColor})`;

  return (
    <button class={buttonClass}>{props.children}</button>
  );
}