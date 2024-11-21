/*import { htmlToJsx } from "../../util/jsx"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "../types"

const Content: QuartzComponent = ({ fileData, tree }: QuartzComponentProps) => {
  const content = htmlToJsx(fileData.filePath!, tree)
  const classes: string[] = fileData.frontmatter?.cssclasses ?? []
  const classString = ["popover-hint", ...classes].join(" ")
  return <article class={classString}>{content}</article>
}

export default (() => Content) satisfies QuartzComponentConstructor
*/
import { QuartzComponentConstructor, QuartzComponentProps } from "../types";
import { toJsxRuntime } from "hast-util-to-jsx-runtime";
import { Fragment, jsx, jsxs } from "preact/jsx-runtime";
import Timeline from "../Timeline";
import { htmlToJsx } from "../../util/jsx";

const Content: QuartzComponentConstructor = () => {
  return function ContentComponent({ fileData, tree }: QuartzComponentProps) {
    const aliases = fileData.frontmatter?.aliases || [];
    const hasTimelineAlias = aliases.includes("timeline");
    const content = htmlToJsx(fileData.filePath!, tree)

    if (hasTimelineAlias) {
      // Render the Timeline component if the alias "timeline" is present
      const TimelineComponent = Timeline();
      return <TimelineComponent fileData={fileData} tree={tree} />;
    }

    // Default content rendering
    const contentJsx = toJsxRuntime(tree, { Fragment, jsx, jsxs });
    return <>{contentJsx}</>;
  };
};

export default Content;