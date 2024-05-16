// YearSlider.story.js
import StoryBookPaddedWrapper from 'components/StoryBookPaddedWrapper/StoryBookPaddedWrapper'

import YearSlider from './YearSlider';

export default {
  component: YearSlider,
  decorators: [
    (Story) => (
      <StoryBookPaddedWrapper isScreenWidth>
        <Story />
      </StoryBookPaddedWrapper>
    ),
  ],
};

const baseYearSliderProps = {
  startYear: 1900,
  currentYear: 1965,
  setCurrentYear: () => {},
  endYear: 2000,
  yearStep: 1,
}

export const Primary = {
  render: () => {
    return (
      <YearSlider
        {...baseYearSliderProps}
      />
    )
  }
};

export const DefaultEndThisYear = {
  render: () => {
    const props = {
      ...baseYearSliderProps,
      endYear: undefined,
      startYear: 1960,
      buttonStep: 8,
    }
    return (
      <YearSlider
        {...props}
      />
    )
  }
};


export const FullyInThePast = {
  render: () => {
    const props = {
      ...baseYearSliderProps,
      startYear: 1950,
      endYear: 1980,
    }
    return (
      <YearSlider
        {...props}
      />
    )
  }
};

export const SmallButtonStep = {
  render: () => {
    const props = {
      ...baseYearSliderProps,
      startYear: 1950,
      endYear: 1992,
      buttonStep: 3,
    }
    return (
      <YearSlider
        {...props}
      />
    )
  }
};

export const LargeButtonStep = {
  render: () => {
    const props = {
      ...baseYearSliderProps,
      startYear: 1500,
      endYear: 2000,
      buttonStep: 100,
    }
    return (
      <YearSlider
        {...props}
      />
    )
  }
};
