import { useState } from 'react'
import PetContainer from './PetContainer'
import Header from './Header'

const {
  REACT_APP_DOGS_HOST: dogsHost,
  REACT_APP_CATS_HOST: catsHost,
} = process.env;

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

      <div className="container">
        <div className="content">
          <PetContainer history={history} name="Cats" host={catsHost} />
          <PetContainer history={history} name="Dogs" host={dogsHost} />
        </div>
      </div>
    </div>
  );
}

export default Home