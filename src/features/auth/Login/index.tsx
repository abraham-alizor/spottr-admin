/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { BsArrowLeft } from "react-icons/bs";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";

import { useAppDispatch } from "@/hooks";
import { LoginApi } from "@/services/auth/auth.service";
import Button from "@/shared/components/button";
import Input from "@/shared/components/form/Input";
import AuthLayout from "@/shared/Layouts/AuthLayout";
import { setToken, setUser } from "@/states/slices/authReducer";
import { FACEBOOK, GOOGLE } from "@/utils/Exports";

interface FormData {
  email: string;
  password: string;
}

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).max(15).required(),
});

const Login: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const loginMutation = useMutation(LoginApi);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();
  const submitForm = async (data: FormData) => {
    setLoading(true);
    try {
      const response = await loginMutation.mutateAsync(data);

      if (response) {
        toast.success(response.message, {
          duration: 7000, // Duration for which the toast is displayed (in milliseconds)
        });

        // eslint-disable-next-line no-console
        setLoading(false);

        dispatch(setUser(response.data.admin));

        dispatch(setToken(response.data.token));
        navigate("/dashboard");
      }
    } catch (error: any) {
      setLoading(false);
      toast.error(error?.response?.data?.message, {
        duration: 10_000,
      });
    }
  };

  return (
    <AuthLayout>
      <form
        className='flex flex-col grow px-16  py-3 lg:py-20 w-full bg-white rounded max-md:px-5 max-md:mt-10 max-md:max-w-full'
        onSubmit={handleSubmit(submitForm)}
      >
        <div className='flex gap-5 justify-center self-start text-base font-semibold text-blue-900'>
          <BsArrowLeft className='my-auto' />
          <div>Go back</div>
        </div>
        <div className='mb-6 text-xl font-semibold text-blue-900 mt-10 max-md:max-w-full'>
          Login to your account
        </div>

        <Input
          error={errors.email}
          name='email'
          placeholder='Enter your email'
          register={register("email")}
          type='text'
        />

        <Input
          error={errors.password}
          name='password'
          placeholder='Enter your password'
          register={register("password")}
          type='password'
        />

        <div className='self-end mt-5 text-sm text-center text-brand'>
          Forgot my password
        </div>
        <div className='self-center mt-6 text-xs leading-6 text-center text-black max-md:mt-10'>
          Or use
        </div>
        <div className='flex justify-between items-center lg:gap-5 lg:self-center mt-5 text-sm lg:text-base font-bold whitespace-nowrap'>
          <div className='w-[48%] flex justify-start items-center px-2 lg:px-5 py-3 text-center text-brand bg-white rounded border border-solid border-stone-300'>
            <img
              alt=''
              className='shrink-0 aspect-[0.92]  w-5 lg:w-[23px]'
              loading='lazy'
              src={FACEBOOK}
            />
            <div className='ml-2'>Facebook</div>
          </div>
          <div className=' w-[48%] flex justify-start items-center  px-2 lg:px-5 py-3 text-black bg-white rounded border border-solid border-stone-300'>
            <img
              alt=''
              className='shrink-0 aspect-[0.96] w-5 lg:w-[23px]'
              loading='lazy'
              src={GOOGLE}
            />
            <div className='ml-2'>Google</div>
          </div>
        </div>
        <Button
          bgColor='bg-brand'
          className=' mb-2  mt-12 w-full py-4 rounded-lg'
          isLoading={loading}
          onClick={handleSubmit(submitForm)}
          textColor='text-white'
          title='Continue'
          type='button'
        />
      </form>
    </AuthLayout>
  );
};

export default Login;
