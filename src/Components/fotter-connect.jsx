import Contact from "../assets/images/contact-me.svg";
const FooterConnect = () => {
  return (
    <>
      <section className="mx-auto px-4 relative pb-12 bg-[#111]">
        <h2 className="text-[20px] sm:text-[25px] bg-[#111] font-bold px-2 py-4 w-max mx-auto text-center text-blue-700 relative z-10 border-[2px] border-[#1788ae] top-5">
          Let's Connect
        </h2>

        {/* Main Content Section */}
        <div className="flex flex-col md:flex-row justify-center items-center max-w-7xl mx-auto">
          {/* Image Section */}
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <img
              className="w-[80%] md:w-[90%] lg:w-[80%] xl:w-[90%] max-w-[500px] lg:max-w-[600px] xl:max-w-[700px] object-contain"
              src={Contact}
              alt="Contact Us"
            />
          </div>

          {/* Form Section */}
          <section className="w-full md:w-1/2 flex justify-center items-center">
            <div className="bg-white relative dark:bg-[#111] w-full p-4 md:p-8">
              <div className="py-4 sm:py-6 lg:py-8 px-4 mx-auto w-[90%] sm:w-[80%]">
                <h2 className="mb-4 text-xl sm:text-2xl lg:text-3xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white font-[Nunito]">
                  Contact Us
                </h2>

                <form action="#" className="space-y-4 sm:space-y-6">
                  {/* Email Input */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-300 font-[Nunito]"
                    >
                      Your email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 font-[Nunito]"
                      placeholder="name@example.com"
                      required
                    />
                  </div>

                  {/* Name Input */}
                  <div>
                    <label
                      htmlFor="subject"
                      className="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-300 font-[Nunito]"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="block p-2 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 font-[Nunito]"
                      placeholder="Your name"
                      required
                    />
                  </div>

                  {/* Message Input */}
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="message"
                      className="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-400 font-[Nunito]"
                    >
                      Your message
                    </label>
                    <textarea
                      id="message"
                      rows="4"
                      className="block p-2 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 font-[Nunito]"
                      placeholder="Leave a comment..."
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="py-2 px-4 text-10 font-medium text-center text-white rounded-lg bg-[#1788ae] sm:w-full hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 font-[Nunito]"
                  >
                    Send message
                  </button>
                </form>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default FooterConnect;
