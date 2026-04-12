import { useState } from "react";
import RegionNavs from "../Components/RegionNavs";
import { useLocation } from "react-router-dom";
import IndiaRegion from "../images/IN_AMZL.png";
import ContactsFooter from "../Components/ContactsFooter";
import { siteTypes } from "../Data/app-Data.js";

export default function APAC() {
  const { pathname } = useLocation();
  const region = pathname.split("/")[1];

  const [country, setCountry] = useState("AU");
  const [siteType, setSiteType] = useState("AMZL");

  const [siteRegion, setSiteRegion] = useState("NORTH");

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
    //* PR TRANSPORTATION
    newCon.push(`${country} PR TRANSPORTATION`);
    //* JAPAN AMZL && AMXL
    if (country === "JP" && siteType === "AMXL") {
      newCon.push("jp-amxl-ops@amazon.co.jp");
    } else if (country === "JP") {
      newCon.push("jp-amzl-edsp@amazon.com");
    }
    //* INDIA SITE WITH REGION FOR AMZL
    if (country === "IN" && siteType === "AMZL") {
      newCon.push(
        `${country} ${siteType} ${siteRegion} SEV${
          severity === "5" ? "4" : severity
        }`,
      );
    }
    //* DRIVER INVOLVED
    newCon.push(
      `${country} ${driverInvolved} SEV${severity === "5" ? "4" : severity}`,
    );
    if (reportedBy === "DP" && country === "AU") {
      if (country === "AU") {
        newCon.push("sds-gsoc-flex-incident@amazon.com.au");
      }
      if (country === "JP") {
        newCon.push("sds-gsoc-flex-incident@amazon.co.jp");
      }
      if (country === "SG") {
        newCon.push("sds-gsoc-flex-incident@amazon.sg");
      }
      if (country === "IN") {
        newCon.push("sds-gsoc-flex-incident@amazon.in");
      }
    }
    if (reportedBy === "CXCMKnownDA") {
      if (country === "AU") {
        newCon.push("sds-gsoc-driver-potentialharm@amazon.com.au");
        newCon.push("phd-emt-intake@amazon.com");
      }
      if (country === "JP") {
        newCon.push("sds-gsoc-driver-potentialharm@amazon.co.jp");
        newCon.push("phd-emt-intake@amazon.com");
      }
      if (country === "SG") {
        newCon.push("sds-gsoc-driver-potentialharm@amazon.sg");
        newCon.push("phd-emt-intake@amazon.com");
      }
      if (country === "IN") {
        newCon.push("sds-gsoc-driver-potentialharm@amazon.in");
        newCon.push("phd-emt-intake@amazon.com");
      }
    }
    if (reportedBy === "CXCM") {
      if (country === "AU") {
        newCon.push("sds-gsoc-cx-incident@amazon.com.au");
      }
      if (country === "JP") {
        newCon.push("sds-gsoc-cx-incident@amazon.co.jp");
      }
      if (country === "SG") {
        newCon.push("sds-gsoc-cx-incident@amazon.sg");
      }
      if (country === "IN") {
        newCon.push("sds-gsoc-cx-incident@amazon.in");
      }
    }
    if (reportedBy === "HubDA") {
      if (country === "AU") {
        newCon.push("sds-gsoc-driver-potentialharm@amazon.com.au");
        newCon.push("phd-emt-intake@amazon.com");
      }
      if (country === "JP") {
        newCon.push("jp-hubdelivery-gsoc@amazon.co.jp");
        newCon.push("munekaa@amazon.co.jp");
        newCon.push("symeont@amazon.co.jp");
        newCon.push("kkpra@amazon.co.jp");
        newCon.push("navkumaz@amazon.co.jp");
        newCon.push("miyamoko@amazon.co.jp");
      }
      if (country === "SG") {
        newCon.push("sds-gsoc-driver-potentialharm@amazon.sg");
        newCon.push("phd-emt-intake@amazon.com");
      }
      if (country === "IN") {
        newCon.push("sds-gsoc-driver-potentialharm@amazon.in");
        newCon.push("abhishhp");
        newCon.push("phd-emt-intake@amazon.com");
      }
    }
    if (hazardous === "YES") {
      newCon.push(`APAC HAZMAT SEV${severity === "5" ? "4" : severity}`);
      newCon.push("cs-gcc-all@amazon.com");
    }
    if (cxImpact === "YES") {
      newCon.push(`${country} CX SUPPORT GROUP`);
      newCon.push(`cs-gcc-all@amazon.com`);
    }
    if (discrimination === "YES") {
      newCon.push("DISCRIMINATION SUPPORT GROUP");
    }
    if (severity === "1") {
      newCon.push("APAC SEV1");
    }
    if (severity === "2") {
      newCon.push("APAC SEV2");
    }
    //* ===========================> SMILEY CONTACTS
    newCon.push("APAC ERC SUPPORT GROUP");
    newCon.push("NETWORK OPERATIONS CENTER SUPPORT GROUP");
    newCon.push("GSOC MGMT SUPPORT GROUP");
    newCon.push("RISK GLOBAL LAST MILE");
    newCon.push("APAC MEATR Internal Comms Support Group");
    setContacts([...newCon]);
  };

  return (
    <div className="min-h-screen bg-black to-blue-200 flex font-f1 flex-col items-center gap-2 p-8">
      {/* //* NAVBAR */}
      <RegionNavs region={region} />

      {/* //* FORM */}
      <div className="bg-black text-white w-full p-3 rounded-sm flex flex-col gap-1">
        <h1 className="text-lg text-center font-extrabold  flex justify-between">
          APAC <span className="text-lg font-bold">(AU / JP / SG / IN)</span>
        </h1>

        {/* //* SELECT COUNTRY */}
        <div className="bg-black px-4 py-1 rounded-sm shadow-sm border border-gray-800 flex items-center justify-around">
          <h1 className="text-lg font-medium w-1/4 text-center">Country:</h1>
          <div className="w-1/4 flex justify-center gap-8">
            <div className="flex gap-1 items-center">
              <input
                type="radio"
                name="country"
                value="AU"
                id="AU"
                checked={country === "AU"}
                onChange={(e) => setCountry(e.target.value)}
                className="cursor-pointer"
              />
              <label
                htmlFor="AU"
                className="uppercase font-bold tracking-wider cursor-pointer"
              >
                AU
              </label>
            </div>

            <div className="flex gap-1 items-center">
              <input
                type="radio"
                name="country"
                value="JP"
                id="JP"
                checked={country === "JP"}
                onChange={(e) => setCountry(e.target.value)}
                className="cursor-pointer"
              />
              <label
                htmlFor="JP"
                className="uppercase font-bold tracking-wider cursor-pointer"
              >
                JP
              </label>
            </div>

            <div className="flex gap-1 items-center">
              <input
                type="radio"
                name="country"
                value="SG"
                id="SG"
                checked={country === "SG"}
                onChange={(e) => setCountry(e.target.value)}
                className="cursor-pointer"
              />
              <label
                htmlFor="SG"
                className="uppercase font-bold tracking-wider cursor-pointer"
              >
                SG
              </label>
            </div>

            <div className="flex gap-1 items-center">
              <input
                type="radio"
                name="country"
                value="IN"
                id="IN"
                checked={country === "IN"}
                onChange={(e) => setCountry(e.target.value)}
                className="cursor-pointer"
              />
              <label
                htmlFor="IN"
                className="uppercase font-bold tracking-wider cursor-pointer"
              >
                IN
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

        {/* //* INDIA SITE REGION */}
        {country === "IN" && siteType === "AMZL" && (
          <div className="bg-black px-4 py-1 rounded-sm shadow-sm border border-gray-800 flex items-center justify-around">
            <h1 className="text-lg font-medium w-1/4 text-center">
              Site Region:
            </h1>
            <div className="w-1/4 flex justify-center gap-8">
              <div className="flex gap-1 items-center">
                <input
                  type="radio"
                  name="siteRegion"
                  value="NORTH"
                  id="NORTH"
                  checked={siteRegion === "NORTH"}
                  onChange={(e) => setSiteRegion(e.target.value)}
                  className="cursor-pointer"
                />
                <label
                  htmlFor="NORTH"
                  className="uppercase font-bold tracking-wider cursor-pointer"
                >
                  NORTH
                </label>
              </div>
              <div className="flex gap-1 items-center">
                <input
                  type="radio"
                  name="siteRegion"
                  value="WEST"
                  id="WEST"
                  checked={siteRegion === "WEST"}
                  onChange={(e) => setSiteRegion(e.target.value)}
                  className="cursor-pointer"
                />
                <label
                  htmlFor="WEST"
                  className="uppercase font-bold tracking-wider cursor-pointer"
                >
                  WEST
                </label>
              </div>
              <div className="flex gap-1 items-center">
                <input
                  type="radio"
                  name="siteRegion"
                  value="SOUTH"
                  id="SOUTH"
                  checked={siteRegion === "SOUTH"}
                  onChange={(e) => setSiteRegion(e.target.value)}
                  className="cursor-pointer"
                />
                <label
                  htmlFor="SOUTH"
                  className="uppercase font-bold tracking-wider cursor-pointer"
                >
                  SOUTH
                </label>
              </div>
            </div>
          </div>
        )}

        {/* //* SITE REGION */}
        {country === "IN" && siteType === "AMZL" && (
          <img
            src={IndiaRegion}
            className="w-3/4 mx-auto rounded-sm shadow-2xl"
            alt="India Site Region"
          />
        )}

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
            <option className="font-medium" value="HubDA">
              Hub DA
            </option>
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
