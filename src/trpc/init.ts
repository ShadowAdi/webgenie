import { cache } from "react";
import { initTRPC } from "@trpc/server";
import superjson from "superjson";

export const createTRPCContext = cache(async () => {
  return { user_Id: "user_12" };
});

const t = initTRPC.create({
  transformer:superjson
});

export const createTRPCRouter = t.router;
export const createCallFactory = t.createCallerFactory;
export const baseProcedure = t.procedure;
