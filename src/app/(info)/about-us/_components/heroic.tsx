import Image from "next/image";

const Heroic = () => {
  return (
    <section className="bg-white dark:bg-black w-full py-12 md:-mt-8 -mt-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col-reverse items-center justify-between gap-12 lg:flex-row lg:gap-20">
          {/* Left Text Section */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
            <h3 className="text-sm text-gray-500 font-semibold uppercase mb-2">
              About Us
            </h3>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Welcome to <span className="text-[#FE7465]">Coursevita</span>
            </h1>
            <p className="text-base sm:text-lg leading-relaxed text-gray-700 dark:text-gray-400 max-w-xl">
              {`At Coursevita, we believe in providing a "course for everyone." Founded in 2021, we are an innovative EdTech company dedicated to creating high-quality educational content that is accessible, engaging, and transformative. Join us on a journey of lifelong learning and professional growth.`}
            </p>
          </div>

          {/* Right Image Section */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="w-full max-w-md sm:max-w-lg lg:max-w-xl">
              <Image
                src="/images/about-us/group.jpg"
                alt="Coursevita Team"
                width={800}
                height={500}
                className="rounded-2xl w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Heroic;
