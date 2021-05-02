import Header from './Header'
import MicroFrontend from '../MicroFrontend'

const catsHost = process.env.REACT_APP_CATS_HOST


function GreetingCat({ history }) {
  return (
    <div>
      <Header />
      <div className="home">
        <MicroFrontend history={history} host={catsHost} name="Cats" />
      </div>
    </div>
  );
}

export default GreetingCat