"use client";
import axios from "axios";
import { ChangeEvent, useState } from "react";
import { useRouter } from "next/navigation";

export function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  return (
    <div className="h-screen flex justify-center flex-col">
      <div className="flex justify-center">
        <a
          href="#"
          className="block max-w-sm p-6 bg-white border border-gray-200 rounded-3xl"
        >
          <div>
            <div className="px-10 ">
              <h1 className="text-4xl text-black font-bold">Sign Up</h1>
              <div className="text-3xl font-extrabold">Sign Up</div>
            </div>
            <div className="pt-2">
              <LabelledInput
                onChange={(e) => {
                  return setUsername(e.target.value);
                }}
                label="Username"
                placeholder=" Ahmed@gmail.com "
              />
              <LabelledInput
                onChange={(e) => {
                  return setPassword(e.target.value);
                }}
                label="Password"
                placeholder=" ******** "
                type="password"
              />
              <button
                onClick={async () => {
                  await axios.post("http://localhost:3000/api/user", {
                    username,
                    password,
                  });
                  router.push("/");
                }}
                type="button"
                className="mt-8 w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
              >
                SignUp
              </button>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}
interface LabelledInputType {
  label: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}
function LabelledInput({ label, placeholder, type }: LabelledInputType) {
  return (
    <div>
      <label className="block mb-2 text-sm text-black font-semibold pt-4">
        {label}
      </label>
      <input
        // onChange={onChange}
        type={type || "text"}
        id="first_name"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder={placeholder}
        required
      />
    </div>
  );
}
