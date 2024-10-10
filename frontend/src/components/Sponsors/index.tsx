import React from 'react';
import Footer from '@/components/Footer';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Sponsors = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section
      className="flex flex-col min-h-screen py-8 xl:px-24 sm:px-10 px-8 relative mt-20"
      id="sponsors"
    >
      <div className="text-center">
        <h2 className="font-bold text-6xl">SUPPORT CSESOC</h2>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <div
          className="rounded border border-[#595F6D] p-5 h-auto overflow-hidden w-[90rem] flex flex-col gap-8 py-8"
        >
          <div className="flex flex-col justify-center items-center">
              <h2 className="text-center text-4xl font-black">Our sponsors</h2>
          </div>

          <Carousel
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            arrows={false}
            autoPlaySpeed={3000}
            keyBoardControl={false}
            transitionDuration={500}
            pauseOnHover={false}
            containerClass="carousel-container my-16"
          >
            <div className="sponsor-item">
                <img src="assets/tiktok_logo.svg" alt="TikTok logo" />
            </div>
            <div className="sponsor-item">
                <img src="assets/janestreet_logo.svg" alt="Jane Street logo" />
            </div>
            <div className="sponsor-item">
                <img src="assets/atlassian_logo.svg" alt="Atlassian logo" />
            </div>
            <div className="sponsor-item">
                <img src="assets/citadel_logo.svg" alt="Citadel logo" />
            </div>
            <div className="sponsor-item">
                <img src="assets/imc_logo.svg" alt="IMC logo" />
            </div>
            <div className="sponsor-item">
                <img src="assets/neara_logo.svg" alt="Neara logo" />
            </div>
          </Carousel>

          <div className="flex justify-center items-center">
            <a href="sponsors">
              <button className="bg-white border text-[#3977F8] border-[#A7A6E5] text-lg rounded-xl w-[20rem] xl:h-12 h-10 hover-animate">
                Learn More
              </button>
            </a>
          </div>
          {/* <div className="flex flex-col justify-center items-center xl:col-span-4 col-span-10 row-start-1 row-end-3 xl:my-0 my-12">
            <div className="max-w-[15rem]">
              <h2 className="text-4xl font-black text-center">Our sponsors</h2>
              <p className="xl:my-10 my-3 text-lg">Check out our very cool sponsors.</p>
              <a href="sponsors">
                <button className="bg-white border text-[#3977F8] border-[#A7A6E5] text-lg rounded-xl w-[100%] xl:h-12 h-10">
                  Learn More
                </button>
              </a>
            </div>
          </div>
          <div className={`${firstRowBoxesStyling} bg-[rgba(0, 71, 255, 0.33)]`}>
            <img src="assets/atlassian_logo.svg" alt="Atlassian logo" />
          </div>
          <div className={`${firstRowBoxesStyling} bg-[rgba(82, 130, 255, 0.47)]`}>
            <img src="assets/google_logo.svg" alt="Google logo" />
          </div>
          <div className={`${secondRowBoxesStyling} bg-[rgba(48, 93, 255, 0.2)]`}>
            <img src="assets/freelancer_logo.svg" alt="Freelancer logo" />
          </div>
          <div className={`${secondRowBoxesStyling} bg-[rgba(122, 137, 236, 0.27)]`}>
            <img src="assets/microsoft_logo.svg" alt="Microsoft logo" />
          </div> */}
        </div>
      </div>
      <Footer />
      <img
        src="assets/sponsors_backdrop.svg"
        alt="Sponsors backdrop"
        className="absolute bottom-0 left-0 w-screen -z-10"
      />
    </section>
  );
};

export default Sponsors;
