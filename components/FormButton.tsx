import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";

const FormButton = ({ loading, title }: { loading: boolean; title: string }) => {
  return (
    <Button type="submit" className="w-full" disabled={loading}>
      {loading ? <Loader2 className="size-5 animate-spin" /> : title}
    </Button>
  );
};

export default FormButton;
