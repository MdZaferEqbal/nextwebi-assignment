import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <>
      <div
        className="min-h-[150px] bg-transparent container"
        id="services"
      ></div>
      <section className="w-full max-w-7xl mx-auto container">
        <h1 className="text-deep-charcoal text-center text-3xl">Services</h1>

        <p className="client-desc text-center my-3 text-gray-600">
          Explore our wide range of development services tailored to meet
          diverse business needs. Whether it's crafting seamless web
          experiences, building dynamic front-end interfaces, developing robust
          back-end solutions, or delivering full-stack expertise, we ensure
          innovation, efficiency, and scalability in every project.
        </p>

        <div className="services-container mt-6 flex flex-wrap justify-evenly gap-7">
          <ServiceCard service="Web Development" />
          <ServiceCard service="Front End Development" />
          <ServiceCard service="Back End Development" />
          <ServiceCard service="Full Stack Development" />
        </div>
      </section>
    </>
  );
};

export default Services;
