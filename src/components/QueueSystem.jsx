import React, { useState } from "react";
import {
    UserPlus,
    ChevronDown,
    UserX,
} from "lucide-react";

const QueueManagementSystem = () => {
    const [customers, setCustomers] = useState([]);

    const [name, setName] = useState("");
    const [service, setService] = useState("");

    const addCustomer = () => {
        if (!name || !service) return;

        const newCustomer = {
            id: Date.now(),
            name,
            service,
            status: "waiting",
        };

        setCustomers([...customers, newCustomer]);
        setName("");
        setService("");
    };

    const serveCustomer = (id) => {
        setCustomers((prev) =>
            prev.map((customer) =>
                customer.id === id
                    ? { ...customer, status: "completed" }
                    : customer
            )
        );
    };

    const removeCustomer = (id) => {
        setCustomers((prev) =>
            prev.filter((customer) => customer.id !== id)
        );
    };

    return (
        <div className="bg-[#0b0b0b] text-white px-6 py-8">
            {/* Header */}
            <div className="text-center mb-10">
                <h1 className="text-5xl font-bold text-indigo-500">
                    Queue Management System
                </h1>
                <p className="text-gray-400 mt-3 text-lg">
                    Manage your customers efficiently
                </p>
            </div>

            {/* Main Layout */}
            <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto">
                {/* Left Card */}
                <div className="w-full lg:w-[320px] bg-[#1b1b1b] border-2 rounded-xl p-6 shadow-lg ">
                    <h2 className="text-3xl font-bold text-indigo-500 mb-6">
                        Add to Queue
                    </h2>

                    {/* Input */}
                    <input
                        type="text"
                        placeholder="Customer Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-[#0f0f0f] border border-gray-700 rounded-md px-4 py-3 text-white placeholder-gray-500 outline-none focus:border-indigo-500 mb-4"
                    />

                    {/* Select */}
                    <div className="relative mb-5">
                        <select
                            value={service}
                            onChange={(e) => setService(e.target.value)}
                            className="w-full appearance-none bg-[#0f0f0f] border border-gray-700 rounded-md px-4 py-3 text-white outline-none focus:border-indigo-500"
                        >
                            <option value="">Select Service</option>
                            <option value="payment">payment</option>
                            <option value="consultation">consultation</option>
                            <option value="support">support</option>
                        </select>

                        <ChevronDown
                            size={18}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                        />
                    </div>

                    {/* Button */}
                    <button
                        onClick={addCustomer}
                        className="w-full bg-indigo-600 hover:bg-indigo-700 transition-all duration-200 rounded-md py-3 font-medium flex items-center justify-center gap-2"
                    >
                        <UserPlus size={18} />
                        Add Customer
                    </button>
                </div>

                {/* Queue Section */}
                <div className="lg:flex-1 bg-[#1b1b1b] rounded-xl border-2 p-6 shadow-lg sm:h-80 overflow-auto">
                    <h2 className="text-4xl font-bold mb-6">
                        Current Queue
                    </h2>

                    <div className="space-y-5">
                        {customers.length== 0 ? "No Customer added!" : customers.map((customer) => (
                            <div
                                key={customer.id}
                                className="bg-[#0f0f0f] rounded-lg p-5 flex items-center justify-between"
                            >
                                {/* Left */}
                                <div>
                                    <h3 className="text-2xl font-bold">
                                        {customer.name}
                                    </h3>

                                    <p className="text-gray-400 mt-1 text-lg">
                                        Service: {customer.service}
                                    </p>

                                    <p
                                        className={`mt-2 font-semibold capitalize ${customer.status === "completed"
                                                ? "text-blue-500"
                                                : "text-yellow-500"
                                            }`}
                                    >
                                        {customer.status}
                                    </p>
                                </div>

                                {/* Right Buttons */}
                                <div className="flex items-center gap-3">
                                    {customer.status !== "completed" && (
                                        <button
                                            onClick={() => serveCustomer(customer.id)}
                                            className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-md font-semibold transition-all"
                                        >
                                            Serve
                                        </button>
                                    )}

                                    <button
                                        onClick={() => removeCustomer(customer.id)}
                                        className="bg-red-500 hover:bg-red-600 p-3 rounded-md transition-all"
                                    >
                                        <UserX size={20} />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QueueManagementSystem;