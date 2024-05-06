import { ReservationSkeleton, ReservationsTableSkeleton } from "@/app/ui/skeletons";
 
export default function Loading() {
  return (
    <>
      <ReservationSkeleton />
      <ReservationsTableSkeleton />
    </>
  );
}