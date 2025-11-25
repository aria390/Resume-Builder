import React, { useEffect } from "react";
import useTrueOrFalse from "../Store/TrueOrFalse";
import { useTitle } from "../Store/addTitle";
import { useNavigate } from "react-router";
import axios from "../Api/axios";
import { useMutation } from "@tanstack/react-query";

interface ResumeT {
  title: string;
  resumeId?: string;
}

type Edit = {
  initialData?: ResumeT;
  onClose?: () => void;
  isOpen?: boolean;
};

const Modal = ({ initialData }: Edit) => {
  const { isOpenLogin, setIsOpenLogin } = useTrueOrFalse();
  const { title, setTitle } = useTitle();
  const changePage = useNavigate();

  useEffect(() => {
    if (initialData?.title) {
      setTitle(initialData.title);
    } else {
      setTitle("");
    }
  }, [initialData]);

  const saveResume = async ({ title, resumeId }: ResumeT) => {
    const token = localStorage.getItem("token");
    if (resumeId) {
      return await axios.put(
        `/api/resumes/update/${resumeId}`,
        {
          resumeId: resumeId,
          title: title,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      );
    } else {
      return await axios.post(
        "/api/resumes/create",
        {
          title: title,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      );
    }
  };

  const { mutate } = useMutation({
    mutationFn: saveResume,
    onSuccess: () => {
      setTitle(""), setIsOpenLogin(false);
      changePage("/Builder");
    },
  });

  return (
    isOpenLogin && (
      <div className="h-full">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            mutate({ title: title, resumeId: initialData?.resumeId });
          }}
          className="fixed inset-0 bg-black/70 backdrop-blur bg-opacity-50 z-10 flex items-center justify-center"
        >
          <div className="relative bg-slate-50 border shadow-md rounded-lg w-full max-w-sm p-6">
            <h2 className="text-xl font-bold mb-4">Create a Resume</h2>
            <input
              placeholder="Enter resume title"
              className="w-full px-4 py-2 mb-4 focus:border-green-600 ring-green-600"
              type="text"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
            <button
              type="submit"
              className="w-full py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
            >
              {initialData ? "save changes" : "Create Resume"}
            </button>
            <svg
              onClick={() => {
                setIsOpenLogin(false);
              }}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-x absolute top-4 right-4 text-slate-400 hover:text-slate-600 cursor-pointer transition-colors"
              aria-hidden="true"
            >
              <path d="M18 6 6 18"></path>
              <path d="m6 6 12 12"></path>
            </svg>
          </div>
        </form>
      </div>
    )
  );
};

export default Modal;
