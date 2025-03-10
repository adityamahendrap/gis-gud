import AccordionHead from "@/Components/Menu/AccordionHead";
import { useEffect, useState } from "react";
import { useGlobalState } from "@/State/Global";

const getRandomNumber = () => {
  return Math.floor(Math.random() * (10000 - 1 + 1)) + 1;
};

const AddButton = ({ isActive, setIsActive }) => {
  return (
    <button
      className={`w-full  flex flex-col gap-2 py-2 rounded-lg shadow-md  ${
        isActive
          ? "border-2 border-blue-500 bg-blue-100"
          : "border border-gray-200 bg-gray-200 hover:bg-gray-100"
      }`}
      onClick={setIsActive}
    >
      <p className="font-medium text-sm text-center">Add Point</p>
    </button>
  );
};

const Point = () => {
  const {
    addPoint,
    deleteLastPoint,
    updatePoint,
    latitude,
    updateLatitude,
    longitude,
    updateLongitude,
  } = useGlobalState();

  const [showContent, setShowContent] = useState(true);
  const [showAddForm, setShowAddForm] = useState(false);

  const [id, setId] = useState(null);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const clearForm = () => {
    updateLongitude(0);
    updateLatitude(0);
    setTitle("");
    setDescription("");
  };

  const toggleShowAddForm = () => {
    setShowAddForm(!showAddForm);
    clearForm();

    if (!showAddForm) {
      console.log("initPoint");
      initPoint();
    } else {
      console.log("deleteLastPoint");
      deleteLastPoint();
    }
  };

  const initPoint = () => {
    const generatedId = getRandomNumber();
    setId(generatedId);
    updateLongitude(0);
    updateLatitude(0);
    setTitle("");
    setDescription("");
    addPoint({
      id: generatedId,
      lat: latitude,
      lng: longitude,
      title: title,
      description: description,
    });
  };

  useEffect(() => {
    if (id) {
      updatePoint({
        id: id,
        lat: latitude,
        lng: longitude,
        title: title,
        description: description,
      });
    }
  }, [longitude, latitude, title, description]);

  return (
    <div>
      <AccordionHead
        title="Point"
        onClick={() => setShowContent(!showContent)}
        isActive={showContent}
        color="bg-blue-400"
      />
      {showContent && (
        <div>
          <AddButton isActive={showAddForm} setIsActive={toggleShowAddForm} />

          {showAddForm && (
            <div className="mt-3">
              <div class="mb-3">
                <label
                  for="longitude"
                  class="block mb-0.5 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Longitude
                </label>
                <input
                  type="number"
                  id="longitude"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                  required
                  value={longitude}
                  onChange={(e) => updateLongitude(e.target.value)}
                />
              </div>
              <div class="mb-3">
                <label
                  for="latitude"
                  class="block mb-0.5 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Latitude
                </label>
                <input
                  type="number"
                  id="latitude"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                  required
                  value={latitude}
                  onChange={(e) => updateLatitude(e.target.value)}
                />
              </div>
              <div class="mb-3">
                <label
                  for="title"
                  class="block mb-0.5 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div class="mb-3">
                <label
                  for="description"
                  class="block mb-0.5 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Description
                </label>
                <textarea
                  type="text"
                  id="description"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                  required
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <button
                type="button"
                class="mt-1 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                Save
              </button>{" "}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Point;
