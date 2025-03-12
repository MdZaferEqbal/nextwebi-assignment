import { vite, react, js, html, css } from "../assets";
import ClientCard from "./ClientCard";

const Clients = () => {
  return (
    <>
      <div className="min-h-[150px] bg-transparent" id="clients"></div>
      <section className="w-full max-w-7xl mx-auto container">
        <h1 className="text-deep-charcoal text-center text-3xl">Clients</h1>

        <p className="clients-desc text-center my-3 text-gray-600">
          Our trusted partners and clients have been an integral part of our
          journey. Here are some of the brands that have collaborated with us,
          reflecting our commitment to excellence and innovation. From startups
          to industry leaders, we take pride in delivering solutions that drive
          success.
        </p>

        <div className="clients-container mt-6 flex flex-wrap justify-between items-stretch gap-7">
          <ClientCard
            src={vite}
            alt="vite logo"
            desc="Fast build tool for modern web development."
          />
          <ClientCard
            src={react}
            alt="react logo"
            desc="JavaScript library for building interactive UIs."
          />
          <ClientCard
            src={js}
            alt="js logo"
            desc="Versatile language for dynamic web applications."
          />
          <ClientCard
            src={html}
            alt="html logo"
            desc="Defines web page structure and content."
          />
          <ClientCard
            src={css}
            alt="css logo"
            desc="Styles web pages with layouts and designs."
          />
        </div>
      </section>
    </>
  );
};

export default Clients;
