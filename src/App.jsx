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
    <div
      className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 py-8 px-4"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.03' fill-rule='evenodd'/%3E%3C/svg%3E")`,
      }}
    >
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
                className="btn-primary px-12 py-4 text-lg font-bold disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isCalculating ? "Calculating..." : "Solve Knapsack"}
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
  );
}

export default App;
