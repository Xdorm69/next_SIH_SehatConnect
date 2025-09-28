
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ListCard = ({ title }: { title: string }) => (
  <Card>
    <CardHeader>
      <CardTitle className="flex justify-between items-center">
        <div className="heading text-2xl font-normal">{title}</div>
        <Button variant={"outline"}>Download</Button>
      </CardTitle>
    </CardHeader>
    <CardContent className="flex flex-col gap-2">
      {["Check Up Result.pdf", "Medical Prescriptions.pdf"].map((file, i) => (
        <Button
          key={i}
          variant="ghost"
          className="justify-between flex items-center cursor-pointer text-blue-500"
        >
          <div>{file}</div>
          <div>
            {new Date().toLocaleDateString("en-US", {
              month: "short",
              day: "2-digit",
            })}
          </div>
        </Button>
      ))}
    </CardContent>
  </Card>
);

export default ListCard;