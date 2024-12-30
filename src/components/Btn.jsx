const Btn = ({ title, leftIcon, containerClass, id, rightIcon }) => {
  return (
    <button
      className={`${containerClass} group relative z-10 w-fit crser-pointer rounded-full overflow-hidden bg-violet-50 px-7 py-3 text-black`}
    >
      {leftIcon}

      <span className="relative incline-flex overflow-hidden font-general text-xs uppercase">
        <div>{title}</div>
      </span>

      {rightIcon}
    </button>
  );
};

export default Btn;
