let BASE_URL: string;


if (process.env.NODE_ENV == "production") {
  BASE_URL = process.env.BASE_URL || "http://ns3.actnepal.com.np:9000";
} else {
  BASE_URL = "http://localhost:5000";

}

export { BASE_URL };
