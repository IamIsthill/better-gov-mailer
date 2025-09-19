import express from "express";
import ENVVARS from "./shared/env";
import { errorHandler } from "./shared/middleware/error-handler";
import { createHotlineFeature } from "./hotline";

async function bootstrap() {
  const app = express();
  const hotlineFeature = createHotlineFeature();

  app.use(express.json());

  app.get("/", (_req, res) => {
    res.status(200).json({
      message: "Server running",
      timestamp: new Date().toISOString(),
    });
  });

  app.use("/", hotlineFeature.router);

  app.use(errorHandler);

  app.listen(ENVVARS.PORT, () => {
    console.log(`Server listening on port ${ENVVARS.PORT}`);
  });
}

bootstrap();
