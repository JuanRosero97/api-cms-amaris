import { ArrayField } from "payload/types";
import textBlock from "./text.collections";
import buttonBlock from "./button.collections";
import imageBlock from "./imageBlock.collection";
import cardBlock from "./cardBlock.collection";
import sliderBlock from "./sliderBlock.collections";

const ColumnsArray: ArrayField = {
  name: "columns",
  type: "array",
  minRows: 1,
  maxRows: 3,
  fields: [
    {
      name: "Component",
      type: "blocks",
      minRows: 0,
      maxRows: 3,
      blocks: [textBlock, buttonBlock, imageBlock, cardBlock, sliderBlock],
    },
  ],
};

export default ColumnsArray;
