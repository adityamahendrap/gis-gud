import MapLayout from "@/Layouts/MapLayout";
import { Link, usePage } from "@inertiajs/react";
import AccordionHead from "@/Components/Menu/AccordionHead";
import { useEffect, useState, useForm } from "react";
import { BadgeMinus } from "lucide-react";
import { useGlobalState } from "../State/Global";

const AddButton = () => {
  return (
    <Link
      className="w-full  flex flex-col gap-2 py-2 rounded-lg shadow-md border border-gray-200 bg-gray-200 hover:bg-gray-100"
      href="/map/points/create"
    >
      <p className="font-medium text-sm text-center">Add Point</p>
    </Link>
  );
};

const PointCard = ({ point, clicked }) => {
  return (
    <div
      className="flex gap-1 justify-between items-center max-w-sm py-2 px-3 bg-white border border-gray-200 cursor-pointer rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      onClick={() => clicked(point.id)}
    >
      <div>
        <h5 className=" text-sm font-bold tracking-tight text-gray-900 dark:text-white">
          {!point.name ? "Untitled" : point.name}
        </h5>
        {/* <p className="font-thin text-sm line-clamp-1 text-gray-700 dark:text-gray-400">
          {point.description === "" ? "No description" : point.description}
        </p> */}
      </div>
      <Link
        href={`/map/points/${point.id}/delete`}
        onClick={(e) => e.stopPropagation()}
      >
        <BadgeMinus className="w-6 h-6 text-gray-300 hover:text-red-300" />
      </Link>
    </div>
  );
};

const Point = () => {
  const { points } = usePage().props;
  const { moveFocusPoint } = useGlobalState();

  const [showContent, setShowContent] = useState(true);

  return (
    <MapLayout points={points}>
      <div>
        <AccordionHead
          title="Points"
          onClick={() => setShowContent(!showContent)}
          isActive={showContent}
          color="bg-blue-400"
        />
        {showContent && (
          <div>
            <AddButton />

            <div className="mt-4 flex flex-col gap-2">
              {points.map((point) => (
                <PointCard
                  point={point}
                  clicked={(id) =>
                    moveFocusPoint(point.latitude, point.longitude)
                  }
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </MapLayout>
  );
};

export default Point;
