import { Block, Field } from "payload/types";
import imageItem from "./image.collections";
import imageBlock from "./imageBlock.collection";

let images: Field[] | any = (max: number) => {
  let obj = [];
  for (let i = 0; i < max; i++) {
    obj.push(
      imageItem({ required: i === 0 ? true : false, name: `Image${i + 1}` })
    );
  }
  return obj;
};

const sliderBlock: Block = {
  slug: "sliderBlock",
  imageAltText: "SliderBlock",

  fields: [
    {
      name: "slider",
      type: "array",
      minRows: 1,
      fields: [
        {
          name: "Text",
          type: "text",
          required: false,
        },
        {
          name: "images",
          type: "array",
          minRows: 1,
          maxRows: 1,
          fields: images(6),
        },
      ],
    },
  ],
};

export default sliderBlock;
