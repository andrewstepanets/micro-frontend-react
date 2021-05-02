import React from "react";

export default function GreetingCat({ match }) {
  const { greeting } = match.params;
  const greetingCatUrl = `https://cataas.com/cat/says/${greeting}`;

  return (
    <div className="container__header">
      <h3>Greet me</h3>
      {!greeting ? (
        <div>Needs a greeting</div>
      ) : (
        <div>
          <img src={greetingCatUrl} width="400px" alt="Cat" />
        </div>
      )}
    </div>
  );
}
