export const validateTransaction = (transaction) => {
    const errors = {};

    if (!transaction.date) {
        errors.date = 'Date is required';
    }

    if (!transaction.description) {
        errors.description = 'Description is required';
    }

    if (!transaction.amount || isNaN(transaction.amount)) {
        errors.amount = 'Amount must be a valid number';
    }

    if (!transaction.category) {
        errors.category = 'Category is required';
    }

    return Object.keys(errors).length === 0 ? null : errors;
};

