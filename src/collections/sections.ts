import { CollectionConfig } from "payload/types";
import ColumnsArray from "./utilities/columnsArray";
import imageItem from "./utilities/image.collections";
import { isAdmin } from "../access/isAdmin";
import { isLoggedIn } from "../access/isLoggin";
import { isUpdating } from "../access/isAdmingOrEditor";

const Sections: CollectionConfig = {
  slug: "sections",
  access: {
    create: isAdmin,
    read: isLoggedIn,
    update: isUpdating,
    delete: isAdmin,
  },
  // admin: {
  //   disableDuplicate: true,
  // },
  admin: {
    useAsTitle: "name",
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
    },
    {
      name: "title",
      type: "text",
      required: false,
    },
    imageItem({ required: false, name: "BackgroundImage" }),
    ColumnsArray,
  ],
};

export default Sections;
