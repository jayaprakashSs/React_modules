"use client";
import * as React from "react";

function LogInOTPPage() {
  return (
    <div className="overflow-hidden bg-white">
      <div className="flex relative flex-col w-full min-h-[800px] max-md:max-w-full">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/a54efc5e5ac24c82810386d76c20b0ca/3d87c5bb6485e1587db787a8bea032e75c1945e3?placeholderIfAbsent=true"
          className="object-cover absolute inset-0 size-full"
        />
        <div className="flex overflow-hidden relative flex-col justify-center items-end px-20 py-16 w-full max-md:px-5 max-md:max-w-full">
          <div className="flex flex-col items-start w-full max-w-[1040px] max-md:max-w-full">
            <div className="flex gap-4 items-center text-xs font-bold text-white">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/a54efc5e5ac24c82810386d76c20b0ca/999fd8260d04e44bb3baa7b858a3f7820f00d952?placeholderIfAbsent=true"
                className="object-contain shrink-0 self-stretch my-auto rounded-2xl aspect-square shadow-[0px_0px_10px_rgba(255,255,255,0.2)] w-[60px]"
              />
              <div className="my-auto w-[190px]">
                Automatic Facility Usage Payment System
              </div>
            </div>
            <div className="flex overflow-hidden flex-col justify-center items-center self-end px-2 py-3.5 mt-10 max-w-full bg-white min-h-[500px] shadow-[0px_0px_100px_rgba(0,0,0,0.25)] w-[400px]">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/a54efc5e5ac24c82810386d76c20b0ca/fcb03d0bb824e970f092573437ef97d44ec19ff8?placeholderIfAbsent=true"
                className="object-contain aspect-[0.97] w-[33px]"
              />
              <div className="mt-4 text-base font-medium text-center text-black">
                Welcome
              </div>
              <div className="mt-4 text-2xl text-black">
                Almost there, Enter the OTP send <br />
                to your Phone number
              </div>
              <div className="mt-4 text-xs font-medium text-black">
                <span style={{ fontWeight: 400 }}>+91 9360229517 </span>
                <span
                  style={{
                    fontWeight: 400,
                    fontSize: "10px",
                    color: "rgba(42,99,229,1)",
                  }}
                >
                  Change
                </span>
              </div>
              <div className="flex flex-wrap gap-4 justify-between items-start mt-4 max-w-full min-h-[47px] w-[340px]">
                <div className="flex overflow-hidden gap-2.5 justify-center items-center px-2.5 bg-white rounded-xl border border-solid border-stone-300 min-h-[47px] w-[55px]">
                  <div className="flex self-stretch my-auto w-5 rounded-full border border-solid border-stone-300 min-h-5" />
                </div>
                <div className="flex overflow-hidden gap-2.5 justify-center items-center px-2.5 bg-white rounded-xl border border-solid border-stone-300 min-h-[47px] w-[55px]">
                  <div className="flex self-stretch my-auto w-5 rounded-full border border-solid border-stone-300 min-h-5" />
                </div>
                <div className="flex overflow-hidden gap-2.5 justify-center items-center px-2.5 bg-white rounded-xl border border-solid border-stone-300 min-h-[47px] w-[55px]">
                  <div className="flex self-stretch my-auto w-5 rounded-full border border-solid border-stone-300 min-h-5" />
                </div>
                <div className="flex overflow-hidden gap-2.5 justify-center items-center px-2.5 bg-white rounded-xl border border-solid border-stone-300 min-h-[47px] w-[55px]">
                  <div className="flex self-stretch my-auto w-5 rounded-full border border-solid border-stone-300 min-h-5" />
                </div>
                <div className="flex overflow-hidden gap-2.5 justify-center items-center px-2.5 bg-white rounded-xl border border-solid border-stone-300 min-h-[47px] w-[55px]">
                  <div className="flex self-stretch my-auto w-5 rounded-full border border-solid border-stone-300 min-h-5" />
                </div>
              </div>
              <div className="mt-4 text-xs font-medium text-right text-blue-600">
                Resent OTP in 5s
              </div>
              <div className="px-16 py-4 mt-4 max-w-full text-sm font-semibold text-white whitespace-nowrap bg-lime-900 rounded-3xl w-[342px] max-md:px-5">
                Verify
              </div>
              <div className="mt-4 text-sm text-center text-sky-700">
                <span style={{ fontSize: "10px", color: "rgba(0,0,0,1)" }}>
                  Don't have an account ?
                </span>{" "}
                <span
                  style={{
                    fontWeight: 500,
                    fontStyle: "italic",
                    fontSize: "12px",
                    color: "rgba(6,90,216,1)",
                  }}
                >
                  Create an account
                </span>
              </div>
              <div className="flex overflow-hidden flex-col items-center px-6 py-2 mt-4 max-w-full text-xs font-light text-center text-black bg-white rounded-lg min-h-[67px] w-[130px] max-md:px-5">
                <div>Powered by</div>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/a54efc5e5ac24c82810386d76c20b0ca/df7866ab6dec5fafdf6bad2de67c0d80a4e6307e?placeholderIfAbsent=true"
                  className="object-contain mt-2 w-full aspect-[2.93]"
                />
              </div>
            </div>
            <div className="flex flex-col mt-1.5 max-w-full font-medium w-[426px]">
              <div className="text-xs italic text-white max-md:max-w-full">
                Join{" "}
                <span
                  style={{
                    fontWeight: 700,
                    fontStyle: "italic",
                    fontSize: "15px",
                    color: "rgba(0,248,177,1)",
                  }}
                >
                  Smart Businesses
                </span>{" "}
                effortlessly automating facility payments with ease, enhancing
                efficiency and streamlining processes
              </div>
              <div className="flex gap-5 items-center self-start mt-3 text-xs text-white">
                <div className="flex gap-2 items-center self-stretch my-auto">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/a54efc5e5ac24c82810386d76c20b0ca/661b77a497a21009ae248a723cf70ff5cb55cfae?placeholderIfAbsent=true"
                    className="object-contain shrink-0 self-stretch my-auto aspect-square w-[21px]"
                  />
                  <div className="self-stretch my-auto">Secure Payment</div>
                </div>
                <div className="flex gap-2 items-center self-stretch my-auto">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/a54efc5e5ac24c82810386d76c20b0ca/4b6512abbe0d90d41ac90953a2f544b0af616714?placeholderIfAbsent=true"
                    className="object-contain shrink-0 self-stretch my-auto aspect-square w-[21px]"
                  />
                  <div className="self-stretch my-auto">Easy Integration</div>
                </div>
                <div className="flex gap-2 items-center self-stretch my-auto">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/a54efc5e5ac24c82810386d76c20b0ca/fef567a2d277b6a32cc6ef77f906826f48ad468a?placeholderIfAbsent=true"
                    className="object-contain shrink-0 self-stretch my-auto aspect-square w-[21px]"
                  />
                  <div className="self-stretch my-auto">Fastest Autopay</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogInOTPPage;
