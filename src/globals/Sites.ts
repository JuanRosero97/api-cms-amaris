import { GlobalConfig } from "payload/types";
import { isUpdating } from "../access/isAdmingOrEditor";
import { isLoggedIn } from "../access/isLoggin";

import payload from "payload";

const getInfoSite = async () => {
  const posts = await payload.findGlobal({
    slug: "sites",
    showHiddenFields: true,
  });
  return posts;
};

const Site: GlobalConfig = {
  slug: "sites",
  access: {
    read: isLoggedIn,
    update: isUpdating,
  },
  endpoints: [
    {
      path: "/infoSite",
      method: "get",
      handler: async (req, res) => {
        const tracking = await getInfoSite();
        if (!tracking) return res.status(404).json({ message: "Not found" });
        else if (!tracking?.id)
          return res.status(202).json({ message: "Not results" });
        else return res.status(200).json(tracking);
      },
    },
  ],

  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "Section",
      type: "relationship",
      relationTo: "sections",
      hasMany: true,
      required: true,
    },
  ],
};
export default Site;
