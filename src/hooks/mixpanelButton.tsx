import { useCallback } from "react"
import mixpanel from "mixpanel-browser"

const useMixpanelButton = (trackName: string) => {
  const handleClick = useCallback(() => {
    mixpanel.init(process.env.NEXT_PUBLIC_MIXPANEL_ID || "", {
      debug: true,
      ignore_dnt: true,
  })
    mixpanel.track(trackName)
  }, [trackName])

  return handleClick


export default useMixpanelButton
