import { Clock3 } from "lucide-react";
import { getTimeParts } from "../../utils/auctionHelpers";

function TimeUnit({ value, label }) {
  return (
    <div className="min-w-0 flex-1 rounded-xl bg-slate-900 px-2 py-3 text-center text-white dark:bg-slate-800 sm:px-3">
      <p className="text-2xl font-bold tabular-nums tracking-tight sm:text-3xl">{String(value).padStart(2, "0")}</p>
      <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.16em] text-slate-400">{label}</p>
    </div>
  );
}

export default function AuctionTimer({ endsAt, now, isEnded }) {
  const time = getTimeParts(endsAt - now);
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm font-semibold text-slate-800 dark:text-slate-100">
          <Clock3 size={17} className="text-violet-500" /> {isEnded ? "Auction closed" : "Time remaining"}
        </div>
        <span className={`rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider ${isEnded ? "bg-slate-100 text-slate-500 dark:bg-slate-800" : "bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400"}`}>
          {isEnded ? "Ended" : "Live"}
        </span>
      </div>
      {isEnded ? (
        <p className="rounded-xl bg-slate-50 px-4 py-5 text-center text-sm font-semibold text-slate-600 dark:bg-slate-800 dark:text-slate-300">Bidding is now closed.</p>
      ) : (
        <div className="flex gap-2">
          {time.days > 0 && <TimeUnit value={time.days} label="Days" />}
          <TimeUnit value={time.hours} label="Hours" />
          <TimeUnit value={time.minutes} label="Minutes" />
          <TimeUnit value={time.seconds} label="Seconds" />
        </div>
      )}
    </div>
  );
}
