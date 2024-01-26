"use client";
import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";

const CardEsewa = () => {
  const [selectedPackage, setSelectedPackage] = useState("");
  const [selectedPeriod, setSelectedPeriod] = useState("");

  useEffect(() => {
    if (selectedPackage && isNaN(Number(selectedPackage))) {
      setSelectedPackage(null);
    }
  }, [selectedPackage]);

  const options = [
    { label: "Enterprise Plan", value: 85000 },
    { label: "Premium", value: 75000 },
    { label: "Local", value: 50000 },
  ];
  const periods = [
    { label: "1 Year (Until 1st Jan, 2025)", value: 85000 },
    { label: "Premium", value: 75000 },
    { label: "Local", value: 50000 },
  ];

  function handleSelect(event) {
    setSelectedPackage(event.target.value);
  }

  function handleSelectTime(event) {
    setSelectedPeriod(event.target.value);
  }

  const subtotalPrice = selectedPackage ? Number(selectedPackage) : 0;
  const vatAmount = subtotalPrice * 0.13;
  const totalCost = subtotalPrice + vatAmount;

  return (
    <Card className="w-[550px]">
      <CardHeader className="bg-green-600 text-white rounded">
        <CardTitle>Package Details</CardTitle>
      </CardHeader>
      <CardContent className="py-6 flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <label className="mr-2">Selected Package</label>
          <div className="relative">
            <select
              className="form-select bg-white w-[230px] border rounded-md px-4 py-3 focus:outline-none focus:ring-0 ring ring-green-300"
              onChange={handleSelect}
            >
              <option value="" disabled selected hidden>
                Select Package
              </option>
              {options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </CardContent>
      <CardContent className="py-4 flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <label className="mr-2">Validity Period</label>
          <div className="relative">
            <select
              className="form-select bg-white w-[230px] border rounded-md px-4 py-3 focus:outline-none focus:ring-0 ring ring-green-300"
              onChange={handleSelectTime}
            >
              <option value="" disabled selected hidden>
                Validity Period
              </option>
              {periods.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </CardContent>
      <CardContent className="py-4 flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <p className="mr-2">Promo Code</p>
          <div className="w-[230px]">
            <Input placeholder="Enter Promo Code" />
            <div>
              <p className="my-2">Which Code?</p>
            </div>
          </div>
        </div>
      </CardContent>

      <div className="py-9 bg-green-200/20">
        <CardFooter className="flex justify-between">
          <p className="mr-24 font-semibold">Subtotal Price</p>
          <div className="">
            <p className="font-semibold">Rs.{subtotalPrice}</p>
          </div>
        </CardFooter>
        <CardFooter className="flex justify-between">
          <p className="mr-24 font-semibold">13% VAT</p>
          <div>
            <p className="font-semibold">Rs.{vatAmount}</p>
          </div>
        </CardFooter>
        <CardFooter className="flex justify-between">
          <p className="mr-24 font-semibold">Total Cost</p>
          <div>
            <p className="font-semibold">Rs.{totalCost}</p>
          </div>
        </CardFooter>
        <div className="flex items-center justify-center">
          <div className="bg-orange-400 h-7 rounded text-white font-semibold w-[500px]">
            <p className="ml-2">Select the Gateway to Pay:</p>
          </div>
        </div>

        <div className="grid grid-cols-3 object-cover justify-center items-center">
          <div className="">
            <div className="py-3 flex items-center justify-center">
              <Card className="w-[150px] mx-2">
                <img
                  src="https://techlekh.com/wp-content/uploads/2017/06/esewa-logo.png"
                  alt="logo"
                  className="w-full h-full object-cover"
                />
              </Card>
            </div>
          </div>
          <div className="">
            <div className="py-3 flex items-center justify-center">
              <Card className="w-[150px] mx-2">
                <img
                  src="https://techlekh.com/wp-content/uploads/2017/06/esewa-logo.png"
                  alt="logo"
                  className="w-full h-full object-cover"
                />
              </Card>
            </div>
          </div>
          <div className="">
            <div className="py-3 flex items-center justify-center">
              <Card className="w-[150px] mx-2">
                <img
                  src="https://techlekh.com/wp-content/uploads/2017/06/esewa-logo.png"
                  alt="logo"
                  className="w-full h-full object-cover"
                />
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CardEsewa;
