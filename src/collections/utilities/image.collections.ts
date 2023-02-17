import { Field } from "payload/types";
import { imagesProps } from "../../interfaces/imageProps.interface";

const imageItem = (props: imagesProps) => {
  let values: Field = {
    name: props.name,
    type: "upload",
    relationTo: "media",
    required: props.required,
  };
  return values;
};
export default imageItem;
