import { PrismaClient } from "../../prisma/generated/mongo/index.js";
import CustomError from "../../utils/CustomError.js";
import GenerateToken from "../../helper/generateToken.js";
import sendEmail from "../../service/emailService.js";
import z from "zod";
import { vendorResetPassEmailContent } from "../../constant/static.js";
import { requestPasswordResetSchema } from "../../validation schema/user.schema.js";

const prisma = new PrismaClient();

// Request Password Reset for Vendor
const requestVendorPasswordReset = async (req, res, next) => {
  try {
    console.log( " password reset");
    const { email } = requestPasswordResetSchema.parse(req.body);

    

    if (!email) {
      throw new CustomError("Email is required", 400);
    }

    // Find the vendor by email
    const vendor = await prisma.Vendor.findUnique({
      where: { email },
    });

    if (!vendor) {
      throw new CustomError("Vendor with this email does not exist", 404);
    }

    // Generate reset token
    const resetToken = await GenerateToken.generatePasswordResetToken(vendor);

    const updatedVendor = await prisma.Vendor.update({
      where: { id: vendor.id },
      data: {
        resetPassword_Token: resetToken,
      },
    });

    
    // Send reset token via email
    await sendEmail(updatedVendor.email, vendorResetPassEmailContent(resetToken));

    return res.status(200).json({
      message: "Reset password link sent",
      success: true,
      

    });
  } catch (error) {
    next(error);
  }
};

export default requestVendorPasswordReset;
