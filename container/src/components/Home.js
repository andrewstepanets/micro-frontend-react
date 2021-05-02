import { useState } from 'react'
import Cats from './Cats'
import Dogs from './Dogs'
import Header from './Header'

function Home({ history }) {
  const [input, setInput] = useState("");

  const handleOnClick = () => {
    history.push(`/cat/${input}`);
  };

  return (
    <div>
      <Header />
      <div className="home">
        <input
          placeholder="Insert a greeting"
          defaultValue={input}
          onBlur={(e) => setInput(e.target.value)}
        />
        <button onClick={handleOnClick}>Greet Me</button>
      </div>

      <div className="display">
        <div className="content">
          <div className="cat">
            <Cats />
          </div>
          <div className="dog">
            <Dogs />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home