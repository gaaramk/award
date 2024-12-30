
const BentoCard = ({ src, title, description }) => {
  return (
    <div className="relative size-full">
      <video
        src={src}
        className="absolute top-0 left-0 size-full object-cover object-center"
        autoPlay
        loop
        muted
      />
      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
        <div>
          <h1 className="bento-title special-font">{title}</h1>
          {description && (
            <p className="mt-3 max-w-64 md:max-w-96 text-xs md:text-base">
              {description}
            </p>
          )}
        </div>
      </div>

      {title}
    </div>
  );
};

export default BentoCard;
