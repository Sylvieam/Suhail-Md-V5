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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text"  // "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_57_10_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNTMsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTY4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE0MixcbiAgICAgICAgNjIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDc0LFxuICAgICAgICAxOCxcbiAgICAgICAgMjA3LFxuICAgICAgICAyNyxcbiAgICAgICAgMzgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTUwLFxuICAgICAgICA5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNjgsXG4gICAgICAgIDY5LFxuICAgICAgICAyNDksXG4gICAgICAgIDMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjMxLFxuICAgICAgICA1NSxcbiAgICAgICAgMTEsXG4gICAgICAgIDMyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDY3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTkwLFxuICAgICAgICAzMCxcbiAgICAgICAgNzAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDczLFxuICAgICAgICAxNjYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgOTQsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTQyLFxuICAgICAgICA2MSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE3MixcbiAgICAgICAgNzAsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNTYsXG4gICAgICAgIDRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTMwLFxuICAgICAgICA5NyxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNzksXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjQwLFxuICAgICAgICA0OSxcbiAgICAgICAgOTYsXG4gICAgICAgIDgsXG4gICAgICAgIDYsXG4gICAgICAgIDM5LFxuICAgICAgICA2LFxuICAgICAgICA3NixcbiAgICAgICAgODgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxODMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNzYsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTQyLFxuICAgICAgICA3NSxcbiAgICAgICAgOTQsXG4gICAgICAgIDU3LFxuICAgICAgICAzOSxcbiAgICAgICAgOTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjI5LFxuICAgICAgICA3MCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjAxLFxuICAgICAgICAyOSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTk0LFxuICAgICAgICA3MSxcbiAgICAgICAgMTUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNzUsXG4gICAgICAgIDY0LFxuICAgICAgICAzNyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNixcbiAgICAgICAgMTk5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAzOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxOTcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMjYsXG4gICAgICAgIDgzLFxuICAgICAgICA0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTQ1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMyxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTM1LFxuICAgICAgICA1NyxcbiAgICAgICAgNixcbiAgICAgICAgMTE3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMzUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjQ0LFxuICAgICAgICA4OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNTQsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTcsXG4gICAgICAgIDc0LFxuICAgICAgICA5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIwNixcbiAgICAgICAgNjcsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMyxcbiAgICAgICAgMTAwLFxuICAgICAgICA4OCxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNixcbiAgICAgICAgNDIsXG4gICAgICAgIDc2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIwLFxuICAgICAgICAxNjksXG4gICAgICAgIDY1LFxuICAgICAgICAxNzksXG4gICAgICAgIDU2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxMTNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgOTVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyOCxcbiAgICAgICAgMjQ2LFxuICAgICAgICA3NixcbiAgICAgICAgMTczLFxuICAgICAgICA5OSxcbiAgICAgICAgMjQ1LFxuICAgICAgICA0NixcbiAgICAgICAgMjAzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMzMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjQ0LFxuICAgICAgICA0OSxcbiAgICAgICAgMjUwLFxuICAgICAgICA4NyxcbiAgICAgICAgMjExLFxuICAgICAgICA5MCxcbiAgICAgICAgMTgwLFxuICAgICAgICA1OCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNjQsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjI1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNjcsXG4gICAgICAgIDM5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNDgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTU3LFxuICAgICAgICA5MCxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE1NixcbiAgICAgICAgODUsXG4gICAgICAgIDkyLFxuICAgICAgICA5MyxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNTAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTYxLFxuICAgICAgICA4NCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNjAsXG4gICAgICAgIDg3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMSxcbiAgICAgICAgNDQsXG4gICAgICAgIDUwLFxuICAgICAgICAxNSxcbiAgICAgICAgMTk5LFxuICAgICAgICAzOSxcbiAgICAgICAgMTM1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ4ZklydDNyTkFUalhLbHdWU0pRd1hzeWlCQTZTTTMwRjY1YkRLRkxmNXJBPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ0dE5vSFFMdFIyZUFIcGNPVmN5Vm13XCIsXG4gIFwicGhvbmVJZFwiOiBcImVkZjM1NWQ3LTNkMzUtNDM1YS1hMzU4LTU4OTIxZmFkNjA0MFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA0NyxcbiAgICAgIDk3LFxuICAgICAgMTc2LFxuICAgICAgNTgsXG4gICAgICAyMDYsXG4gICAgICA1MCxcbiAgICAgIDExNCxcbiAgICAgIDcwLFxuICAgICAgNDUsXG4gICAgICAxODksXG4gICAgICAxNTgsXG4gICAgICAzNCxcbiAgICAgIDE2MCxcbiAgICAgIDE0OCxcbiAgICAgIDM5LFxuICAgICAgMTEsXG4gICAgICA5NCxcbiAgICAgIDI1MyxcbiAgICAgIDU2LFxuICAgICAgNzVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTAzLFxuICAgICAgNzAsXG4gICAgICAyMTcsXG4gICAgICA4MSxcbiAgICAgIDE4MSxcbiAgICAgIDI1MSxcbiAgICAgIDIwNCxcbiAgICAgIDEwNixcbiAgICAgIDEzOSxcbiAgICAgIDM3LFxuICAgICAgNjYsXG4gICAgICAxMDksXG4gICAgICAyMTksXG4gICAgICAxMzAsXG4gICAgICAyMjMsXG4gICAgICA1MixcbiAgICAgIDE5NixcbiAgICAgIDE5MCxcbiAgICAgIDE3OSxcbiAgICAgIDM4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkZYMjdXU1pYXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNDIwNjgzMDgzNzk6MTBAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCI8ZMOLbWlHVHk+w4bDj03hlZfRj9GUzr3hlZdcIixcbiAgICBcImxpZFwiOiBcIjIwNzU3MTk3Nzc2NDk2OToxMEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMdStuL2tFRUlyWDdiZ0dHQU1nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjhOUUswdkVscDRFSmpNSDYwUWJFNjFMcEJlQm5oMEpReG9OeFNFOFpaa0E9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiKzJHbk1qdy8yOEJlSEhnaWR0OG1jZGQxV3N2c1ZScE9HSjB0b1Iwa0taUklrZ0NwTDRuTmdxV3BTN1JYYmoyeXA1QzBJN0ZuOVNpUi8zamRkbjJyQnc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiVmJKWmY2WUlFZFJFbHN2VEhuWHR1UkIxODZiWjVUeVRZMmk2K0w0ZVJSV0E2OGgrQzk3UU93YXRtR0pSaHp0NmR3YTU1QnBjVmNYY2MyakRTZ3pDaHc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjQyMDY4MzA4Mzc5OjEwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgNixcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA2NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI5ODUwMjU1LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRGhKXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFEaEouanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJiZG92UkFrK2lrQmkvM1AyTEUvckFoajQ1VXNNTVlGMzNQYk1mK0M0M1B3PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEzMjgwMTMxMTUsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyOTcxNzI2NjkyOFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.9",
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
