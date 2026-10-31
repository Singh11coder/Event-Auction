import { useState } from "react";
import { ArrowUpRight, IndianRupee, UserRound } from "lucide-react";
import { formatCurrency } from "../../utils/formatCurrency";

export default function BidForm({ highestAmount, isActive, onPlaceBid }) {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");

  const minimum = highestAmount + 1;
  const submit = (event) => {
    event.preventDefault();
    const success = onPlaceBid(name, amount);
    if (success) {
      setAmount("");
      setName("");
    }
  };

  return (
    <form onSubmit={submit} className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900 sm:p-6">
      <div className="mb-5">
        <h3 className="font-bold text-slate-900 dark:text-white">Place your bid</h3>
        <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">Enter your details to participate in this auction.</p>
      </div>
      <label className="mb-1.5 block text-xs font-semibold text-slate-600 dark:text-slate-300">Participant name</label>
      <div className="mb-4 flex items-center gap-2 rounded-xl border border-slate-200 px-3 focus-within:border-violet-500 focus-within:ring-4 focus-within:ring-violet-500/10 dark:border-slate-700 dark:bg-slate-950">
        <UserRound size={17} className="text-slate-400" />
        <input value={name} onChange={(e) => setName(e.target.value)} disabled={!isActive} required maxLength={40} placeholder="Enter your full name" className="h-11 w-full bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400 disabled:cursor-not-allowed dark:text-white" />
      </div>
      <label className="mb-1.5 block text-xs font-semibold text-slate-600 dark:text-slate-300">Your bid amount</label>
      <div className="mb-2 flex items-center gap-2 rounded-xl border border-slate-200 px-3 focus-within:border-violet-500 focus-within:ring-4 focus-within:ring-violet-500/10 dark:border-slate-700 dark:bg-slate-950">
        <IndianRupee size={17} className="text-slate-400" />
        <input type="number" min={minimum} step="1" value={amount} onChange={(e) => setAmount(e.target.value)} disabled={!isActive} required placeholder="Enter amount" className="h-11 w-full bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400 disabled:cursor-not-allowed dark:text-white" />
      </div>
      <p className="mb-5 text-[11px] text-slate-400">Minimum next bid: <span className="font-semibold text-violet-600 dark:text-violet-400">{formatCurrency(minimum)}</span></p>
      <button type="submit" disabled={!isActive} className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-violet-600 text-sm font-bold text-white shadow-lg shadow-violet-600/20 transition hover:bg-violet-700 disabled:cursor-not-allowed disabled:bg-slate-300 disabled:shadow-none dark:disabled:bg-slate-700">
        {isActive ? <>Submit bid <ArrowUpRight size={17} /></> : "Auction has ended"}
      </button>
      <p className="mt-3 text-center text-[10px] leading-4 text-slate-400">By placing a bid, you agree to the auction rules and terms.</p>
    </form>
  );
}
