import { ComponentChildren } from "preact"
import { htmlToJsx } from "../../util/jsx"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "../types"
import { wikilinkRegex } from "../../plugins/transformers/ofm"

const Content: QuartzComponent = ({ fileData, tree }: QuartzComponentProps) => {
  let bannerElement = null
  if (fileData.frontmatter?.banner) {
    const banner = fileData.frontmatter.banner as string
    const match = wikilinkRegex.exec(banner);
    if (match) {
      const filename = match[1] as string;
      let imagePath = "../assets/covers/" + filename;
      bannerElement = <img src={imagePath} alt="Banner" style={{ width: "100%" }} className="cover-image" />;
    }
  }

  const content = htmlToJsx(fileData.filePath!, tree) as ComponentChildren
  const classes: string[] = fileData.frontmatter?.cssclasses ?? []
  const classString = ["popover-hint", ...classes].join(" ")
  return <article class={classString}>
    {bannerElement}
    {content}
  </article>
}

export default (() => Content) satisfies QuartzComponentConstructor
