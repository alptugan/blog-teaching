import { Fragment, FunctionComponent } from "preact";
import { QuartzComponentConstructor, QuartzComponentProps } from "./types";
import { toJsxRuntime } from "hast-util-to-jsx-runtime";
import { jsx, jsxs } from "preact/jsx-runtime";

interface TimelineComponentType extends FunctionComponent<QuartzComponentProps> {
    beforeDOMLoaded?: string;
    afterDOMLoaded?: string;
}

const Timeline: QuartzComponentConstructor = () => {
    const TimelineComponent: TimelineComponentType = ({ fileData, tree }) => {

        const contentJsx = toJsxRuntime(tree, { Fragment, jsx, jsxs });

        return <div>{contentJsx}</div>;
    };

    // Assign properties before returning
    TimelineComponent.beforeDOMLoaded = `

      console.log("hello from before the page loads!");
    `;

    TimelineComponent.afterDOMLoaded = `
alert('button clicked!');
    `;

    return TimelineComponent;
};

export default Timeline;

