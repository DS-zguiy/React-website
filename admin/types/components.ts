export interface Item {
    title: string;
    describe: string;
    thum: string;
    url?: string;
    [key:string]:any;
}

export interface Category {
    title: string;
    children: Item[];
    [key:string]:any;
}

export interface Route {
    title: string;
    icon: string;
    path: string;
    children?: Route[]


}