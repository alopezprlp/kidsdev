/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useState } from 'react'

// LOCAL IMPORTS
import { Device } from './Device'

export enum DeviceNames {
  MOBILE = 'mobile',
  TABLET = 'tablet',
  LAPTOP = 'laptop',
  DESKTOP = 'desktop'
}

export { Device }

export const Devices = {
  [DeviceNames.MOBILE]: new Device(DeviceNames.MOBILE, 0, 768),
  [DeviceNames.TABLET]: new Device(DeviceNames.TABLET, 769, 1023),
  [DeviceNames.LAPTOP]: new Device(DeviceNames.LAPTOP, 1024, 1900),
  [DeviceNames.DESKTOP]: new Device(DeviceNames.DESKTOP, 1901, Number.MAX_SAFE_INTEGER),
}

export const useDevice = (device: Device) => {
  const [match, setMatch] = useState<boolean>(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const mediaQueryList = window.matchMedia(device.mediaQuery)

      setMatch(mediaQueryList.matches)

      const handleDeviceChange = (e: MediaQueryListEvent) => {
        setMatch(e.matches)
      }

      if (mediaQueryList.addEventListener) {
        mediaQueryList.addEventListener('change', handleDeviceChange)

        return () => {
          mediaQueryList.removeEventListener('change', handleDeviceChange)
        }
      } else {
        mediaQueryList.addListener(handleDeviceChange)

        return () => {
          mediaQueryList.removeListener(handleDeviceChange)
        }
      }
    }
  }, [])

  return match
}

export const useResponsive = () => {
  const isMobile = useDevice(Devices.mobile)
  const isTablet = useDevice(Devices.tablet)
  const isLaptop = useDevice(Devices.laptop)
  const isDesktop = useDevice(Devices.desktop)

  const getCurrentDevice = () => {
    if (isMobile) {
      return Devices.mobile
    }

    if (isTablet) {
      return Devices.tablet
    }

    if (isLaptop) {
      return Devices.laptop
    }

    if (isDesktop) {
      return Devices.desktop
    }

    return Devices[DeviceNames.MOBILE];
  }

  return getCurrentDevice()
}

export default useDevice
