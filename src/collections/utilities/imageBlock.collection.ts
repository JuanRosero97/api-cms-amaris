import { Block } from "payload/types";
import imageItem from "./image.collections";

const imageBlock: Block = {
  slug: "image",
  imageAltText: "Image",
  fields: [
    {
      name: "Text",
      type: "text",
      required: false,
    },
    imageItem({ required: true, name: "Image" }),
  ],
};

export default imageBlock;
