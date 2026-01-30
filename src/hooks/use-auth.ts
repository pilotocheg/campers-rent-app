'use client';

import { useEffect, useState, useCallback } from 'react';
import { User, AuthError } from '@supabase/supabase-js';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

import { createClient } from '@/lib/supabase/client';
import { Routes } from '@/lib/constants/routes';

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const supabase = createClient();

  useEffect(() => {
    const getUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);
      setLoading(false);
    };

    getUser();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, [supabase.auth]);

  const signIn = useCallback(
    async (email: string, password: string) => {
      setLoading(true);
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        setLoading(false);
        throw error;
      }

      router.refresh();
    },
    [supabase.auth, router],
  );

  const signUp = useCallback(
    async (email: string, password: string) => {
      setLoading(true);
      const { error } = await supabase.auth.signUp({
        email,
        password,
      });

      if (error) {
        setLoading(false);
        throw error;
      }

      toast.success('Check your email for the confirmation link!');
      setLoading(false);
    },
    [supabase.auth],
  );

  const signOut = useCallback(async () => {
    setLoading(true);
    const { error } = await supabase.auth.signOut();

    if (error) {
      setLoading(false);
      throw error;
    }

    router.push(Routes.HOME);
    router.refresh();
  }, [supabase.auth, router]);

  return {
    user,
    loading,
    signIn,
    signUp,
    signOut,
  };
}

export function getAuthErrorMessage(error: AuthError): string {
  switch (error.message) {
    case 'Invalid login credentials':
      return 'Invalid email or password';
    case 'Email not confirmed':
      return 'Please confirm your email address';
    case 'User already registered':
      return 'An account with this email already exists';
    default:
      return error.message;
  }
}
