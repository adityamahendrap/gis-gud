import MapLayout from "@/Layouts/MapLayout";
import { usePage } from "@inertiajs/react";

const Index = () => {
  const { points } = usePage().props;

  return <MapLayout points={points} />;
};

export default Index;
