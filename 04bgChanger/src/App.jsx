import { useState } from "react"

function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
      <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button
              onClick={() => setColor("#F60000")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-red-500">Red</button>
            <button
              onClick={() => setColor("#FF8C00")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-orange-500">Orange</button>
            <button
              onClick={() => setColor("#FFEE00")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-yellow-400">Yellow</button>
            <button
              onClick={() => setColor("#4DE94C")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-green-500">Green</button>
            <button
              onClick={() => setColor("#3783FF")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-blue-500">Blue</button>
            <button
              onClick={() => setColor("#4B369D")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-indigo-500">Indigo</button>
            <button
              onClick={() => setColor("#70369D")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-violet-500">Voilet</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
