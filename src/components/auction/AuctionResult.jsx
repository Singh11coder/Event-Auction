import { Award, PartyPopper } from "lucide-react";
import { formatCurrency } from "../../utils/formatCurrency";

export default function AuctionResult({ winner, startingPrice }) {
  return (
    <section className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5 dark:border-emerald-500/20 dark:bg-emerald-500/5 sm:p-6">
      <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400"><PartyPopper size={19} /><span className="text-sm font-bold">Auction result</span></div>
      {winner ? (
        <div className="mt-4 flex items-center gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300"><Award size={25} /></div>
          <div>
            <p className="text-xs text-emerald-700/70 dark:text-emerald-400/70">Congratulations to the winner</p>
            <p className="text-lg font-bold text-slate-900 dark:text-white">{winner.bidder}</p>
            <p className="text-sm font-semibold text-emerald-700 dark:text-emerald-400">Winning bid: {formatCurrency(winner.amount)}</p>
          </div>
        </div>
      ) : (
        <div className="mt-3">
          <p className="font-semibold text-slate-900 dark:text-white">No winner this time</p>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">No valid bids were received. The item remains at its starting price of {formatCurrency(startingPrice)}.</p>
        </div>
      )}
    </section>
  );
}
