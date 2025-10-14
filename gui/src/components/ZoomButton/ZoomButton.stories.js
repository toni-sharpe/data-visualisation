// ZoomButton.story.js
import StoryBookPaddedWrapper from 'components/StoryBookPaddedWrapper/StoryBookPaddedWrapper'

import ZoomButton from './ZoomButton';

export default {
  component: ZoomButton,
  decorators: [
    (Story) => (
      <StoryBookPaddedWrapper>
        <Story />
      </StoryBookPaddedWrapper>
    ),
  ],
};

const baseZoomButtonProps = {
  calcNewGraphOffset: () => {},
  graphKey: 'storyBook',
  persisted: { storyBook: { a: 1 } },
  setGraphOffset: () => {},
  setZoom: () => {},
  zoom: 2,
  zoomTo: 5,
}

export const Primary = {
  render: () => {
    return (
      <ZoomButton
        {...baseZoomButtonProps}
      />
    )
  }
};

export const DifferentNumber = {
  render: () => {
    const props = {
      ...baseZoomButtonProps,
      zoomTo: 10,
    }
    return (
      <ZoomButton
        {...props}
      />
    )
  }
};

export const SelectedWhenZoomIsTheSameAsZoomTo = {
  render: () => {
    const props = {
      ...baseZoomButtonProps,
      zoomTo: 2,
    }
    return (
      <ZoomButton
        {...props}
      />
    )
  }
};
