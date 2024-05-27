const HeaderComponent = ({ score, bestScore }) => {
  return (
    <div className="header">
      <div>
        <h1>Memory Card</h1>
        <p>
          Get points by clicking on an image but don&#39;t click on any more than
          once!
        </p>
        &gt;
      </div>
      <div className="score-board">
        <p>
          <b>Score:</b>
          {score}
        </p>
        <p>
          <b>Best Score:</b>
          {bestScore}
        </p>
      </div>
    </div>
  );
};

export default HeaderComponent