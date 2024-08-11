import { pgTable, serial, varchar, integer } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  email: varchar("email", { length: 255 }).notNull().unique(),
  type: varchar("type", { length: 50 }).notNull(),
  subscription: varchar("subscription", { length: 50 }),
  tokens: integer("tokens").notNull().default(0),
});