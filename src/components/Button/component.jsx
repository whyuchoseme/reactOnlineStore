export const Button = ({ children, onClick, disableb }) => {
  return (
    <button onClick={onClick} disabled={disableb}>
      {children}
    </button>
  );
};
