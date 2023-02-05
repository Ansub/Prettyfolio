import { useEffect } from "react"
import mixpanel from "mixpanel-browser"

const useMixpanelTracking = ({ trackName }: { trackName: string }) => {
  useEffect(() => {
    mixpanel.init(process.env.NEXT_PUBLIC_MIXPANEL_ID || "", {
      debug: true,
      ignore_dnt: true,
    })
    mixpanel.track(trackName)
  }, [trackName])
}

export default useMixpanelTracking
