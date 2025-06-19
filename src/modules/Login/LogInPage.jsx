"use client";
import * as React from "react";

function LogInPage() {
  return (
    <div className="overflow-hidden bg-white">
      <div className="flex relative flex-col w-full min-h-[800px] max-md:max-w-full">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/a54efc5e5ac24c82810386d76c20b0ca/3d87c5bb6485e1587db787a8bea032e75c1945e3?placeholderIfAbsent=true"
          className="object-cover absolute inset-0 size-full"
        />
        <div className="flex overflow-hidden relative flex-col px-20 py-14 w-full max-md:px-5 max-md:max-w-full">
          <div className="flex gap-4 items-center self-start text-xs font-bold text-white">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/a54efc5e5ac24c82810386d76c20b0ca/f790c23847c7721363f2fc00b3c00934c3b09ef4?placeholderIfAbsent=true"
              className="object-contain shrink-0 self-stretch my-auto rounded-2xl aspect-square shadow-[0px_0px_10px_rgba(255,255,255,0.2)] w-[60px]"
            />
            <div className="my-auto w-[190px]">
              Automatic Facility Usage Payment System
            </div>
          </div>
          <div className="mt-10 max-md:max-w-full" space={202}>
            <div className="flex gap-5 max-md:flex-col max-md:">
              <div className="w-3/5 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col w-full font-medium mt-[493px] max-md:mt-10 max-md:max-w-full">
                  <div className="text-base italic text-white max-md:max-w-full">
                    Join{" "}
                    <span
                      style={{
                        fontWeight: 700,
                        fontStyle: "italic",
                        fontSize: "21px",
                        color: "rgba(0,248,177,1)",
                      }}
                    >
                      Smart Businesses
                    </span>{" "}
                    effortlessly automating facility payments with ease,
                    enhancing efficiency and streamlining processes
                  </div>
                  <div className="flex gap-7 items-center self-start mt-4 text-xs text-white max-md:max-w-full">
                    <div className="flex gap-2.5 items-center self-stretch my-auto">
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets/a54efc5e5ac24c82810386d76c20b0ca/23dbf48fcc3f07509caf4c3fb7b2732338ad133a?placeholderIfAbsent=true"
                        className="object-contain shrink-0 self-stretch my-auto aspect-square w-[30px]"
                      />
                      <div className="self-stretch my-auto">Secure Payment</div>
                    </div>
                    <div className="flex gap-2.5 items-center self-stretch my-auto">
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets/a54efc5e5ac24c82810386d76c20b0ca/23dbf48fcc3f07509caf4c3fb7b2732338ad133a?placeholderIfAbsent=true"
                        className="object-contain shrink-0 self-stretch my-auto aspect-square w-[30px]"
                      />
                      <div className="self-stretch my-auto">
                        Easy Integration
                      </div>
                    </div>
                    <div className="flex gap-2.5 items-center self-stretch my-auto">
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets/a54efc5e5ac24c82810386d76c20b0ca/23dbf48fcc3f07509caf4c3fb7b2732338ad133a?placeholderIfAbsent=true"
                        className="object-contain shrink-0 self-stretch my-auto aspect-square w-[30px]"
                      />
                      <div className="self-stretch my-auto">
                        Fastest Autopay
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ml-5 w-2/5 max-md:ml-0 max-md:w-full">
                <div className="flex overflow-hidden flex-col justify-center items-center px-2 py-6 mx-auto w-full bg-white min-h-[500px] shadow-[0px_0px_100px_rgba(0,0,0,0.25)] max-md:mt-10">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/a54efc5e5ac24c82810386d76c20b0ca/5d443b34f51c9e96b1036d8bb298eae4a8521dd1?placeholderIfAbsent=true"
                    className="object-contain aspect-[0.97] w-[33px]"
                  />
                  <div className="mt-4 text-base font-medium text-center text-black">
                    Welcome
                  </div>
                  <div className="mt-4 text-2xl text-black w-[314px]">
                    Get Started With Your Phone Number
                  </div>
                  <div className="flex overflow-hidden gap-2.5 items-center px-2.5 mt-4 max-w-full bg-white rounded-2xl border border-solid border-stone-300 min-h-[47px] w-[340px]">
                    <div className="flex gap-2.5 justify-center items-center self-stretch p-2 my-auto min-h-[38px] w-[38px]">
                      <div className="flex self-stretch py-0.5 my-auto w-6 min-h-6" />
                    </div>
                    <div className="self-stretch my-auto text-xs text-black font-[275]">
                      Enter your mobile number or Email
                    </div>
                  </div>
                  <div className="flex gap-4 items-center mt-4 max-w-full text-xs text-black w-[343px]">
                    <div className="flex shrink-0 self-stretch my-auto w-6 h-6 bg-white rounded-lg border border-solid border-stone-300" />
                    <div className="self-stretch my-auto w-[316px]">
                      By logging in, you agree to our{" "}
                      <span
                        style={{ fontWeight: 500, color: "rgba(42,99,229,1)" }}
                      >
                        Terms & Conditions
                      </span>{" "}
                      and{" "}
                      <span
                        style={{ fontWeight: 500, color: "rgba(42,99,229,1)" }}
                      >
                        Privacy Policy
                      </span>
                    </div>
                  </div>
                  <div className="px-16 py-4 mt-4 max-w-full text-sm font-semibold text-white bg-lime-900 rounded-3xl w-[342px] max-md:px-5">
                    Get OTP
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
                      src="https://cdn.builder.io/api/v1/image/assets/a54efc5e5ac24c82810386d76c20b0ca/9fecc0818ffd3d95e2592d3abeccca6189b6c7d0?placeholderIfAbsent=true"
                      className="object-contain mt-2 w-full aspect-[2.82]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogInPage;
