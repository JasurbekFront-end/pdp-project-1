import { useState } from "react";
import { useNavigate } from "react-router-dom";
export const universities = [
  {
    name: "Toshkent Davlat Texnika Universiteti",
    faculties: [
      {
        name: "Dasturiy injiniring fakulteti",
        teachers: [
          "Alisher Nazirov",
          "Dilfuza Qodirova",
          "Farhod Abdullayev",
          "Gulnora Xasanova",
          "Jamshid Ismoilov",
          "Lola Karimova",
          "Murod Rustamov",
          "Nilufar Yunusova",
          "Otabek Joʻrayev",
          "Parvina Toʻxtayeva",
        ],
      },
      {
        name: "Elektrotexnika fakulteti",
        teachers: [
          "Azamat Zokirov",
          "Barno Toshpulatova",
          "Davron Ergashev",
          "Feruza Nosirova",
          "Gʻayrat Usmonov",
          "Hilola Qurbonova",
          "Ibrohim Toʻlaganov",
          "Kamola Mirziyoyeva",
          "Laziz Qodirov",
          "Mahliyo Abdullayeva",
        ],
      },
      {
        name: "Mexanika injiniringi fakulteti",
        teachers: [
          "Nodir Bekmurodov",
          "Oyjamol Xoliqova",
          "Poʻlat Rahmonov",
          "Qodir Hamidov",
          "Ravshan Ibrohimov",
          "Saodat Yusupova",
          "Timur Karimov",
          "Ulugʻbek Nosirov",
          "Vohidjon Abdullayev",
          "Zarina Fayziyeva",
        ],
      },
      {
        name: "Qurilish injiniringi fakulteti",
        teachers: [
          "Akmal Shodmonov",
          "Baxrom Isroilov",
          "Dilbar Toʻrayeva",
          "Elyor Mamajonov",
          "Firuz Zoirov",
          "Gulchexra Raximova",
          "Husan Orifov",
          "Iroda Xudoyberdiyeva",
          "Javlon Qurbonov",
          "Komila Safarova",
        ],
      },
      {
        name: "Kimyo texnologiyasi fakulteti",
        teachers: [
          "Lobar Olimova",
          "Mansur Xayitov",
          "Nargiza Nurmatova",
          "Olimjon Sobirov",
          "Parda Qodirova",
          "Quvonch Murodov",
          "Rustam Yoʻldoshev",
          "Saida Azimova",
          "Tohir Jalilov",
          "Umida Fayzullayeva",
        ],
      },
    ],
  },
  {
    name: "Toshkent Davlat Iqtisodiyot Universiteti",
    faculties: [
      {
        name: "Buxgalteriya hisobi fakulteti",
        teachers: [
          "Abror Abdurahmonov",
          "Bahriniso Qosimova",
          "Doston Xamidov",
          "Ezgulik Otaboyeva",
          "Foziljon Yoʻldoshev",
          "Guliston Xudoyberdiyeva",
          "Hakim Mirzayev",
          "Iroda Toshmatova",
          "Jahongir Qosimov",
          "Kamola Abdullayeva",
        ],
      },
      {
        name: "Bank ishi fakulteti",
        teachers: [
          "Laylo Qodirova",
          "Murodjon Usmonov",
          "Nigora Sharipova",
          "Otabek Toʻxtayev",
          "Parvina Raxmatullayeva",
          "Qodir Hamroyev",
          "Rano Tursunova",
          "Shoxrux Bobojonov",
          "Tursunoy Mirzayeva",
          "Ulugʻbek Xolmirzayev",
        ],
      },
      {
        name: "Xalqaro iqtisodiyot fakulteti",
        teachers: [
          "Vohid Abdullayev",
          "Zebo Mirziyoyeva",
          "Akbar Olimov",
          "Barchinoy Qurbonova",
          "Dilshod Rajabov",
          "Elyora Karimova",
          "Farangiz Xakimova",
          "Gʻolib Nosirov",
          "Hilola Joʻraboyeva",
          "Islom Xudoyberdiyev",
        ],
      },
      {
        name: "Marketing fakulteti",
        teachers: [
          "Jasur Qodirov",
          "Komila Raximova",
          "Lazizbek Yoʻldoshev",
          "Mahfuza Xoliqova",
          "Nodira Xamidova",
          "Oydin Toʻlaganova",
          "Parviz Abdullayev",
          "Rustamjon Qurbonov",
          "Shahnoza Mirzayeva",
          "Tohirjon Omonov",
        ],
      },
      {
        name: "Moliya fakulteti",
        teachers: [
          "Ulugʻbek Toʻrayev",
          "Vasila Qodirova",
          "Xurshid Rajabov",
          "Yulduz Xasanova",
          "Zafar Ismoilov",
          "Aziza Nurullayeva",
          "Bahodir Xakimov",
          "Dilfuza Joʻrayeva",
          "Eldor Shodmonov",
          "Fotima Qurbonova",
        ],
      },
    ],
  },
  {
    name: "Toshkent Tibbiyot Akademiyasi",
    faculties: [
      {
        name: "Umumiy tibbiyot fakulteti",
        teachers: [
          "Alisher Xoliqov",
          "Barno Abdullayeva",
          "Davron Toʻlaganov",
          "Feruza Qodirova",
          "Gʻulomjon Rahmonov",
          "Hilola Nosirova",
          "Islom Karimov",
          "Kamola Xudoyberdiyeva",
          "Lobar Otaboyeva",
          "Murodjon Yoʻldoshev",
        ],
      },
      {
        name: "Pediatriya fakulteti",
        teachers: [
          "Nodira Raximova",
          "Olimjon Qurbonov",
          "Parvina Toʻxtayeva",
          "Qodirbek Xamidov",
          "Rano Joʻraboyeva",
          "Shoxrux Mirzayev",
          "Tursunoy Otaboyeva",
          "Ulugʻbek Zoirov",
          "Vasila Qosimova",
          "Zafar Xasanov",
        ],
      },
      {
        name: "Stomatologiya fakulteti",
        teachers: [
          "Akmal Omonov",
          "Baxromjon Isroilov",
          "Dilfuza Mirziyoyeva",
          "Elyor Mamajonov",
          "Firuzaxon Zoirova",
          "Gulchexra Raximova",
          "Husan Orifov",
          "Iroda Xudoyberdiyeva",
          "Javlon Qurbonov",
          "Komila Safarova",
        ],
      },
      {
        name: "Farmatsevtika fakulteti",
        teachers: [
          "Laylo Qodirova",
          "Mansur Xayitov",
          "Nargiza Nurmatova",
          "Olimjon Sobirov",
          "Parda Qodirova",
          "Quvonch Murodov",
          "Rustam Yoʻldoshev",
          "Saida Azimova",
          "Tohir Jalilov",
          "Umida Fayzullayeva",
        ],
      },
      {
        name: "Kasalxona ishi fakulteti",
        teachers: [
          "Vohid Abdullayev",
          "Zebo Mirziyoyeva",
          "Akbar Olimov",
          "Barchinoy Qurbonova",
          "Dilshod Rajabov",
          "Elyora Karimova",
          "Farangiz Xakimova",
          "Gʻolib Nosirov",
          "Hilola Joʻraboyeva",
          "Islom Xudoyberdiyev",
        ],
      },
    ],
  },
  {
    name: "Oʻzbekiston Milliy Universiteti",
    faculties: [
      {
        name: "Fizika fakulteti",
        teachers: [
          "Abror Abdurahmonov",
          "Bahriniso Qosimova",
          "Doston Xamidov",
          "Ezgulik Otaboyeva",
          "Foziljon Yoʻldoshev",
          "Guliston Xudoyberdiyeva",
          "Hakim Mirzayev",
          "Iroda Toshmatova",
          "Jahongir Qosimov",
          "Kamola Abdullayeva",
        ],
      },
      {
        name: "Matematika fakulteti",
        teachers: [
          "Laylo Qodirova",
          "Murodjon Usmonov",
          "Nigora Sharipova",
          "Otabek Toʻxtayev",
          "Parvina Raxmatullayeva",
          "Qodir Hamroyev",
          "Rano Tursunova",
          "Shoxrux Bobojonov",
          "Tursunoy Mirzayeva",
          "Ulugʻbek Xolmirzayev",
        ],
      },
      {
        name: "Biologiya fakulteti",
        teachers: [
          "Alisher Xoliqov",
          "Barno Abdullayeva",
          "Davron Toʻlaganov",
          "Feruza Qodirova",
          "Gʻulomjon Rahmonov",
          "Hilola Nosirova",
          "Islom Karimov",
          "Kamola Xudoyberdiyeva",
          "Lobar Otaboyeva",
          "Murodjon Yoʻldoshev",
        ],
      },
      {
        name: "Kimyo fakulteti",
        teachers: [
          "Nodira Raximova",
          "Olimjon Qurbonov",
          "Parvina Toʻxtayeva",
          "Qodirbek Xamidov",
          "Rano Joʻraboyeva",
          "Shoxrux Mirzayev",
          "Tursunoy Otaboyeva",
          "Ulugʻbek Zoirov",
          "Vasila Qosimova",
          "Zafar Xasanov",
        ],
      },
      {
        name: "Geografiya fakulteti",
        teachers: [
          "Akmal Omonov",
          "Baxromjon Isroilov",
          "Dilfuza Mirziyoyeva",
          "Elyor Mamajonov",
          "Firuzaxon Zoirova",
          "Gulchexra Raximova",
          "Husan Orifov",
          "Iroda Xudoyberdiyeva",
          "Javlon Qurbonov",
          "Komila Safarova",
        ],
      },
    ],
  },
  {
    name: "Toshkent Davlat Pedagogika Universiteti",
    faculties: [
      {
        name: "Boshlangʻich taʼlim fakulteti",
        teachers: [
          "Laylo Qodirova",
          "Mansur Xayitov",
          "Nargiza Nurmatova",
          "Olimjon Sobirov",
          "Parda Qodirova",
          "Quvonch Murodov",
          "Rustam Yoʻldoshev",
          "Saida Azimova",
          "Tohir Jalilov",
          "Umida Fayzullayeva",
        ],
      },
      {
        name: "Filologiya fakulteti",
        teachers: [
          "Vohid Abdullayev",
          "Zebo Mirziyoyeva",
          "Akbar Olimov",
          "Barchinoy Qurbonova",
          "Dilshod Rajabov",
          "Elyora Karimova",
          "Farangiz Xakimova",
          "Gʻolib Nosirov",
          "Hilola Joʻraboyeva",
          "Islom Xudoyberdiyev",
        ],
      },
      {
        name: "Jismoniy madaniyat fakulteti",
        teachers: [
          "Abror Abdurahmonov",
          "Bahriniso Qosimova",
          "Doston Xamidov",
          "Ezgulik Otaboyeva",
          "Foziljon Yoʻldoshev",
          "Guliston Xudoyberdiyeva",
          "Hakim Mirzayev",
          "Iroda Toshmatova",
          "Jahongir Qosimov",
          "Kamola Abdullayeva",
        ],
      },
      {
        name: "Xorijiy tillar fakulteti",
        teachers: [
          "Laylo Qodirova",
          "Murodjon Usmonov",
          "Nigora Sharipova",
          "Otabek Toʻxtayev",
          "Parvina Raxmatullayeva",
          "Qodir Hamroyev",
          "Rano Tursunova",
          "Shoxrux Bobojonov",
          "Tursunoy Mirzayeva",
          "Ulugʻbek Xolmirzayev",
        ],
      },
      {
        name: "Tarix fakulteti",
        teachers: [
          "Alisher Xoliqov",
          "Barno Abdullayeva",
          "Davron Toʻlaganov",
          "Feruza Qodirova",
          "Gʻulomjon Rahmonov",
          "Hilola Nosirova",
          "Islom Karimov",
          "Kamola Xudoyberdiyeva",
          "Lobar Otaboyeva",
          "Murodjon Yoʻldoshev",
        ],
      },
    ],
  },
];
export type Teacher = string;

