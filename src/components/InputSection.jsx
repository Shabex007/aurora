import React from "react";
import { Plus, Trash2 } from "lucide-react";

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
    { id: "all", label: "All Methods" },
    { id: "bruteforce", label: "Brute Force" },
    { id: "dynamic", label: "Dynamic Programming" },
    { id: "memoryfunction", label: "Memory Function" },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto animate-slide-up">
      <div className="glass-card p-8">
        {/* Capacity Input */}
        <div className="mb-8">
          <label className="block text-white font-semibold text-lg mb-3">
            Knapsack Capacity
          </label>
          <input
            type="number"
            value={capacity}
            onChange={(e) => setCapacity(e.target.value)}
            placeholder="Enter capacity"
            className="glass-input w-full max-w-xs px-4 py-3 text-gray-700 font-medium"
          />
        </div>

        {/* Items Section */}
        <div className="mb-8">
          <label className="block text-white font-semibold text-lg mb-4">
            Available Items
          </label>
          <div className="space-y-4">
            {items.map((item, index) => (
              <div
                key={item.id}
                className="glass-card p-4 flex items-center gap-4"
              >
                <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-white/80 text-sm font-medium mb-2">
                      Item Name
                    </label>
                    <input
                      type="text"
                      value={item.name}
                      onChange={(e) =>
                        updateItem(item.id, "name", e.target.value)
                      }
                      placeholder="Enter item name"
                      className="glass-input w-full px-3 py-2 text-gray-700"
                    />
                  </div>
                  <div>
                    <label className="block text-white/80 text-sm font-medium mb-2">
                      Value
                    </label>
                    <input
                      type="number"
                      value={item.value}
                      onChange={(e) =>
                        updateItem(item.id, "value", e.target.value)
                      }
                      placeholder="Value"
                      className="glass-input w-full px-3 py-2 text-gray-700"
                    />
                  </div>
                  <div>
                    <label className="block text-white/80 text-sm font-medium mb-2">
                      Weight
                    </label>
                    <input
                      type="number"
                      value={item.weight}
                      onChange={(e) =>
                        updateItem(item.id, "weight", e.target.value)
                      }
                      placeholder="Weight"
                      className="glass-input w-full px-3 py-2 text-gray-700"
                    />
                  </div>
                </div>
                {items.length > 1 && (
                  <button
                    onClick={() => removeItem(item.id)}
                    className="btn-secondary p-2 text-red-400 hover:text-red-300"
                  >
                    <Trash2 size={20} />
                  </button>
                )}
              </div>
            ))}
          </div>

          <button
            onClick={addItem}
            className="btn-secondary mt-4 px-6 py-3 flex items-center gap-2"
          >
            <Plus size={20} />
            Add New Item
          </button>
        </div>

        {/* Method Selection */}
        <div>
          <label className="block text-white font-semibold text-lg mb-4">
            Choose Method
          </label>
          <div className="flex flex-wrap gap-3">
            {methods.map((method) => (
              <button
                key={method.id}
                onClick={() => setSelectedMethod(method.id)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                  selectedMethod === method.id
                    ? "btn-selected"
                    : "btn-secondary"
                }`}
              >
                {method.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputSection;
