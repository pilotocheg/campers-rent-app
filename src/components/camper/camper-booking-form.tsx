'use client';

import { useState, FormEvent, ChangeEvent } from 'react';
import toast from 'react-hot-toast';

import Input from '@/components/common/input';
import Button from '@/components/common/button';

interface FormData {
  name: string;
  email: string;
  bookingDate: string;
  comment: string;
}

const initialState: FormData = {
  name: '',
  email: '',
  bookingDate: '',
  comment: '',
};

export default function CamperBookingForm() {
  const [formData, setFormData] = useState<FormData>(initialState);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.bookingDate) {
      toast.error('Please fill in all required fields');
      return;
    }

    // TODO: Implement booking request
    console.log('Booking Data:', formData);
    toast.success('Booking request sent successfully!');

    setFormData(initialState);
  };

  return (
    <div className="border-border rounded-[10px] border px-[57px] py-11">
      <h3 className="text-xl leading-6 font-semibold">
        Book your campervan now
      </h3>
      <p className="text-text-muted mt-2">
        Stay connected! We are always ready to help you.
      </p>

      <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-[14px]">
        <Input
          type="text"
          name="name"
          placeholder="Name*"
          value={formData.name}
          onChange={handleInputChange}
          required
        />

        <Input
          type="email"
          name="email"
          placeholder="Email*"
          value={formData.email}
          onChange={handleInputChange}
          required
        />

        <Input
          type="date"
          name="bookingDate"
          placeholder="Booking date*"
          value={formData.bookingDate}
          onChange={handleInputChange}
          required
        />

        <Input
          name="comment"
          placeholder="Comment"
          value={formData.comment}
          onChange={handleInputChange}
          textArea
          className="h-[118px] resize-none"
        />

        <Button type="submit" className="mt-[10px] self-center">
          Send
        </Button>
      </form>
    </div>
  );
}
