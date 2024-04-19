import { Button } from "../Button/component";

export const Tab = ({ children, onClick }) => {
  return <Button onClick={onClick}>{children}</Button>;
};
