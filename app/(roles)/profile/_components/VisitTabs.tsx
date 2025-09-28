import { Card } from "@/components/ui/card";
import { tabDataType } from "../page";
import { cn } from "@/lib/utils";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

function VisitTabs({
  futureData,
  pastVisitData,
  plannedTreatmentData,
}: {
  futureData: tabDataType[];
  pastVisitData: tabDataType[];
  plannedTreatmentData: tabDataType[];
}) {
  const badgeColor = (status: "scheduled" | "completed" | "planned") => {
    switch (status) {
      case "scheduled":
        return "bg-yellow-500 text-white";
      case "completed":
        return "bg-green-500 text-white";
      case "planned":
        return "bg-blue-500 text-white";
    }
  };
  const renderCard = (item: tabDataType) => (
    <Card key={item.date.toString()} className="p-4 overflow-auto">
      <p className="heading text-xl font-normal">
        {item.date.toLocaleDateString("en-US", {
          month: "short",
          day: "2-digit",
          year: "numeric",
        })}
      </p>
      <div>
        <span className="text-muted-foreground">Service:</span> {item.service}
      </div>
      <div>
        <span className="text-muted-foreground">Doctor:</span> {item.doctor}
      </div>
      <div className="flex items-center gap-1">
        <span className="text-muted-foreground">Status:</span>{" "}
        <Badge variant="default" className={cn(badgeColor(item.status))}>
          {item.status}
        </Badge>
      </div>
    </Card>
  );
  return (
    <Card className="p-6 overflow-auto h-[50vh]">
      <Tabs defaultValue="future">
        <TabsList className="mb-6 flex flex-wrap">
          <TabsTrigger value="future">
            Future Visits ({futureData.length})
          </TabsTrigger>
          <TabsTrigger value="past">
            Past Visits ({pastVisitData.length})
          </TabsTrigger>
          <TabsTrigger value="planned">
            Planned Treatments ({plannedTreatmentData.length})
          </TabsTrigger>
        </TabsList>
        <TabsContent value="future">
          <div className="flex flex-col gap-4">
            {futureData.map(renderCard)}
          </div>
        </TabsContent>
        <TabsContent value="past">
          <div className="flex flex-col gap-4">
            {pastVisitData.map(renderCard)}
          </div>
        </TabsContent>
        <TabsContent value="planned">
          <div className="flex flex-col gap-4">
            {plannedTreatmentData.map(renderCard)}
          </div>
        </TabsContent>
      </Tabs>
    </Card>
  );
}

export default VisitTabs;