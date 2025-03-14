// Delayed greeting function with a 2-second timeout
function delayedGreeting(name) {
    setTimeout(() => {
      console.log(`Hello, ${name}!`);
    }, 2000);
}

// Example usage
delayedGreeting("Alice");
