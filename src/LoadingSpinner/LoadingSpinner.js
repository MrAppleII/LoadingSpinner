import React, { Component } from "react"
import PropTypes from "prop-types"
import styled, { keyframes } from "styled-components"
/*
  Props for Usage:
  width: Example: "2px", Sets how thick the lines in the spinner are. 
  height: Example: "15px", sets the length of the spikes. 
  margin: Example: "5px", sets the margin in spinner.
  Color: Example: "#00000", can be any valid css color. 
  BorderRadius: Example:"4px", sets the roundess of the spikes. 
*/
class LoadingSpinner extends Component {
  constructor(props, context) {
    super(props, context)
  }

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    const { props, state } = this
    try {
      return props.showLoadingIcon ? (
        <SpinnerWrapper>
          <El1 />
          <El2 />
          <El3 />
          <El4 />
          <El5 />
          <El6 />
          <El7 />
          <El8 />
        </SpinnerWrapper>
      ) : null
    } catch (e) {
      if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
        console.log(e)
      }
      return (
        <DivWrapper>
          <SpinWrapper />
        </DivWrapper>
      )
    }
  }
}
LoadingSpinner.defaultProps = {
  width: "2px",
  height: "20px",
  margin: "0px",
  Color: "#000000",
  BorderRadius: "4px",
}
LoadingSpinner.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  margin: PropTypes.string,
  Color: PropTypes.string,
  BorderRadius: PropTypes.string,
}
const radius = 20
const quarter = radius / 2 + radius / 5.5
const SpinningAnimation = keyframes`
  from {
    transform: translate3d(-50%, -50%, 0) rotate(0deg);
  }
  to {
    transform: translate3d(-50%, -50%, 0) rotate(360deg);
  }

`
const SpinWrapper = styled.div`
  opacity: 1;
  position: relative;
  transition: opacity linear 0.1s;
  &::before {
    animation: ${SpinningAnimation} linear infinite;
    animation-duration: 1s;
    border: solid 3px #eee;
    border-bottom-color: #000;
    border-radius: 50%;
    content: "";
    height: 80px;
    left: 50%;
    opacity: inherit;
    position: absolute;
    top: 50%;
    transform: translate3d(-50%, -50%, 0);
    transform-origin: center;
    width: 80px;
    will-change: transform;
  }
`
const DivWrapper = styled.div`
  margin: auto;
  position: relative;
  height: 40px;
  flex-grow: 1;
`
const SpinnerWrapper = styled.div`
  position: relative;
  margin: auto;
  font-size: 0;
  top: ${radius}px;
  left: ${radius}px;
  width: ${radius * 3}px;
  height: ${radius * 3}px;
`
/************* Fade Animation for the spinner */
const fade = keyframes`
  50% {opacity: 0.3} 
  100% {opacity: 1}
`

const BaseElement = styled.div`
  position: absolute;
  width: ${props => props.width || "2px"};
  height: ${props => props.height || "20px"};
  margin: ${props => props.margin || "0px"};
  background-color: ${props => props.Color || "#000000"};
  border-radius: ${props => props.BorderRadius || "4px"};
  transition: 2s;
  animation-fill-mode: "both";
`
const El1 = styled(BaseElement)`
  animation: ${fade} 1.2s ${1 * 0.12}s infinite ease-in-out;
  top: ${radius}px;
  left: 0;
`
const El2 = styled(BaseElement)`
  animation: ${fade} 1.2s ${2 * 0.12}s infinite ease-in-out;
  top: ${quarter}px;
  left: ${quarter}px;
  transform: rotate(-45deg);
`
const El3 = styled(BaseElement)`
  animation: ${fade} 1.2s ${3 * 0.12}s infinite ease-in-out;
  top: 0;
  left: ${radius}px;
  transform: rotate(90deg);
`
const El4 = styled(BaseElement)`
  animation: ${fade} 1.2s ${4 * 0.12}s infinite ease-in-out;
  top: ${-quarter}px;
  left: ${quarter}px;
  transform: rotate(45deg);
`
const El5 = styled(BaseElement)`
  animation: ${fade} 1.2s ${5 * 0.12}s infinite ease-in-out;
  top: ${-radius}px;
  left: 0;
`
const El6 = styled(BaseElement)`
  animation: ${fade} 1.2s ${6 * 0.12}s infinite ease-in-out;
  top: ${-quarter}px;
  left: ${-quarter}px;
  transform: rotate(-45deg);
`
const El7 = styled(BaseElement)`
  animation: ${fade} 1.2s ${7 * 0.12}s infinite ease-in-out;
  top: 0;
  left: ${-radius}px;
  transform: rotate(90deg);
`
const El8 = styled(BaseElement)`
  animation: ${fade} 1.2s ${8 * 0.12}s infinite ease-in-out;
  top: ${quarter}px;
  left: ${-quarter}px;
  transform: rotate(45deg);
`

/********** End CSS Elements of Spinner */
export default LoadingSpinner
