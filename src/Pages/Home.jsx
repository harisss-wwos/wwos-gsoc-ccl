import { MdContacts } from "react-icons/md";
import RegionNavs from "../Components/RegionNavs";
import wwosLogo from "../images/wwos-gsoc.png";
import Footer from "../Components/Footer.jsx";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--color-bg1)] text-[var(--color-f1)] flex items-center justify-center px-4 sm:px-6 py-3 sm:py-6">
      <div className="w-full max-w-6xl bg-[var(--color-bg2)] shadow-2xl shadow-black/60 rounded-lg flex flex-col gap-4 p-2 sm:p-2">
        {/* HEADER */}
        <div className="flex flex-col items-center gap-3 mt-4 sm:mt-6 text-center">
          <img
            src={wwosLogo}
            alt="WWOS Logo"
            className="w-20 sm:w-24 rounded-sm shadow-md shadow-black/40"
          />

          <h2 className="text-lg sm:text-xl font-bold font-f2 text-[var(--color-f2)] flex items-center gap-2">
            <MdContacts className="text-[var(--color-blue-glow)]" size={18} />
            Consolidated Contacts List
          </h2>
        </div>

        {/* NOTE */}
        <div className="w-full bg-[var(--color-bg3)] border-[var(--color-border)] rounded-md px-4 sm:px-6 py-3 text-center text-sm sm:text-base text-[var(--color-f2)] shadow-md">
          NOTE: Please prefer the application for only{" "}
          <span className="text-[var(--color-warning)] font-semibold">
            OTR incidents !
          </span>
        </div>

        <RegionNavs />
        <Footer />
      </div>
    </div>
  );
}
