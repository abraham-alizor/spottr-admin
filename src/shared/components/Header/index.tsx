/* eslint-disable jsx-a11y/alt-text */
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

import { LOGO } from "@/utils/Exports";

interface HeaderTypes {
  onMenu?: () => void;
}

function Header(props: HeaderTypes) {
  return (
    <div>
      <div className='flex h-16 w-full flex-row items-center justify-between  border-b border-b-[#E4E7EC] bg-white px-4 lg:h-12 lg:px-8 lg:py-8'>
        <div className=''>
          <AiOutlineMenu
            className='h-10 text-4xl lg:hidden'
            onClick={props.onMenu}
          />
        </div>
        <div className='mx-auto flex items-center lg:hidden '>
          <Link className='flex' to='/'>
            <img
              alt=''
              className='ml-2 cursor-pointer duration-500 rotate-[360deg]'
              src={LOGO}
            />
            <p className='text-brand font-bold'>Spottr</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
