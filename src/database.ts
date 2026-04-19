import knex from "knex";
import type { Knex } from "knex";
import "dotenv/config";
import { env } from "./env/index.js";

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL env not found.");
}
// bd em dev --> sqlite3
export const config: Knex.Config = {
  client: env.DATABASE_CLIENT,
  connection:
    env.DATABASE_CLIENT === "sqlite3"
      ? {
          filename: env.DATABASE_URL,
        }
      : env.DATABASE_URL,
  useNullAsDefault: true,
  migrations: {
    extension: "ts",
    directory: "./db/migrations",
  },
};

export const knexConnection = knex(config);
