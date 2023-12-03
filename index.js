// index.js

// setTimeout with Promise
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Example using async/await
async function runTimeoutExample() {
    console.log('Start');
    await delay(2000);
    console.log('After 2 seconds');
}

// Using clearTimeout with Promise
function delayedOperation() {
    console.log('Start');
    const timeoutId = setTimeout(() => {
        console.log('After 2 seconds');
    }, 2000);

    const clear = () => clearTimeout(timeoutId);

    return clear;
}

const clearTimeoutExample = delayedOperation();

// setInterval with Promise
function intervalOperation(ms) {
    return new Promise(resolve => {
        const intervalId = setInterval(() => {
            console.log(`Every ${ms / 1000} seconds`);
        }, ms);

        const clear = () => clearInterval(intervalId);

        resolve(clear);
    });
}

// Example using async/await
async function runIntervalExample() {
    console.log('Start');
    const clearFunction = await intervalOperation(3000);

    // Wait for 10 seconds and then clear the interval
    await delay(10000);

    // Clear the interval
    clearFunction();

    console.log('Interval cleared after 10 seconds');
}
