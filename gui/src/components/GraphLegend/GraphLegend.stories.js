// GraphLegend.story.js
import StoryBookPaddedWrapper from 'components/StoryBookPaddedWrapper/StoryBookPaddedWrapper'
import StoryBookSvgWrapper from 'components/StoryBookSvgWrapper/StoryBookSvgWrapper'

import GraphLegend from './GraphLegend';

export default {
  component: GraphLegend,
  decorators: [
    (Story) => (
      <StoryBookPaddedWrapper>
        <Story />
      </StoryBookPaddedWrapper>
    ),
  ],
  decorators: [
    (Story) => (
      <StoryBookPaddedWrapper>
        <Story />
      </StoryBookPaddedWrapper>
    ),
  ],
};

const SVG_CONTAINER_WIDTH = 300
const SVG_CONTAINER_WIDTH_HALF = SVG_CONTAINER_WIDTH / 2

const w = 180
const svgScale = `0 0 ${SVG_CONTAINER_WIDTH} ${SVG_CONTAINER_WIDTH}`

const baseGraphLegendProps = {
  i: 0,
  label: 'Storybook',
  labelValueSpacing: 5,
  legendTopOffset: 0,
  stroke: 'hsl(240, 80%, 40%)',
  strokeWidth: 2,
  value: 129,
  w,
  x: SVG_CONTAINER_WIDTH_HALF - (w / 2),
  xBase: SVG_CONTAINER_WIDTH_HALF,
}

export const Primary = {
  render: () => {
    return (
      <StoryBookSvgWrapper svgScale={svgScale}>
        <GraphLegend {...baseGraphLegendProps} />
        <GraphLegend {...baseGraphLegendProps} i={1} stroke='hsl(120, 80%, 40%)' />
      </StoryBookSvgWrapper>
    )
  }
};

export const DeepLegend = {
  render: () => {
    const props = {
      ...baseGraphLegendProps,
      h: 50,
    }
    return (
      <StoryBookSvgWrapper svgScale={svgScale}>
        <GraphLegend {...props} />
        <GraphLegend {...props} i={1} stroke='hsl(120, 80%, 40%)' />
      </StoryBookSvgWrapper>
    )
  }
};

export const ThickStroke = {
  render: () => {
    const props = {
      ...baseGraphLegendProps,
      strokeWidth: 5,
    }
    return (
      <StoryBookSvgWrapper svgScale={svgScale}>
        <GraphLegend {...props} />
        <GraphLegend {...props} i={1} stroke='hsl(120, 80%, 40%)' />
      </StoryBookSvgWrapper>
    )
  }
};

export const ValueOnly = {
  render: () => {
    const props = {
      ...baseGraphLegendProps,
      label: undefined
    }
    return (
      <StoryBookSvgWrapper svgScale={svgScale}>
        <GraphLegend {...props} />
        <GraphLegend {...props} i={1} stroke='hsl(120, 80%, 40%)' />
      </StoryBookSvgWrapper>
    )
  }
};

export const LabelOnly = {
  render: () => {
    const props = {
      ...baseGraphLegendProps,
      value: undefined
    }
    return (
      <StoryBookSvgWrapper svgScale={svgScale}>
        <GraphLegend {...props} />
        <GraphLegend {...props} i={1} stroke='hsl(120, 80%, 40%)' />
      </StoryBookSvgWrapper>
    )
  }
};

export const WidthAltered = {
  render: () => {
    const w = 240
    const props = {
      ...baseGraphLegendProps,
      w,
      x: SVG_CONTAINER_WIDTH_HALF - (w / 2),
      xBase: SVG_CONTAINER_WIDTH_HALF,
    }
    return (
      <StoryBookSvgWrapper svgScale={svgScale}>
        <GraphLegend {...props} />
        <GraphLegend {...props} i={1} stroke='hsl(120, 80%, 40%)' />
      </StoryBookSvgWrapper>
    )
  }
};

export const OffsetTop = {
  render: () => {
    const props = {
      ...baseGraphLegendProps,
      legendTopOffset: 100
    }
    return (
      <StoryBookSvgWrapper svgScale={svgScale}>
        <GraphLegend {...props} />
        <GraphLegend {...props} i={1} stroke='hsl(120, 80%, 40%)' />
      </StoryBookSvgWrapper>
    )
  }
};

export const WidtheBetweenLabelValue = {
  render: () => {
    const props = {
      ...baseGraphLegendProps,
      labelValueSpacing: 20
    }
    return (
      <StoryBookSvgWrapper svgScale={svgScale}>
        <GraphLegend {...props} />
        <GraphLegend {...props} i={1} stroke='hsl(120, 80%, 40%)' />
      </StoryBookSvgWrapper>
    )
  }
};

export const HighIs = {
  render: () => {
    const props = {
      ...baseGraphLegendProps,
    }
    return (
      <StoryBookSvgWrapper svgScale={svgScale}>
        <GraphLegend {...props} i={5} />
        <GraphLegend {...props} i={8} stroke='hsl(120, 80%, 40%)' />
      </StoryBookSvgWrapper>
    )
  }
};