export type Faculty = {
  name: string;
  teachers: Teacher[];
};

export type University = {
  name: string;
  faculties: Faculty[];
};

export type Universities = University[];

export default function Home() {
  const [selectedUniversity, setSelectedUniversity] = useState<string>("");
  const [selectedFaculty, setSelectedFaculty] = useState<string>("");

  const university = universities.find((u) => u.name === selectedUniversity);
  const faculty = university?.faculties.find((f) => f.name === selectedFaculty);
  const navigate = useNavigate();
  return (
    <div className="grid h-screen w-full place-items-center bg-gray-100">
      <div className="h-[350px] w-[700px] space-y-4 rounded-xl bg-white p-4">
        <div className="flex items-center justify-center border-b border-gray-500 p-4">
          <h1 className="font-poppins text-center text-[18px] text-blue-600">
            Hurmatli talaba, siz bildirgan fikr universitet ta'lim jarayonini
            yaxshilash uchun juda muhim. Talabaning ism-sharifi anonim qoladi
          </h1>
        </div>
        <div>
          <label className="mb-1 block font-bold">Universitetni tanlang:</label>
          <select
            onChange={(e) => {
              setSelectedUniversity(e.target.value);
              setSelectedFaculty("");
            }}
            className="w-full rounded border p-2"
            defaultValue=""
          >
            <option value="" disabled>
              Universitet tanlang
            </option>
            {universities.map((university: University) => (
              <option key={university.name} value={university.name}>
                {university.name}
              </option>
            ))}
          </select>
        </div>

        {selectedUniversity && (
          <div>
            <label className="mb-1 block font-bold">Fakultetni tanlang:</label>
            <select
              onChange={(e) => {
                setSelectedFaculty(e.target.value);
              }}
              className="w-full rounded border p-2"
              defaultValue=""
            >
              <option value="" disabled>
                Fakultet tanlang
              </option>
              {university?.faculties.map((faculty: Faculty) => (
                <option key={faculty.name} value={faculty.name}>
                  {faculty.name}
                </option>
              ))}
            </select>
          </div>
        )}
        {selectedFaculty && (
          <div className="flex w-full items-center justify-center">
            <button
              onClick={() => {
                localStorage.setItem("faculty", JSON.stringify(faculty));
                navigate("/questions")
              }}
              className="font-poppins mt-3 cursor-pointer rounded-md bg-blue-500 px-4 py-2 text-white"
            >
              Testni boslash
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
