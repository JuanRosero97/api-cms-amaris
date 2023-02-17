import { CollectionConfig } from "payload/types";
import { isAdmin } from "../access/isAdmin";
import { isUpdating } from "../access/isAdmingOrEditor";
import { isLoggedIn } from "../access/isLoggin";

const Media: CollectionConfig = {
  slug: "media",
  admin: {
    useAsTitle: "alt",
  },
  access: {
    create: isAdmin,
    read: isLoggedIn,
    update: isUpdating,
    delete: isAdmin,
  },
  upload: {
    staticURL: "/assets",
    staticDir: "assets",
    disableLocalStorage: true,
    s3: {
      bucket: "imagesjuan",
      prefix: "images/cmsamaris", // files will be stored in bucket folder images/cmsamaris
      commandInput: {
        ACL: "public-read",
      },
    },
    adminThumbnail: ({ doc }) =>
      `https://imagesjuan.s3.us-east-1.amazonaws.com/images/cmsamaris/${doc.filename}`,
  },
  fields: [
    {
      name: "url",
      type: "text",
      access: {
        create: () => false,
      },
      admin: {
        disabled: true,
      },
      hooks: {
        afterRead: [
          ({ data: doc }) =>
            `https://imagesjuan.s3.us-east-1.amazonaws.com/images/${doc.type}/${doc.filename}`,
        ],
      },
    },
  ],
};
export default Media;
