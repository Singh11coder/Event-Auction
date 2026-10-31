import { Activity, Gavel, LayoutDashboard, Settings, Trophy, X } from "lucide-react";

const navItems = [
  { label: "Overview", icon: LayoutDashboard, active: true },
  { label: "Live auction", icon: Gavel },
  { label: "Bid activity", icon: Activity },
  { label: "Results", icon: Trophy },
];

export default function Sidebar({ open, onClose }) {
  return (
    <>
      {open && <button aria-label="Close navigation" onClick={onClose} className="fixed inset-0 z-40 bg-slate-950/40 lg:hidden" />}
      <aside className={`${open ? "translate-x-0" : "-translate-x-full"} fixed inset-y-0 left-0 z-50 flex w-64 flex-col border-r border-slate-200 bg-white px-4 py-5 transition-transform dark:border-slate-800 dark:bg-slate-950 lg:static lg:z-auto lg:translate-x-0`}>
        <div className="mb-8 flex items-center justify-between px-2 lg:hidden">
          <span className="font-bold text-slate-900 dark:text-white">Navigation</span>
          <button onClick={onClose} className="rounded-lg p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800"><X size={18} /></button>
        </div>
        <p className="mb-3 px-3 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">Workspace</p>
        <nav className="space-y-1">
          {navItems.map(({ label, icon: Icon, active }) => (
            <a key={label} href="#auction" onClick={onClose} className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition ${active ? "bg-violet-50 text-violet-700 dark:bg-violet-500/10 dark:text-violet-300" : "text-slate-500 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-900 dark:hover:text-white"}`}>
              <Icon size={17} /> {label}
              {label === "Live auction" && <span className="ml-auto h-2 w-2 rounded-full bg-emerald-500" />}
            </a>
          ))}
        </nav>
        <div className="mt-auto rounded-2xl bg-slate-50 p-4 dark:bg-slate-900">
          <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-lg bg-violet-100 text-violet-700 dark:bg-violet-500/20 dark:text-violet-300"><Settings size={16} /></div>
          <p className="text-sm font-semibold text-slate-800 dark:text-white">Need assistance?</p>
          <p className="mt-1 text-xs leading-5 text-slate-500 dark:text-slate-400">Contact the event organizer if you have questions about this auction.</p>
        </div>
      </aside>
    </>
  );
}
