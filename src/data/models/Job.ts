import { Component } from "react"

export default interface Job {
    name: string;
    icon: Component | null;
    category: JobCategory;
    colorClass?: string;
    hasPage?: boolean;
}

export enum JobCategory {
    SERVICE = 'Services',
    SOIREE = 'Soirée',
    PREMIERE = 'Secteur primaire',
    SHOP = 'Shop',
    RESTAU = 'Restaurant'
}