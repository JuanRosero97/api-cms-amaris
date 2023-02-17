import { CollectionConfig, Field } from "payload/types";
import { isAdmin } from "../access/isAdmin";
import { isUpdating } from "../access/isAdmingOrEditor";
import { isLoggedIn } from "../access/isLoggin";
//import imageItem from "./utilities/image.collections";
import imageBlock from "./utilities/imageBlock.collection";

// let images: Field[] | any = (max: number) => {
//   let obj = [];
//   for (let i = 0; i < max; i++) {
//     obj.push(imageItem({ required: true, name: `Image${i + 1}` }));
//   }
//   return obj;
// };

const Slider: CollectionConfig = {
  slug: "slider",
  admin: {
    useAsTitle: "title",
  },
  access: {
    create: isAdmin,
    read: isLoggedIn,
    update: isUpdating,
    delete: () => {
      return false;
    },
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "Text",
      type: "text",
      required: false,
    },
    {
      name: "images",
      type: "blocks",
      minRows: 6,
      maxRows: 6,
      blocks: [imageBlock],
    },
    // imageItem({ required: true, name: "Image" }),
    // {
    //   name: "images",
    //   type: "array",
    //   minRows: 1,
    //   maxRows: 1,
    //   fields: images(6),
    // },
  ],
};
export default Slider;
