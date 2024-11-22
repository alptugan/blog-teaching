import { Fragment, FunctionComponent } from "preact";
import { QuartzComponentConstructor, QuartzComponentProps } from "./types";
import { toJsxRuntime } from "hast-util-to-jsx-runtime";
import { jsx, jsxs } from "preact/jsx-runtime";
import { visit } from "unist-util-visit";

// Define the structure of a timeline event
interface TimelineEvent {
    time: string;
    title?: string;
    description?: string;
    link?: string;
}

// Parser for the 'timeline' format
const parseTimeline = (source: string): TimelineEvent[] => {
    const events: TimelineEvent[] = [];
    const lines = source.split("\n");
    let currentEvent: Partial<TimelineEvent> = {};

    lines.forEach((line) => {
        if (line.startsWith("+ ")) {
            if (currentEvent.time) {
                events.push(currentEvent as TimelineEvent);
                currentEvent = {};
            }
            currentEvent.time = line.slice(2).trim();
        } else if (currentEvent.time && !currentEvent.title) {
            currentEvent.title = line.trim();
        } else if (currentEvent.title && !currentEvent.description) {
            currentEvent.description = line.trim();
        } else if (currentEvent.description && !currentEvent.link) {
            currentEvent.link = line.trim();
        }
    });

    if (currentEvent.time) {
        events.push(currentEvent as TimelineEvent);
    }

    return events;
};

// Parser for the 'timeline-labeled' format
const parseTimelineLabeled = (source: string): TimelineEvent[] => {
    const events: TimelineEvent[] = [];
    const regex = /^date:(.+?)(?:\ntitle:(.+?))?(?:\ncontent:(.+?))?(?=\ndate:|\n*$)/gims;
    let match;

    while ((match = regex.exec(source)) !== null) {
        events.push({
            time: match[1].trim(),
            title: match[2]?.trim(),
            description: match[3]?.trim(),
        });
    }

    return events;
};

const Timeline: QuartzComponentConstructor = () => {
    return function TimelineComponent({ fileData, tree }: QuartzComponentProps) {
        const content = fileData.text || "";
        const isLabeled = content.includes("date:");
        const events = isLabeled ? parseTimelineLabeled(content) : parseTimeline(content);

        return (
            <div class="block-language-timeline">
                <div className="timeline line-3 body-2 active-color-interactive-accent">
                    {events.map((event, index) => (
                        <div key={index} className="timeline-event">
                            <div className="time">{event.time}</div>
                            {event.title && <div className="title">{event.title}</div>}
                            {event.description && (
                                <div className="description">{event.description}</div>
                            )}
                            {event.link && (
                                <div className="link">
                                    <a href={event.link} target="_blank" rel="noopener noreferrer">
                                        {event.link}
                                    </a>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        );
    };
};

export default Timeline;