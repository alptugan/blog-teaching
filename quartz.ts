import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"
import * as ExternalPlugin from "./.quartz/plugins"


ExternalPlugin.Explorer({
  filterFn: (node) => {
    // Hides the assets folder from the sidebar
    return node.displayName.toLowerCase() !== "assets"
  }
})

const config = await loadQuartzConfig()
export default config
export const layout = await loadQuartzLayout()
