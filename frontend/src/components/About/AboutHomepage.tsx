import Image from "next/image";

export default function AboutHomePage() {
    return (
        // <section className="py-8 xl:px-24 sm:px-10 px-5" id="about">
        //   <div className="text-center my-10">
        //     <h2 className="font-bold text-6xl">ABOUT</h2>
        //   </div>
        //   <div className="flex justify-center items-center">
        //     <div className="lg:grid grid-cols-6 flex-1 max-w-[90rem]">
        //       {/* LEFT SIDE */}
        //       {/* NOTE: there is slightly altered from about/index.tsx */}
        //       <div className="col-span-2 md:mx-5">
        //         <div className="flex items-center justify-center">
        //           <Image src="/assets/csesoc_icon.svg" alt="CSESoc Icon" width={150} height={150} />
        //         </div>
        //         <h2 className="mt-4 text-3xl font-extrabold">CSESoc</h2>
        //         <p className="text-[#727B8C] font-medium">unsw-computer-science-engineering-society</p>
        //         <div className="my-4 flex gap-5">
        //           <Image src="/assets/people_icon.svg" alt="People" width={20} height={20} />
        //           <div>
        //             16k <span className="text-[#727B8C]">members</span> · 146{' '}
        //             <span className="text-[#727B8C]">internal members</span>
        //           </div>
        //         </div>
        //         <div className="my-4 flex gap-5">
        //           <Image src="/assets/location_icon.svg" alt="Location" width={20} height={20} />
        //           Sydney, Australia
        //         </div>
        //         <div className="flex gap-5">
        //           <Image src="/assets/mail_icon.svg" alt="Mail" width={20} height={20} />
        //           <a href="mailto:info@csesoc.org.au" className="hover:underline">info@csesoc.org.au</a>
        //         </div>
        //       </div>
        //       {/* RIGHT SIDE */}
        //       <div className="col-span-4 lg:mt-0 mt-10">
        //         <p className="text-2xl">
        //           We are one of the largest and most active societies at UNSW, and {" "}
        //           <span className="font-bold text-[#3977F8]">the largest computing society in the southern hemisphere</span>.
        //           <br/><br/>
        //           CSESoc comprises {" "}
        //           <span className="font-bold text-[#3977F8]">over 16k members</span> 
        //           {" "}spanning across various degrees including Computer Science, 
        //           Software Engineering, Bioinformatics and Computer Engineering.
        //           <br/><br/>
        //           We are here to fulfil the social, personal and professional needs of CSE students, 
        //           and promote computing through a variety of forms.
        //         </p>
        //         <a href="about">
        //           <button className="mt-16 bg-white border text-[#3977F8] border-[#A7A6E5] text-lg rounded-xl w-[60%] xl:h-12 h-10 hover-animate mx-auto block">
        //             Find out more
        //           </button>
        //         </a>
        //       </div>
        //     </div>
        //   </div>
        // </section>
        <section className="py-8 xl:px-24 sm:px-10 px-5" id="about">
          <div className="flex justify-center items-center">
            <div
              className="rounded-[1rem] border-2 border-[#595F6D] h-auto overflow-hidden w-full max-w-[90rem] flex flex-col gap-8 py-8"
            >
              <div className="text-center my-10">
                <h2 className="font-bold text-6xl">ABOUT</h2>
              </div>
              <div className="flex justify-center items-center">
                <div className="lg:grid grid-cols-6 flex-1 max-w-[90rem]">
                  {/* LEFT SIDE */}
                  <div className="col-span-2 md:mx-5">
                    <div className="flex items-center justify-center">
                      <Image src="/assets/csesoc_icon.svg" alt="CSESoc Icon" width={150} height={150} />
                    </div>
                    <h2 className="mt-4 text-3xl font-extrabold">CSESoc</h2>
                    <p className="text-[#727B8C] font-medium">unsw-computer-science-engineering-society</p>
                    <div className="my-4 flex gap-5">
                      <Image src="/assets/people_icon.svg" alt="People" width={20} height={20} />
                      <div>
                        16k <span className="text-[#727B8C]">members</span> · 146{' '}
                        <span className="text-[#727B8C]">internal members</span>
                      </div>
                    </div>
                    <div className="my-4 flex gap-5">
                      <Image src="/assets/location_icon.svg" alt="Location" width={20} height={20} />
                      Sydney, Australia
                    </div>
                    <div className="flex gap-5">
                      <Image src="/assets/mail_icon.svg" alt="Mail" width={20} height={20} />
                      <a href="mailto:info@csesoc.org.au" className="hover:underline">info@csesoc.org.au</a>
                    </div>
                  </div>
                  {/* RIGHT SIDE */}
                  <div className="col-span-4 lg:mt-0 mt-10">
                    <p className="text-2xl">
                      We are one of the largest and most active societies at UNSW, and {" "}
                      <span className="font-bold text-[#3977F8]">the largest computing society in the southern hemisphere</span>.
                      <br/><br/>
                      CSESoc comprises {" "}
                      <span className="font-bold text-[#3977F8]">over 16k members</span> 
                      {" "}spanning across various degrees including Computer Science, 
                      Software Engineering, Bioinformatics and Computer Engineering.
                      <br/><br/>
                      We are here to fulfil the social, personal and professional needs of CSE students, 
                      and promote computing through a variety of forms.
                    </p>
                    <a href="about">
                      <button className="mt-16 bg-white border text-[#3977F8] border-[#A7A6E5] text-lg rounded-xl w-[60%] xl:h-12 h-10 hover-animate mx-auto block">
                        Find out more
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      );
}