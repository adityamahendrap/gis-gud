import { useForm } from "@inertiajs/react";
import MapLayout from "@/Layouts/MapLayout";
import { Link, usePage, router } from "@inertiajs/react";
import AccordionHead from "@/Components/Menu/AccordionHead";
import { useState } from "react";
import { useGlobalState } from "@/Pages/V2/State/Global";

const Input = ({ label, type, value, onChange }) => {
  return (
    <div className="mb-3">
      <label className="block mb-0.5 text-sm font-medium text-gray-900 dark:text-white">
        {label}
      </label>
      <input
        type={type}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder=""
        required
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

const Point = () => {
  const { points } = usePage().props;
  const { tempLongitude, tempLatitude, setTempLongitude, setTempLatitude } =
    useGlobalState();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [showContent, setShowContent] = useState(true);

  const savePoint = () => {
    router.post("/map/points", {
      longitude: tempLongitude,
      latitude: tempLatitude,
      title,
      description,
    });
  };

  return (
    <MapLayout points={points} state="add_point">
      <div>
        <AccordionHead
          title="Add Point"
          onClick={() => setShowContent(!showContent)}
          isActive={showContent}
          color="bg-blue-400"
        />
        {showContent && (
          <div>
            <div className="mt-3">
              <Input
                label="Longitude"
                type="number"
                value={tempLongitude}
                onChange={(e) => setTempLongitude(e.target.value)}
              />
              <Input
                label="Latitude"
                type="number"
                value={tempLatitude}
                onChange={(e) => setTempLatitude(e.target.value)}
              />
              <Input
                label="Title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <div className="mb-3">
                <label
                  for="description"
                  className="block mb-0.5 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Description
                </label>
                <textarea
                  type="text"
                  id="description"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                  required
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <Link
                type="button"
                href="/map/points"
                class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
              >
                Back
              </Link>

              <button
                type="button"
                className="mt-1 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                onClick={savePoint}
              >
                Save
              </button>
            </div>
          </div>
        )}
      </div>
    </MapLayout>
  );
};

export default Point;
