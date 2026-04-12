import { useState } from "react";
import RegionNavs from "../Components/RegionNavs";
import { useLocation } from "react-router-dom";
import ContactsFooter from "../Components/ContactsFooter";
import { siteTypes } from "../Data/app-Data.js";

export default function NA() {
  const { pathname } = useLocation();
  const region = pathname.split("/")[1];

  const [language, setLanguage] = useState("ENGLISH");
  const [country, setCountry] = useState("US");
  const [siteType, setSiteType] = useState("AMZL");

  const [severity, setSeverity] = useState("5");
  const [driverInvolved, setDriverInvolved] = useState("DSP");
  const [reportedBy, setReportedBy] = useState("DA");

  const [cxImpact, setCxImpact] = useState("NO");
  const [detrimental, setDetrimental] = useState("NO");
  const [hazardous, setHazardous] = useState("NO");
  const [thermal, setThermal] = useState("NO");
  const [dotRegulated, setDotRegulated] = useState("NO");
  const [discrimination, setDiscrimination] = useState("NO");
  const [vehicleMalFunction, setVehicleMalFunction] = useState("NO");

  const [contacts, setContacts] = useState([]);

  //* GENERATE CONTACTS
  const generateContacts = () => {
    contacts.length = 0;
    const newCon = [];
    //* COUNTRY SITE-TYPE SEV#
    newCon.push(
      `${country} ${siteType} SEV${severity === "5" ? "4" : severity}`,
    );
    //* NA SEV#
    newCon.push(`NA SEV${severity}`);
    //* DRIVER INVOLVED
    newCon.push(
      `${country} ${driverInvolved} SEV${severity === "5" ? "4" : severity}`,
    );
    //* REPORTED BY FROM US
    if (country === "US") {
      if (reportedBy === "DP") {
        if (language === "ENGLISH") {
          newCon.push("sds-gsoc-flex-incident@amazon.com");
        }
        if (language === "SPANISH") {
          newCon.push("sds-gsoc-flex-incident-spanish@amazon.com");
        }
      }
      if (reportedBy === "CXCMKnownDA") {
        if (language === "ENGLISH") {
          newCon.push("sds-gsoc-driver-potentialharm@amazon.com");
          newCon.push("phd-emt-intake@amazon.com");
        }
        if (language === "SPANISH") {
          newCon.push("sds-gsoc-driver-potentialharm-spanish@amazon.com");
          newCon.push("phd-emt-intake@amazon.com");
        }
      }
      if (reportedBy === "CXCM") {
        if (driverInvolved === "FLEX") {
          newCon.push("sds-gsoc-flex-incident@amazon.com");
        }
        if (language === "ENGLISH") {
          newCon.push("sds-gsoc-cx-incident@amazon.com");
        }
        if (language === "SPANISH") {
          newCon.push("sds-gsoc-cx-incident@amazon.com");
        }
      }
      if (reportedBy === "HubDA") {
        newCon.push("sds-gsoc-hub-incident@amazon.com");
      }
    }
    //* REPORTED BY FROM CA
    if (country === "CA") {
      if (reportedBy === "DP") {
        if (language === "ENGLISH") {
          newCon.push("sds-gsoc-flex-incident@amazon.ca");
        }
        if (language === "SPANISH") {
          newCon.push("sds-gsoc-flex-incident-spanish@amazon.ca");
        }
      }
      if (reportedBy === "CXCMKnownDA") {
        if (language === "ENGLISH") {
          newCon.push("sds-gsoc-driver-potentialharm@amazon.ca");
          newCon.push("phd-emt-intake@amazon.com");
        }
        if (language === "SPANISH") {
          newCon.push("sds-gsoc-driver-potentialharm-spanish@amazon.ca");
        }
      }

      //* REPORTED BY CX/CM
      if (reportedBy === "CXCM") {
        //* DRIVER INVOLVED FLEX
        if (driverInvolved === "FLEX") {
          newCon.push("sds-gsoc-flex-incident@amazon.com");
        }
        //* ENGLISH
        if (language === "ENGLISH") {
          newCon.push("sds-gsoc-cx-incident@amazon.ca");
        }
        //* SPANISH
        if (language === "SPANISH") {
          newCon.push("sds-gsoc-cx-incident@amazon.com");
        }
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
    //* DETRIMENTAL
    if (detrimental === "YES") {
      newCon.push(`AMER LAST MILE RISK`);
      newCon.push("phd-emt-intake@amazon.com");
    }
    //* THERMAL
    if (thermal === "YES" && severity === "5") {
      newCon.push("NA LAST MILE VEHICLE THERMAL EVENT LOW SEVERITY");
    } else if (thermal === "YES") {
      newCon.push("NA LAST MILE VEHICLE THERMAL EVENT");
    }
    //* DOT  REGULATED
    if (dotRegulated === "YES") {
      newCon.push("floftus@arcclaims.com");
      newCon.push("ecarroll@arcclaims.com");
    }
    //* DISCRIMINATION
    if (discrimination === "YES") {
      newCon.push("DISCRIMINATION SUPPORT GROUP");
    }
    //* VEHICLE MALFUNCTION
    if (vehicleMalFunction === "YES") {
      if (country === "US") {
        newCon.push("US AMZL FLEET SUPPORT GROUP");
      }
      if (country === "CA") {
        newCon.push("CA AMZL FLEET SUPPORT GROUP,");
      }
    }
    if (severity === "1" || severity === "2") {
      newCon.push("AMER LAST MILE RISK");
      newCon.push(`AMER SEV${severity}`);
      newCon.push("NA RESILIENCE");
    }
    //* ===========================> SMILEY CONTACTS
    newCon.push("AMER INTERNAL COMMS SUPPORT GROUP");
    newCon.push("NA ERC SUPPORT GROUP");
    newCon.push("NETWORK OPERATIONS CENTER SUPPORT GROUP");
    newCon.push("GSOC MGMT SUPPORT GROUP");
    newCon.push("RISK GLOBAL LAST MILE");
    newCon.push("GLOBAL OTR SAFETY SUPPORT GROUP");
    newCon.push("NORTH AMERICA ROC SUPPORT GROUP");
    newCon.push("NORTH AMERICA OPS PR");
    setContacts([...newCon]);
  };

  return (
    <div className="min-h-screen bg-black to-blue-200 flex font-f1 flex-col items-center gap-2 p-8">
      {/* //* NAVBAR */}
      <RegionNavs region={region} />

      {/* //* FORM */}
      <div className="bg-black text-white w-full  p-3 rounded-sm flex flex-col gap-1">
        <h1 className="text-lg text-center font-extrabold text-white flex justify-between">
          NA <span className="text-lg font-bold">(US / CA)</span>
        </h1>
        {/* //* SELECT LANGUAGE */}
        <div className="px-4 py-1 rounded-sm shadow-sm border border-gray-800 flex items-center justify-around">
          <h1 className="text-lg font-medium w-1/4 text-center">Language:</h1>
          <div className="w-1/4 flex justify-center gap-8">
            <div className="flex gap-1 items-center">
              <input
                type="radio"
                name="language"
                value="ENGLISH"
                id="ENGLISH"
                checked={language === "ENGLISH"}
                onChange={(e) => setLanguage(e.target.value)}
                className="cursor-pointer"
              />
              <label
                htmlFor="ENGLISH"
                className="uppercase font-bold tracking-wider cursor-pointer"
              >
                English
              </label>
            </div>

            <div className="flex gap-1 items-center">
              <input
                type="radio"
                name="language"
                value="SPANISH"
                id="SPANISH"
                checked={language === "SPANISH"}
                onChange={(e) => setLanguage(e.target.value)}
                className="cursor-pointer"
              />
              <label
                htmlFor="SPANISH"
                className="uppercase font-bold tracking-wider cursor-pointer"
              >
                Spanish
              </label>
            </div>
          </div>
        </div>
        {/* //* SELECT COUNTRY */}
        <div className="px-4 py-1 rounded-sm shadow-sm border border-gray-800 flex items-center justify-around">
          <h1 className="text-lg font-medium w-1/4 text-center">Country:</h1>
          <div className="w-1/4 flex justify-center gap-8">
            <div className="flex gap-1 items-center">
              <input
                type="radio"
                name="country"
                value="US"
                id="US"
                checked={country === "US"}
                onChange={(e) => setCountry(e.target.value)}
                className="cursor-pointer"
              />
              <label
                htmlFor="US"
                className="uppercase font-bold tracking-wider cursor-pointer"
              >
                US
              </label>
            </div>

            <div className="flex gap-1 items-center">
              <input
                type="radio"
                name="country"
                value="CA"
                id="CA"
                checked={country === "CA"}
                onChange={(e) => setCountry(e.target.value)}
                className="cursor-pointer"
              />
              <label
                htmlFor="CA"
                className="uppercase font-bold tracking-wider cursor-pointer"
              >
                CA
              </label>
            </div>
          </div>
        </div>
        {/* //* SELECT SITE TYPE */}
        <div className="px-4 py-1 rounded-sm shadow-sm border border-gray-800 flex items-center justify-around">
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
        <div className="px-4 py-1 rounded-sm shadow-sm border border-gray-800 flex items-center justify-around">
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
        <div className="px-4 py-1 rounded-sm shadow-sm border border-gray-800 flex items-center justify-center">
          <h2 className="text-lg font-medium text-white mb-1 w-1/2 text-center">
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

            {country === "US" && (
              <div className="flex gap-1 items-center">
                <input
                  type="radio"
                  name="driverInvolved"
                  value="BICYCLE DSP"
                  id="BICYCLE DSP"
                  checked={driverInvolved === "BICYCLE DSP"}
                  onChange={(e) => setDriverInvolved(e.target.value)}
                  className="cursor-pointer"
                />
                <label
                  htmlFor="BICYCLE DSP"
                  className="uppercase font-bold tracking-wider cursor-pointer"
                >
                  BICYCLE DSP
                </label>
              </div>
            )}
            {country === "US" && (
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
            )}
          </div>
        </div>
        {/* //* REPORTED BY */}
        <div className="px-4 py-1 rounded-sm shadow-sm border border-gray-800 flex items-center justify-around">
          <h2 className="text-lg font-medium text-white mb-1 w-1/4 text-center">
            Reported By:
          </h2>
          <select
            value={reportedBy}
            onChange={(event) => setReportedBy(event.target.value)}
            className="border p-2 rounded-sm font-medium w-1/4 text-center bg-white text-black"
          >
            <option className="font-medium" value="DA">
              DA (CX/CM is Unknown)
            </option>
            <option className="font-medium" value="DP">
              Flex DP
            </option>
            <option className="font-medium" value="CXCMKnownDA">
              DA (CX/CM is Known)
            </option>
            <option className="font-medium" value="CXCM">
              CX/CM
            </option>
            {country === "US" && (
              <option className="font-medium" value="HubDA">
                Hub DA
              </option>
            )}
          </select>
        </div>
        {/* //* CX FACING IMPACT */}
        <div className="px-4 py-1 rounded-sm shadow-sm border border-gray-800 flex items-center justify-around">
          <h2 className="text-lg font-medium text-white mb-1 w-1/4 text-center">
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
        {/* //* HAZARDOUS MATERIAL */}
        <div className="px-4 py-1 rounded-sm shadow-sm border border-gray-800 flex items-center justify-around">
          <h2 className="text-lg font-medium text-white mb-1 w-1/4 text-center">
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
        {/* //* DETRIMENTAL BEHAVIOR */}
        <div className="px-4 py-1 rounded-sm shadow-sm border border-gray-800 flex items-center justify-around">
          <h2 className="text-lg font-medium text-white mb-1 w-1/4 text-center">
            Detrimental Behavior:
          </h2>
          <div className="w-1/4 flex justify-center gap-8">
            <div className="flex gap-1 items-center">
              <input
                type="radio"
                name="detrimental"
                value="YES"
                id="YES_detrimental"
                checked={detrimental === "YES"}
                onChange={(e) => setDetrimental(e.target.value)}
                className="cursor-pointer"
              />
              <label
                htmlFor="YES_detrimental"
                className="uppercase font-bold tracking-wider cursor-pointer"
              >
                Yes
              </label>
            </div>

            <div className="flex gap-1 items-center">
              <input
                type="radio"
                name="detrimental"
                value="NO"
                id="NO_detrimental"
                checked={detrimental === "NO"}
                onChange={(e) => setDetrimental(e.target.value)}
                className="cursor-pointer"
              />
              <label
                htmlFor="NO_detrimental"
                className="uppercase font-bold tracking-wider cursor-pointer"
              >
                No
              </label>
            </div>
          </div>
        </div>
        {/* //* DELIVERY VEHICLE VAN THERMAL EVENT */}
        <div className="px-4 py-1 rounded-sm shadow-sm border border-gray-800 flex items-center justify-around">
          <h2 className="text-lg font-medium text-white mb-1 w-1/4 text-center">
            Vehicle Thermal Event :
          </h2>
          <div className="w-1/4 flex justify-center gap-8">
            <div className="flex gap-1 items-center">
              <input
                type="radio"
                name="thermal"
                value="YES"
                id="YES_thermal"
                checked={thermal === "YES"}
                onChange={(e) => setThermal(e.target.value)}
                className="cursor-pointer"
              />
              <label
                htmlFor="YES_thermal"
                className="uppercase font-bold tracking-wider cursor-pointer"
              >
                Yes
              </label>
            </div>

            <div className="flex gap-1 items-center">
              <input
                type="radio"
                name="thermal"
                value="NO"
                id="NO_thermal"
                checked={thermal === "NO"}
                onChange={(e) => setThermal(e.target.value)}
                className="cursor-pointer"
              />
              <label
                htmlFor="NO_thermal"
                className="uppercase font-bold tracking-wider cursor-pointer"
              >
                No
              </label>
            </div>
          </div>
        </div>
        {/* //* DOT REGULATED VEHICLE */}
        {driverInvolved === "DSP" && (
          <div className="px-4 py-1 rounded-sm shadow-sm border border-gray-800 flex items-center justify-around">
            <h2 className="text-lg font-medium text-white mb-1 w-1/4 text-center">
              DOT Regulated Vehicle:
            </h2>
            <div className="w-1/4 flex justify-center gap-8">
              <div className="flex gap-1 items-center">
                <input
                  type="radio"
                  name="dotRegulated"
                  value="YES"
                  id="YES_dotRegulated"
                  checked={dotRegulated === "YES"}
                  onChange={(e) => setDotRegulated(e.target.value)}
                  className="cursor-pointer"
                />
                <label
                  htmlFor="YES_dotRegulated"
                  className="uppercase font-bold tracking-wider cursor-pointer"
                >
                  Yes
                </label>
              </div>

              <div className="flex gap-1 items-center">
                <input
                  type="radio"
                  name="dotRegulated"
                  value="NO"
                  id="NO_dotRegulated"
                  checked={dotRegulated === "NO"}
                  onChange={(e) => setDotRegulated(e.target.value)}
                  className="cursor-pointer"
                />
                <label
                  htmlFor="NO_dotRegulated"
                  className="uppercase font-bold tracking-wider cursor-pointer"
                >
                  No
                </label>
              </div>
            </div>
          </div>
        )}
        {/* //* DISCRIMINATION */}
        <div className="px-4 py-1 rounded-sm shadow-sm border border-gray-800 flex items-center justify-around">
          <h2 className="text-lg font-medium text-white mb-1 w-1/4 text-center">
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
        {/* //* VEHICLE MALFUNCTION */}
        {driverInvolved === "DSP" && (
          <div className="px-4 py-1 rounded-sm shadow-sm border border-gray-800 flex items-center justify-around">
            <h2 className="text-lg font-medium text-white mb-1 w-1/2 text-center">
              Vehicle Malfunction (Amazon-branded):
            </h2>
            <div className="w-1/2 flex justify-center gap-8">
              <div className="flex gap-1 items-center">
                <input
                  type="radio"
                  name="vehicleMalFunction"
                  value="YES"
                  id="YES_vehicleMalfunction"
                  checked={vehicleMalFunction === "YES"}
                  onChange={(e) => setVehicleMalFunction(e.target.value)}
                  className="cursor-pointer"
                />
                <label
                  htmlFor="YES_vehicleMalfunction"
                  className="uppercase font-bold tracking-wider cursor-pointer"
                >
                  Yes
                </label>
              </div>

              <div className="flex gap-1 items-center">
                <input
                  type="radio"
                  name="vehicleMalFunction"
                  value="NO"
                  id="NO_vehicleMalfunction"
                  checked={vehicleMalFunction === "NO"}
                  onChange={(e) => setVehicleMalFunction(e.target.value)}
                  className="cursor-pointer"
                />
                <label
                  htmlFor="NO_vehicleMalfunction"
                  className="uppercase font-bold tracking-wider cursor-pointer"
                >
                  No
                </label>
              </div>
            </div>
          </div>
        )}

        {/* //* GENERATE CONTACTS BUTTON */}
        <div className="flex gap-2">
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
