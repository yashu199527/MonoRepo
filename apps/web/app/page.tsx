'use client';

import { useEffect, useState } from 'react';
import CreateBroker from './create-broker/create-broker';
import Brokers from './brokers/brokers';
import { Broker } from '@repo/types';

export default function Page() {
  const [brokers, setBrokers] = useState<Broker[]>([]);

  // Fetch brokers on mount
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/brokers`)
      .then(res => res.json())
      .then(data => setBrokers(data));
  }, []);

  // Add new broker to the list
  const handleBrokerCreated = (broker: Broker) => {
    setBrokers(prev => [...prev, broker]);
  };

  return (
    <div className="container">
      <CreateBroker onBrokerCreated={handleBrokerCreated} />
      <Brokers brokers={brokers} />
      <h1 className="main-title">Welcome to the Broker Management System</h1>
      <p className="subtitle">
        This application allows you to manage brokers and their commissions.
      </p>
    </div>
  );
}