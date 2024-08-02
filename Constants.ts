let BASE_URL: string;

if (process.env.NODE_ENV == "production") {
  BASE_URL = "https://admin.baitalkwt.com";
} else {
  BASE_URL = "http://localhost:5000";
}

export { BASE_URL };
