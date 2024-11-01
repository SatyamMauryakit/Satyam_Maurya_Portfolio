import logo from "../assets/images/logo.png";
import laptop from "../assets/images/laptop.png";

const LatestWork = () => {
  return (
    <>
      <section className="bg-[#111] text-white font-['Nunito']">
        <div className="max-w-screen-xl mx-auto px-4 relative" id="latestWork">
          <h2 className="text-[40px] bg-[#111] font-bold px-2 py-4 w-max mx-auto text-center text-blue-700 relative z-10 border-[2px] border-[#1788ae]">
            Latest Works
          </h2>

          {/* Project 1 */}
          <div className="flex flex-col md:flex-row gap-[80px] items-center mt-12 relative">
            <div className="h-[1px] md:right-1/2 md:left-60 md:block hidden bg-[#1788ae] absolute top-1/2"></div>
            <div className="h-4 w-4 rounded-full border-[3px] border-[#fc815c] absolute left-1/2 -translate-x-1/2 bg-[#111] z-10 md:block hidden hover:scale-110 ease-in-out duration-100"></div>
            <a href="#" className="w-full flex relative">
              <div className="relative group hover:scale-110 ease-linear duration-200">
                <span className="flex group-hover:-top-8 bg-[#fc815c] py-2 px-4 rounded w-max items-center gap-1 absolute left-1/2 -translate-x-1/2 top-10 after:content-[''] after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2 ease-jump duration-200">
                  EazyGard
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.0464 14C8.54044 12.4882 8.67609 9.90087 10.3494 8.22108L15.197 3.35462C16.8703 1.67483 19.4476 1.53865 20.9536 3.05046C22.4596 4.56228 22.3239 7.14956 20.6506 8.82935L18.2268 11.2626"
                      stroke="#1C274C"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                    <path
                      opacity="0.5"
                      d="M13.9536 10C15.4596 11.5118 15.3239 14.0991 13.6506 15.7789L11.2268 18.2121L8.80299 20.6454C7.12969 22.3252 4.55237 22.4613 3.0464 20.9495C1.54043 19.4377 1.67609 16.8504 3.34939 15.1706L5.77323 12.7373"
                      stroke="#1C274C"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>

                <img
                  className="max-w-[360px] mr-auto relative min-h-full bottom-16 drop-shadow-[0_0px_60px_rgba(58,130,246,0.7)]"
                  src={laptop} // Enter your project image
                  alt=""
                />
              </div>
            </a>

            <div className="w-full">
              <h3 className="text-[#fc815c] font-bold text-4xl">1st Project</h3>
              <samp className="text-[#fc815c] text-lg">(Event Booking)</samp>
              <p className="text-justify mt-2 text-white h-52 md:w-1/2">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo
                cum incidunt error sequi quaerat debitis. Dicta labore illum
                nihil molestias?
              </p>

              <div className="flex space-x-4 pb-28">
                {["HTML", "CSS", "Java", "React", "Node", "MDB"].map(
                  (tech, index) => (
                    <div className="flex flex-col items-center" key={index}>
                      <div
                        className={`w-10 h-10 ${
                          index % 2 === 0 ? "bg-[#fc815c]" : "bg-blue-700"
                        } rounded-full flex items-center justify-center`}
                      >
                        <span className="text-white text-[10px]">{tech}</span>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="flex flex-col md:flex-row gap-[80px] items-center mt-12 relative">
            <div className="h-[1px] md:right-60 md:left-1/2 md:block hidden bg-[#1788ae] absolute top-1/2"></div>
            <div className="h-4 w-4 rounded-full border-[3px] border-[#ffe578] absolute left-1/2 -translate-x-1/2 bg-[#111] z-10 md:block hidden hover:scale-110 ease-in-out duration-100"></div>
            <div className="w-full">
              <h3 className="text-[#ffe578] font-bold text-4xl">2nd Project</h3>
              <samp className="text-[#ffe578] text-lg">(Event Booking)</samp>
              <p className="text-justify mt-2 text-white h-52 md:w-1/2">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo
                cum incidunt error sequi quaerat debitis. Dicta labore illum
                nihil molestias?
              </p>
              <div className="flex space-x-4 pb-28">
                {["HTML", "CSS", "Java", "React", "Node", "MDB"].map(
                  (tech, index) => (
                    <div className="flex flex-col items-center" key={index}>
                      <div
                        className={`w-10 h-10 ${
                          index % 2 === 0
                            ? "bg-[#ffe578] font-bold"
                            : "bg-blue-700"
                        } rounded-full flex items-center justify-center`}
                      >
                        <span className="text-white text-[10px]">{tech}</span>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
            <div className="relative group hover:scale-110 ease-linear duration-200 ml-auto">
              <span className="flex text-black group-hover:-top-8 bg-[#ffe578] py-2 px-4 rounded w-max items-center gap-1 absolute left-1/2 -translate-x-1/2 top-6 after:content-[''] after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2 ease-jump duration-200">
                Harigurus
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.0464 14C8.54044 12.4882 8.67609 9.90087 10.3494 8.22108L15.197 3.35462C16.8703 1.67483 19.4476 1.53865 20.9536 3.05046C22.4596 4.56228 22.3239 7.14956 20.6506 8.82935L18.2268 11.2626"
                    stroke="#1C274C"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path
                    opacity="0.5"
                    d="M13.9536 10C15.4596 11.5118 15.3239 14.0991 13.6506 15.7789L11.2268 18.2121L8.80299 20.6454C7.12969 22.3252 4.55237 22.4613 3.0464 20.9495C1.54043 19.4377 1.67609 16.8504 3.34939 15.1706L5.77323 12.7373"
                    stroke="#1C274C"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <a href="#" className="w-full flex">
                <img
                  className="max-w-[360px] relative min-h-full bottom-16  drop-shadow-[0_0px_60px_rgba(58,130,246,0.7)]"
                  src={laptop} // Enter your project image
                  alt=""
                />
              </a>
            </div>
          </div>

          {/* Project 3 */}
          <div className="flex flex-col md:flex-row gap-[80px] items-center mt-12 relative">
            <div className="h-[1px] md:right-1/2 md:left-60 md:block hidden bg-[#1788ae] absolute top-1/2"></div>
            <div className="h-4 w-4 rounded-full border-[3px] border-green-500 absolute left-1/2 -translate-x-1/2 bg-[#111] z-10 md:block hidden hover:scale-110 ease-in-out duration-100"></div>
            <a href="#" className="w-full flex relative">
              <div className="relative group hover:scale-110 ease-linear duration-200">
                <span className="flex group-hover:-top-8 bg-green-500 py-2 px-4 rounded w-max items-center gap-1 absolute left-1/2 -translate-x-1/2 top-10 after:content-[''] after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2 ease-jump duration-200">
                  EazyGard
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.0464 14C8.54044 12.4882 8.67609 9.90087 10.3494 8.22108L15.197 3.35462C16.8703 1.67483 19.4476 1.53865 20.9536 3.05046C22.4596 4.56228 22.3239 7.14956 20.6506 8.82935L18.2268 11.2626"
                      stroke="#1C274C"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                    <path
                      opacity="0.5"
                      d="M13.9536 10C15.4596 11.5118 15.3239 14.0991 13.6506 15.7789L11.2268 18.2121L8.80299 20.6454C7.12969 22.3252 4.55237 22.4613 3.0464 20.9495C1.54043 19.4377 1.67609 16.8504 3.34939 15.1706L5.77323 12.7373"
                      stroke="#1C274C"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>

                <img
                  className="max-w-[360px] mr-auto relative min-h-full bottom-16  drop-shadow-[0_0px_60px_rgba(58,130,246,0.7)]"
                  src={laptop} // Enter your project image
                  alt=""
                />
              </div>
            </a>

            <div className="w-full">
              <h3 className="text-green-500 font-bold text-4xl">3rd Project</h3>
              <samp className="text-green-500 text-lg">(Event Booking)</samp>
              <p className="text-justify mt-2 text-white h-52 md:w-1/2">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo
                cum incidunt error sequi quaerat debitis. Dicta labore illum
                nihil molestias?
              </p>
              <div className="flex space-x-4 pb-28 pr-4">
                {["HTML", "Java", "React", "Node", "MDB"].map((tech, index) => (
                  <div className="flex flex-col items-center" key={index}>
                    <div
                      className={`w-10 h-10 ${
                        index % 2 === 0
                          ? "bg-green-500 font-bold "
                          : "bg-blue-700"
                      } rounded-full flex items-center justify-center`}
                    >
                      <span className="text-white text-[10px]">{tech}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="w-[2px] h-full bg-[#1288ae] absolute top-0 bottom-0 left-1/2 -translate-x-1/2 hidden md:block"></div>
        </div>
      </section>
    </>
  );
};

export default LatestWork;
