// DragGraphButton.story.js
import StoryBookPaddedWrapper from 'components/StoryBookPaddedWrapper/StoryBookPaddedWrapper'


import DragGraphButton from './DragGraphButton';

export default {
  component: DragGraphButton,
  decorators: [
    (Story) => (
      <StoryBookPaddedWrapper>
        <Story />
      </StoryBookPaddedWrapper>
    ),
  ],
};

const baseDragGraphButtonProps = {
  ariaLabel: 'Drag graph aria label',
  k: 'sbZoom',
  stateFn: () => {}
}

export const Primary = {
  render: () => {
    return (
      <DragGraphButton
        {...baseDragGraphButtonProps}
      />
    )
  }
};
