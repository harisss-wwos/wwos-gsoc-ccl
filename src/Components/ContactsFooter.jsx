import { MdContentCopy, MdEmail, MdContacts, MdWarning } from "react-icons/md";
import Footer from "./Footer";
import { handleCopyArchive } from "../Data/app-Data";

export default function ContactsFooter({ contacts, sev }) {
  const sev1Clr = "bg-red-900 text-white border-red-700";
  const sev2Clr = "bg-red-600 text-white border-red-500";
  const sev3Clr = "bg-yellow-500 text-black border-yellow-400";
  const sev4Clr = "bg-green-600 text-white border-green-500";
  const sev5Clr = "bg-gray-500 text-white border-gray-400";
  const sevBg =
    sev === "1"
      ? sev1Clr
      : sev === "2"
        ? sev2Clr
        : sev === "3"
          ? sev3Clr
          : sev === "4"
            ? sev4Clr
            : sev5Clr;

  async function handleCopy() {
    await navigator.clipboard.writeText(contacts);
    alert(" Copied to clipboard! \n\n Page will be now restored to default !");
    window.location.reload();
  }

  return (
    <footer className="bg-[var(--color-bg2)] border-[var(--color-border)] p-4 w-full sm:w-full rounded-md flex flex-col gap-4 shadow-xl shadow-black/30 font-f1">
      {contacts.length > 0 && (
        <div className="flex flex-col gap-4 justify-center items-center w-full">
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full">
            <div className="flex items-center gap-2 w-full sm:w-[80%] bg-[var(--color-bg3)] border border-[var(--color-border)] rounded-md px-4 py-3 shadow-md">
              <MdEmail
                className="text-[var(--color-blue-glow)] flex-shrink-0"
                size={18}
              />
              <h1 className="text-sm text-[var(--color-f1)] font-f3 truncate">
                wwos-gsoc-archive@amazon.com
              </h1>
            </div>
            <button
              onClick={handleCopyArchive}
              className="flex items-center justify-center gap-2 w-full sm:w-[20%] px-4 py-3 text-white bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] rounded-md duration-300 cursor-pointer border border-[var(--color-primary)] hover:border-[var(--color-blue-glow)] font-f3 tracking-wide shadow-md hover:shadow-[var(--color-primary)]/30"
            >
              <MdContentCopy size={16} />
              Copy
            </button>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full">
            <div className="flex flex-wrap gap-2 w-full sm:w-[80%]">
              {contacts.map((c, i) => (
                <span
                  className={`flex items-center justify-center px-3 py-2 text-xs sm:text-sm text-center font-f3 truncate rounded-md border shadow-sm ${sevBg}`}
                  key={i}
                  title={c}
                >
                  {c}
                </span>
              ))}
            </div>

            <button
              onClick={() => handleCopy(contacts)}
              className="flex items-center justify-center gap-2 w-full sm:w-[20%] px-4 py-3 text-white bg-[var(--color-success)] hover:bg-[var(--color-success-hover)] rounded-md duration-300 cursor-pointer border border-[var(--color-success)] hover:border-[var(--color-green-glow)] font-f3 tracking-wide shadow-md hover:shadow-[var(--color-success)]/30"
            >
              <MdContentCopy size={16} />
              Copy Contacts
            </button>
          </div>
          <Footer />
        </div>
      )}
    </footer>
  );
}
