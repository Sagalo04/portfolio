import React, { useRef, useEffect } from 'react'
import ResizeObserver from 'resize-observer-polyfill'

export function usePrevious(value) {
  const ref = useRef()
  useEffect(() => void (ref.current = value), [value])
  return ref.current
}

export function useMeasure() {
  const ref = React.useRef()
  const [bounds, set] = React.useState({ left: 0, top: 0, width: 0, height: 0 })
  const [ro] = React.useState(() => new ResizeObserver(([entry]) => set(entry.contentRect)))
  React.useEffect(() => {
    if (ref.current) ro.observe(ref.current)
    return () => ro.disconnect()
  },[])
  return [{ ref }, bounds]
}
