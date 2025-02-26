// controllers/eventController.js

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.updateEvent = async (req, res) => {
  const { id } = req.params;
  const { eventName, eventDescription, eventDate, eventBudget } = req.body;

  try {
    const updatedEvent = await prisma.event.update({
      where: { id },
      data: {
        eventName,
        eventDescription,
        eventDate: new Date(eventDate),
        eventBudget,
        updatedAt: new Date(),
      },
    });
    res.json(updatedEvent);
  } catch (error) {
    res.status(500).json({ error: 'Error updating event' });
  }
};
 