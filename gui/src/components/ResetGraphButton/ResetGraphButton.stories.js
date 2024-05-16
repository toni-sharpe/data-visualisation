// ResetGraphButton.story.js
import StoryBookPaddedWrapper from 'components/StoryBookPaddedWrapper/StoryBookPaddedWrapper'

import ResetGraphButton from './ResetGraphButton';

export default {
  component: ResetGraphButton,
  decorators: [
    (Story) => (
      <StoryBookPaddedWrapper info='The button is either grey and disabled when zoom is default, or a red X reset when it is resetable'>
        <Story />
      </StoryBookPaddedWrapper>
    ),
  ],
};

const baseResetGraphButtonProps = {
  extraStateFn: () => {},
  graphOffset: [0, 0],
  setGraphOffset: () => {},
  setZoom:  () => {},
  buttonSize: 'medium',
  zDefault: 1,
  zoom: 1,
}

export const ZoomIsAtDefaultNoReset = {
  render: () => {
    return (
      <ResetGraphButton
        {...baseResetGraphButtonProps}
      />
    )
  }
};

export const ZoomNotAtDefaultSoReset = {
  render: () => {
    const props = {
      ...baseResetGraphButtonProps,
      zoom: 2,
    }
    return (
      <ResetGraphButton
        {...props}
      />
    )
  }
};
