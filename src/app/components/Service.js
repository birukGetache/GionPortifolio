"use client";
const Services = ({ isVisible }) => {
  return (
    <section id="services" className="service">
      {/* Only show content when it's visible */}
      <section
  className={`py-16 service transition-opacity duration-500 ease-in-out ${
    isVisible ? "opacity-100 animate-serviceanime" : "opacity-0"
  }`}
  id="services"
>
        <div className="max-w-7xl mx-auto text-center px-4">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-12">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {/* Website Development Card */}
            <div className="bg-white bg-opacity-10 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all transform scale-95 hover:scale-100 duration-300 " style={{border: "2px solid #33afff"}}>
              <div className="mb-6 text-blue-500">
                <svg
                  className="w-20 h-20 mx-auto"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 5h18M3 12h18M3 19h18" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Website Development
              </h3>
              <p className="text-gray-600">
                We specialize in building responsive, mobile-friendly websites
                that ensure fast load times, great user experiences, and
                effective SEO.
              </p>
            </div>

            {/* Mobile Application Card */}
            <div className="bg-white bg-opacity-10 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all transform scale-95 hover:scale-100 duration-300" style={{border: "2px solid lightgreen"}}>
              <div className="mb-6 text-green-500">
                <svg
                  className="w-20 h-20 mx-auto"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4h16v16H4z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Mobile Application
              </h3>
              <p className="text-gray-600">
                We develop high-performance, cross-platform mobile
                applications for Android and iOS with a focus on user
                experience and seamless integration.
              </p>
            </div>

            {/* Networking Card */}
            <div className="bg-white bg-opacity-10 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all transform scale-95 hover:scale-100 duration-300" style={{border:"2px solid red"}}>
              <div className="mb-6 text-red-500">
                <svg
                  className="w-20 h-20 mx-auto"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 4v4M12 16v4M4 12h4M16 12h4M6 6l12 12M6 18L18 6" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Networking
              </h3>
              <p className="text-gray-600">
                Our networking solutions ensure secure, reliable, and scalable
                network infrastructure to keep your business running smoothly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Show loading message when not visible */}
    
    </section>
  );
};

export default Services;
