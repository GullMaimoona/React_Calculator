function Button({ text, onClick }) {
  return (
    <button onClick={() => onClick(text)}>
      {text}
    </button>
  );
}

export default Button;