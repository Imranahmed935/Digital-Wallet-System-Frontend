import type { ComponentType } from "react";

export interface IPagination {
  total: number;
  page: number;
  limit: number;
  pages: number;
}

export interface IResponse<T> {
  statusCode: number;
  success: boolean;
  message: string;
  data: T;         
  pagination?: IPagination; 
}


export interface ISidebarItem {
  title: string;
  items: {
    title: string;
    url: string;
    component: ComponentType;
  }[];
}
export type TRole = "AGENT" | "ADMIN" | "USER";
