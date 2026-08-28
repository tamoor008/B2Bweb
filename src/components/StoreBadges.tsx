import React from "react";

export function AppleAppStoreBadge({ onClick }: { onClick?: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="px-4 py-2.5 rounded-xl bg-[#1A1A1E] hover:bg-[#26262B] border border-[#26262B] transition-all flex items-center gap-3 text-left shadow-md group cursor-pointer"
    >
      {/* Official Apple Logo SVG */}
      <svg
        className="w-6 h-6 fill-current text-white shrink-0 group-hover:scale-105 transition-transform"
        viewBox="0 0 170 170"
      >
        <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.34.13-9.14-1.9-14.4-6.07-3.37-2.69-7.25-7.3-11.64-13.84-6.3-9.43-11.26-20.14-14.88-32.13-3.61-12-5.42-23.36-5.42-34.09 0-14.28 3.56-26.06 10.67-35.34 7.12-9.28 16.14-14.05 27.07-14.31 4.79 0 10.15 1.25 16.08 3.75 5.94 2.5 10.12 3.79 12.56 3.86 2.11 0 6.43-1.37 12.97-4.11 6.54-2.74 12.04-4.01 16.5-3.81 12.19.9 22.02 5.56 29.5 13.98-10.74 6.5-16.02 15.54-15.84 27.12.18 9.09 3.57 16.66 10.18 22.7 6.61 6.04 14.51 9.6 23.7 10.67-2.52 7.54-5.99 15.42-10.41 23.64zM119.22 31.84c0-7.07 2.54-13.83 7.62-20.28 5.08-6.45 11.45-10.62 19.11-12.51.18 1.05.27 1.93.27 2.65 0 7.07-2.64 13.96-7.92 20.67-5.28 6.71-11.75 10.87-19.41 12.48-.18-.87-.27-1.87-.27-3.01z" />
      </svg>
      <div>
        <p className="text-[9px] uppercase tracking-wider text-slate-400 font-semibold leading-none">
          Download on the
        </p>
        <p className="text-xs font-bold text-white tracking-tight leading-tight mt-0.5">
          App Store
        </p>
      </div>
    </button>
  );
}

export function GooglePlayBadge({ onClick }: { onClick?: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="px-4 py-2.5 rounded-xl bg-[#1A1A1E] hover:bg-[#26262B] border border-[#26262B] transition-all flex items-center gap-3 text-left shadow-md group cursor-pointer"
    >
      {/* Official Google Play 4-Color Triangle SVG */}
      <svg
        className="w-5 h-5 shrink-0 group-hover:scale-105 transition-transform"
        viewBox="0 0 512 512"
      >
        <path
          fill="#410593"
          d="M78.6 44.9C72.2 48.4 68 55.4 68 63.8v384.4c0 8.4 4.2 15.4 10.6 18.9l208.5-211.5L78.6 44.9z"
        />
        <path
          fill="#00e676"
          d="M363.8 171.1L287.1 256l76.7 84.9 83.2-47.5c11.9-6.8 19-19.3 19-32.9s-7.1-26.1-19-32.9l-83.2-56.5z"
        />
        <path
          fill="#ff3d00"
          d="M78.6 44.9l208.5 211.1 76.7-84.9L108.9 27.5C98.4 21.5 86.8 28.1 78.6 44.9z"
        />
        <path
          fill="#ffc107"
          d="M78.6 467.1c8.2 16.8 19.8 23.4 30.3 17.4l254.9-143.6-76.7-84.9L78.6 467.1z"
        />
      </svg>
      <div>
        <p className="text-[9px] uppercase tracking-wider text-slate-400 font-semibold leading-none">
          GET IT ON
        </p>
        <p className="text-xs font-bold text-white tracking-tight leading-tight mt-0.5">
          Google Play
        </p>
      </div>
    </button>
  );
}
