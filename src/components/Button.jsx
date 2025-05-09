import { useState } from "react";


export default function Button({children,className="",...props}) {

    const [clicked, setClicked] = useState(false);

    const handleClick = (e) =>{
        setClicked(true)

        if(props.onClick)
            props.onClick(e)
    }

    return (
      <>
       <button
       type="button"
       className={clicked?'text-white underline  font-bold text-lg': 'text-white hover:underline hover:text-lg duration-200 transition-all'}
       onClick={handleClick}
       {...props}
       >
        {children}
       </button>
      </>
    );
  }
  