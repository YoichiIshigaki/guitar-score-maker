type _Config = {
	apiUrl: string;
	s3Url: string;
	appName: string;
	logChannel: string;
	env: string;
	jsonServer: boolean;
	magicLinkPubKey: string;
};

const Config:_Config = {
	apiUrl: process.env.REACT_APP_API_URL || "",
	s3Url: process.env.REACT_APP_S3_URL || "",
	appName: process.env.REACT_APP_APP_NAME || "",
	logChannel: process.env.REACT_APP_LOG_CHANNEL || "",
	env: process.env.REACT_APP_ENV || "",
	jsonServer: Boolean(process.env.REACT_APP_JSON_SERVER),
	magicLinkPubKey: process.env.REACT_APP_MAGIC_LINK_PUB_KEY || ""
};

export default Config;
