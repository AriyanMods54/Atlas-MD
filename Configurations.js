require("dotenv").config();

let gg = process.env.MODS;
if (!gg) {
  gg = "923555341506";   // You can replace this number with yours //
}


global.owner = gg.split(",");
global.mongodb = process.env.MONGODB || "mongodb+srv://sam:sam@cluster0.7hwttoz.mongodb.net/?retryWrites=true&w=majority";
global.sessionId = process.env.SESSION_ID || "ok";
global.prefa = process.env.PREFIX || "-";
global.tenorApiKey = process.env.TENOR_API_KEY || "AIzaSyCyouca1_KKy4W_MG1xsPzuku5oa8W358c";
global.packname = process.env.PACKNAME || `ARIYAN-BOT`;
global.author = process.env.AUTHOR || "by: ARIYAN AHMED";
global.port = process.env.PORT || "10000";
global.openAiAPI = process.env.OPENAI_API || "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";
global.owner = gg.split(",");

module.exports = {
  mongodb: global.mongodb,
};
