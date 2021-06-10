export const getDateWithMonthName = (date: Date): string => {
    let title: string = '';
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
    title = `${date.getDate()} ${monthNames[date.getMonth()]} ${date.getFullYear()}`;
    return title;
};

export const getTime = (date: Date): string => {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    return `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}`;
};
