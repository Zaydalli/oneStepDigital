import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  BadgeCheck,
  CalendarDays,
  Globe,
  Mail,
  ShieldAlert,
  ShieldCheck,
} from "lucide-react";
import { findStaffByToken, staffStatus } from "@/lib/staff-verification";

type Props = {
  params: Promise<{ token: string }>;
};

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Staff ID Verification | OneStep Digital",
  description: "Verify a OneStep Digital employee card using the official company website.",
  robots: { index: false, follow: false },
};

function displayDate(value: string): string {
  const [year, month, day] = value.split("-");
  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
  ];
  return `${day} ${months[Number(month) - 1]} ${year}`;
}

export default async function VerifyStaffPage({ params }: Props) {
  const { token } = await params;
  const employee = findStaffByToken(token);
  if (!employee) notFound();

  const status = staffStatus(employee);
  const active = status === "active";
  const label = active ? "ACTIVE" : status === "expired" ? "EXPIRED" : "REVOKED";

  return (
    <main className="min-h-screen bg-[#eff5fc] px-4 py-8 text-[#071733] sm:py-12">
      <div className="mx-auto max-w-xl">
        <div className="mb-6 flex items-center justify-between gap-4">
          <Link href="/" aria-label="OneStep Digital home" className="inline-flex items-center">
            <Image src="/logo.webp" alt="OneStep Digital" width={154} height={60} className="h-auto w-[154px]" priority />
          </Link>
          <span className="rounded-full border border-[#cce0f6] bg-white px-3 py-1.5 text-[11px] font-bold tracking-wide text-[#42617f]">
            STAFF VERIFICATION
          </span>
        </div>

        <section className="overflow-hidden rounded-[26px] border border-[#dbe7f4] bg-white shadow-[0_20px_70px_rgba(10,32,72,0.10)]">
          <div className="bg-[#071733] px-6 py-6 text-white sm:px-8">
            <div className="flex items-center gap-2 text-sm font-semibold text-[#93d8ff]">
              {active ? <ShieldCheck size={20} aria-hidden="true" /> : <ShieldAlert size={20} aria-hidden="true" />}
              Xaqiijinta Aqoonsiga Shaqaalaha
            </div>
            <h1 className="mt-2 text-xl font-extrabold sm:text-2xl">OneStep Digital Staff ID</h1>
            <p className="mt-1 text-sm text-[#c5d7ea]">Official employee card verification</p>
          </div>

          <div className="p-6 sm:p-8">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
              <div className="relative h-44 w-36 shrink-0 overflow-hidden rounded-xl border-[3px] border-[#1066ec] bg-white shadow-md">
                <Image src={employee.photoPath} alt={`Sawirka ${employee.name}`} fill sizes="144px" className="object-cover object-top" priority />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-[11px] font-bold uppercase tracking-[0.17em] text-[#75879c]">Employee</p>
                <h2 className="mt-1 text-2xl font-extrabold leading-tight tracking-tight sm:text-[26px]">{employee.name}</h2>
                <p className="mt-2 text-sm font-semibold text-[#0b65e8]">{employee.position}</p>
                <div className="mt-4 inline-flex items-center gap-2 rounded-lg bg-[#f1f6fd] px-3 py-2 font-mono text-sm font-bold text-[#183355]">
                  <BadgeCheck size={17} aria-hidden="true" /> {employee.idNumber}
                </div>
              </div>
            </div>

            <div className={`mt-7 flex items-center justify-between gap-3 rounded-xl border p-4 ${active ? "border-[#b4ecd0] bg-[#eafaf2]" : "border-[#f6bdbd] bg-[#fff0f0]"}`}>
              <div>
                <p className="text-xs font-semibold text-[#516478]">Employment ID status</p>
                <p className={`mt-1 text-lg font-extrabold ${active ? "text-[#147548]" : "text-[#b82d2d]"}`}>
                  {active ? "Aqoonsigu wuu shaqaynayaa" : "Aqoonsigan ma shaqaynayo"}
                </p>
              </div>
              <span className={`rounded-full px-3 py-1.5 text-xs font-extrabold ${active ? "bg-[#c7f1dc] text-[#116238]" : "bg-[#ffdada] text-[#ab2222]"}`}>
                {label}
              </span>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-[#e3ebf5] p-3">
                <div className="flex items-center gap-1.5 text-xs text-[#71869c]"><CalendarDays size={14} aria-hidden="true" /> Issued</div>
                <p className="mt-1 text-sm font-bold">{displayDate(employee.issuedOn)}</p>
              </div>
              <div className="rounded-xl border border-[#e3ebf5] p-3">
                <div className="flex items-center gap-1.5 text-xs text-[#71869c]"><CalendarDays size={14} aria-hidden="true" /> Expires</div>
                <p className="mt-1 text-sm font-bold">{displayDate(employee.expiresOn)}</p>
              </div>
            </div>

            <p className="mt-6 rounded-lg bg-[#f3f7fc] px-4 py-3 text-xs leading-relaxed text-[#536981]">
              Si aad qofka u xaqiijiso, barbar dhig magaca, sawirka iyo ID Number-ka ku qoran kaarka iyo boggan. QR Code keliya ma xaqiijiyo qofka sita kaarka.
            </p>
          </div>

          <div className="border-t border-[#e6edf5] bg-[#f8fbff] px-6 py-4 sm:px-8">
            <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-medium text-[#526783]">
              <a href="mailto:info@onestepdigital.co" className="inline-flex items-center gap-1.5 hover:text-[#0b65e8]"><Mail size={14} aria-hidden="true" /> info@onestepdigital.co</a>
              <Link href="/" className="inline-flex items-center gap-1.5 hover:text-[#0b65e8]"><Globe size={14} aria-hidden="true" /> onestepdigital.co</Link>
            </div>
          </div>
        </section>
        <p className="mt-6 text-center text-xs text-[#6b819a]">This verification page is published on OneStep Digital&apos;s official website.</p>
      </div>
    </main>
  );
}
