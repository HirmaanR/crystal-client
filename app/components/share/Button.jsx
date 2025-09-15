export function Button({ children, className }) {
  return (
    <a className={`btn btn-primary capitalize rounded-full ${className}`} > {children}</a >
  )
}

