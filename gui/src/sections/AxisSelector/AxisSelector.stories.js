// AxisSelector.story.js
import StoryBookPaddedWrapper from 'components/StoryBookPaddedWrapper/StoryBookPaddedWrapper'

import AxisSelector from './AxisSelector';

export default {
  component: AxisSelector,
  decorators: [
    (Story) => (
      <StoryBookPaddedWrapper padding={'50px 200px'}>
        <Story />
      </StoryBookPaddedWrapper>
    ),
  ],
};

const baseAxisSelectorProps = {
  axis: 'x',
  currentAxisSelection: null,
  curreAxisSelection: null,
  setCurrentAxisSelection: () => {},
  defineDurationOptions: false,
  disabledSelection: null,
  showDurationOptions: false,
}

export const Basic = {
  render: () => {
    return (
      <AxisSelector {...baseAxisSelectorProps} />
    )
  }
};

export const Selected = {
  render: () => {
    const props = {
      ...baseAxisSelectorProps,
      currentAxisSelection: 'ps_2',
    }
    return (
      <AxisSelector {...props} />
    )
  }
};

export const RightAligned = {
  render: () => {
    const props = {
      ...baseAxisSelectorProps,
      align: 'right',
      currentAxisSelection: 'ps_2',
    }
    return (
      <AxisSelector {...props} />
    )
  }
};

export const PrimaryMarkLeftAligned = {
  render: () => {
    const props = {
      ...baseAxisSelectorProps,
      currentAxisSelection: 'ps_2',
      primaryMark: 'ps_1',
    }
    return (
      <AxisSelector {...props} />
    )
  }
};

export const PrimaryMarkRightAligned = {
  render: () => {
    const props = {
      ...baseAxisSelectorProps,
      align: 'right',
      currentAxisSelection: 'ps_2',
      primaryMark: 'ps_3',
    }
    return (
      <AxisSelector {...props} />
    )
  }
};

export const MultiSelect = {
  render: () => {
    const props = {
      ...baseAxisSelectorProps,
      currentAxisSelection: [
        'ps_2',
        'ps_3',
        'path_sev',
      ]
    }
    return (
      <AxisSelector {...props} />
    )
  }
};

export const DisabledSelection = {
  render: () => {
    const props = {
      ...baseAxisSelectorProps,
      currentAxisSelection: 'op_rating',
      disabledSelection: [
        'ms_1',
        'ms_2',
        'ps_1',
        'ps_2',
        'ps_3',
        'path_sev',
      ]
    }
    return (
      <AxisSelector {...props} />
    )
  }
};

export const WithDurationOptions = {
  render: () => {
    const props = {
      ...baseAxisSelectorProps,
      showDurationOptions: true,
    }
    return (
      <AxisSelector {...props} />
    )
  }
};

export const DurationOptionsDefined = {
  render: () => {
    const props = {
      ...baseAxisSelectorProps,
      defineDurationOptions: true,
    }
    return (
      <AxisSelector {...props} />
    )
  }
};
