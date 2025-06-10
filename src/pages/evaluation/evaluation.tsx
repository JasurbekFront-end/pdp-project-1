import { useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function Evaluation() {
  const faculty = JSON.parse(localStorage.getItem("faculty") || "null");

  const inputRefs = useRef<HTMLInputElement[]>([]);

  const handleSubmit = () => {
    const results = faculty.teachers.map((teacher: string, idx: number) => ({
      teacher,
      score: inputRefs.current[idx]?.value || "",
    }));

    localStorage.setItem("evaluationResults", JSON.stringify(results));
  };
  const navigate = useNavigate();
  return (
    <div className="grid min-h-screen w-full place-items-center bg-gray-100 pt-20 pb-6">
      <div className="font-poppins w-[700px] rounded-md bg-white p-5 shadow">
        {faculty.teachers.map((teacher: string, idx: number) => (
          <div
            key={idx}
            className="flex w-full items-center justify-between border-b border-gray-500 p-2"
          >
            <h1>{teacher}</h1>
            <input
              type="number"
              className="w-[50px] rounded-md border border-gray-500 indent-1 focus:outline-0"
              ref={(el) => {
                if (el) inputRefs.current[idx] = el;
              }}
              min="0"
              max="100"
            />
          </div>
        ))}
        <div className="mt-7 flex w-full items-center justify-center">
          <button
            onClick={() => {
              handleSubmit(), navigate("/results");
            }}
            className="cursor-pointer rounded-md bg-blue-500 px-4 py-2 text-white"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
