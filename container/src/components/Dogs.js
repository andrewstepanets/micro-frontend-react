
import MicroFrontend from '../MicroFrontend'

const dogsHost = process.env.REACT_APP_DOGS_HOST

function Dogs({ history }) {
  return <MicroFrontend history={history} host={dogsHost} name="Dogs" />;
}

export default Dogs