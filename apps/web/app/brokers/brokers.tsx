'use client';
import React from "react";
import { Broker } from "@repo/types";

export default function Brokers({ brokers }: { brokers: Broker[] }) {
    return (
        <div>
            <h1 className="main-title">Brokers</h1>
            <div className="brokers-list">
                {brokers.map((broker) => (
                    <div className="broker-card" key={broker.id}>
                        <p><strong>Name:</strong> {broker.name}</p>
                        <p><strong>Commission:</strong> {broker.commission}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}