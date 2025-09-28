import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";


const InfoCard = () => (
  <Card className="h-full w-full">
    <CardHeader>
      <CardTitle className="heading text-2xl font-normal">
        General Information
      </CardTitle>
    </CardHeader>
    <CardContent>
      <div>
        <span className="text-muted-foreground">Date of Birth: </span>23.07.1994
      </div>
      <Separator className="my-1" />
      <div>
        <span className="text-muted-foreground">Address: </span>
        Lviv, Chornovola street, 67
      </div>
      <Separator className="my-1" />
      <div>
        <span className="text-muted-foreground">Registration Date: </span>
        Thursday, May 25
      </div>
    </CardContent>
  </Card>
);

export default InfoCard;