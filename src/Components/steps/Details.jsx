import { useContext } from "react";
import { stepperContext } from "../../Context/stepperContext";

export default function Details() {
const {userData, setUserData } = useContext(stepperContext);

const handleChange = (e) => {
  const  { name, value } = e.target;
  setUserData({ ...userData, [name]: value });
};

  return (
    <div className="flex flex-col">
      <div className="w-full mx-2 flex-1">
      <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
      {" "}
      Full Name
      </div>
      <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
      <input
      onChange={handleChange}
      value={userData["FullName"] || "" }
      placeholder="Full Name"
      type="text"
      className="p-1 px-2 appearance-none outline-none w-full text-gray-800" required
      />
      </div>
      </div>

    <div className="w-full mx-2 flex-1">
      <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
      {" "}
      Email Id
      </div>
      <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
      <input
      onChange={handleChange}
      value={userData["email"] || "" }
      placeholder="Email Id"
      type="email"
      className="p-1 px-2 appearance-none outline-none w-full text-gray-800" required
      />
      </div>
    </div>

    <div className="w-full mx-2 flex-1">
      <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
      {" "}
      Address
      </div>
      <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
      <input
      onChange={handleChange}
      value={userData["Address"] || "" }
      placeholder="Full Address"
      type="text"
      className="p-1 px-2 appearance-none outline-none w-full text-gray-800" required
      />
      </div>
      </div>

    <div className="w-full mx-2 flex-1">
      <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
      {" "}
      Contact
      </div>
      <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
      <input
      onChange={handleChange}
      value={userData["Contact"] || "" }
      placeholder="Contact No"
      type="tel"
      className="p-1 px-2 appearance-none outline-none w-full text-gray-800" required
      />
      </div>
      </div>
    </div>
  )
}