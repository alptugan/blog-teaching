import * as ExternalPlugin from "./.quartz/plugins"
import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"


const config = await loadQuartzConfig()
export default config
export const layout = await loadQuartzLayout()

ExternalPlugin.Explorer({
  filterFn: (node) => {
    // Hides the assets folder from the sidebar
    return node.displayName.toLowerCase() !== "assets"
  }
})