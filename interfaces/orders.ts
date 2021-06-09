export interface IVenue {
    id: number;
    title: string;
}

export interface IGuest {
    id: number;
    firstName: string;
    lastName: string;
    phone: string;
}

export interface IOrdersListItem {
    id: number;
    title: string;
    creationDate: string;
    status: string;
    address: string;
    courierComment: string;
    venue: IVenue;
    guest: IGuest;
}

export interface IOrdersDateListItem {
    [key: string]: IOrdersListItem[];
}
//
export interface IOrdersGroupedListItem {
    title: string;
    data: IOrdersListItem[];
}

export interface IStatusList {
    [key: string]: IStatusListItem;
}

export interface IStatusListItem {
    name: string;
    color: string;
}
