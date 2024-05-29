import Stepper from "./Components/Stepper";
import StepperHandling from "./Components/StepperHandling";
import { stepperContext } from "./Context/stepperContext";

import Account from "./Components/steps/Account";
import Details from "./Components/steps/Details";
import Complete from "./Components/steps/Complete";
import { useState } from "react";

function App() {

const [currentStep, setCurrentStep] = useState(1);
const [userData, setUserData] = useState('');
const [finalData, setFinalData] =useState('');

const steps = [ "Account Information", "Personal Details", "Complete"];

const stepsDisplay = (step) => {
switch(step) {
case 1:
return <Account />
case 2:
return <Details />
case 3:
return <Complete />
default:
return null;
}
};

const handleClick = (direction) => {
//
let newStep = currentStep;

direction == "next" ? newStep++ : newStep--;

newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
}

  return (
      <div className="md:w-1/2 mx-auto shadow-xl rounded-2xl pb-2 bg-white">

      <div className="container horizontal mt-5">
        <Stepper 
        steps={steps}
        currentStep={currentStep}/>

        <div className="my-10 p-10">
        <stepperContext.Provider value={{
        userData,
        setUserData,
        finalData,
        setFinalData
        }}>
          {stepsDisplay(currentStep)}
        </stepperContext.Provider>      
        </div>
      
      </div>

      {/* {Controlling Navigations} */}
      <StepperHandling 
      handleClick={handleClick}
      currentStep={currentStep}
      steps={steps}
      />
    </div>
  );
}

export default App;