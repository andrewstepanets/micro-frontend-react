import MicroFrontend from '../MicroFrontend'

const catsHost = process.env.REACT_APP_CATS_HOST

function Cats({ history }) {
  return <MicroFrontend history={history} host={catsHost} name="Cats" />;
}

export default Cats