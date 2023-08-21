import { useState } from 'react'
import './App.scss'

import { Menu } from '../../components/menu';
import { Footer } from '../../components/footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>

      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Menu />
      <div>ok</div>
      <div></div>
      <Footer />
    </>
  )
}

export default App
