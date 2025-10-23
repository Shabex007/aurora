import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import MethodCard from "./MethodCard";

const OutputSection = ({ results, selectedMethod, onReset, isCalculating }) => {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const methods = [
    {
      id: "bruteforce",
      title: "Brute Force Technique",
      description:
        "Calculates the value of every possible combination of items in the knapsack to find the optimal solution.",
      result: results?.bruteforce,
    },
    {
      id: "dynamic",
      title: "Dynamic Programming Technique",
      description:
        "Uses a table to store solutions to subproblems, building up to the final solution efficiently.",
      result: results?.dynamic,
    },
    {
      id: "memoryfunction",
      title: "Memory Function Technique",
      description:
        "Uses memoization to store computed results, avoiding redundant calculations of subproblems.",
      result: results?.memoryfunction,
    },
  ];

  const visibleMethods =
    selectedMethod === "all"
      ? methods
      : methods.filter((method) => method.id === selectedMethod);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % visibleMethods.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + visibleMethods.length) % visibleMethods.length
    );
  };

  if (isCalculating) {
    return (
      <div className="w-full max-w-4xl mx-auto animate-slide-up">
        <div className="glass-card p-12 text-center">
          <div className="animate-pulse-gentle">
            <div className="text-white text-2xl font-semibold mb-4">
              Calculating optimal solution...
            </div>
            <div className="text-white/60">
              This may take a moment depending on the problem size
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!results) return null;

  return (
    <div className="w-full max-w-6xl mx-auto space-y-6">
      {/* Navigation for multiple results */}
      {visibleMethods.length > 1 && (
        <div className="flex justify-center items-center gap-4">
          <button
            onClick={prevSlide}
            className="btn-secondary p-3 rounded-full"
          >
            <ChevronLeft size={20} />
          </button>

          <div className="text-white font-medium">
            {currentSlide + 1} / {visibleMethods.length}
          </div>

          <button
            onClick={nextSlide}
            className="btn-secondary p-3 rounded-full"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      )}

      {/* Method Cards */}
      <div className="relative">
        {visibleMethods.map((method, index) => (
          <MethodCard
            key={method.id}
            {...method}
            isActive={index === currentSlide}
          />
        ))}
      </div>

      {/* Reset Button */}
      <div className="text-center">
        <button onClick={onReset} className="btn-primary px-8 py-3 text-lg">
          Solve Another Problem
        </button>
      </div>
    </div>
  );
};

export default OutputSection;
