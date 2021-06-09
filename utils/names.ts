export const getDateWithMonthName = (date: Date): string => {
    let title: string = '';

    let today = new Date();
    let yesterday = new Date(new Date().setDate(new Date().getDate() - 1));

    const monthNames = [
        'января',
        'февраля',
        'марта',
        'апреля',
        'мая',
        'июня',
        'июля',
        'августа',
        'сентября',
        'октября',
        'ноября',
        'декабря',
    ];

    if (date.toDateString() === today.toDateString()) {
        title = 'Сегодня';
    } else if (date.toDateString() === yesterday.toDateString()) {
        title = 'Вчера';
    } else {
        title = `${date.getDate()} ${monthNames[date.getMonth()]} ${date.getFullYear()}`;
    }

    return title;
};
