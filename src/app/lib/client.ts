import { hc } from 'hono/client';
import type { AppType } from '@/src/app/api/[...route]/route';

export type RpcClient = ReturnType<typeof hc<AppType>>;

export const rpc = (url: string) => ({
  build: (): RpcClient =>
    hc<AppType>(url, {
      fetch: async (input: RequestInfo | URL, requestInit?: RequestInit) =>
        fetch(input, {
          cache: 'no-cache',
          ...requestInit,
        }),
    }),
});
