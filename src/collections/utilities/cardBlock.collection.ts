import { Block } from "payload/types";
import imageItem from "./image.collections";

const cardBlock: Block = {
  slug: "card",
  imageAltText: "Card",
  fields: [
    imageItem({ required: true, name: "Image" }),
    {
      name: "Title",
      type: "text",
      required: false,
    },
    {
      name: "Subtitle",
      type: "text",
      required: false,
    },
  ],
};

export default cardBlock;
