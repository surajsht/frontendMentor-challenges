const Hero: React.FC = () => {
  return (
    <section
      className="bg-component-bg pb-16 pt-28"
      style={{ backgroundImage: "url('./pattern-light-bg.svg')" }}
    >
      <div className="container">
        <div className="xl:flex xl:items-center xl:gap-40">
          <div className="mb-12 xl:w-1/2">
            <h2 className="mb-6 bg-[linear-gradient(107deg,#FF9A60_-11.37%,#062630_61.84%)] bg-clip-text font-martian-mono text-[38px] font-bold leading-[120%] tracking-[-2px] text-transparent md:text-[62px]">
              Join the ultimate tech book club
            </h2>

            <p className="mb-8 text-xl">
              Turn your reading time into learning time with fellow tech
              enthusiasts. Get curated recommendations, join vibrant
              discussions, and level up your skills one chapter at a time.
            </p>

            <button className="mb-6 flex items-center justify-center gap-6 rounded-lg border-2 border-black bg-button bg-[linear-gradient(90deg,#FFE2D1,#FFF5EF)] bg-[position:-400px_0] bg-no-repeat px-6 py-4 font-martian-mono font-semibold text-black transition-all duration-200 hover:bg-[position:0%_0]">
              REVIEW MEMBERSHIP OPTIONS
              <img src="./icon-arrow-down.svg" alt="down-arrow" />
            </button>

            <div className="flex gap-4">
              <img
                src="/image-avatars.webp"
                alt="image-avatars"
                className="h-10 object-cover"
              />

              <div>
                <div className="flex gap-[1px]">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <img key={index} src="/icon-star.svg" alt="star-svg" />
                  ))}
                </div>

                <span className="font-martian-mono text-sm leading-[120%] tracking-[-1px]">
                  200+ developers joined already
                </span>
              </div>
            </div>
          </div>

          <img
            src="/image-hero-desktop.webp"
            alt="hero-image"
            className="rounded-lg xl:w-1/2"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
