/** @jsx h */
import { h } from "preact";
import DesignButton, {ButtonProps} from "./components/DesignButton";

export function Button(props: ButtonProps) {
  return DesignButton(props);
}
