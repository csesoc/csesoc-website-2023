import Background from '@/components/Background';
import Navbar from '@/components/Navbar';

const Landing = () => {
  return (
    <section
      className="flex flex-col min-h-screen justify-between py-8 xl:px-24 md:px-10 px-5 relative overflow-hidden"
      id="landing"
    >
      <Navbar />
      <Background />
      <div className="flex justify-between items-end">
        <div>
          <div className="font-semibold">
            <p>{'<h1>'}</p>
            <h2 className="font-black 2xl:text-8xl lg:text-6xl text-4xl">Hello World!</h2>
            <p>{'</h1>'}</p>
          </div>
          <div className="font-semibold mt-10">
            <p>{'<h2>'}</p>
            <h2 className="font-bold 2xl:text-3xl text-xl">
              We are the principal representative body for{' '}
              <span className="text-[#3977F9]">UNSW computing</span> students.
            </h2>
            <p>{'</h2>'}</p>
          </div>
        </div>
        <div className="w-72 font-semibold text-xl lg:block hidden">
          <p className="font-bold bg-[#3977F8] inline px-3 py-1">STATS</p>
          <hr className="mb-3 mt-5" />
          <div className="flex justify-between">
            <p>323,000</p>
            <p>Members</p>
          </div>
          <div className="flex justify-between">
            <p>300</p>
            <p>Team Members</p>
          </div>
          <div className="flex justify-between">
            <p>52</p>
            <p>Events held</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
