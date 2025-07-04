import React, { useState } from "react";
import Stepper from "./Stepper";

const StepperPage = () => {
  const [step, setStep] = useState(2);

  const steps = ["Login", "Shipping", "Payment", "Confirm"];

  return (
    <div className="bg-gray-100 dark:bg-black p-8 space-y-6">
      <h1 className="text-2xl font-bold text-center text-gray-800 dark:text-white">
        Stepper with Icons
      </h1>

      <Stepper steps={steps} currentStep={step} />

      <div className="flex justify-center gap-4 mt-10">
        <button
          onClick={() => setStep((prev) => Math.max(prev - 1, 1))}
          className="px-4 py-2 bg-gray-300 dark:bg-gray-700 text-black dark:text-white rounded"
        >
          Prev
        </button>
        <button
          onClick={() => setStep((prev) => Math.min(prev + 1, steps.length))}
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default StepperPage;
