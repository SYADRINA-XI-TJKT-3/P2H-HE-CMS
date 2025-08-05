export default function Button({ onClick, children, disabled, type = "button" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`w-full h-[48px] rounded-md font-semibold text-white ${
        disabled
          ? "bg-gray-300 cursor-not-allowed"
          : "bg-orange-500 hover:bg-orange-600 cursor-pointer"
      }`}
    >
      {children}
    </button>
  );
}
