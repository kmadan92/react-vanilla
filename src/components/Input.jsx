import React from 'react';

function Input(
  {
    type = 'text',
    htmlFor,
    labelClassname = '',
    inputClassname = '',
    labelChildren,
    onChange,
    value,
    ...props
  },
  ref
) {
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
        onChange={onChange}
        value={value}
        ref={ref}
        {...props}
      />
    </>
  );
}

export default React.forwardRef(Input);
