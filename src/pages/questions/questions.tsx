import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Questions() {
  const faculty = JSON.parse(localStorage.getItem("faculty") || "null");
    const navigate=useNavigate()
  const [question1, setQuestion1] = useState("");
  const [bestTeachers, setBestTeachers] = useState(["", "", ""]);
  const [worstTeachers, setWorstTeachers] = useState(["", "", ""]);
  const [dontKnowBest, setDontKnowBest] = useState(false);
  const [dontKnowWorst, setDontKnowWorst] = useState(false);

  const handleBestChange = (index: number, value: string) => {
    const updated = [...bestTeachers];
    updated[index] = value;
    setBestTeachers(updated);
  };

  const handleWorstChange = (index: number, value: string) => {
    const updated = [...worstTeachers];
    updated[index] = value;
    setWorstTeachers(updated);
  };

  const handleSubmit = () => {
    const answers = {
      question1,
      bestTeachers: dontKnowBest ? [] : bestTeachers,
      worstTeachers: dontKnowWorst ? [] : worstTeachers,
    };
    localStorage.setItem("surveyAnswers", JSON.stringify(answers));
    navigate("evaluation")
  };

  return (
    <div className="font-poppins grid min-h-screen place-items-center bg-gray-100 pt-30 pb-20">
      <div className="w-[700px] rounded-xl bg-white p-8 shadow">
        <div>
          <h1 className="text-[23px] font-bold">1 - savol</h1>
          <h2 className="mt-4 text-gray-600">
            Oliy o'quv yurtingizdagi ta'lim sifati sizni qay darajada
            qoniqtiradi?
          </h2>
          <div className="mt-4 flex flex-col gap-2">
            {[
              "To'liq qoniqtiradi",
              "Qisman qoniqtiradi",
              "Qisman qoniqtirmaydi",
              "Umuman qoniqtirmaydi",
            ].map((label, i) => (
              <div className="flex items-center gap-3" key={i}>
                <input
                  type="radio"
                  id={`q1-${i}`}
                  name="drone"
                  value={label}
                  checked={question1 === label}
                  onChange={() => setQuestion1(label)}
                />
                <label htmlFor={`q1-${i}`}>{label}</label>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8">
          <h1 className="text-[23px] font-bold">2 - savol</h1>
          <h2 className="mt-4 text-gray-600">
            Sizningcha eng adolatli va bilimli oqituvchilar kim ?
          </h2>
          <div className="mt-4 flex flex-col gap-3">
            {[0, 1, 2].map((index) => (
              <select
                key={index}
                className="rounded-md border border-gray-400 p-2"
                value={bestTeachers[index]}
                onChange={(e) => handleBestChange(index, e.target.value)}
                disabled={dontKnowBest}
              >
                <option value="">-- Tanlang --</option>
                {faculty?.teachers.map((teacher: string, idx: number) => (
                  <option key={idx} value={teacher}>
                    {teacher}
                  </option>
                ))}
              </select>
            ))}
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="dont-know-best"
                checked={dontKnowBest}
                onChange={(e) => {
                  setDontKnowBest(e.target.checked);
                  if (e.target.checked) setBestTeachers(["", "", ""]);
                }}
              />
              <label htmlFor="dont-know-best">Bilmayman</label>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h1 className="text-[23px] font-bold">3 - savol</h1>
          <h2 className="mt-4 text-gray-600">
            O'z fanini yaxshi bilmaydigan va dars berish uchun malakasi
            yetmaydigan o'qituvchilar kim ?
          </h2>
          <div className="mt-4 flex flex-col gap-3">
            {[0, 1, 2].map((index) => (
              <select
                key={index}
                className="rounded-md border border-gray-400 p-2"
                value={worstTeachers[index]}
                onChange={(e) => handleWorstChange(index, e.target.value)}
                disabled={dontKnowWorst}
              >
                <option value="">-- Tanlang --</option>
                {faculty?.teachers.map((teacher: string, idx: number) => (
                  <option key={idx} value={teacher}>
                    {teacher}
                  </option>
                ))}
              </select>
            ))}
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="dont-know-worst"
                checked={dontKnowWorst}
                onChange={(e) => {
                  setDontKnowWorst(e.target.checked);
                  if (e.target.checked) setWorstTeachers(["", "", ""]);
                }}
              />
              <label htmlFor="dont-know-worst">Bilmayman</label>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <button
            className="rounded-md bg-blue-600 px-6 py-2 text-white hover:bg-blue-700"
            onClick={handleSubmit}
          >
            Yuborish
          </button>
        </div>
      </div>
    </div>
  );
}
