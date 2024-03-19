import { useState, useEffect } from 'react'; // Added import for useEffect
import axios from 'axios'; // Added import for Axios
import reactLogo from './assets/react.svg';

import './App.css';

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios.get('/api/jokes')
      .then((response) => {
        setJokes(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []); // Added empty dependency array to useEffect

  return (
    <>
      <h1>SYSTEM HANG HO GYA H</h1>
      <h2>jokes: {jokes.length}</h2>
      {
        jokes.map((joke, index) => (
          <div key={joke.id}>
            <h3>{joke.title}</h3> {/* Fixed typo in accessing 'title' */}
            <p>{joke.content}</p> {/* Changed 'jokes.content' to 'joke.content' */}
          </div>
        ))
      }
    </>
  );
}

export default App;
