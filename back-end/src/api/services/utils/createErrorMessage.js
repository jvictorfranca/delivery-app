const createErrorMessage = (message, status = 400) => ({ answer: { message }, status });

module.exports = createErrorMessage;