import { action, observable } from 'mobx';

import config from '../api';
import { IOrdersListItem } from '../interfaces/orders';

class OrdersStore {
    @observable
    list: IOrdersListItem[] = [];

    @action.bound
    async init() {
        let response = await fetch(`${config.api}/orders`, {
            method: 'GET',
        });
        this.list = await response.json();
    }
}

const ordersStore = new OrdersStore();

export default ordersStore;
