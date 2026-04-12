import { NavLink } from "react-router-dom";
import { FaGlobeAmericas, FaChevronRight } from "react-icons/fa";
import { MdChecklist } from "react-icons/md";
import { CCLVersion } from "../Data/app-Data.js";

export default function RegionNavs({ region }) {
  const regions = [
    ["NA", "United States | Canada"],
    ["LATAM", "Mexico | Brazil"],
    ["EUROPE", "UK | Germany | France | Italy"],
    ["AMET", "UAE | Saudi | Egypt | Turkey"],
    ["APAC", "Australia | Japan | India | Singapore"],
  ];

  return (
    <div className="flex flex-col w-full gap-3">
      {/* VERSION BAR */}
      <div className="w-full bg-[var(--color-bg3)]  border-[var(--color-border)] text-[var(--color-f2)] flex items-center justify-center gap-2 p-2 rounded-md text-sm sm:text-base">
        <MdChecklist className="text-[var(--color-blue-glow)]" size={16} />
        Consolidated Contacts List Version:
        <span className="text-[var(--color-orange-glow)] font-semibold">
          {CCLVersion}
        </span>
      </div>

      <div>
        <div className="grid grid-cols-5 gap-2 w-full text-xs sm:text-sm font-f4 tracking-widest text-center">
          <div className="flex items-center justify-center gap-1 bg-red-900 text-white rounded-md py-4 border-red-700 shadow-md">
            SEV1
          </div>
          <div className="flex items-center justify-center gap-1 bg-red-600 text-white rounded-md py-4 border-red-500 shadow-md">
            SEV2
          </div>
          <div className="flex items-center justify-center gap-1 bg-yellow-500 text-black rounded-md py-4 border-yellow-400 shadow-md">
            SEV3
          </div>
          <div className="flex items-center justify-center gap-1 bg-green-600 text-white rounded-md py-4 border-green-500 shadow-md">
            SEV4
          </div>
          <div className="flex items-center justify-center gap-1 bg-gray-500 text-white rounded-md py-4 border-gray-400 shadow-md">
            SEV5
          </div>
        </div>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 w-full">
        {regions.map(([key, title]) => (
          <NavLink
            key={key}
            to={`/${key}`}
            title={title}
            className={({ isActive }) =>
              `flex items-center justify-center gap-2 px-3 py-3 rounded-md  text-sm sm:text-base font-medium transition-all duration-300 shadow-md active:scale-[0.98] ${
                isActive
                  ? "bg-[var(--color-primary)] text-white border-[var(--color-primary)] shadow-[var(--color-primary)]/30"
                  : "bg-[var(--color-bg3)] text-[var(--color-f2)] border-[var(--color-border)] hover:bg-[var(--color-hover)] hover:text-[var(--color-f1)] hover:border-[var(--color-blue-glow)]"
              }`
            }
          >
            <FaGlobeAmericas size={14} />
            <span>{key}</span>

            {region === key && (
              <FaChevronRight className="text-white" size={10} />
            )}
          </NavLink>
        ))}
      </div>
    </div>
  );
}
