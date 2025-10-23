import React from "react";
import Header from "./components/Header";
import InputSection from "./components/InputSection";
import OutputSection from "./components/OutputSection";
import { useKnapsack } from "./hooks/useKnapsack";

function App() {
  const {
    capacity,
    setCapacity,
    items,
    addItem,
    updateItem,
    removeItem,
    selectedMethod,
    setSelectedMethod,
    results,
    isCalculating,
    calculate,
    reset,
  } = useKnapsack();

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Artistic iOS-style gradient background */}
      <div className="fixed inset-0 bg-linear-to-br from-purple-900 via-blue-900 to-indigo-900" />

      {/* Animated gradient orbs */}
      <div className="fixed top-1/4 left-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-float" />
      <div
        className="fixed bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="fixed top-1/2 left-1/2 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "4s" }}
      />

      {/* Subtle grid overlay */}
      <div
        className="fixed inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative z-10 py-8 px-4">
        <div className="container mx-auto space-y-8">
          <Header />

          {!results ? (
            <>
              <InputSection
                capacity={capacity}
                setCapacity={setCapacity}
                items={items}
                addItem={addItem}
                updateItem={updateItem}
                removeItem={removeItem}
                selectedMethod={selectedMethod}
                setSelectedMethod={setSelectedMethod}
              />

              <div className="text-center">
                <button
                  onClick={calculate}
                  disabled={isCalculating}
                  className="btn-primary px-16 py-5 text-xl font-bold disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none floating"
                >
                  {isCalculating ? (
                    <span className="flex items-center gap-3">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Calculating Optimal Solution...
                    </span>
                  ) : (
                    "Solve Knapsack"
                  )}
                </button>
              </div>
            </>
          ) : (
            <OutputSection
              results={results}
              selectedMethod={selectedMethod}
              onReset={reset}
              isCalculating={isCalculating}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
