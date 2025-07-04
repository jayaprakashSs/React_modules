import React from "react";
import { Check, User, Truck, CreditCard, CheckCircle2 } from "lucide-react";

const icons = {
  Login: <User className="w-5 h-5" />,
  Shipping: <Truck className="w-5 h-5" />,
  Payment: <CreditCard className="w-5 h-5" />,
  Confirm: <CheckCircle2 className="w-5 h-5" />,
};

const Stepper = ({ steps, currentStep }) => {
  return (
    <div className="flex justify-between items-center w-full max-w-4xl mx-auto">
      {steps.map((step, index) => {
        const stepNumber = index + 1;
        const isActive = currentStep === stepNumber;
        const isCompleted = currentStep > stepNumber;

        return (
          <div key={index} className="flex-1 relative flex flex-col items-center">
            {/* Line */}
            {index > 0 && (
              <div className="absolute -left-1/2 top-5 w-full h-1 z-0">
                <div
                  className={`h-full transition-all rounded-full ${
                    isCompleted
                      ? "bg-blue-600"
                      : "bg-gray-300 dark:bg-gray-600"
                  }`}
                ></div>
              </div>
            )}

            {/* Step Circle */}
            <div
              className={`relative z-10 w-12 h-12 flex items-center justify-center rounded-full border-2 transition-all duration-300
              ${
                isCompleted
                  ? "bg-blue-600 text-white border-blue-600"
                  : isActive
                  ? "bg-white dark:bg-black text-blue-600 border-blue-600"
                  : "bg-white dark:bg-gray-900 text-gray-400 border-gray-300 dark:border-gray-600"
              }`}
            >
              {isCompleted ? <Check className="w-5 h-5" /> : icons[step]}
            </div>

            {/* Label */}
            <div className="mt-2 text-xs text-center text-gray-700 dark:text-gray-300 w-24">
              {step}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Stepper;
