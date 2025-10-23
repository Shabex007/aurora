import React from "react";

const MethodCard = ({ title, description, result, isActive }) => {
  if (!isActive) return null;

  return (
    <div className="w-full max-w-4xl mx-auto animate-slide-up">
      <div className="glass-card p-8">
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
          <p className="text-white/70">{description}</p>
        </div>

        {result && (
          <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
            <h4 className="text-xl font-semibold text-white mb-4">Report</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-white/70 font-medium">
                    Memory Usage
                  </span>
                  <span className="text-white font-semibold">
                    {result.memory} KB
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/70 font-medium">
                    Time Complexity
                  </span>
                  <span className="text-white font-semibold">
                    {result.time.toFixed(3)} ms
                  </span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-white/70 font-medium">
                    Items Selected
                  </span>
                  <span className="text-white font-semibold text-right max-w-xs">
                    {result.items.length > 0
                      ? result.items.map((item) => item.name).join(", ")
                      : "None"}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/70 font-medium">Total Value</span>
                  <span className="text-white font-semibold text-2xl">
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
