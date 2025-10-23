import React from "react";
import { Plus, Trash2, Weight, Zap, Package } from "lucide-react";

const InputSection = ({
  capacity,
  setCapacity,
  items,
  addItem,
  updateItem,
  removeItem,
  selectedMethod,
  setSelectedMethod,
}) => {
  const methods = [
    { id: "all", label: "All Methods", icon: Zap },
    { id: "bruteforce", label: "Brute Force", icon: Weight },
    { id: "dynamic", label: "Dynamic Programming", icon: Package },
    { id: "memoryfunction", label: "Memory Function", icon: Zap },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto space-y-8">
      {/* Capacity Section */}
      <div className="glass-card p-8 animate-slide-up">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-xl glass-card flex items-center justify-center">
            <Weight className="text-white/80" size={24} />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white">Knapsack Capacity</h2>
            <p className="text-white/60">
              Maximum weight your knapsack can hold
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <input
            type="number"
            value={capacity}
            onChange={(e) => setCapacity(e.target.value)}
            placeholder="Enter capacity..."
            className="glass-input flex-1 px-6 py-4 text-white text-lg font-medium"
          />
          <div className="text-white/40 text-sm font-medium min-w-[60px]">
            units
          </div>
        </div>
      </div>

      {/* Items Section */}
      <div
        className="glass-card p-8 animate-slide-up"
        style={{ animationDelay: "0.1s" }}
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-xl glass-card flex items-center justify-center">
            <Package className="text-white/80" size={24} />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white">Available Items</h2>
            <p className="text-white/60">
              Add items with their values and weights
            </p>
          </div>
        </div>

        <div className="space-y-4 mb-6">
          {items.map((item, index) => (
            <div
              key={item.id}
              className="glass-card p-6 flex items-center gap-4 group hover:bg-white/5 transition-all duration-300"
            >
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/10 text-white/60 font-semibold text-sm">
                {index + 1}
              </div>

              <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-white/60 text-sm font-medium mb-2 uppercase tracking-wider">
                    Item Name
                  </label>
                  <input
                    type="text"
                    value={item.name}
                    onChange={(e) =>
                      updateItem(item.id, "name", e.target.value)
                    }
                    placeholder="Enter item name..."
                    className="glass-input w-full px-4 py-3 text-white"
                  />
                </div>
                <div>
                  <label className="block text-white/60 text-sm font-medium mb-2 uppercase tracking-wider">
                    Value
                  </label>
                  <input
                    type="number"
                    value={item.value}
                    onChange={(e) =>
                      updateItem(item.id, "value", e.target.value)
                    }
                    placeholder="Value..."
                    className="glass-input w-full px-4 py-3 text-white"
                  />
                </div>
                <div>
                  <label className="block text-white/60 text-sm font-medium mb-2 uppercase tracking-wider">
                    Weight
                  </label>
                  <input
                    type="number"
                    value={item.weight}
                    onChange={(e) =>
                      updateItem(item.id, "weight", e.target.value)
                    }
                    placeholder="Weight..."
                    className="glass-input w-full px-4 py-3 text-white"
                  />
                </div>
              </div>

              {items.length > 1 && (
                <button
                  onClick={() => removeItem(item.id)}
                  className="btn-secondary p-3 text-red-800 hover:text-red-600 opacity-0 group-hover:opacity-100 transition-all duration-300"
                >
                  <Trash2 size={20} />
                </button>
              )}
            </div>
          ))}
        </div>

        <button
          onClick={addItem}
          className="btn-secondary w-full px-6 py-4 flex items-center justify-center gap-3 text-lg"
        >
          <Plus size={24} />
          Add New Item
        </button>
      </div>

      {/* Method Selection */}
      <div
        className="glass-card p-8 animate-slide-up"
        style={{ animationDelay: "0.2s" }}
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-xl glass-card flex items-center justify-center">
            <Zap className="text-white/80" size={24} />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white">Solution Method</h2>
            <p className="text-white/60">
              Choose how to solve the knapsack problem
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {methods.map((method) => {
            const IconComponent = method.icon;
            return (
              <button
                key={method.id}
                onClick={() => setSelectedMethod(method.id)}
                className={`p-6 rounded-2xl font-semibold transition-all duration-300 flex flex-col items-center gap-3 ${
                  selectedMethod === method.id
                    ? "btn-selected"
                    : "btn-secondary"
                }`}
              >
                <IconComponent
                  size={28}
                  className={
                    selectedMethod === method.id
                      ? "text-white"
                      : "text-white/80"
                  }
                />
                <span
                  className={
                    selectedMethod === method.id
                      ? "text-white"
                      : "text-white/80"
                  }
                >
                  {method.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default InputSection;
