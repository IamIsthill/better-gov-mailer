import express from "express";
import ENVVARS from "./shared/env";
import { errorHandler } from "./shared/middleware/error-handler";
import { createHotlineFeature } from "./hotline";
import helmet from "helmet";
import { cors } from "./shared/middleware/cors";

async function bootstrap() {
  const app = express();
  const hotlineFeature = createHotlineFeature();

  app.use(express.json());
  app.use(helmet());
  app.use(cors());

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
