import { Router, type IRouter } from "express";
import { db, leadsTable, insertLeadSchema } from "@workspace/db";
import { eq } from "drizzle-orm";

const router: IRouter = Router();

router.post("/leads", async (req, res) => {
  const parsed = insertLeadSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: "Invalid input", details: parsed.error.issues });
    return;
  }

  try {
    const existing = await db
      .select()
      .from(leadsTable)
      .where(eq(leadsTable.email, parsed.data.email))
      .limit(1);

    if (existing.length > 0) {
      res.status(200).json({ success: true, message: "Already registered" });
      return;
    }

    const [lead] = await db.insert(leadsTable).values(parsed.data).returning();
    req.log.info({ leadId: lead.id }, "New lead captured");
    res.status(201).json({ success: true, lead });
  } catch (err) {
    req.log.error({ err }, "Failed to insert lead");
    res.status(500).json({ error: "Server error" });
  }
});

export default router;
