'use client';
import '@repo/ui/components/Select/select';
import { Input } from '@repo/ui/components/ui/input';
import { useState } from 'react';

export default function AutoMentoringField() {
  const [minParticipants, setMinParticipants] = useState('');
  const [maxParticipants, setMaxParticipants] = useState('');
  const [price, setPrice] = useState('');
  const [endDate, setEndDate] = useState('');
  return (
    <section className="container p-4 my-8">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <label htmlFor="minParticipants">최소 참가자 수</label>
          <Input
            id="minParticipants"
            type="number"
            value={minParticipants}
            onChange={(e) => setMinParticipants(e.target.value)}
            required
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="maxParticipants">최대 참가자 수</label>
          <Input
            id="maxParticipants"
            type="number"
            value={maxParticipants}
            onChange={(e) => setMaxParticipants(e.target.value)}
            required
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="price">가격 (Volt)</label>
          <Input
            id="price"
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="endDate">자동생성 마감일</label>
          <Input
            id="endDate"
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            required
            style={{ fontSize: '1rem' }}
          />
        </div>
      </div>
    </section>
  );
}
