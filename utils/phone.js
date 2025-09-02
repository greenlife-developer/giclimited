export function normalizeNigerian(msisdn) {
  if (!msisdn) return null;
  let n = String(msisdn).replace(/\D/g, "");
  if (n.startsWith("0")) n = "234" + n.slice(1);
  if (n.startsWith("234") && n.length === 13) return n; // e.g., 23480xxxxxxx
  return null;
}
