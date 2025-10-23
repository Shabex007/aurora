import { useState, useCallback } from "react";
import {
  bruteForceKnapsack,
  dynamicProgrammingKnapsack,
  memoizationKnapsack,
} from "../utils/algorithms";

export const useKnapsack = () => {
  const [capacity, setCapacity] = useState("");
  const [items, setItems] = useState([
    { id: 1, name: "", value: "", weight: "" },
    { id: 2, name: "", value: "", weight: "" },
    { id: 3, name: "", value: "", weight: "" },
  ]);
  const [selectedMethod, setSelectedMethod] = useState("all");
  const [results, setResults] = useState(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const addItem = useCallback(() => {
    setItems((prev) => [
      ...prev,
      {
        id: Date.now(),
        name: "",
        value: "",
        weight: "",
      },
    ]);
  }, []);

  const updateItem = useCallback((id, field, value) => {
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, [field]: value } : item))
    );
  }, []);

  const removeItem = useCallback(
    (id) => {
      if (items.length > 1) {
        setItems((prev) => prev.filter((item) => item.id !== id));
      }
    },
    [items.length]
  );

  const calculate = useCallback(() => {
    if (
      !capacity ||
      items.some((item) => !item.name || !item.value || !item.weight)
    ) {
      alert("Please fill in all fields");
      return;
    }

    setIsCalculating(true);

    setTimeout(() => {
      const validItems = items.map((item) => ({
        name: item.name,
        value: parseInt(item.value),
        weight: parseInt(item.weight),
      }));

      const cap = parseInt(capacity);
      const newResults = {};

      if (selectedMethod === "all" || selectedMethod === "bruteforce") {
        newResults.bruteforce = bruteForceKnapsack(validItems, cap);
      }

      if (selectedMethod === "all" || selectedMethod === "dynamic") {
        newResults.dynamic = dynamicProgrammingKnapsack(validItems, cap);
      }

      if (selectedMethod === "all" || selectedMethod === "memoryfunction") {
        newResults.memoryfunction = memoizationKnapsack(validItems, cap);
      }

      setResults(newResults);
      setIsCalculating(false);
    }, 100);
  }, [capacity, items, selectedMethod]);

  const reset = useCallback(() => {
    setCapacity("");
    setItems([
      { id: 1, name: "", value: "", weight: "" },
      { id: 2, name: "", value: "", weight: "" },
      { id: 3, name: "", value: "", weight: "" },
    ]);
    setResults(null);
    setSelectedMethod("all");
  }, []);

  return {
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
  };
};
