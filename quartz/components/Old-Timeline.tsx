import { QuartzComponentConstructor, QuartzComponentProps } from "./types";
import { toJsxRuntime } from "hast-util-to-jsx-runtime";
import { Fragment, jsx, jsxs } from "preact/jsx-runtime";
import { visit } from "unist-util-visit";

const TruncateContent: QuartzComponentConstructor = () => {
    return function TruncateContentComponent({ fileData, tree }: QuartzComponentProps) {
        const aliases = fileData.frontmatter?.aliases || [];
        const hasTimelineAlias = aliases.includes("timeline");

        if (!hasTimelineAlias) {
            // If the alias is not "timeline," render the default content
            const contentJsx = toJsxRuntime(tree, { Fragment, jsx, jsxs });
            return null;
        }

        // If the alias is "timeline," truncate the content
        const maxLength = 200;
        let currentLength = 0;
        let isTruncated = false;

        visit(tree, "text", (node) => {
            if (isTruncated) {
                node.value = "";
                return;
            }


            const nodeLength = node.value.length;
            if (currentLength + nodeLength > maxLength) {
                node.value = node.value.slice(0, maxLength - currentLength) + "...";
                isTruncated = true;
            }
            currentLength += nodeLength;
        });

        console.log("OOOOOOOOOOO:", tree.children[0].children.);


        const truncatedContentJsx = toJsxRuntime(tree, { Fragment, jsx, jsxs });
        return <>{truncatedContentJsx}</>;
    };
};

export default TruncateContent;
