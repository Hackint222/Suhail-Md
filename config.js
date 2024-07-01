const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "23409162208200
  ";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_57_07_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTAsXG4gICAgICAgIDMyLFxuICAgICAgICA4NyxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTI5LFxuICAgICAgICA4MCxcbiAgICAgICAgNDksXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTY3LFxuICAgICAgICA3LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTA4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDM4LFxuICAgICAgICA3MyxcbiAgICAgICAgMTM3LFxuICAgICAgICAwLFxuICAgICAgICAyNixcbiAgICAgICAgNjMsXG4gICAgICAgIDk4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMzksXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTUzLFxuICAgICAgICA3M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NSxcbiAgICAgICAgMjA3LFxuICAgICAgICAzLFxuICAgICAgICAyOSxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDI0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDIxLFxuICAgICAgICA2NSxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDk2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDUxLFxuICAgICAgICA2NCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxOCxcbiAgICAgICAgMTIyLFxuICAgICAgICA3NCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMzksXG4gICAgICAgIDE0LFxuICAgICAgICAxMjksXG4gICAgICAgIDIxMyxcbiAgICAgICAgODcsXG4gICAgICAgIDEwOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgOCxcbiAgICAgICAgOTUsXG4gICAgICAgIDIwLFxuICAgICAgICA0NCxcbiAgICAgICAgOTksXG4gICAgICAgIDIzOSxcbiAgICAgICAgNjgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNDIsXG4gICAgICAgIDgyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTQxLFxuICAgICAgICA5MCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjAzLFxuICAgICAgICA1OSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDkyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDk5LFxuICAgICAgICAyMDksXG4gICAgICAgIDIyLFxuICAgICAgICAxODksXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTI4LFxuICAgICAgICA1NCxcbiAgICAgICAgMTIsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDU3LFxuICAgICAgICAxNyxcbiAgICAgICAgMTEsXG4gICAgICAgIDMsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTE3LFxuICAgICAgICAwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDEzLFxuICAgICAgICAxNzEsXG4gICAgICAgIDg2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDkxLFxuICAgICAgICAyMzUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTkxLFxuICAgICAgICAzNyxcbiAgICAgICAgNjFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMixcbiAgICAgICAgMTM3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDksXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDIwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDIwLFxuICAgICAgICA1OSxcbiAgICAgICAgNzMsXG4gICAgICAgIDExLFxuICAgICAgICA4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNTQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNjQsXG4gICAgICAgIDYyLFxuICAgICAgICA2MyxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDk5LFxuICAgICAgICA3OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5MixcbiAgICAgICAgNTEsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNDEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNzgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDksXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTMxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE0LFxuICAgICAgICA1OCxcbiAgICAgICAgMTczLFxuICAgICAgICAyMzYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNzAsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjU0LFxuICAgICAgICA5MixcbiAgICAgICAgMTc2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDI0NixcbiAgICAgICAgNTcsXG4gICAgICAgIDgyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDE0NixcbiAgICAgICAgODUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTE2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDg2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA3NixcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjksXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDIzNSxcbiAgICAgICAgODcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNjYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNjksXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDY0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIwLFxuICAgICAgICAzMSxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMSxcbiAgICAgICAgNDYsXG4gICAgICAgIDM4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTEyLFxuICAgICAgICAzOCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjgsXG4gICAgICAgIDQ2LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMzgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNjQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNjUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTc2LFxuICAgICAgICA0OCxcbiAgICAgICAgOTQsXG4gICAgICAgIDkxLFxuICAgICAgICAxMDQsXG4gICAgICAgIDgxLFxuICAgICAgICA0OSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDYsXG4gICAgICAgIDEzNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNjUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwienBtM2FTTE15SlpGVlJjd1UvUXVSTUVneTFWb2YyOVBvZG5QQkN2OWp0TT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ5MTYyMjA4MjAwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJFMEQyRDI2OEEyNDhCQkNDRjRFNUIxNDRDMTBEMUIyNlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTk4NDU4MzJcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwicFBpdWN4aHRRanVYVXhEUkhqYV9mQVwiLFxuICBcInBob25lSWRcIjogXCJkMzcyN2Y0OS1jN2UyLTQzMGItYmYyMi1mNTRlMDRjOTg5NjJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTAxLFxuICAgICAgMTU5LFxuICAgICAgNSxcbiAgICAgIDIwMCxcbiAgICAgIDEzMyxcbiAgICAgIDMsXG4gICAgICAxNDAsXG4gICAgICAyNDEsXG4gICAgICAyNDMsXG4gICAgICA3NixcbiAgICAgIDE5OSxcbiAgICAgIDE3LFxuICAgICAgMzIsXG4gICAgICA0MixcbiAgICAgIDIwMCxcbiAgICAgIDExLFxuICAgICAgMTE1LFxuICAgICAgMTUzLFxuICAgICAgODcsXG4gICAgICAyMjdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTMwLFxuICAgICAgMTQ3LFxuICAgICAgODUsXG4gICAgICAyNDgsXG4gICAgICAxNzQsXG4gICAgICAyNDUsXG4gICAgICAxNzgsXG4gICAgICAxNDgsXG4gICAgICAxODIsXG4gICAgICAxNjMsXG4gICAgICAxMDYsXG4gICAgICA1MCxcbiAgICAgIDEyLFxuICAgICAgMzAsXG4gICAgICAyNTUsXG4gICAgICA4LFxuICAgICAgMTIxLFxuICAgICAgNTMsXG4gICAgICA5MCxcbiAgICAgIDIwNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJXUDVTUENLTlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTE2MjIwODIwMDoxMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjQ4MTAzMzY2MDc0NDcxOjEwQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1AyK2pyNEhFTCtIaTdRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiVEV4N3R0Ri9HK29JYW4rQnVtZ3NGN1hsenBYbXdIaEtURUsrVmZxY2syaz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJHV3VtaU0vUlRSZ3hkTkttZ3FLMitxeklLRnRqS3dONUVpZEZxQTBrUEZQejJoYThGMFpBakxYaVorMXFvVlk1MExPTlZMbi9zK3hLT2l6SG84OCtBQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJob0xBWVVtU1dOTGZCNUNDazZRWmU5TUtWbkFUd1pWLzBkUmFjM1dQUUZmNzNhK0dKV3ZBeXZaSEZmQUtzWndsUGFFQU9Jb3UwcGJTeS9XQ1FuNStpQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MTYyMjA4MjAwOjEwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxMDVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxOTg0NTgyNyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUFNMVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQU0xLmpzb24iOiAie1wia2V5RGF0YVwiOlwiejFiR09TS1Y2R3dQVnU0K29CMU5CdTBEL3NkZ1BXcHBFdTFQYTBrSU1oZz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMDA5MzA5MDUzLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTk4NDU4MzI2NjhcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
