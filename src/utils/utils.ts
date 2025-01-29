import { format } from "date-fns";
import { Home, TimerIcon } from "lucide-react";


export const appLinks = [
    {
        title: "Home",
        url: "/",
        icon: Home 
    },
    {
        title: "Compaigns",
        url: "/",
        icon: TimerIcon
    }
]

export const isClient = typeof window !== 'undefined';

export const dateFormatter = (date: string) => {
    return format(new Date(date), 'dd/MM/yyyy');
}