"use client"
import { type } from "os";
import { ReactElement, ReactHTMLElement } from "react";

type FormWrapperProps = {
  title: String;
  children: React.ReactNode;
};

const FormWrapper = ({ children, title }: FormWrapperProps) => {
  return (
    <>
      <h2 className="text-center m-0 mb-7">Header</h2>
      <div className="grid gap-4 justify-start grid-cols-1">{children}</div>
    </>
  );
};

export default FormWrapper;
