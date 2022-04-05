import { CirclePicker } from "react-color";
import styled from "styled-components";
const WrapperPicker = styled.div`
  .circle-picker {
    span {
      div {
        span {
          div {
            border: 1px solid #000;
          }
        }
      }
    }
  }
`;

export default function ColorPicker({ getColor, color }) {
  const colors = [
    "rgb(242,139,175)",
    "rgb(251,188,4)",
    "rgb(255,244,117)",
    "rgb(204,255,144)",
    "rgb(167,255,235)",
    "rgb(203,240,248)",
    "rgb(174,203,250)",
    "rgb(215,174,251)",
    "rgb(253,207,232)",
    "rgb(230,201,168)",
    "rgb(255,255,255)",
    "rgb(232,234,237)",
  ];
  return (
    <WrapperPicker>
      <CirclePicker
        width="100%"
        hex={color}
        circleSize={27}
        colors={colors}
        color={color}
        onChangeComplete={getColor}
      />
    </WrapperPicker>
  );
}
