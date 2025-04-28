import { hc } from 'hono/client';
import type { AppType } from '@/src/app/api/[...route]/route';

export const client = hc<AppType>('http://localhost:3000', {
  fetch: (input: RequestInfo | URL, requestInit?: RequestInit) =>
    fetch(input, {
      cache: 'no-cache',
      ...requestInit,
    }),
});
