import express from "express";
import helmet from "helmet";
import ENVVARS from "@/shared/env.ts";
import { errorHandler } from "@/shared/middleware/error-handler.ts";
import { createHotlineFeature } from "hotline";
import { cors } from "@/shared/middleware/cors.ts";

function bootstrap() {
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
