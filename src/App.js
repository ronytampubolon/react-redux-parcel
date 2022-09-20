// @flow
import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Login from "./pages/Login";
import Counter from "./features/counter/Counter"

function App() {
  return (
    <div className=" max-w-xl mx-auto min-h-screen relative bg-gray-50">
      <header>
        <h1>Welcome to {process.env.SECRET_CODE}</h1>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<Login />} />
        <Route path="counter" element={<Counter />} />
      </Routes>
    </div>
  );
}

function Home() {
  return (
    <>
      <main>
        <h2>Welcome to the homepage!</h2>
      </main>
      <nav>
        <Link to="/about">About</Link>
        <Link to="/counter">Counter</Link>
      </nav>
      <nav className="flex sm:justify-center space-x-4">
        {[
          ["Home", "/"],
          ["About", "/about"],
          ["Counter", "/counter"],
        ].map(([title, url]) => (
          <a
            key={url}
            href={url}
            className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900"
          >
            {title}
          </a>
        ))}
      </nav>
    </>
  );
}

export default App;
