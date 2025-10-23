import React from "react";
import { Clock, Cpu, Package, TrendingUp } from "lucide-react";

const MethodCard = ({ title, description, result, isActive }) => {
  if (!isActive) return null;

  return (
    <div className="w-full max-w-6xl mx-auto animate-fade-in">
      <div className="glass-card p-8">
        <div className="mb-8">
          <h3 className="text-3xl font-bold text-white mb-4">{title}</h3>
          <p className="text-white/70 text-lg leading-relaxed">{description}</p>
        </div>

        {result && (
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                <TrendingUp className="text-white" size={20} />
              </div>
              <h4 className="text-2xl font-semibold text-white">
                Performance Report
              </h4>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 rounded-xl bg-white/5">
                  <div className="flex items-center gap-3">
                    <Cpu className="text-white/60" size={20} />
                    <span className="text-white/70 font-medium">
                      Memory Usage
                    </span>
                  </div>
                  <span className="text-white font-semibold text-lg">
                    {result.memory} KB
                  </span>
                </div>

                <div className="flex items-center justify-between p-4 rounded-xl bg-white/5">
                  <div className="flex items-center gap-3">
                    <Clock className="text-white/60" size={20} />
                    <span className="text-white/70 font-medium">
                      Execution Time
                    </span>
                  </div>
                  <span className="text-white font-semibold text-lg">
                    {result.time.toFixed(3)} ms
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 rounded-xl bg-white/5">
                  <div className="flex items-center gap-3">
                    <Package className="text-white/60" size={20} />
                    <span className="text-white/70 font-medium">
                      Items Selected
                    </span>
                  </div>
                  <span className="text-white font-semibold text-right max-w-xs">
                    {result.items.length > 0
                      ? result.items.map((item) => item.name).join(", ")
                      : "None"}
                  </span>
                </div>

                <div className="flex items-center justify-between p-4 rounded-xl bg-linear-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30">
                  <span className="text-white/70 font-medium">Total Value</span>
                  <span className="font-bold text-2xl bg-linear-to-br from-white to-white/80 bg-clip-text text-transparent">
                    {result.maxValue}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MethodCard;
