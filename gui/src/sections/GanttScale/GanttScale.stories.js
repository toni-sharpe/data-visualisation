// GanttScale.story.js
import StoryBookPaddedWrapper from 'components/StoryBookPaddedWrapper/StoryBookPaddedWrapper'


import GanttScale from './GanttScale';

export default {
  component: GanttScale,
  decorators: [
    (Story) => (
      <StoryBookPaddedWrapper isScreenWidth>
        <Story />
      </StoryBookPaddedWrapper>
    ),
  ],
};

const baseGanttScaleProps = {
  ariaLabel: 'Storybook graph',
  ganttHeight: '300',
  scale: {
    firstStep: 0,
    lastStep: 6,
    totalSteps: 6,
    stepDivision: 60,
  },
}

export const Primary = {
  render: () => {
    return (
      <GanttScale { ...baseGanttScaleProps } />
    )
  },
};

export const BigDetailedSteps = {
  render: () => {
    const props = {
      ...baseGanttScaleProps,
      scale: { firstStep: 0, lastStep: 2, stepDivision: 257, totalSteps: 2 },
    }
    return (
      <GanttScale { ...props } />
    )
  },
};

export const LotsOfTinyStepsIsProblematic = {
  render: () => {
    const props = {
      ...baseGanttScaleProps,
      scale: { firstStep: 0, lastStep: 120, stepDivision: 3, totalSteps: 120 },
    }
    return (
      <GanttScale { ...props } />
    )
  },
};

export const MaxStepsForNow = {
  render: () => {
    const props = {
      ...baseGanttScaleProps,
      scale: { firstStep: 0, lastStep: 20, stepDivision: 3, totalSteps: 20 },
    }
    return (
      <GanttScale { ...props } />
    )
  },
};

export const StepsWithHugeDivisions = {
  render: () => {
    const props = {
      ...baseGanttScaleProps,
      scale: { firstStep: 0, lastStep: 5, stepDivision: 12000, totalSteps: 5 },
    }
    return (
      <GanttScale { ...props } />
    )
  },
};
