import express from "express";
import ENVVARS from "./shared/env";

async function bootstrap() {
  const app = express();

  app.get("/", (_req, res) => {
    res.status(200).json({
      message: "Server running",
      timestamp: new Date().toISOString(),
    });
  });

  app.listen(ENVVARS.PORT, () => {
    console.log(`Server listening on port ${ENVVARS.PORT}`);
  });
}

bootstrap();
