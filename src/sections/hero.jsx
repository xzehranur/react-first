const Hero = () => {
  return (
    <header className="py-5">
      <div className="container px-lg-5">
        <div className="p-4 p-lg-5 bg-light rounded-3 text-center">
          <div className="m-4 m-lg-5">
            <h1 className="display-5 fw-bold">React</h1>
            <p className="fs-4">
              The library for web and native user interfaces
            </p>
            <a
              className="btn btn-primary btn-lg"
              href="https://react.dev/learn"
              target="_blank"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
