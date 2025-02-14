import * as React from 'react'
export type Props = {
  autoPlay: boolean
  height: number
  style: Object
  onClick?: () => void
  url: string
  width: number
}
export declare class Video extends React.Component<Props> {}
