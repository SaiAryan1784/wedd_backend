import CustomError from "../../utils/CustomError.js";
import { PrismaClient } from "../../prisma/generated/mongo/index.js";
const prisma = new PrismaClient();

const deleteService = async (req, res, next) => {
    try {
      const serviceId = req.params.id;

      console.log(serviceId)
      console.log(req.user.id)
      
      // Attempt to delete the service from the database
      const deletedService = await prisma.Service.delete({
        where: {
          id: serviceId, // Find service by ID
          vendorId: req.user.id, // Ensure the service belongs to the authenticated vendor
        },
      });
  
      if (!deletedService) {
        return res.status(404).json({ message: "Service not found." ,success:"false"});
      }
  
      res.status(200).json({
        message: "Service deleted successfully.",
        success:"true"
      });
    } catch (error) {
     next(error)
    }
  };
  
  export default deleteService;