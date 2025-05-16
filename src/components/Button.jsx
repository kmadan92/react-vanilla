import { useState } from 'react';

export default function Button({
  children,
  className = '',
  type = 'button',
  OnClick,
  ...props
}) {
  const [clicked, setClicked] = useState(false);

  const handleClick = (e) => {
    setClicked(true);

    OnClick?.(e);
  };

  return (
    <>
      <button
        type="button"
        className={`${className} ${clicked ? 'text-white text-xl hover:text-2xl duration-300 ease-in-out font-bold' : 'text-xl text-white font-bold hover:text-2xl duration-300 transition-all ease-in-out'}`}
        onClick={handleClick}
        {...props}
      >
        {children}
      </button>
    </>
  );
}
