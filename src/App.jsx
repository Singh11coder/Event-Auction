import { useState } from "react";
import { RotateCcw, ShieldCheck, X } from "lucide-react";
import { ThemeProvider } from "./context/ThemeContext";
import { useAuction } from "./hooks/useAuction";
import Navbar from "./components/layout/Navbar";
import Sidebar from "./components/layout/Sidebar";
import AuctionHeader from "./components/auction/AuctionHeader";
import AuctionItem from "./components/auction/AuctionItem";
import AuctionTimer from "./components/auction/AuctionTimer";
import HighestBid from "./components/auction/HighestBid";
import BidForm from "./components/auction/BidForm";
import BidHistory from "./components/auction/BidHistory";
import AuctionResult from "./components/auction/AuctionResult";

function AuctionDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const {
    auction, now, isActive, isEnded, highestBid, winner,
    notice, placeBid, resetDemo, dismissNotice,
  } = useAuction();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 transition-colors dark:bg-slate-950 dark:text-white">
      <Navbar onMenuClick={() => setSidebarOpen(true)} />
      <div className="mx-auto flex max-w-[1440px]">
        <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        <main id="auction" className="min-w-0 flex-1 px-4 py-7 sm:px-6 lg:px-8 lg:py-9">
          <div className="mx-auto max-w-6xl">
            <AuctionHeader isActive={isActive} />

            {notice.message && (
              <div role="status" className={`mb-5 flex items-start justify-between gap-3 rounded-xl border px-4 py-3 text-sm ${notice.type === "success" ? "border-emerald-200 bg-emerald-50 text-emerald-800 dark:border-emerald-500/20 dark:bg-emerald-500/10 dark:text-emerald-300" : "border-rose-200 bg-rose-50 text-rose-700 dark:border-rose-500/20 dark:bg-rose-500/10 dark:text-rose-300"}`}>
                <span>{notice.message}</span>
                <button onClick={dismissNotice} aria-label="Dismiss notification"><X size={16} /></button>
              </div>
            )}

            <div className="grid items-start gap-5 xl:grid-cols-[minmax(0,1.35fr)_minmax(340px,0.85fr)]">
              <div className="space-y-5">
                <AuctionItem auction={auction} />
                {isEnded && <AuctionResult winner={winner} startingPrice={auction.startingPrice} />}
                <BidHistory bids={auction.bids} />
              </div>

              <div className="space-y-5 xl:sticky xl:top-24">
                <HighestBid highestBid={highestBid} bidCount={auction.bids.length} />
                <AuctionTimer endsAt={auction.endsAt} now={now} isEnded={isEnded} />
                <BidForm highestAmount={highestBid.amount} isActive={isActive} onPlaceBid={placeBid} />
                <div className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
                  <ShieldCheck size={18} className="mt-0.5 shrink-0 text-emerald-500" />
                  <p className="text-xs leading-5 text-slate-500 dark:text-slate-400">Every accepted bid must exceed the current highest bid. The auction automatically closes when the countdown reaches zero.</p>
                </div>
                <button onClick={resetDemo} className="flex w-full items-center justify-center gap-2 rounded-xl py-2 text-xs font-semibold text-slate-400 transition hover:text-violet-600 dark:hover:text-violet-400">
                  <RotateCcw size={14} /> Reset demo auction
                </button>
              </div>
            </div>
            <footer className="mt-10 border-t border-slate-200 py-5 text-center text-xs text-slate-400 dark:border-slate-800">
              © {new Date().getFullYear()} BidArena. Demo auction experience.
            </footer>
          </div>
        </main>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AuctionDashboard />
    </ThemeProvider>
  );
}
