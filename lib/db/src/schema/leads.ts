import { pgTable, text, uuid, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod/v4";

export const leadsTable = pgTable("leads", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  created_at: timestamp("created_at").defaultNow().notNull(),
});

export const insertLeadSchema = createInsertSchema(leadsTable).omit({ id: true, created_at: true });
export type InsertLead = z.infer<typeof insertLeadSchema>;
export type Lead = typeof leadsTable.$inferSelect;
