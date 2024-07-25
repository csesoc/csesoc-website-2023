import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { motion } from 'framer-motion';
export default function Custom404() {
  return (
    <section className="flex flex-col min-h-screen justify-between py-8 xl:px-24 md:px-10 px-5 relative overflow-hidden">
      <div className="items-center text-center">
        <Navbar />
        <h1 className="text-5xl font-bold pt-24">404 - Page Not Found</h1>
        <p className="text-4xl pt-10">
          Oops! This page must have been garbage collected.
          <br />
        </p>
        <motion.div
          className="opacity-0"
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          <p className="text-2xl pt-10">
            While we may have found some tomfoolery, we haven't found your page :'(
          </p>
        </motion.div>
        <a href="/">
          <button className="mt-10 bg-white border text-[#3977F8] border-[#A7A6E5] text-lg rounded-xl w-[30%] xl:h-12 h-10">
            Back to safety
          </button>
        </a>
      </div>

      <Footer />
    </section>
  );
}
