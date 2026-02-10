import { useCallback, useState, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setnumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("")
  const passwordRef = useRef("")

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*()-_+={}[]`~"

    for (let index = 1; index <= length; index++) {

      let randomChar = Math.floor(Math.random() * str.length + 1)

      pass += str.charAt(randomChar)

    }

    setPassword(pass)


  }, [length, numberAllowed, charAllowed, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, setPassword])

  return (
    <>

      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-7 my-8 text-orange-500 bg-blue-200' >
        <h1 className='text-4xl text-center text-blue-950 my-3'>Password Generator</h1>

        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text" value={password} className='outline-none w-full py-1 px-3' placeholder='The password will be generated automatically.'
          ref={passwordRef}
            readOnly />
          <button
          onClick={copyPasswordToClipboard}
            className="px-6 py-2 bg-blue-600 text-white font-semibold shadow-md shrink-0
                 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 
                 focus:ring-opacity-75 transition "
          >
            Copy
          </button>
        </div>

        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-2'>
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => { setLength(e.target.value) }}
              id='rangeInput'
            />
            <label htmlFor='rangeInput'> Length : {length}</label>
          </div>

          <div
            className='flex items-center gap-x-2'>
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id='numberInput'
              onChange={() => {
                setnumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>

          <div
            className='flex items-center gap-x-2'>
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id='charcterInput'
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
          
        </div>
      </div>
    </>
  )
}

export default App
