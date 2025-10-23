import React from "react";

const Header = () => {
  return (
    <div className="w-full max-w-6xl mx-auto text-center">
      <div className="glass-card p-8 mb-8 animate-fade-in floating">
        <div className="mb-2">
          <div className="w-16 h-16 mx-auto mb-4 rounded-2xl glass-card flex items-center justify-center">
            <div className="w-8 h-8 bg-white/80 rounded-lg" />
          </div>
        </div>

        <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tight">
          <span className="bg-linear-to-br from-white to-white/80 bg-clip-text text-transparent">
            Aurora
          </span>
        </h1>

        <div className="w-24 h-1 bg-linear-to-r from-transparent via-white/50 to-transparent mx-auto mb-6" />

        <p className="text-white/80 text-xl md:text-2xl font-medium max-w-2xl mx-auto leading-relaxed">
          Optimize your packing with{" "}
          <span className="text-white font-semibold">advanced algorithms</span>{" "}
          and intelligent selection
        </p>

        <div className="flex justify-center items-center gap-3 mt-6 text-white/60">
          <div className="w-2 h-2 bg-white/40 rounded-full" />
          <div className="w-2 h-2 bg-white/40 rounded-full" />
          <div className="w-2 h-2 bg-white/40 rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default Header;
