'use client';

import { useErrorNotification } from '@/hooks/use-error-notification';

export default function ErrorNotificationHandler() {
  useErrorNotification();
  return null;
}
