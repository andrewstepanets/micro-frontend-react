import { useEffect } from "react";
import { useInfiniteQuery } from 'react-query'
import axios from 'axios'


function MicroFrontend({ name, host, history }) {


  useEffect(() => {
    const scriptId = `micro-frontend-script-${name}`;

    const renderMicroFrontend = () => {

      window[`render${name}`](`${name}-container`, history);
    };

    if (document.getElementById(scriptId)) {
      renderMicroFrontend();
      return;
    }

    axios.get(`${host}/asset-manifest.json`)
      .then(res => res.data)
      .then((manifest) => {
        const script = document.createElement("script");
        script.id = scriptId;
        script.crossOrigin = "";
        script.src = `${host}${manifest.files["main.js"]}`;
        script.onload = () => {
          renderMicroFrontend();
        };
        document.head.appendChild(script);
      });

    return () => {
      window[`unmount${name}`] && window[`unmount${name}`](`${name}-container`);
    };
  })

  return <main id={`${name}-container`} />


}

MicroFrontend.defaultProps = {
  document,
  window,
};

export default MicroFrontend;