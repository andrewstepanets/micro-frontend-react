import MicroFrontend from '../MicroFrontend'


function PetContainer({ history, ...otherProps }) {
  return <MicroFrontend history={history} {...otherProps} />;
}

export default PetContainer