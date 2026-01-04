import aj from "../lib/arcjet.js";
import { isSpoofedBot } from "@arcjet/inspect";

export const arcjetProtection = async (req, res, next) => {
  try {
    const decision = await aj.protect(req);

    if (decision.isDenied()) {
        if(decision.reason.isRateLimit()){
            return res.status(429).json({message:"Rate Limit eceeded! Please try again later..."})
        }
        else if (decision.reason.isBot()) {
            return res.status(403).json({message:"Bot access denied."})
        } else {
            return res.status(403).json({message:"Forbidden"});
        }
    } 

    if(decision.results.some(isSpoofedBot)){
        return res.status(403).json({
            error:"Spoofed bot detected",
            message:"Melicious bot activity detected"
        });
    }
        
    next();
  } catch (error) {
    console.error("Error in arcjet middleware: ", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
