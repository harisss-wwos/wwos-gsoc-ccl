//* CCL VERSION
export const CCLVersion = "03.25.26";

//* OWNERS OR MAINTAINED BY
export const Owners = "harisss,yerramtr,bhastrip";

//* STATION TYPES
export const siteTypes =
  "AMZL,3RD PARTY LOGISTICS 3PL,SUB SAME DAY SSD,Rural Super Rural RSR,XL Delivery Station XLDS,Traditional Sortable AR,Sort Center SC,GROCERY FULFILLMENT CENTER GFC,EXCHANGE POINT XPT,AMXL,INBOUND CROSS DOCK IXD,AMAZON FRESH,WHOLE FOODS MARKET WFM,PRIMENOW PN,SSD DC";

//* COPYING GSOC EMAIL
export async function handleCopyArchive() {
  await navigator.clipboard.writeText("wwos-gsoc-archive@amazon.com");
  alert(`Copied "wwos-gsoc-archive@amazon.com" to clipboard`);
}
