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

const PointCard = ({ point, clicked }) => {
  return (
    <div
      className="block max-w-sm py-2 px-3 bg-white border border-gray-200 cursor-pointer rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      onClick={() => clicked(point.id)}
    >
      <h5 className=" text-sm font-bold tracking-tight text-gray-900 dark:text-white">
        {point.title === "" ? "Untitled" : point.title}
      </h5>
      <p className="font-thin text-sm line-clamp-1 text-gray-700 dark:text-gray-400">
        {point.description === "" ? "No description" : point.description}
      </p>
    </div>
  );
};

const Point = () => {
  const {
    points,
    addPoint,
    deleteLastPoint,
    updatePoint,
    latitude,
    updateLatitude,
    longitude,
    updateLongitude,
    allowDrag,
    resetAllowDrag,
    moveFocusPoint,
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
      resetAllowDrag();
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
    allowDrag(generatedId);
  };

  const savePoint = () => {
    setShowAddForm(false);
    resetAllowDrag();
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
              <Input
                label="Longitude"
                type="number"
                value={longitude}
                onChange={(e) => updateLongitude(e.target.value)}
              />
              <Input
                label="Latitude"
                type="number"
                value={latitude}
                onChange={(e) => updateLatitude(e.target.value)}
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
              <button
                type="button"
                className="mt-1 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                onClick={savePoint}
              >
                Save
              </button>
            </div>
          )}

          <div className="mt-4 flex flex-col gap-2">
            {points.map((point) => (
              <PointCard point={point}
                clicked={(pointId) => moveFocusPoint(pointId)}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Point;
