const StepperHandling = ({ handleClick, currentStep, steps }) => {
  return (
    <div className="container flex justify-around mt-4 mb-8">
      {/* Previous Button */}

      <button 
      onClick={()=>handleClick()}
      className={`bg-white text-slate-400 uppercase py-2 px-4 cursor-pointer border-2 border-slate-300 rounded-xl font-semibold hover:bg-slate-700 hover:text-white transition duration-200 ease-in-out ${
      currentStep == 1 ? "opacity-50 cursor-not-allowed" : ""} `}>
        Previous
      </button>

      {/* Next Button */}
      <button 
      onClick={()=>handleClick("next")}
      className="bg-purple-500 text-white uppercase py-2 px-4 cursor-pointer rounded-xl font-semibold hover:bg-slate-700 hover:text-white transition duration-200 ease-in-out">
        {currentStep == steps.length - 1 ? "Confirm" : "Next"}
      </button>
    </div>
  );
};

export default StepperHandling;