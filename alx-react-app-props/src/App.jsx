import { useState } from 'react';
import './App.css';
import reactLogo from './assets/react.svg';
import App from './components/App';
import Footer from './components/Footer';
import Header from './components/Header';
import MainContent from './components/MainContent';
import UserProfile from './components/UserProfile';
import WelcomeMessage from './components/WelcomeMessage';
import ProfilePage from './ProfilePage';
import UserContext from './UserContext';
import viteLogo from '/vite.svg';

function App() {
  const [count, setCount] = useState(0);
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
        <h3>This was performed by Richard</h3>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <WelcomeMessage />
      <Header />
      <MainContent />
      <div>
      <UserProfile
        name="Alice"
        age="25"
        bio="Loves hiking and photography"
      />
      </div>
      <div>
      <UserContext.Provider value={userData}>
        <ProfilePage />
      </UserContext.Provider>
      </div>
      <Footer />
    </>
  )
  
}

export default App
