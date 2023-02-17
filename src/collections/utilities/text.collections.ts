import { Block } from "payload/types";

const textBlock: Block = {
  slug: "text",
  imageAltText: "Text",
  fields: [
    {
      name: "Text",
      type: "text",
      required: true,
    },
    {
      name: "Size",
      //   type: "text",
      type: "select",
      hasMany: false,
      required: false,
      defaultValue: "medium",
      options: [
        {
          label: "xx-large",
          value: "xx-large",
        },
        {
          label: "x-large",
          value: "x-large",
        },
        {
          label: "large",
          value: "large",
        },
        {
          label: "medium",
          value: "medium",
        },
        {
          label: "small",
          value: "small",
        },
        {
          label: "x-small",
          value: "x-small",
        },
        {
          label: "xx-small",
          value: "xx-small",
        },
      ],
    },
  ],
};

export default textBlock;
