import { ChangeEventHandler } from "react";

export const Input = ({
  onChange,
}: {
  onChange: ChangeEventHandler<HTMLInputElement>;
}) => {
  return <input onChange={onChange} />;
};
