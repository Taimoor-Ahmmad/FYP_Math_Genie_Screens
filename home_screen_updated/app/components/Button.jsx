const Button = ({ title, style }) => {
  return (
    <button
      className={`
        bg-cover bg-center bg-Btn text-white rounded-full flex items-center justify-center py-2 px-4
        md:text-base md:py-3 md:px-6 // Adjust for medium and up screens
        sm:text-sm sm:py-2 sm:px-4 // Adjust for small and down screens
        ${style ? style : ""}
      `}
    >
      {title}
    </button>
  );
};
export default Button;