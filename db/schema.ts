import {
  pgTable,
  serial,
  varchar,
  integer,
  text,
  jsonb,
  timestamp,
} from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  email: varchar("email", { length: 255 }).notNull().unique(),
  type: varchar("type", { length: 50 }).notNull(),
  tokens: integer("tokens").notNull().default(0),
});

export const payments = pgTable("payments", {
  email: text("email").notNull(),
  id: text("id").notNull().primaryKey(),
  checkoutSessionObject: jsonb("checkout_session_object").notNull(),
});

export const subscribedUsers = pgTable("subscribed_users", {
  id: serial("id").primaryKey(),
  email: varchar("email", { length: 255 }).notNull().unique(),
  type: varchar("type", { length: 50 }).notNull(),
  subscriptionStatus: varchar("subscription_status", { length: 50 }),
  invoiceStatus: varchar("invoice_status", { length: 50 }),
  currentPlan: varchar("current_plan", { length: 50 }),
  nextInvoiceDate: timestamp("next_invoice_date"),
});

export const subscriptionEvents = pgTable("subscription_events", {
  id: serial("id").primaryKey(),
  eventId: text("event_id"),
  eventPayload: jsonb("event_payload").notNull(),
  email: text("email").notNull(),
});
