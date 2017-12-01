try {
    const result = errorsOnThree(3);
} catch (err) {
    if (err instanceof ApplicationError) {
        console.log('Error caught, no action taken');
    }

    throw err;
}
