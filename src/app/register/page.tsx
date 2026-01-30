'use client';

import { useState, FormEvent } from 'react';
import Link from 'next/link';
import toast from 'react-hot-toast';
import { AuthError } from '@supabase/supabase-js';

import Container from '@/components/common/container';
import Input from '@/components/common/input';
import Button from '@/components/common/button';
import { useAuth, getAuthErrorMessage } from '@/hooks/use-auth';
import { Routes } from '@/lib/constants/routes';

export default function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { signUp } = useAuth();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!email || !password || !confirmPassword) {
      toast.error('Please fill in all fields');
      return;
    }

    if (password !== confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    if (password.length < 6) {
      toast.error('Password must be at least 6 characters');
      return;
    }

    setIsSubmitting(true);

    try {
      await signUp(email, password);
    } catch (error) {
      toast.error(getAuthErrorMessage(error as AuthError));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Container>
      <div className="flex min-h-[calc(100vh-72px)] items-center justify-center py-12">
        <div className="border-border w-full max-w-md rounded-[20px] border bg-white p-10">
          <div className="mb-8 text-center">
            <h1 className="text-text text-3xl font-semibold">Create Account</h1>
            <p className="text-text-secondary mt-2">
              Sign up to start your adventure
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="email"
            />

            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="new-password"
            />

            <Input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              autoComplete="new-password"
            />

            <Button
              type="submit"
              disabled={isSubmitting}
              className="mt-4 w-full"
            >
              {isSubmitting ? 'Creating account...' : 'Sign Up'}
            </Button>
          </form>

          <p className="text-text-secondary mt-6 text-center">
            Already have an account?{' '}
            <Link
              href={Routes.LOGIN}
              className="text-primary hover:text-primary-hover font-medium transition-colors"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </Container>
  );
}
