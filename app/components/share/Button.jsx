import ButtonMotion from "../motion/ButtonMotion";

export function Button({ children, className }) {
  return (
    <ButtonMotion>
      <a className={`btn btn-primary capitalize rounded-full ${className}`}>
        {" "}
        {children}
      </a>
    </ButtonMotion>
  );
}
