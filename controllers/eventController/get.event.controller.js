import CustomError from "../../utils/CustomError.js";
import { PrismaClient as PostgresClient } from "../../prisma/generated/postgres/index.js";

const postgresPrisma = new PostgresClient();

// Handle for getting all events
const getAllEvent = async (req, res, next) => {
  try {
    const userId = req.user.id;

    // Validate userId
    if (!userId) {
      throw new CustomError("User ID not found", 404);
    }

    // ✅ Fetch User from DB
    const user = await postgresPrisma.User.findUnique({
      where: { id: userId },
    });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // ✅ Get all events for the user (Include subEvents inside each event)
    const events = await postgresPrisma.Event.findMany({
      where: { userId: userId },
      include: {
        subEvent: {   // ✅ Include subEvents inside each event
          include: {
            subEventTask: true,  // ✅ Include tasks inside each subEvent
            subEventVendors: true,  // ✅ Include vendors inside each subEvent
          },
        },
        eventTask: true,  // ✅ Include tasks inside each event
        eventVendors: true,  // ✅ Include vendors inside each event
      },
    });

    if (events.length === 0) {
      return res.status(200).json({ message: "No events found", events: [] });
    }

    res.status(200).json({ events });

  } catch (error) {
    console.error(
      `Error Type: ${error.constructor.name}, Message: ${error.message}, Stack: ${error.stack}`
    );

    next(error);
  }
};

export default getAllEvent;