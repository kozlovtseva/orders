import { action, computed, makeObservable, observable } from 'mobx';

import config from '../api';
import { IOrdersDateListItem, IOrdersGroupedListItem, IOrdersListItem } from '../interfaces/orders';
import { getDateWithMonthName } from '../utils/date';

export interface IStore {
    groupedList: IOrdersGroupedListItem[];
    list: IOrdersListItem[];
}

class OrdersStore {
    constructor() {
        makeObservable(this, {
            list: observable,
            groupedList: observable,
            init: action,
        });
    }

    list: IOrdersListItem[] = [];
    groupedList: IOrdersGroupedListItem[] = [];

    async init() {
        // let response = await fetch(`${config.api}/orders`, {
        //     method: 'GET',
        // });
        // this.list = await response.json();

        let newList = [
            {
                id: 47743,
                title: '# 47743',
                creationDate: '2021-06-09T16:04:07.390Z',
                status: 'SENT_TO_KITCHEN',
                address: 'ул. Зеленая, д. 19, кв. 40',
                courierComment:
                    'Aut eum nulla et doloremque itaque veniam aliquam non occaecati. Omnis dignissimos alias quis aut in aut recusandae harum. In nam quia vero nesciunt totam assumenda.',
                venue: {
                    id: 41,
                    title: 'Кафе «Streamlined scalable database»',
                },
                guest: {
                    id: 51,
                    firstName: 'Анжелика',
                    lastName: 'Горшкова',
                    phone: '(955)180-52-59',
                },
            },
            {
                id: 47744,
                title: '# 47744',
                creationDate: '2021-06-08T16:04:07.390Z',
                status: 'NEW',
                address: 'ул. Зеленая, д. 19, кв. 40',
                courierComment:
                    'Aut eum nulla et doloremque itaque veniam aliquam non occaecati. Omnis dignissimos alias quis aut in aut recusandae harum. In nam quia vero nesciunt totam assumenda.',
                venue: {
                    id: 41,
                    title: 'Кафе «Streamlined scalable database»',
                },
                guest: {
                    id: 51,
                    firstName: 'Анжелика',
                    lastName: 'Горшкова',
                    phone: '(955)180-52-59',
                },
            },
            {
                id: 47745,
                title: '# 47745',
                creationDate: '2021-06-06T16:04:07.390Z',
                status: 'CANCELED',
                address: 'ул. Зеленая, д. 19, кв. 40',
                courierComment:
                    'Aut eum nulla et doloremque itaque veniam aliquam non occaecati. Omnis dignissimos alias quis aut in aut recusandae harum. In nam quia vero nesciunt totam assumenda.',
                venue: {
                    id: 41,
                    title: 'Кафе «Streamlined scalable database»',
                },
                guest: {
                    id: 51,
                    firstName: 'Анжелика',
                    lastName: 'Горшкова',
                    phone: '(955)180-52-59',
                },
            },
            {
                id: 47746,
                title: '# 47746',
                creationDate: '2021-06-06T16:04:07.390Z',
                status: 'DONE',
                address: 'ул. Зеленая, д. 19, кв. 40',
                courierComment:
                    'Aut eum nulla et doloremque itaque veniam aliquam non occaecati. Omnis dignissimos alias quis aut in aut recusandae harum. In nam quia vero nesciunt totam assumenda.',
                venue: {
                    id: 41,
                    title: 'Кафе «Streamlined scalable database»',
                },
                guest: {
                    id: 51,
                    firstName: 'Анжелика',
                    lastName: 'Горшкова',
                    phone: '(955)180-52-59',
                },
            },
            {
                id: 47756,
                title: '# 47756',
                creationDate: '2021-06-06T16:04:07.390Z',
                status: 'DONE',
                address: 'ул. Зеленая, д. 19, кв. 40',
                courierComment:
                    'Aut eum nulla et doloremque itaque veniam aliquam non occaecati. Omnis dignissimos alias quis aut in aut recusandae harum. In nam quia vero nesciunt totam assumenda.',
                venue: {
                    id: 41,
                    title: 'Кафе «Streamlined scalable database»',
                },
                guest: {
                    id: 51,
                    firstName: 'Анжелика',
                    lastName: 'Горшкова',
                    phone: '(955)180-52-59',
                },
            },
            {
                id: 47766,
                title: '# 47766',
                creationDate: '2021-06-06T16:04:07.390Z',
                status: 'DONE',
                address: 'ул. Зеленая, д. 19, кв. 40',
                courierComment:
                    'Aut eum nulla et doloremque itaque veniam aliquam non occaecati. Omnis dignissimos alias quis aut in aut recusandae harum. In nam quia vero nesciunt totam assumenda.',
                venue: {
                    id: 41,
                    title: 'Кафе «Streamlined scalable database»',
                },
                guest: {
                    id: 51,
                    firstName: 'Анжелика',
                    lastName: 'Горшкова',
                    phone: '(955)180-52-59',
                },
            },
        ];
        this.list = newList;
        this.groupedList = this.groupList(newList);
    }

    groupList = (list: any): IOrdersGroupedListItem[] => {
        const groups = list.reduce((groups: IOrdersDateListItem, item: IOrdersListItem) => {
            const date = item.creationDate.split('T')[0];
            if (!groups[date]) {
                groups[date] = [];
            }
            groups[date].push(item);
            return groups;
        }, {});

        const groupedList = Object.keys(groups).map((date: string) => {
            return {
                title: this.getTitle(new Date(date)),
                data: groups[date],
            };
        });

        return groupedList;
    };
    getTitle = (date: Date): string => {
        let title = '';
        let today = new Date();
        let yesterday = new Date(new Date().setDate(new Date().getDate() - 1));

        if (date.toDateString() === today.toDateString()) {
            title = 'Сегодня';
        } else if (date.toDateString() === yesterday.toDateString()) {
            title = 'Вчера';
        } else {
            title = getDateWithMonthName(date);
        }

        return title;
    };
}

const ordersStore = new OrdersStore();

export default ordersStore;
