import heroBackDrop from "../assets/videos/hero-backdrop-1.mp4";
import * as motion from "motion/react-client";

const Hero = () => {
  const videotransition = { duration: 1, yoyo: Infinity, ease: "easeInOut" };
  const heroContentTransition = {
    duration: 2,
    yoyo: Infinity,
    ease: "easeInOut",
  };

  setTimeout(() => {
    document.querySelector('[data-id="hero-backdrop-video"]').pause();
  }, 2000);

  return (
    <>
      <section className="pt-0 mt-0">
        <motion.video
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={videotransition}
          className="video-bg mt-0 pt-0"
          data-id="hero-backdrop-video"
          autoPlay
          muted
        >
          <source src={heroBackDrop} type="video/mp4" />
          Your browser does not support the video tag.
        </motion.video>

        <motion.div
          initial={{ opacity: 0, scale: 0, translateY: 350 }}
          animate={{ opacity: 1, scale: 1, translateY: 25 }}
          transition={heroContentTransition}
          className="bg-transparent h-[100vh] p-0 m-0 flex items-center justify-center"
        >
          <div className="bg-light-almond-500 text-deep-charcoal backdrop-filter backdrop-blur-sm p-3 rounded-lg">
            <h1 className="sm:text-4xl text-xs text-deep-charcoal hero-heading">
              Welcome to <b>Nextwebi</b> It Solutions
            </h1>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Hero;
