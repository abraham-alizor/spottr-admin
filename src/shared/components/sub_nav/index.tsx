import React from "react";

interface NavLinksProps {
  state: string;
  label: string;
}
interface Props {
  navLinks: NavLinksProps[];
  selected?: any;
  handleSelected: (value: string) => void;
  gutter: string;
  textsize?: string;
  textStyle?: string;
}
const SubNav = ({
  navLinks,
  selected,
  handleSelected,
  gutter,
  textsize,
  textStyle,
}: Props) => (
  <div className={`flex ${gutter} border-b px-5 border-[#C2E0FF]`}>
    {navLinks.map((links) => (
      <div>
        <button
          className={` text-[#274B89] ${textsize}  py-3 px-0 lg:px-5  ${selected === links.state && "border-b-2 relative border-darkblue"} transition-all duration-500`}
          key={links.state}
          onClick={() => {
            handleSelected(links.state);
          }}
          type='button'
        >
          <span className={textStyle}>{links.label}</span>
          {/* <div className='border-[#274B89] border w-[6vw] absolute bottom-0 left-1' /> */}
        </button>
      </div>
    ))}
  </div>
);

export default SubNav;
