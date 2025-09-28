
import { Dispatch, SetStateAction } from "react";
import { toast } from "sonner";
import { useQueryClient } from "@tanstack/react-query";
import { seedMedicines } from "@/actions/products/seed/seedMedicines";

export function ProductFns({
  setLoading,
  vendorId,
}: {
  setLoading: Dispatch<SetStateAction<boolean>>;
  vendorId: string;
}) {
  const queryClient = useQueryClient();

  const seed = async () => {
    setLoading(true);
    try {
      await seedMedicines(vendorId); // await async call
      toast.success("Seed Operation Completed");
      queryClient.invalidateQueries({ queryKey: ["products"] });
    } catch (error) {
      toast.error("Seed failed");
    } finally {
      setLoading(false);
    }
  };

  return { seed };
}
