import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe("pk_test_12345"); // Dummy key for demo

const carModels = [
  {
    id: 1,
    name: "Ford Mustang",
    price: 2999,
    description: "A classic American muscle car known for its power and style.",
  },
  {
    id: 2,
    name: "Chevrolet Corvette",
    price: 3499,
    description:
      "An American sports car icon, combining performance and comfort.",
  },
  {
    id: 3,
    name: "Porsche 911",
    price: 4999,
    description:
      "An iconic German performance car with timeless design and speed.",
  },
];

export const Ticket: React.FC = () => {
  const [selectedModel, setSelectedModel] = useState<{
    id: number;
    name: string;
    price: number;
    description: string;
  } | null>(carModels[0]);

  return (
    <div className="max-w-2xl mx-auto my-10 p-6 bg-white rounded-md shadow-sm space-y-8">
      <div className="space-y-3">
        <h2 className="text-3xl font-extrabold text-gray-800">
          Purchase Your Car Experience Ticket
        </h2>
        <p className="text-gray-600">
          Choose from one of our exclusive car models and enjoy an unforgettable
          driving experience. This ticket grants you a test drive and a
          comprehensive orientation to the car’s features.
        </p>
      </div>

      <div>
        <label className="block mb-2 font-semibold text-gray-700">
          Choose a Car Model:
        </label>
        <select
          onChange={(e) => {
            const modelId = Number(e.target.value);
            const model = carModels.find((m) => m.id === modelId);
            setSelectedModel(model || null);
          }}
          value={selectedModel?.id}
          className="block w-full border border-gray-300 rounded-md p-2 bg-white text-gray-700 focus:ring-orange-500 focus:border-orange-500"
        >
          {carModels.map((model) => (
            <option key={model.id} value={model.id}>
              {model.name} - ${model.price / 100}
            </option>
          ))}
        </select>

        {selectedModel && (
          <div className="mt-4 p-4 bg-gray-50 border border-gray-200 rounded">
            <h4 className="text-lg font-semibold text-gray-800">
              {selectedModel.name}
            </h4>
            <p className="text-gray-700 mt-1">{selectedModel.description}</p>
            <p className="text-gray-800 font-bold mt-3">
              Price: ${(selectedModel.price / 100).toFixed(2)}
            </p>
          </div>
        )}
      </div>

      <Elements stripe={stripePromise}>
        <div className="bg-white p-4 rounded shadow-md space-y-4">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Your Payment Details
          </h3>
          <div className="space-y-2">
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Name on Card
              </label>
              <input
                type="text"
                className="block w-full border border-gray-300 rounded-md py-2 px-3 bg-white focus:ring-orange-500 focus:border-orange-500"
                placeholder="Jane Doe"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Card Number
              </label>
              <div className="border border-gray-300 rounded-md py-2 px-3 bg-white text-gray-700">
                **** **** **** 4242
              </div>
            </div>
            <div className="flex space-x-4">
              <div className="flex-1">
                <label className="block text-gray-700 font-medium mb-1">
                  Expiration
                </label>
                <div className="border border-gray-300 rounded-md py-2 px-3 bg-white text-gray-700">
                  12/34
                </div>
              </div>
              <div className="flex-1">
                <label className="block text-gray-700 font-medium mb-1">
                  CVC
                </label>
                <div className="border border-gray-300 rounded-md py-2 px-3 bg-white text-gray-700">
                  ***
                </div>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-gray-200">
            <button
              type="button"
              className="w-full py-3 text-lg font-semibold rounded-md bg-orange-500 hover:bg-orange-600 text-white transition-colors"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </Elements>

      <div className="text-sm text-center text-gray-500">
        *This is a demonstration of the checkout experience. No actual charges
        will be made.
      </div>
    </div>
  );
};
export default Ticket;
