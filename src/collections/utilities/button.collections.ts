import { Block } from "payload/types";
import { validateHexColor } from "../../validations/color.validation";

const buttonBlock: Block = {
  slug: "button", // required
  imageAltText: "Button",
  fields: [
    {
      name: "Text",
      type: "text",
      required: true,
    },
    {
      name: "Color",
      type: "text",
      validate: validateHexColor,
      required: true,
    },
    {
      name: "Border",
      type: "text",
      required: false,
      defaultValue: "60px",
    },
  ],
};

export default buttonBlock;
