import * as motion from "motion/react-client";

const AboutCard = ({ i, about, title, hueA, hueB }) => {
  const hue = (h) => `hsl(${h}, 100%, 50%)`;
  const background = `linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`;

  const cardVariants = {
    offscreen: {
      y: 300,
    },
    onscreen: {
      y: 50,
      rotate: -10,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  const cardContainer = {
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    paddingTop: 20,
    minHeight: 500,
  };

  const splash = {
    position: "absolute",
    width: 450,
    height: 200,
    bottom: 0,
    borderRadius: 10,
    zIndex: 2,
  };

  const card = {
    fontSize: 24,
    width: 400,
    height: 300,
    display: "flex",
    justifyContent: "center",
    borderRadius: 20,
    background: "#eee5da",
    boxShadow:
      "0 0 1px hsl(0deg 0% 0% / 0.075), 0 0 2px hsl(0deg 0% 0% / 0.075), 0 0 4px hsl(0deg 0% 0% / 0.075), 0 0 8px hsl(0deg 0% 0% / 0.075), 0 0 16px hsl(0deg 0% 0% / 0.075)",
    transformOrigin: "10% 60%",
    color: hue(hueA),
  };

  return (
    <motion.div
      className={`card-container-${i} flex-grow basis-[45%] backdrop-filter backdrop-blur-sm`}
      style={cardContainer}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ amount: 0.8 }}
    >
      <div
        style={{ ...splash, background }}
        className="flex justify-center items-center font-bold"
      >
        {title}
      </div>
      <motion.div
        style={card}
        variants={cardVariants}
        drag
        className="card bg-light-almond p-10 about-card-detail cursor-pointer"
      >
        {about}
      </motion.div>
    </motion.div>
  );
};

export default AboutCard;
