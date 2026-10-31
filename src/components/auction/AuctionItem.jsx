import { Image, Tag } from "lucide-react";
import { formatCurrency } from "../../utils/formatCurrency";

export default function AuctionItem({ auction }) {
  return (
    <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
      <div className="relative h-56 overflow-hidden bg-slate-100 sm:h-72">
        <img src={auction.image} alt={auction.itemName} className="h-full w-full object-cover" />
        <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-slate-700 shadow-sm backdrop-blur">
          <Image size={14} className="text-violet-600" /> Featured item
        </div>
      </div>
      <div className="p-5 sm:p-6">
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-1 rounded-full bg-violet-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-violet-700 dark:bg-violet-500/10 dark:text-violet-300"><Tag size={12} /> {auction.category}</span>
        </div>
        <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-2xl">{auction.itemName}</h2>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500 dark:text-slate-400">{auction.description}</p>
        <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4 dark:border-slate-800">
          <div>
            <p className="text-xs text-slate-400">Starting price</p>
            <p className="mt-1 text-lg font-bold text-slate-900 dark:text-white">{formatCurrency(auction.startingPrice)}</p>
          </div>
          <p className="text-xs text-slate-400">Auction ID: {auction.id}</p>
        </div>
      </div>
    </section>
  );
}
