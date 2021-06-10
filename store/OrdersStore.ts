import { action, makeObservable, observable, runInAction } from 'mobx';

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
        let response = await fetch(`${config.api}/orders`, {
            method: 'GET',
        });
        const newList = await response.json();

        runInAction(() => {
            this.list = newList;
            this.groupedList = this.groupList(newList);
        });
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
