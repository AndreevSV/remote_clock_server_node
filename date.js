const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
};

const today = new Date();

export const date = today.toLocaleDateString(undefined, options);