import { buildConfig } from "payload/config";
import path from "path";
import Users from "./collections/Users";
import Sections from "./collections/Sections";
import Media from "./collections/Media";
import Slider from "./collections/Slider";
import Sites from "./globals/Sites";
import s3Upload from "payload-s3-upload";

export default buildConfig({
  serverURL: "http://localhost:3000",
  admin: {
    user: Users.slug,
  },
  collections: [
    // TodoLists,
    Users,
    // Sites,
    Sections,
    Media,
    // Slider,
  ],
  globals: [Sites],
  cors: ["http://localhost:8001"],
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, "generated-schema.graphql"),
  },
  plugins: [
    s3Upload({
      region: "us-east-1",
      credentials: {
        accessKeyId: process.env.API_KEY_AWS,
        secretAccessKey: process.env.API_SECRET_KEY_AWS,
      },
    }),
  ],
});
