'use client';

import { useState } from 'react';
import { Broker } from '@repo/types';

export default function CreateBroker({ onBrokerCreated }: { onBrokerCreated: (broker: Broker) => void }) {
    const [name, setName] = useState('');
    const [commission, setCommission] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/brokers`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, commission }),
        });
        if (res.ok) {
            const broker = await res.json();
            setMessage('Broker created!');
            setName('');
            setCommission('');
            onBrokerCreated(broker); // <-- Add new broker to list
        } else {
            setMessage('Failed to create broker');
        }
    };

    return (
        <div>
            <h1 className="main-title">Create Broker</h1>
            <form className="broker-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Broker Name:</label>
                    <input
                        className="input"
                        type="text"
                        name="name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        placeholder="Broker Name"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="commission">Commission:</label>
                    <input
                        className="input"
                        type="text"
                        name="commission"
                        value={commission}
                        onChange={e => setCommission(e.target.value)}
                        placeholder="Commission"
                        required
                    />
                </div>
                <button className="submit-btn" type="submit">Create Broker</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
}