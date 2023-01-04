import { OFSPlugin, OFSMessage, OFSOpenMessage } from "@ofs-users/plugin";
import { JSONTree } from "./utils/jsonview";

export class CustomPlugin extends OFSPlugin {
    open(data: OFSOpenMessage) {
        const tree = new JSONTree(JSON.stringify(data));
        const input_data = document.getElementById("input_data");
        if (!!input_data) {
            tree.render(input_data);
        }
    }
}
