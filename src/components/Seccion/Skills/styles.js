import styled from 'styled-components'
import { animated } from 'react-spring'


const Frame = styled('div')`
  position: relative;
  padding: 4px 0px 0px 0px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow-x: hidden;
  vertical-align: middle;
  color: white;
  fill: white;
`

const Content = styled(animated.div)`
  will-change: transform, opacity, height;
  margin-left: 1.8rem;
  padding: 0px 0px 0px 14px;
  border-left: 1px dashed rgba(255, 255, 255, 0.4);
  overflow: hidden;
`

const toggle = {
  width: '1em',
  height: '1em',
  marginLeft: 10,
  cursor: 'pointer',
  verticalAlign: 'middle'
}

const ico = {
  width: '2em',
  height: '2em',
  margin: 0,
  marginRight: 10,
  cursor: 'pointer',
  verticalAlign: 'middle'
}

export { Frame, Content, toggle, ico }
