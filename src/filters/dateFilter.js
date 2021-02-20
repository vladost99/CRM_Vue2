function dateFilter(value, format = 'date') {
    const options = {};

    if (format.includes('date')) {
        options.day = '';
        options.mounth = '';
        options.year = '';
    }

    return new Intl.DateTimeFormat('ru-RU', options).format(new Date(value));
}

export default dateFilter;