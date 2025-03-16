import { DollarSign, Users, TrendingUp, ShoppingCart } from "lucide-react";
import { ReactNode } from "react";

interface SalesRep {
  name: string;
  avatar: string;
  rank: string;
  sales: string;
}

interface DashboardCard {
  title: string;
  content: string;
  stats: string;
  icon: ReactNode;
  link: string;
}

export const salesReps: SalesRep[] = [
  {
    name: "Nick Venti",
    avatar:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rank: "gold",
    sales: "$45,231",
  },
  {
    name: "Sarah Smith",
    avatar:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rank: "silver",
    sales: "$42,853",
  },
  {
    name: "Mike Johnson",
    avatar:
      "https://images.unsplash.com/photo-1583195763986-0231686dcd43?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rank: "bronze",
    sales: "$38,234",
  },
];

export const dashboardCards: DashboardCard[] = [
  {
    title: "Total Revenue",
    content: "Total revenue this month",
    stats: "$54,234",
    icon: <DollarSign className="h-6 w-6" />,
    link: "View Report",
  },
  {
    title: "Active Users",
    content: "Active users this week",
    stats: "2,345",
    icon: <Users className="h-6 w-6" />,
    link: "View Report",
  },
  {
    title: "Growth Rate",
    content: "Sales growth vs last month",
    stats: "+12.5%",
    icon: <TrendingUp className="h-6 w-6" />,
    link: "View Report",
  },
  {
    title: "Total Orders",
    content: "Orders this month",
    stats: "1,234",
    icon: <ShoppingCart className="h-6 w-6" />,
    link: "View Report",
  },
];
