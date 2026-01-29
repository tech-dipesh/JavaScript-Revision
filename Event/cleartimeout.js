// clearTimeout() for setTimeout() (single execution) and clearInterval() for setInterval() (repetitive execution).
// While some browser implementations might allow these functions to be used interchangeably, it is best practice and recommended to use the appropriate clearing function for the corresponding timer type to ensure consistent and predictable behavior across different environments.
    let myTimeout = setTimeout(() => {
        console.log("This will not be logged if cleared.");
    }, 2000);

    // To prevent the above function from running:
    clearTimeout(myTimeout);