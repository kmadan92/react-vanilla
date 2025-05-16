export default function Image({ src = '', className = '', ...props }) {
  return (
    <>
      <img src={`${src}`} className={`${className}`} {...props} />
    </>
  );
}
