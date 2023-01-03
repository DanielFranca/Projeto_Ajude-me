export default function Container({ children, className }) {
  return <div className={`w-75vw mx-auto ${className}`}>{children}</div>;
}
