function debounce(func, delay) {
  let timeoutId;

  return function (...args) {
    const context = this;

    // Clear the previous timeout if there's any
    clearTimeout(timeoutId);

    // Set a new timeout
    timeoutId = setTimeout(() => {
      func.apply(context, args);
    }, delay);
  };
}
