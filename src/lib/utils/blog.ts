export function formatDate(date: string, includeTime = false) {
    const options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    };

    if (includeTime) {
        options.hour = 'numeric';
        options.minute = 'numeric';
    }

    return new Date(date).toLocaleDateString('en-US', options);
}
