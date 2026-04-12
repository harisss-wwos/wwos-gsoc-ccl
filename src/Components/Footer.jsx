import { MdFeedback } from "react-icons/md";
import { Owners } from "../Data/app-Data";

export default function Footer() {
  const ownersList = Owners.split(",")
    .map((o) => o.trim())
    .filter(Boolean);

  return (
    <footer className="w-full border-t border-[var(--color-border)] bg-[var(--color-bg2)] p-1">
      <div className="max-w-6xl mx-auto text-center text-[var(--color-f2)] text-sm sm:text-base leading-relaxed">
        <span className="inline-flex flex-wrap items-center justify-center gap-1">
          <MdFeedback className="text-[var(--color-green-glow)]" size={18} />

          <span>For feedback or suggestions contact</span>

          {ownersList.map((o, index) => {
            const isLast = index === ownersList.length - 1;
            const isSecondLast = index === ownersList.length - 2;

            return (
              <span key={index} className="inline-flex items-center">
                <a
                  href={`https://phonetool.amazon.com/users/${o}`}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    text-[var(--color-primary)]
                    hover:text-[var(--color-blue-glow)]
                    hover:underline
                    transition
                    duration-200
                    font-medium
                    mx-1
                  "
                >
                  @{o}
                </a>

                {!isLast && (
                  <span className="text-[var(--color-f2)]">
                    {isSecondLast ? " or " : ","}
                  </span>
                )}
              </span>
            );
          })}
        </span>
      </div>
    </footer>
  );
}
