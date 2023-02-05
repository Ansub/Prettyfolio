import { useCallback } from "react"
import mixpanel from "mixpanel-browser"

const useMixpanelButton = (trackName: string) => {
  const handleClick = useCallback(() => {
    mixpanel.track(trackName)
  }, [trackName])

  return handleClick
}

export default useMixpanelButton
