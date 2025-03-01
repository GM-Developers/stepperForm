import { useContext } from "react";
import { stepperContext } from "../../Context/stepperContext";


export default function Account() {
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
      Username
      </div>
      <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
      <input
      onChange={handleChange}
      value={userData["username"] || "" }
      placeholder="Username"
      className="p-1 px-2 appearance-none outline-none w-full text-gray-800" required
      />
      </div>
      </div>

    <div className="w-full mx-2 flex-1">
      <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
      {" "}
      Password
      </div>
      <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
      <input
      onChange={handleChange}
      value={userData["password"] || "" }
      placeholder="Password"
      type="password"
      className="p-1 px-2 appearance-none outline-none w-full text-gray-800" required
      />
      </div>
      </div>
    </div>
  );
}