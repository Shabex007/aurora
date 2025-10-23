// Knapsack algorithm implementations
export const bruteForceKnapsack = (items, capacity) => {
  const n = items.length;
  let maxValue = 0;
  let bestCombination = [];

  const helper = (i, currentWeight, currentValue, currentItems) => {
    if (i === n) {
      if (currentValue > maxValue && currentWeight <= capacity) {
        maxValue = currentValue;
        bestCombination = [...currentItems];
      }
      return;
    }

    // Include current item
    if (currentWeight + items[i].weight <= capacity) {
      helper(
        i + 1,
        currentWeight + items[i].weight,
        currentValue + items[i].value,
        [...currentItems, items[i]]
      );
    }

    // Exclude current item
    helper(i + 1, currentWeight, currentValue, currentItems);
  };

  const startTime = performance.now();
  helper(0, 0, 0, []);
  const endTime = performance.now();

  return {
    maxValue,
    items: bestCombination,
    time: endTime - startTime,
    memory: calculateMemoryUsage({ maxValue, items: bestCombination }),
  };
};

export const dynamicProgrammingKnapsack = (items, capacity) => {
  const startTime = performance.now();
  const n = items.length;
  const dp = Array.from({ length: n + 1 }, () => Array(capacity + 1).fill(0));

  for (let i = 1; i <= n; i++) {
    for (let w = 0; w <= capacity; w++) {
      if (items[i - 1].weight <= w) {
        dp[i][w] = Math.max(
          dp[i - 1][w],
          dp[i - 1][w - items[i - 1].weight] + items[i - 1].value
        );
      } else {
        dp[i][w] = dp[i - 1][w];
      }
    }
  }

  let w = capacity;
  const selectedItems = [];
  for (let i = n; i > 0 && w > 0; i--) {
    if (dp[i][w] !== dp[i - 1][w]) {
      selectedItems.push(items[i - 1]);
      w -= items[i - 1].weight;
    }
  }

  const endTime = performance.now();

  return {
    maxValue: dp[n][capacity],
    items: selectedItems,
    time: endTime - startTime,
    memory: calculateMemoryUsage({
      maxValue: dp[n][capacity],
      items: selectedItems,
    }),
  };
};

export const memoizationKnapsack = (items, capacity) => {
  const startTime = performance.now();
  const n = items.length;
  const memo = Array.from({ length: n }, () => Array(capacity + 1).fill(null));

  const helper = (i, w) => {
    if (i < 0 || w <= 0) return { value: 0, items: [] };
    if (memo[i][w] !== null) return memo[i][w];

    const exclude = helper(i - 1, w);

    if (items[i].weight > w) {
      memo[i][w] = exclude;
      return exclude;
    }

    const include = helper(i - 1, w - items[i].weight);
    include.value += items[i].value;
    include.items = [...include.items, items[i]];

    if (include.value > exclude.value) {
      memo[i][w] = include;
    } else {
      memo[i][w] = exclude;
    }

    return memo[i][w];
  };

  const result = helper(n - 1, capacity);
  const endTime = performance.now();

  return {
    maxValue: result.value,
    items: result.items,
    time: endTime - startTime,
    memory: calculateMemoryUsage(result),
  };
};

const calculateMemoryUsage = (data) => {
  const bytes = new Blob([JSON.stringify(data)]).size;
  return (bytes / 1024).toFixed(2);
};
