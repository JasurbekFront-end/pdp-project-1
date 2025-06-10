export default function Results() {
  const evaluationResults = JSON.parse(
    localStorage.getItem("evaluationResults") || "[]",
  );
  const faculty = JSON.parse(localStorage.getItem("faculty") || "null");
  console.log(faculty);

  return (
    <div className="grid min-h-screen w-full place-items-center bg-gray-100">
      <table className="w-[800px] border-collapse border border-gray-300 bg-white">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 p-2">№</th>
            <th className="border border-gray-300 p-2">O‘qituvchi nomi</th>
            <th className="border border-gray-300 p-2">O‘rtacha baho</th>
            <th className="border border-gray-300 p-2">Baholashlar soni</th>
          </tr>
        </thead>
        <tbody>
          {evaluationResults.map(
            (data: { teacher: string; score: number }, index: number) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="border border-gray-300 p-2 text-center">
                  {index + 1}
                </td>
                <td className="border border-gray-300 p-2">{data.teacher}</td>
                <td className="border border-gray-300 p-2 text-center">
                  {data.score || "-"}
                </td>
                <td className="border border-gray-300 p-2 text-center">0</td>
              </tr>
            ),
          )}
        </tbody>
      </table>
    </div>
  );
}