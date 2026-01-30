'use client';

import { useState, FormEvent } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import toast from 'react-hot-toast';
import { AuthError } from '@supabase/supabase-js';

import Container from '@/components/common/container';
import Input from '@/components/common/input';
import Button from '@/components/common/button';
import { useAuth, getAuthErrorMessage } from '@/hooks/use-auth';
import { Routes } from '@/lib/constants/routes';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { signIn } = useAuth();
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error('Please fill in all fields');
      return;
    }

    setIsSubmitting(true);

    try {
      await signIn(email, password);
      toast.success('Welcome back!');
      router.push(searchParams.get('redirectTo') || Routes.CATALOG);
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
            <h1 className="text-text text-3xl font-semibold">Welcome Back</h1>
            <p className="text-text-secondary mt-2">
              Sign in to access your account
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
              autoComplete="current-password"
            />

            <Button
              type="submit"
              disabled={isSubmitting}
              className="mt-4 w-full"
            >
              {isSubmitting ? 'Signing in...' : 'Sign In'}
            </Button>
          </form>

          <p className="text-text-secondary mt-6 text-center">
            Don&apos;t have an account?{' '}
            <Link
              href={Routes.REGISTER}
              className="text-primary hover:text-primary-hover font-medium transition-colors"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </Container>
  );
}
