let BASE_URL: string;

if (process.env.NODE_ENV !== "production") {
  BASE_URL = "http://localhost:5000";
} else {
  BASE_URL = process.env.BASE_URL || "http://202.51.82.22:5000";
}

export { BASE_URL };
