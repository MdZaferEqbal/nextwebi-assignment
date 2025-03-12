import AboutCard from "./AboutCard";
import * as motion from "motion/react-client";

const About = () => {
  return (
    <>
      <div className="min-h-[150px] bg-transparent container" id="about"></div>
      <section className="w-full max-w-7xl mx-auto container">
        <h1 className="text-deep-charcoal flex justify-center text-center text-3xl">
          <span className="text-center">Why choose us</span>
          <motion.span
            whileInView={{ rotate: 360 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            &nbsp;?
          </motion.span>
        </h1>
        <div className="flex justify-between flex-wrap gap-32">
          <AboutCard
            i={0}
            about="We specialize in both front-end and back-end development."
            hueA={340}
            hueB={10}
          />
          <AboutCard
            i={0}
            about="Our team builds robust, scalable, and secure applications."
            hueA={20}
            hueB={40}
          />
          <AboutCard
            i={0}
            about="We leverage the latest frameworks and tools."
            hueA={60}
            hueB={90}
          />
          <AboutCard
            i={0}
            about="Your vision is our priority!"
            hueA={80}
            hueB={120}
          />
        </div>
      </section>
    </>
  );
};

export default About;
