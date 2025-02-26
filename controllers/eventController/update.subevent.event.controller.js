// controllers/subEventController.js

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.updateSubEvent = async (req, res) => {
  const { id } = req.params;
  const { subEventName, subEventDescription, subEventBudget, subEventDate } = req.body;

  try {
    const updatedSubEvent = await prisma.subEvent.update({
      where: { id },
      data: {
        subEventName,
        subEventDescription,
        subEventBudget,
        subEventDate: new Date(subEventDate),
        updatedAt: new Date(),
      },
    });
    res.json(updatedSubEvent);
  } catch (error) {
    res.status(500).json({ error: 'Error updating sub-event' });
  }
};
