import Card from "@/components/card";
import ChartWrapper from "@/components/chart-wrapper";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { dashboardCards, salesReps } from "@/config/dashboard-data";
import { SalesChart } from "@/components/sales-chart";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 p-4 pt-0">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem className="hidden md:block">
            <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator className="hidden md:block" />
          <BreadcrumbItem>
            <BreadcrumbPage>Overview</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 pt-10">
        {dashboardCards.map((card) => (
          <Card
            key={card.title}
            cardTitle={card.title}
            cardContent={card.content}
            cardStats={card.stats}
            cardIcon={card.icon}
            cardLink={card.link}
          />
        ))}
      </div>

      <div className="flex flex-1 flex-col gap-4 p-4 pt-10">
        <h3 className="text-2xl font-bold">Top Sales Representatives</h3>
        <Table>
          <TableCaption>
            A list of top performing sales representatives
          </TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Rank</TableHead>
              <TableHead className="text-right">Sales</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {salesReps.map((rep) => (
              <TableRow key={rep.name}>
                <TableCell className="flex items-center gap-3 font-medium">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={rep.avatar} alt={rep.name} />
                  </Avatar>
                  {rep.name}
                </TableCell>
                <TableCell>{rep.rank}</TableCell>
                <TableCell className="text-right">{rep.sales}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-10">
        <ChartWrapper />

        <SalesChart />
      </div>
    </div>
  );
}
