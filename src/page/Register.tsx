import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import axios from "../Api/axios";
import { useMutation } from "@tanstack/react-query";

interface IuserType {
  name: string;
  email: string;
  password: string;
}

const Register = () => {
  const changePage = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });
  const { mutate, isSuccess } = useMutation({
    mutationFn: async (user: IuserType) => {
      const { data } = await axios.post("/api/users/register", {
        name: user.name,
        email: user.email,
        password: user.password,
      });
      return data;
    },
  });

  if (isSuccess) {
    changePage("/Dashboard");
  }

  return (
    <div>
      <div className="flex flex-col justify-center items-center bg-gray-50 h-screen">
        <form
          className="bg-white w-90 py-10 px-8 justify-center items-center flex flex-col gap-4 border border-gray-300 rounded-xl"
          onSubmit={handleSubmit((data) => {
            mutate(data);
          })}
        >
          <div className="flex flex-col justify-center items-center gap-2">
            <p className="text-gray-900 text-3xl font-medium">sing up</p>
            <p className="text-gray-500 primaryTest">
              Please login to continue
            </p>
          </div>
          <div className="flex items-center w-full bg-white border border-gray-300/80 h-12 rounded-full pl-6 gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#6B7280"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-user-round"
              aria-hidden="true"
            >
              <circle cx="12" cy="8" r="5"></circle>
              <path d="M20 21a8 8 0 0 0-16 0"></path>
            </svg>
            <input
              placeholder="Name"
              className="border-none w-full outline-none primaryTest pr-8"
              type="text"
              {...register("name", { required: true })}
            />
          </div>
          <div className="flex items-center w-full bg-white border border-gray-300/80 h-12 rounded-full pl-6 gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#6B7280"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-mail"
              aria-hidden="true"
            >
              <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
              <rect x="2" y="4" width="20" height="16" rx="2"></rect>
            </svg>
            <input
              placeholder="Email id "
              className="border-none w-full outline-none primaryTest pr-8"
              type="email"
              {...register("email", { required: true })}
            />
          </div>
          <div className="flex items-center w-full bg-white border border-gray-300/80 h-12 rounded-full pl-6 gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#6B7280"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-lock"
              aria-hidden="true"
            >
              <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
            </svg>
            <input
              placeholder="Password"
              className="border-none w-full outline-none primaryTest pr-8"
              type="password"
              {...register("password", { required: true })}
            />
          </div>
          {errors.name && <p className="text-red-600">Error</p>}

          <p className="text-green-500 text-[12px] self-start cursor-pointer">
            Forget password?
          </p>
          <button
            type="submit"
            className="cursor-pointer w-full h-11 rounded-full text-white bg-green-500 hover:opacity-90 transition-opacity"
          >
            SingUp
          </button>
          <p className="text-gray-500 text-[12px]">
            Don't have an account?
            <span
              onClick={() => {
                changePage("/login");
              }}
              className="text-green-500 cursor-pointer hover:border-b"
            >
              click here
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
