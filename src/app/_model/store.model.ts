export type StoreAddress = {
    street_1: string;
    street_2: string;
    city: string;
    state: string;
    postal_code: string;
    country: string;
};

export type Store = {
    store_id: string;
    name: string;
    phone_no: string;
    address: StoreAddress;
};

export type Schedule = {
    scheduleId: string;
    dayOfWeek: string;
    openTime: string;
    closeTime: string;
};