export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export const root = "min-h-screen overflow-x-hidden bg-white text-[#233d4c] font-body";
export const wrap = "mx-auto w-full max-w-[1320px]";
export const section = "px-[clamp(20px,5vw,60px)] py-[clamp(72px,9vw,120px)]";
export const sectionSurface =
  "border-y border-[rgba(35,61,76,0.14)] bg-[#fff9eb] px-[clamp(20px,5vw,60px)] py-[clamp(72px,9vw,120px)]";

export const eyebrow =
  "block font-label text-xs font-semibold uppercase tracking-[1.6px] text-[#fd802e]";
export const h2 =
  "mt-3.5 text-balance font-display text-[clamp(28px,3.5vw,44px)] font-extrabold leading-[1.05] text-[#233d4c]";
export const h2Light =
  "mt-3.5 text-balance font-display text-[clamp(28px,3.5vw,44px)] font-extrabold leading-[1.05] text-[#fff9eb]";
export const lead =
  "text-pretty font-body text-[clamp(16px,1.4vw,19px)] leading-[1.6] text-[#41566a]";
export const leadLight =
  "text-pretty font-body text-[clamp(16px,1.4vw,19px)] leading-[1.6] text-[rgba(255,249,235,0.85)]";

export const button =
  "inline-flex items-center gap-3 border-0 bg-[#fd802e] px-[26px] py-[17px] font-label text-[13px] font-semibold uppercase tracking-[1.3px] text-white no-underline transition-colors duration-200 hover:bg-[#e86a18] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#fd802e] [&_.arrow]:transition-transform [&_.arrow]:duration-200 hover:[&_.arrow]:translate-x-1";
export const textLink =
  "inline-flex w-fit items-center gap-[11px] border-b border-[rgba(35,61,76,0.14)] pb-[7px] font-label text-xs font-semibold uppercase tracking-[1.3px] text-[#233d4c] no-underline transition-colors duration-200 hover:border-[#fd802e] hover:text-[#e86a18] [&_.arrow]:transition-transform [&_.arrow]:duration-200 hover:[&_.arrow]:translate-x-1";
export const textLinkLight =
  "inline-flex w-fit items-center gap-[11px] border-b border-[rgba(255,249,235,0.32)] pb-[7px] font-label text-xs font-semibold uppercase tracking-[1.3px] text-[#fff9eb] no-underline transition-colors duration-200 hover:border-[#fd802e] hover:text-[#fd802e] [&_.arrow]:transition-transform [&_.arrow]:duration-200 hover:[&_.arrow]:translate-x-1";

export const split =
  "grid grid-cols-1 items-start gap-[clamp(40px,6vw,90px)] md:grid-cols-[0.42fr_0.58fr]";
export const splitCenter =
  "grid grid-cols-1 items-center gap-[clamp(40px,6vw,80px)] md:grid-cols-[0.62fr_0.38fr]";
export const splitNarrow =
  "grid grid-cols-1 items-center gap-[clamp(40px,6vw,80px)] md:grid-cols-[0.46fr_0.54fr]";
export const splitForm =
  "grid grid-cols-1 items-start gap-[clamp(32px,5vw,72px)] md:grid-cols-[0.9fr_1.1fr]";
export const grid3 =
  "grid grid-cols-1 gap-6 md:grid-cols-3";
export const borderedGrid3 =
  "grid grid-cols-1 gap-px border border-[rgba(35,61,76,0.14)] bg-[rgba(35,61,76,0.14)] md:grid-cols-3";
export const tile =
  "flex min-h-[188px] flex-col gap-3.5 border border-[rgba(35,61,76,0.14)] bg-white px-7 py-[30px] text-inherit no-underline transition-colors duration-200 hover:border-[#fd802e]";
export const tileNum =
  "font-label text-xs font-semibold tracking-[1px] text-[#fd802e]";
export const tileTitle =
  "m-0 font-display text-[21px] font-semibold leading-[1.15] tracking-[-0.3px] text-[#233d4c]";
export const tileText =
  "m-0 font-body text-sm leading-[1.55] text-[#41566a]";
export const mediaBox =
  "relative overflow-hidden border border-[rgba(35,61,76,0.14)] bg-[#edebe6]";
export const mediaCover = "block h-full w-full object-cover";
export const tag =
  "whitespace-nowrap border border-[rgba(35,61,76,0.14)] px-2.5 py-1 font-label text-[11px] font-medium uppercase tracking-[0.6px] text-[#41566a]";
export const fieldLabel =
  "mb-2 block font-label text-[11px] font-semibold uppercase tracking-[1px] text-[#41566a]";
export const field =
  "w-full border border-[rgba(35,61,76,0.14)] bg-white px-[15px] py-[13px] font-body text-[15px] text-[#233d4c] outline-none";
