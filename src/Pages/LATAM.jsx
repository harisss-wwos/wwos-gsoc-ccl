import { useState } from "react";
import RegionNavs from "../Components/RegionNavs";
import { useLocation } from "react-router-dom";
import ContactsFooter from "../Components/ContactsFooter";
import { siteTypes } from "../Data/app-Data.js";

export default function LATAM() {
  const { pathname } = useLocation();
  const region = pathname.split("/")[1];

  const [country, setCountry] = useState("MX");
  const [siteType, setSiteType] = useState("AMZL");

  const [severity, setSeverity] = useState("5");
  const [driverInvolved, setDriverInvolved] = useState("DSP");
  const [reportedBy, setReportedBy] = useState("DA");

  const [cxImpact, setCxImpact] = useState("NO");
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
    newCon.push(`LATAM SEV${severity}`);
    //* DRIVER INVOLVED
    newCon.push(
      `${country} ${driverInvolved} SEV${severity === "5" ? "4" : severity}`,
    );
    //* MEXICO
    if (country === "MX") {
      if (reportedBy === "DP") {
        newCon.push("sds-gsoc-flex-incident@amazon.com.mx");
      }
      if (reportedBy === "CXCMKnownDA") {
        newCon.push("sds-gsoc-driver-potentialharm@amazon.com.mx");
        newCon.push("phd-emt-intake@amazon.com");
      }
      if (reportedBy === "CXCM") {
        newCon.push("sds-gsoc-cx-incident@amazon.com.mx");
      }
      if (reportedBy === "HubDA") {
        newCon.push("mezjesus@amazon.com");
        newCon.push("gerarre@amazon.com");
        newCon.push("lissetb@amazon.com");
      }
    }
    //* BRAZIL
    if (country === "BR") {
      if (reportedBy === "DP") {
        newCon.push("sds-gsoc-flex-incident@amazon.ca");
      }
      if (reportedBy === "CXCMKnownDA") {
        newCon.push("sds-gsoc-driver-potentialharm@amazon.com.br");
        newCon.push("phd-emt-intake@amazon.com");
      }
      if (reportedBy === "CXCM") {
        newCon.push("sds-gsoc-cx-incident@amazon.com.br");
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
    //* THERMAL
    if (thermal === "YES" && severity === "5") {
      newCon.push("LATAM LAST MILE VEHICLE THERMAL EVENT LOW SEVERITY");
    } else if (thermal === "YES") {
      newCon.push("LATAM LAST MILE VEHICLE THERMAL EVENT");
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
      if (severity === "5") {
        newCon.push("LATAM LAST MILE VEHICLE THERMAL EVENT LOW SEVERITY");
      } else {
        newCon.push("LATAM LAST MILE VEHICLE THERMAL EVENT");
      }
    }
    if (severity === "1" || severity === "2") {
      newCon.push("AMER LAST MILE RISK");
      newCon.push(`AMER SEV${severity}`);
      newCon.push("LATAM RESILIENCE");
    }
    //* ===========================> SMILEY CONTACTS
    newCon.push("AMER INTERNAL COMMS SUPPORT GROUP");
    newCon.push("LATAM ERC SUPPORT GROUP");
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
      <div className="bg-black text-white w-full mx-auto p-3 rounded-sm shadow-xl space-y-2">
        <h1 className="text-lg text-center font-extrabold text-white flex justify-between">
          LATAM <span className="text-lg font-bold">(MX / BR)</span>
        </h1>

        {/* //* SELECT COUNTRY */}
        <div className="bg-black px-4 py-1 rounded-sm shadow-sm border border-gray-800 flex items-center justify-around">
          <h1 className="text-lg font-medium w-1/4 text-center">Country:</h1>
          <div className="w-1/4 flex justify-center gap-8">
            <div className="flex gap-1 items-center">
              <input
                type="radio"
                name="country"
                value="MX"
                id="MX"
                checked={country === "MX"}
                onChange={(e) => setCountry(e.target.value)}
                className="cursor-pointer"
              />
              <label
                htmlFor="MX"
                className="uppercase font-bold tracking-wider cursor-pointer"
              >
                MX
              </label>
            </div>

            <div className="flex gap-1 items-center">
              <input
                type="radio"
                name="country"
                value="BR"
                id="BR"
                checked={country === "BR"}
                onChange={(e) => setCountry(e.target.value)}
                className="cursor-pointer"
              />
              <label
                htmlFor="BR"
                className="uppercase font-bold tracking-wider cursor-pointer"
              >
                BR
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
        <div className="bg-black px-4 py-1 rounded-sm shadow-sm border border-gray-800 text-white flex items-center justify-center">
          <h2 className="text-lg font-medium  mb-1 w-1/2 text-center">
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

            {country === "MX" && (
              <div className="flex gap-1 items-center">
                <input
                  type="radio"
                  name="driverInvolved"
                  value="HUB"
                  id="HUB"
                  checked={driverInvolved === "HUB"}
                  onChange={(e) => setDriverInvolved(e.target.value)}
                  className="cursor-pointer"
                />
                <label
                  htmlFor="HUB"
                  className="uppercase font-bold tracking-wider cursor-pointer"
                >
                  HUB
                </label>
              </div>
            )}
          </div>
        </div>

        {/* //* REPORTED BY */}
        <div className="bg-black px-4 py-1 rounded-sm shadow-sm border border-gray-800 flex items-center justify-around">
          <h2 className="text-lg font-medium  mb-1 w-1/4 text-center">
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
        <div className="bg-black px-4 py-1 rounded-sm shadow-sm border border-gray-800 flex items-center justify-around">
          <h2 className="text-lg font-medium  mb-1 w-1/4 text-center">
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
          <h2 className="text-lg font-medium  mb-1 w-1/4 text-center">
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

        {/* //* Delivery Van Vehicle Thermal Event  */}
        <div className="bg-black px-4 py-1 rounded-sm shadow-sm border border-gray-800 flex items-center justify-around">
          <h2 className="text-lg font-medium  mb-1 w-1/4 text-center">
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
        <div className="bg-black px-4 py-1 rounded-sm shadow-sm border border-gray-800 flex items-center justify-around">
          <h2 className="text-lg font-medium  mb-1 w-1/4 text-center">
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

        {/* //* DISCRIMINATION */}
        <div className="bg-black px-4 py-1 rounded-sm shadow-sm border border-gray-800 flex items-center justify-around">
          <h2 className="text-lg font-medium  mb-1 w-1/4 text-center">
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
        <div className="bg-black px-4 py-1 rounded-sm shadow-sm border border-gray-800 flex items-center justify-around">
          <h2 className="text-lg font-medium  mb-1 w-1/2 text-center">
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
