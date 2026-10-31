import { Gavel, Menu, Bell } from "lucide-react";
import ThemeToggle from "../common/ThemeToggle";

export default function Navbar({ onMenuClick }) {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/90">
      <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <button onClick={onMenuClick} className="rounded-lg p-2 text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800 lg:hidden" aria-label="Open menu">
            <Menu size={20} />
          </button>
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-violet-600 text-white shadow-lg shadow-violet-600/20">
            <Gavel size={19} />
          </div>
          <div>
            <p className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">BidArena</p>
            <p className="-mt-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">Event auctions</p>
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <button className="relative hidden h-10 w-10 items-center justify-center rounded-xl text-slate-500 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800 sm:flex" aria-label="Notifications">
            <Bell size={18} />
            <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-violet-500 ring-2 ring-white dark:ring-slate-950" />
          </button>
          <ThemeToggle />
          <div className="hidden items-center gap-2 border-l border-slate-200 pl-3 dark:border-slate-800 sm:flex">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-violet-100 text-xs font-bold text-violet-700 dark:bg-violet-500/20 dark:text-violet-300">JD</div>
            <div className="hidden md:block">
              <p className="text-sm font-semibold text-slate-800 dark:text-slate-100">John Doe</p>
              <p className="text-xs text-slate-400">Participant</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
