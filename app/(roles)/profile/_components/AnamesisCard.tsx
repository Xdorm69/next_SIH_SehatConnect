import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const AnamnesisCard = () => (
  <Card>
    <CardHeader>
      <CardTitle className="heading text-2xl font-normal">Anamnesis</CardTitle>
    </CardHeader>
    <CardContent>
      <div>
        <span className="text-muted-foreground">Allergies: </span>Nuts, pollen
      </div>
      <Separator className="my-1" />
      <div>
        <span className="text-muted-foreground">Chronic diseases: </span>Asthma
      </div>
      <Separator className="my-1" />
      <div>
        <span className="text-muted-foreground">Blood type: </span>AB+
      </div>
      <Separator className="my-1" />
      <div>
        <span className="text-muted-foreground">
          Past illnesses or injuries:{" "}
        </span>
        Corona virus
      </div>
    </CardContent>
  </Card>
);

export default AnamnesisCard;