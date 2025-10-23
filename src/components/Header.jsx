import React from "react";

const Header = () => {
  return (
    <div className="w-full max-w-4xl mx-auto text-center animate-fade-in">
      <div className="glass-card p-6 mb-8 animate-slide-up">
        <h1 className="text-5xl md:text-7xl font-black text-white mb-4 tracking-tight">
          Knapsack Solver
        </h1>
        <p className="text-white/80 text-lg md:text-xl font-medium">
          Optimize your packing with advanced algorithms
        </p>
      </div>
    </div>
  );
};

export default Header;
