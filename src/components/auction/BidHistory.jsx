import { History, UserRound } from "lucide-react";
import { formatCurrency, formatBidTime } from "../../utils/formatCurrency";

export default function BidHistory({ bids }) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
      <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4 dark:border-slate-800">
        <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-white"><History size={17} className="text-violet-500" /> Bid history</div>
        <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-bold text-slate-500 dark:bg-slate-800 dark:text-slate-300">{bids.length} total</span>
      </div>
      {bids.length === 0 ? (
        <p className="px-5 py-8 text-center text-sm text-slate-400">No bids yet. Be the first to place a bid.</p>
      ) : (
        <div className="divide-y divide-slate-100 dark:divide-slate-800">
          {bids.map((bid, index) => (
            <div key={bid.id} className="flex items-center justify-between gap-3 px-5 py-3.5">
              <div className="flex min-w-0 items-center gap-3">
                <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-bold ${index === 0 ? "bg-amber-100 text-amber-700 dark:bg-amber-500/10 dark:text-amber-300" : "bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-300"}`}>
                  {index === 0 ? "1st" : <UserRound size={15} />}
                </div>
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-slate-800 dark:text-slate-100">{bid.bidder}</p>
                  <p className="text-[11px] text-slate-400">{formatBidTime(bid.createdAt)}</p>
                </div>
              </div>
              <p className="shrink-0 text-sm font-bold tabular-nums text-slate-900 dark:text-white">{formatCurrency(bid.amount)}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
