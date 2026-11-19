/** Public staff-identification records shown on OneStep's official domain.
 *
 * Set `enabled: false` if a card is revoked. The verification page derives
 * expiry from the actual date, so an expired card cannot show ACTIVE.
 * Records intentionally omit personal contact details and private data.
 */

export type StaffRecord = {
  token: string;
  name: string;
  position: string;
  idNumber: string;
  photoPath: string;
  issuedOn: string;
  expiresOn: string;
  enabled: boolean;
};

export const staffRecords: StaffRecord[] = [
  {
    token: "x_nk2PdqMEg4BBlk",
    name: "Ismail Mahad Mumin",
    position: "Marketing Representative",
    idNumber: "OSD-MKT-003",
    photoPath: "/staff/ismail-mahad-mumin.jpg",
    issuedOn: "2026-11-19",
    expiresOn: "2027-11-19",
    enabled: true,
  },
  {
    token: "v_f545c614aeb8828e61d65ba0",
    name: "Ahmed Abdirizak Mohamud",
    position: "Marketing Representative",
    idNumber: "OSD-MKT-004",
    photoPath: "/staff/ahmed-abdirizak-mohamud.jpg",
    issuedOn: "2026-11-19",
    expiresOn: "2027-11-19",
    enabled: true,
  },
];

export function findStaffByToken(token: string): StaffRecord | undefined {
  return staffRecords.find((record) => record.token === token);
}

export function staffStatus(record: StaffRecord): "active" | "revoked" | "expired" {
  if (!record.enabled) return "revoked";

  // Card is valid through 23:59:59 on expiry day in Mogadishu (UTC+3).
  const endOfValidity = new Date(`${record.expiresOn}T23:59:59+03:00`).getTime();
  if (Date.now() > endOfValidity) return "expired";
  return "active";
}
