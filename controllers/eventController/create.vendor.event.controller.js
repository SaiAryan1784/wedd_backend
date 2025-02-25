import CustomError from "../../utils/CustomError.js";
import { PrismaClient as PostgresClient } from "../../prisma/generated/postgres/index.js";

const postgresPrisma = new PostgresClient();

const createVendor = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const { eventId, serviceId } = req.body;

    if (!userId) {
      throw new CustomError("User id is required but not found", 404);
    }
    if (!eventId || !serviceId) {
      throw new CustomError("Event ID and Service ID are required");
    }

    const event = await postgresPrisma.Event.findUnique({
      where: { id: eventId, userId },
    });

    if (!event) {
      return res.status(404).json({ error: "Event not found or unauthorized" });
    }

    const existingVendor = await postgresPrisma.EventVendors.findFirst({
      where: { eventId, serviceId },
    });

    if (existingVendor) {
      throw new CustomError("Vendor is already added to this event", 400);
    }

    const newVendor = await postgresPrisma.EventVendors.create({
      data: {
        eventId,
        serviceId,
      },
    });

    res.status(201).json({
      success: true,
      message: "Vendor added successfully",
      vendor: newVendor,
    });
  } catch (error) {
    console.error(
      `Error Type: ${error.constructor.name}, Message: ${error.message}, Stack: ${error.stack}`
    );

    next(error);
  }
};

export default createVendor;