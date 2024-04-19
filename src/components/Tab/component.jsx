import { Button } from "../Button/component";

export const Tab = ({ children, onClick, isActive }) => {
  return (
    <Button onClick={onClick} size="m" type={isActive ? "active" : false}>
      {children}
    </Button>
  );
};
