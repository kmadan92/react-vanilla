export default function Input({
  type = 'text',
  htmlFor,
  labelClassname = '',
  inputClassname = '',
  labelChildren,
  onChange,
  ...props
}) {
  return (
    <>
      {labelChildren && (
        <label htmlFor={`${htmlFor}`} className={`${labelClassname}`}>
          {`${labelChildren}`}
        </label>
      )}
      <input
        type={`${type}`}
        id={`${htmlFor}`}
        className={`${inputClassname}`}
        {...props}
      />
    </>
  );
}
