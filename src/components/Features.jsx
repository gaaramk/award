import { TiLocationArrow } from "react-icons/ti";
import BentoCard from "./BentoCard";
import { useRef, useState } from "react";

const BentoTilt = ({ children, className = "" }) => {
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!itemRef.current) return;

    const { left, top, width, height } =
      itemRef.current.getBoundingClientRect();

    const relativeX = (e.clientX - left) / width;
    const relativeY = (e.clientY - top) / height;
    const tiltX = (relativeY - 0.5) * 50;
    const tiltY = (relativeX - 0.5) * -50;

    const newTransformStyle = `perspective(700px) rotateY(${tiltY}deg) rotateX(${tiltX}deg) scale3d(1, 1, 1)`;

    setTransformStyle(newTransformStyle);
  };

  const handleMouseLeave = () => {
    setTransformStyle("");
  };

  return (
    <div
      className={className}
      ref={itemRef}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
};

const Features = () => {
  return (
    <section className="bg-black pb-52">
      <div className="container mx-auto px-3 md:px-10">
        <div className="px-5 py-32">
          <p className="font-circular text-lg text-blue-50">
            Into the metagame layer{" "}
          </p>

          <p className="max-w-md font-circular text-lg text-blue-50 opacity-50">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur quas minus, atque molestiae ipsum nobis quia facilis
            libero totam assumenda eveniet, quos in corrupti dolores maxime
            deserunt explicabo,
          </p>
        </div>

        <BentoTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
          <BentoCard
            src={"videos/feature-1.mp4"}
            title={
              <>
                radi<b>n</b>t
              </>
            }
            description={
              "A cross-platform metagame app, turning your activity across web2 and web3 game into a rewarding adventure."
            }
          />
        </BentoTilt>

        <div className="grid h-[135vh] grid-cols-2 grid-rows-3 gap-7 ">
          <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
            <BentoCard
              src={"videos/feature-2.mp4"}
              title={
                <>
                  zig<b>m</b>a
                </>
              }
              description={
                "A cross-platform metagame app, turning your activity across web2 and web3 game into a rewarding adventure."
              }
            />
          </BentoTilt>

          <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 ms-32 md:ms-0">
            <BentoCard
              src={"videos/feature-3.mp4"}
              title={
                <>
                  nex<b>u</b>s
                </>
              }
              description={
                "A cross-platform metagame app, turning your activity across web2 and web3 game into a rewarding adventure."
              }
            />
          </BentoTilt>

          <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
            <BentoCard
              src={"videos/feature-4.mp4"}
              title={
                <>
                  <b>a</b>zul
                </>
              }
              description={
                "A cross-platform metagame app, turning your activity across web2 and web3 game into a rewarding adventure."
              }
            />
          </BentoTilt>

          <BentoTilt className="bento-tilt_2">
            <div className="flex size-full flex-col justify-between bg-violet-300 p-5">
              <h1 className="bento-title special-font max-w-64 text-black">
                M<b>o</b>re Co<b>m</b>ing <b>s</b>oon!
              </h1>

              <TiLocationArrow className="m-5 scale-[5] self-end" />
            </div>
          </BentoTilt>

          <BentoTilt className="bento-tilt_2">
            <video
              src="videos/feature-5.mp4"
              loop
              muted
              autoPlay
              className="size-full object-cover object-center"
            ></video>
          </BentoTilt>
        </div>
      </div>
    </section>
  );
};

export default Features;
