function Button({ symbol, onClickDisplayVal }) {
  return (
    <div className="calculator__button">
      <button value={symbol} onClick={(e) => onClickDisplayVal(e, symbol)}>
        {symbol}
      </button>
    </div>
  );
}

export default Button;
