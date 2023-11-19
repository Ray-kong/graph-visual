import CodeBlock from "./components/CodeBlock";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col lg:flex-row min-w-screen min-h-screen justify-center">
        <div className="p-10">
          <CodeBlock
            code="import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)"
            language="JavaScript"
            showLineNumbers="true"
          />
        </div>
        <div className="p-10">
          <CodeBlock
            code="import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)"
            language="JavaScript"
            showLineNumbers="true"
          />
        </div>
      </div>
    </>
  );
}

export default App;
