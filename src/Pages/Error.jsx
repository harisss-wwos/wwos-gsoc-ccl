import { NavLink } from "react-router-dom";
import { MdErrorOutline, MdHome } from "react-icons/md";

export default function Error() {
  return (
    <div className="min-h-screen bg-[var(--color-bg1)] flex items-center justify-center px-4 font-f2 font-bold">
      <div className="w-full max-w-md bg-[var(--color-bg2)] border border-[var(--color-border)] rounded-lg shadow-2xl shadow-black/60 flex flex-col items-center text-center p-6 sm:p-8 gap-4">
        {/* ICON */}
        <MdErrorOutline className="text-[var(--color-warning)]" size={52} />

        {/* TITLE */}
        <h1 className="text-3xl sm:text-4xl font-bold text-[var(--color-f1)]">
          Error 404
        </h1>

        {/* SUB TEXT */}
        <p className="text-sm sm:text-base text-[var(--color-f2)]">
          Page does not exist !
        </p>

        {/* HOME BUTTON */}
        <NavLink
          to="/"
          className="
            w-full sm:w-2/3
            flex items-center justify-center gap-2
            py-2
            rounded-md
            font-medium
            bg-[var(--color-primary)]
            text-white
            border border-[var(--color-primary)]
            transition
            duration-200
            hover:bg-[var(--color-hover)]
            hover:border-[var(--color-blue-glow)]
          "
        >
          <MdHome size={18} />
          Home
        </NavLink>
      </div>
    </div>
  );
}
