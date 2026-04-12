import { useState } from "react";
import RegionNavs from "../Components/RegionNavs";
import { useLocation } from "react-router-dom";
import ContactsFooter from "../Components/ContactsFooter";
import { siteTypes } from "../Data/app-Data.js";

export default function EUROPE() {
  const { pathname } = useLocation();
  const region = pathname.split("/")[1];

  const [country, setCountry] = useState("UK");
  const [siteType, setSiteType] = useState("AMZL");

  const [severity, setSeverity] = useState("5");
  const [driverInvolved, setDriverInvolved] = useState("DSP");
  const [reportedBy, setReportedBy] = useState("DA");

  const [cxImpact, setCxImpact] = useState("NO");
  const [hazardous, setHazardous] = useState("NO");
  const [discrimination, setDiscrimination] = useState("NO");

  const [contacts, setContacts] = useState([]);

  //* GENERATE CONTACTS
  const generateContacts = () => {
    contacts.length = 0;
    const newCon = [];
    //* COUNTRY SITE-TYPE SEV#
    newCon.push(
      `${country} ${siteType} SEV${severity === "5" ? "4" : severity}`,
    );
    //* EUROPE SITE-TYPE SEV#
    newCon.push(`EUROPE ${siteType} SEV${severity === "5" ? "4" : severity}`);
    //* PR TRANSPORTATION
    newCon.push(`${country} PR TRANSPORTATION`);
    //* DRIVER INVOLVED
    newCon.push(
      `${country} ${driverInvolved} SEV${severity === "5" ? "4" : severity}`,
    );
    if (country === "UK" || country === "IE") {
      newCon.push(`UK IE SEV${severity}`);
    } else {
      newCon.push(`CEU SEV${severity}`);
    }
    //* REPORTED BY
    if (country === "UK" || country === "IE") {
      if (reportedBy === "DP") {
        newCon.push(`sds-gsoc-flex-incident@amazon.co.uk`);
      }
    }
    if (reportedBy === "CXCM") {
      if (country === "UK") {
        newCon.push(`sds-gsoc-cx-incident@amazon.co.uk`);
      } else if (country === "IE") {
        newCon.push(`sds-gsoc-cx-incident@amazon.ie`);
      } else if (country === "NL") {
        newCon.push(`sds-gsoc-cx-incident@amazon.nl`);
      } else if (country === "DE") {
        newCon.push(`sds-gsoc-cx-incident@amazon.de`);
      } else if (country === "ES") {
        newCon.push(`sds-gsoc-cx-incident@amazon.es`);
      } else if (country === "FR") {
        newCon.push(`sds-gsoc-cx-incident@amazon.fr`);
      } else if (country === "IT") {
        newCon.push(`sds-gsoc-cx-incident@amazon.it`);
      }
    }
    if (reportedBy === "CXCMKnownDA" || reportedBy === "CXCMKnownHubDA") {
      if (country === "UK") {
        newCon.push(`sds-gsoc-driver-potentialharm@amazon.co.uk`);
        newCon.push("phd-emt-intake@amazon.com");
      } else if (country === "IE") {
        newCon.push(`sds-gsoc-driver-potentialharm@amazon.ie`);
        newCon.push("phd-emt-intake@amazon.com");
      } else if (country === "NL") {
        newCon.push(`sds-gsoc-driver-potentialharm@amazon.nl`);
        newCon.push("phd-emt-intake@amazon.com");
      } else if (country === "DE") {
        newCon.push(`sds-gsoc-driver-potentialharm@amazon.de`);
        newCon.push("phd-emt-intake@amazon.com");
      } else if (country === "ES") {
        newCon.push(`sds-gsoc-driver-potentialharm@amazon.es`);
        newCon.push("phd-emt-intake@amazon.com");
      } else if (country === "FR") {
        newCon.push(`sds-gsoc-driver-potentialharm@amazon.fr`);
        newCon.push("phd-emt-intake@amazon.com");
      } else if (country === "IT") {
        newCon.push(`sds-gsoc-driver-potentialharm@amazon.it`);
        newCon.push("phd-emt-intake@amazon.com");
      }
    }
    //* CX FACING IMPACT
    if (cxImpact === "YES") {
      newCon.push(`${country} CX SUPPORT GROUP`);
      newCon.push(`cs-gcc-all@amazon.com`);
    }
    //* HAZARDOUS
    if (hazardous === "YES") {
      newCon.push("NA HAZMAT SUPPORT GROUP");
      newCon.push("DANGEROUS GOODS SUPPORT GROUP");
      newCon.push("cs-gcc-all@amazon.com");
    }
    //* DISCRIMINATION
    if (discrimination === "YES") {
      newCon.push("DISCRIMINATION SUPPORT GROUP");
    }
    if (severity === "1" || severity === "2") {
      newCon.push(`EMEA SEV${severity}`);
    }
    //* ===========================> SMILEY CONTACTS
    newCon.push("GLOBAL OTR SAFETY SUPPORT GROUP");
    newCon.push("EMEA ERC SUPPORT GROUP");
    newCon.push("NETWORK OPERATIONS CENTER SUPPORT GROUP");
    newCon.push("GSOC MGMT SUPPORT GROUP");
    newCon.push("RISK GLOBAL LAST MILE");
    newCon.push("EUROPE ROC SUPPORT GROUP");
    newCon.push("EMEA LAST MILE OPS DISRUPTION");
    newCon.push("EUROPE INTERNAL COMMS SUPPORT GROUP");
    setContacts([...newCon]);
  };

  return (
    <div className="min-h-screen bg-black to-blue-200 flex font-f1 flex-col items-center gap-2 p-8">
      {/* //* NAVBAR */}
      <RegionNavs region={region} />

      {/* //* FORM */}
      <div className="bg-black text-white w-full p-3 rounded-sm flex flex-col gap-1">
        <h1 className="text-lg text-center font-extrabold flex justify-between">
          EUROPE{" "}
          <span className="text-lg font-bold">
            (UK / IE / NL / DE / ES / FR / IT / AT / PL / LX / CZ)
          </span>
        </h1>

        {/* //* SELECT COUNTRY */}
        <div className="bg-black px-4 py-1 rounded-sm shadow-sm border border-gray-800 flex items-center justify-around">
          <h1 className="text-lg font-medium w-1/4 text-center">Country:</h1>
          <div className="w-1/4 flex justify-center gap-8">
            <div className="flex gap-1 items-center">
              <input
                type="radio"
                name="country"
                value="UK"
                id="UK"
                checked={country === "UK"}
                onChange={(e) => setCountry(e.target.value)}
                className="cursor-pointer"
              />
              <label
                htmlFor="UK"
                className="uppercase font-bold tracking-wider cursor-pointer"
              >
                UK
              </label>
            </div>

            <div className="flex gap-1 items-center">
              <input
                type="radio"
                name="country"
                value="IE"
                id="IE"
                checked={country === "IE"}
                onChange={(e) => setCountry(e.target.value)}
                className="cursor-pointer"
              />
              <label
                htmlFor="IE"
                className="uppercase font-bold tracking-wider cursor-pointer"
              >
                IE
              </label>
            </div>

            <div className="flex gap-1 items-center">
              <input
                type="radio"
                name="country"
                value="NL"
                id="NL"
                checked={country === "NL"}
                onChange={(e) => setCountry(e.target.value)}
                className="cursor-pointer"
              />
              <label
                htmlFor="NL"
                className="uppercase font-bold tracking-wider cursor-pointer"
              >
                NL
              </label>
            </div>

            <div className="flex gap-1 items-center">
              <input
                type="radio"
                name="country"
                value="DE"
                id="DE"
                checked={country === "DE"}
                onChange={(e) => setCountry(e.target.value)}
                className="cursor-pointer"
              />
              <label
                htmlFor="DE"
                className="uppercase font-bold tracking-wider cursor-pointer"
              >
                DE
              </label>
            </div>

            <div className="flex gap-1 items-center">
              <input
                type="radio"
                name="country"
                value="ES"
                id="ES"
                checked={country === "ES"}
                onChange={(e) => setCountry(e.target.value)}
                className="cursor-pointer"
              />
              <label
                htmlFor="ES"
                className="uppercase font-bold tracking-wider cursor-pointer"
              >
                ES
              </label>
            </div>

            <div className="flex gap-1 items-center">
              <input
                type="radio"
                name="country"
                value="FR"
                id="FR"
                checked={country === "FR"}
                onChange={(e) => setCountry(e.target.value)}
                className="cursor-pointer"
              />
              <label
                htmlFor="FR"
                className="uppercase font-bold tracking-wider cursor-pointer"
              >
                FR
              </label>
            </div>

            <div className="flex gap-1 items-center">
              <input
                type="radio"
                name="country"
                value="IT"
                id="IT"
                checked={country === "IT"}
                onChange={(e) => setCountry(e.target.value)}
                className="cursor-pointer"
              />
              <label
                htmlFor="IT"
                className="uppercase font-bold tracking-wider cursor-pointer"
              >
                IT
              </label>
            </div>

            <div className="flex gap-1 items-center">
              <input
                type="radio"
                name="country"
                value="AT"
                id="AT"
                checked={country === "AT"}
                onChange={(e) => setCountry(e.target.value)}
                className="cursor-pointer"
              />
              <label
                htmlFor="AT"
                className="uppercase font-bold tracking-wider cursor-pointer"
              >
                AT
              </label>
            </div>

            <div className="flex gap-1 items-center">
              <input
                type="radio"
                name="country"
                value="LU"
                id="LU"
                checked={country === "LU"}
                onChange={(e) => setCountry(e.target.value)}
                className="cursor-pointer"
              />
              <label
                htmlFor="LU"
                className="uppercase font-bold tracking-wider cursor-pointer"
              >
                LU
              </label>
            </div>

            <div className="flex gap-1 items-center">
              <input
                type="radio"
                name="country"
                value="CZ"
                id="CZ"
                checked={country === "CZ"}
                onChange={(e) => setCountry(e.target.value)}
                className="cursor-pointer"
              />
              <label
                htmlFor="CZ"
                className="uppercase font-bold tracking-wider cursor-pointer"
              >
                CZ
              </label>
            </div>
          </div>
        </div>

        {/* //* SELECT SITE TYPE */}
        <div className="bg-black px-4 py-1 rounded-sm shadow-sm border border-gray-800 flex items-center justify-around">
          <h2 className="text-lg font-medium w-1/4 text-center">Site type:</h2>
          <select
            value={siteType}
            onChange={(event) => setSiteType(event.target.value)}
            className="border p-2 rounded-sm font-medium w-1/4 text-center bg-white text-black"
          >
            {siteTypes.split(",").map((s) => (
              <option
                key={Math.random()}
                className="font-bold uppercase"
                value={s}
              >
                {s}
              </option>
            ))}
          </select>
        </div>

        {/* //* SELECT SEV */}
        <div className="bg-black px-4 py-1 rounded-sm shadow-sm border border-gray-800 flex items-center justify-around">
          <h1 className="text-lg font-medium w-1/4 text-center">Severity:</h1>
          <div className="w-1/4 flex justify-between gap-8">
            <div className="flex gap-1 items-center">
              <input
                type="radio"
                name="severity"
                value="1"
                id="1"
                checked={severity === "1"}
                onChange={(e) => setSeverity(e.target.value)}
                className="cursor-pointer"
              />
              <label
                htmlFor="1"
                className="uppercase font-bold tracking-wider cursor-pointer"
              >
                1
              </label>
            </div>

            <div className="flex gap-1 items-center">
              <input
                type="radio"
                name="severity"
                value="2"
                id="2"
                checked={severity === "2"}
                onChange={(e) => setSeverity(e.target.value)}
                className="cursor-pointer"
              />
              <label
                htmlFor="2"
                className="uppercase font-bold tracking-wider cursor-pointer"
              >
                2
              </label>
            </div>

            <div className="flex gap-1 items-center">
              <input
                type="radio"
                name="severity"
                value="3"
                id="3"
                checked={severity === "3"}
                onChange={(e) => setSeverity(e.target.value)}
                className="cursor-pointer"
              />
              <label
                htmlFor="3"
                className="uppercase font-bold tracking-wider cursor-pointer"
              >
                3
              </label>
            </div>

            <div className="flex gap-1 items-center">
              <input
                type="radio"
                name="severity"
                value="4"
                id="4"
                checked={severity === "4"}
                onChange={(e) => setSeverity(e.target.value)}
                className="cursor-pointer"
              />
              <label
                htmlFor="4"
                className="uppercase font-bold tracking-wider cursor-pointer"
              >
                4
              </label>
            </div>

            <div className="flex gap-1 items-center">
              <input
                type="radio"
                name="severity"
                value="5"
                id="5"
                checked={severity === "5"}
                onChange={(e) => setSeverity(e.target.value)}
                className="cursor-pointer"
              />
              <label
                htmlFor="5"
                className="uppercase font-bold tracking-wider cursor-pointer"
              >
                5
              </label>
            </div>
          </div>
        </div>

        {/* //* DRIVER INVOLVED */}
        <div className="bg-black px-4 py-1 rounded-sm shadow-sm border border-gray-800 flex items-center justify-around">
          <h2 className="text-lg font-medium mb-1 w-1/2 text-center">
            Driver involved:
          </h2>
          <div className="w-1/2 flex justify-center gap-6">
            <div className="flex gap-1 items-center">
              <input
                type="radio"
                name="driverInvolved"
                value="DSP"
                id="DSP"
                checked={driverInvolved === "DSP"}
                onChange={(e) => setDriverInvolved(e.target.value)}
                className="cursor-pointer"
              />
              <label
                htmlFor="DSP"
                className="uppercase font-bold tracking-wider cursor-pointer"
              >
                DSP
              </label>
            </div>

            <div className="flex gap-1 items-center">
              <input
                type="radio"
                name="driverInvolved"
                value="FLEX"
                id="FLEX"
                checked={driverInvolved === "FLEX"}
                onChange={(e) => setDriverInvolved(e.target.value)}
                className="cursor-pointer"
              />
              <label
                htmlFor="FLEX"
                className="uppercase font-bold tracking-wider cursor-pointer"
              >
                FLEX
              </label>
            </div>

            <div className="flex gap-1 items-center">
              <input
                type="radio"
                name="driverInvolved"
                value="HUB DA"
                id="HUB DA"
                checked={driverInvolved === "HUB DA"}
                onChange={(e) => setDriverInvolved(e.target.value)}
                className="cursor-pointer"
              />
              <label
                htmlFor="HUB DA"
                className="uppercase font-bold tracking-wider cursor-pointer"
              >
                HUB DA
              </label>
            </div>
          </div>
        </div>

        {/* //* REPORTED BY */}
        <div className="bg-black px-4 py-1 rounded-sm shadow-sm border border-gray-800 flex items-center justify-around">
          <h2 className="text-lg font-medium mb-1 w-1/4 text-center">
            Reported By:
          </h2>
          <select
            value={reportedBy}
            onChange={(event) => setReportedBy(event.target.value)}
            className="border p-2 rounded-sm font-medium w-1/4 text-center bg-white text-black"
          >
            <option className="font-medium" value="DA">
              DSP DA (CX/CM is Unknown)
            </option>
            <option className="font-medium" value="DP">
              Flex DP
            </option>
            <option className="font-medium" value="CXCMKnownDA">
              DSP DA (CX/CM is Known)
            </option>
            <option className="font-medium" value="CXCM">
              CX/CM
            </option>
            <option className="font-medium" value="HubDA">
              Hub DA
            </option>
            <option className="font-medium" value="CXCMKnownHubDA">
              Hub DA (CX/CM is Known)
            </option>
          </select>
        </div>

        {/* //* CX FACING IMPACT */}
        <div className="bg-black px-4 py-1 rounded-sm shadow-sm border border-gray-800 flex items-center justify-around">
          <h2 className="text-lg font-medium mb-1 w-1/4 text-center">
            Customer Facing Impact:
          </h2>
          <div className="w-1/4 flex justify-center gap-8">
            <div className="flex gap-1 items-center">
              <input
                type="radio"
                name="cxImpact"
                value="YES"
                id="YES_cxImpact"
                checked={cxImpact === "YES"}
                onChange={(e) => setCxImpact(e.target.value)}
                className="cursor-pointer"
              />
              <label
                htmlFor="YES_cxImpact"
                className="uppercase font-bold tracking-wider cursor-pointer"
              >
                Yes
              </label>
            </div>

            <div className="flex gap-1 items-center">
              <input
                type="radio"
                name="cxImpact"
                value="NO"
                id="NO_cxImpact"
                checked={cxImpact === "NO"}
                onChange={(e) => setCxImpact(e.target.value)}
                className="cursor-pointer"
              />
              <label
                htmlFor="NO_cxImpact"
                className="uppercase font-bold tracking-wider cursor-pointer"
              >
                No
              </label>
            </div>
          </div>
        </div>

        {/* //* Hazardous Material */}
        <div className="bg-black px-4 py-1 rounded-sm shadow-sm border border-gray-800 flex items-center justify-around">
          <h2 className="text-lg font-medium mb-1 w-1/4 text-center">
            Hazardous Material:
          </h2>
          <div className="w-1/4 flex justify-center gap-8">
            <div className="flex gap-1 items-center">
              <input
                type="radio"
                name="hazardous"
                value="YES"
                id="YES_hazardous"
                checked={hazardous === "YES"}
                onChange={(e) => setHazardous(e.target.value)}
                className="cursor-pointer"
              />
              <label
                htmlFor="YES_hazardous"
                className="uppercase font-bold tracking-wider cursor-pointer"
              >
                Yes
              </label>
            </div>

            <div className="flex gap-1 items-center">
              <input
                type="radio"
                name="hazardous"
                value="NO"
                id="NO_hazardous"
                checked={hazardous === "NO"}
                onChange={(e) => setHazardous(e.target.value)}
                className="cursor-pointer"
              />
              <label
                htmlFor="NO_hazardous"
                className="uppercase font-bold tracking-wider cursor-pointer"
              >
                No
              </label>
            </div>
          </div>
        </div>

        {/* //* DISCRIMINATION */}
        <div className="bg-black px-4 py-1 rounded-sm shadow-sm border border-gray-800 flex items-center justify-around">
          <h2 className="text-lg font-medium mb-1 w-1/4 text-center">
            Discrimination (hate-bias):
          </h2>
          <div className="w-1/4 flex justify-center gap-8">
            <div className="flex gap-1 items-center">
              <input
                type="radio"
                name="discrimination"
                value="YES"
                id="YES_discrimination"
                checked={discrimination === "YES"}
                onChange={(e) => setDiscrimination(e.target.value)}
                className="cursor-pointer"
              />
              <label
                htmlFor="YES_discrimination"
                className="uppercase font-bold tracking-wider cursor-pointer"
              >
                Yes
              </label>
            </div>

            <div className="flex gap-1 items-center">
              <input
                type="radio"
                name="discrimination"
                value="NO"
                id="NO_discrimination"
                checked={discrimination === "NO"}
                onChange={(e) => setDiscrimination(e.target.value)}
                className="cursor-pointer"
              />
              <label
                htmlFor="NO_discrimination"
                className="uppercase font-bold tracking-wider cursor-pointer"
              >
                No
              </label>
            </div>
          </div>
        </div>

        <div className="flex gap-2">
          {/* //* GENERATE CONTACTS BUTTON */}
          <button
            onClick={generateContacts}
            className="p-2 text-white bg-[#146EB4] hover:text-[#146EB4] border-[#146EB4] rounded-sm duration-300 cursor-pointer border-2 hover:bg-white font-medium tracking-wide w-full"
          >
            Generate Contacts
          </button>
        </div>
      </div>

      {/* //* DISPLAY GENERATED CONTACTS */}
      <ContactsFooter contacts={contacts} sev={severity} />
    </div>
  );
}
