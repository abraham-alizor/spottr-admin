/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/jsx-props-no-spreading */
import { useField } from "formik";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export const FormInput = (props) => (
  <div className=' mb-2  relative'>
    <input
      autoComplete='off'
      className={`border-gray-300 appearance-none border placeholder:text-sm rounded-lg w-full py-3 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline  placeholder:text-gray-500  ${props.className}`}
      {...props}
      type={props.type ?? "text"}
    />
  </div>
);

const Input = ({ ...props }) => {
  const [show, setShow] = useState(false);
  const [field, meta] = useField(props);
  return (
    <>
      {props.isPassword === true ? (
        <div className=' mb-3 relative'>
          <input
            autoComplete='off'
            className={`border-gray-300 appearance-none border placeholder:text-sm rounded-lg w-full py-3 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline placeholder:text-gray-500 ${props.className}`}
            {...field}
            {...props}
            type={show === true ? "text" : "password"}
          />
          {show === true ? (
            <FaEye
              className='absolute top-4 right-4 cursor-pointer text-gray-700 text-2xl'
              onClick={() => setShow(!show)}
            />
          ) : (
            <FaEyeSlash
              className='absolute top-4 right-4 cursor-pointer text-gray-700 text-2xl'
              onClick={() => setShow(!show)}
            />
          )}
          {meta.touched && meta.error && (
            <span className='error  text-[12px] text-red-500'>
              {meta.error}
            </span>
          )}
        </div>
      ) : (
        <div className=' mb-3  relative'>
          <input
            autoComplete='off'
            className={`border-gray-300 appearance-none border rounded-lg w-full py-3 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline placeholder:text-gray-500 placeholder:text-sm ${props.className}`}
            {...field}
            {...props}
            type='text'
          />
          {meta.touched && meta.error && (
            <span className='error text-[12px] text-red-500'>{meta.error}</span>
          )}
        </div>
      )}
    </>
  );
};

export default Input;
