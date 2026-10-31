import { Crown, TrendingUp } from "lucide-react";
import { formatCurrency } from "../../utils/formatCurrency";

export default function HighestBid({ highestBid, bidCount }) {
  return (
    <section className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-violet-700 via-violet-600 to-indigo-600 p-5 text-white shadow-xl shadow-violet-700/10 sm:p-6">
      <div className="absolute -right-8 -top-10 h-36 w-36 rounded-full border-[24px] border-white/10" />
      <div className="relative">
        <div className="flex items-center gap-2 text-sm font-medium text-violet-100"><Crown size={17} /> Current highest bid</div>
        <p className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">{formatCurrency(highestBid.amount)}</p>
        <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-white/20 pt-4">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-wider text-violet-200">Leading bidder</p>
            <p className="mt-1 text-sm font-semibold">{highestBid.bidder}</p>
          </div>
          <div className="rounded-xl bg-white/15 px-3 py-2 text-xs font-semibold"><TrendingUp size={13} className="mr-1 inline" /> {bidCount} bids placed</div>
        </div>
      </div>
    </section>
  );
}
