function Button({ text }) {
    return (
      <button className="px-5 py-2 rounded bg-blue-500 hover:bg-blue-600 transition text-white">
        {text}
      </button>
    );
  }
export default Button;