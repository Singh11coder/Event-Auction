import { CalendarClock, Radio } from "lucide-react";

export default function AuctionHeader({ isActive }) {
  return (
    <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
      <div>
        <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-violet-600 dark:text-violet-400"><CalendarClock size={14} /> Featured event</div>
        <h1 className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-3xl">Event auction</h1>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Place your bids and compete for the featured item.</p>
      </div>
      <span className={`inline-flex w-fit items-center gap-2 rounded-full px-3 py-2 text-xs font-bold ${isActive ? "bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400" : "bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-300"}`}>
        <Radio size={14} className={isActive ? "animate-pulse" : ""} /> {isActive ? "Auction is live" : "Auction completed"}
      </span>
    </div>
  );
}
