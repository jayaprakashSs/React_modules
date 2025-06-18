import React, { useState } from "react";

const MobileOtpLogin = () => {
  const [mobile, setMobile] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");

  const handleSendOtp = () => {
    if (mobile.length === 10) {
      setOtpSent(true);
      console.log("Sending OTP to:", mobile);
      // Call your API to send OTP here
    } else {
      alert("Please enter a valid 10-digit mobile number");
    }
  };

  const handleVerifyOtp = () => {
    console.log("Verifying OTP:", otp);
    // Call your API to verify OTP here
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center px-4">
      <div className="max-w-sm w-full bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md space-y-4">
        <h2 className="text-xl font-bold text-gray-800 dark:text-white text-center">
          Login with OTP
        </h2>

        <div className="space-y-3">
          <label className="block text-gray-700 dark:text-gray-300 text-sm">
            Mobile Number
          </label>
          <input
            type="tel"
            maxLength={10}
            value={mobile}
            onChange={(e) => setMobile(e.target.value.replace(/\D/, ""))}
            placeholder="Enter 10-digit mobile number"
            className="w-full px-4 py-2 rounded border dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={otpSent}
          />
        </div>

        {otpSent && (
          <div className="space-y-3">
            <label className="block text-gray-700 dark:text-gray-300 text-sm">
              Enter OTP
            </label>
            <input
              type="text"
              maxLength={6}
              value={otp}
              onChange={(e) => setOtp(e.target.value.replace(/\D/, ""))}
              placeholder="Enter OTP"
              className="w-full px-4 py-2 rounded border dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        )}

        {!otpSent ? (
          <button
            onClick={handleSendOtp}
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Send OTP
          </button>
        ) : (
          <button
            onClick={handleVerifyOtp}
            className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
          >
            Verify OTP
          </button>
        )}
      </div>
    </div>
  );
};

export default MobileOtpLogin;
