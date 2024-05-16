import { rmZoomClass, rmMenuClass, onKeyDownRegionHandler } from './UtilKeyboard'

describe('rmMenuClass', () => {
  it('should remove open class from .js-header', () => {
    const removeMock = jest.fn()
    const querySelectorMock = jest.fn().mockReturnValueOnce({ classList: { remove: removeMock }})
    document.querySelector = querySelectorMock
    rmMenuClass();
    expect(querySelectorMock).toHaveBeenCalledWith('.js-header')
    expect(removeMock).toHaveBeenCalledWith('open')
  });
});

describe('onKeyDownRegionHandler', () => {
  it('should not break if theres no key region on screen for the letter', () => {
    const removeMock = jest.fn()
    const focusMock = jest.fn()
    const toggleMock = jest.fn()

    const querySelectorMock = jest.fn().mockReturnValue({
      NOT_THERE: {
        toggle: toggleMock,
      },
      focus: focusMock,
    })

    document.querySelector = querySelectorMock

    const handler = onKeyDownRegionHandler();
    handler({ keyCode: 77 });

    // this should just not fail, we expect nothing, so no expects
  })

  it('should handle key code 77 (m)', () => {
    const removeMock = jest.fn()
    const focusMock = jest.fn()
    const toggleMock = jest.fn()

    const querySelectorMock = jest.fn().mockReturnValue({
      classList: {
        toggle: toggleMock,
      },
      focus: focusMock,
    })

    document.querySelector = querySelectorMock

    const handler = onKeyDownRegionHandler();
    handler({ keyCode: 77 });

    expect(querySelectorMock).toHaveBeenCalledWith('.js-header')
    expect(querySelectorMock).toHaveBeenCalledWith('.js-menu-first a')

    expect(toggleMock).toHaveBeenCalledWith('open')
    expect(focusMock).toHaveBeenCalled()
  });

  it('should handle key code 78 (n)', () => {
    const focusMock = jest.fn()
    const removeMock = jest.fn()

    const querySelectorMock = jest.fn().mockReturnValue({
      classList: {
        remove: removeMock,
      },
      focus: focusMock,
    })

    document.querySelector = querySelectorMock

    const handler = onKeyDownRegionHandler();
    handler({ keyCode: 78 });

    expect(querySelectorMock).toHaveBeenCalledWith('.js-menu-2-first button:not([disabled])')
    expect(querySelectorMock).toHaveBeenCalledWith('.js-header')

    expect(removeMock).toHaveBeenCalledWith('open')
    expect(focusMock).toHaveBeenCalled()
  });

  it('should handle key code 83 (s)', () => {
    const focusMock = jest.fn()
    const removeMock = jest.fn()

    const querySelectorMock = jest.fn().mockReturnValue({
      classList: {
        remove: removeMock,
      },
      focus: focusMock,
    })

    document.querySelector = querySelectorMock

    const handler = onKeyDownRegionHandler();
    handler({ keyCode: 83 });

    expect(querySelectorMock).toHaveBeenCalledWith('.js-west')
    expect(querySelectorMock).toHaveBeenCalledWith('.js-header')

    expect(removeMock).toHaveBeenCalledWith('open')
    expect(focusMock).toHaveBeenCalled()
  });

  it('should handle key code 90 (z)', () => {
    const addMock = jest.fn()
    const focusMock = jest.fn()
    const removeMock = jest.fn()

    const querySelectorMock = jest.fn().mockReturnValue({
      classList: {
        remove: removeMock,
      },
      focus: focusMock,
    })

    document.querySelector = querySelectorMock

    const handler = onKeyDownRegionHandler({ zoom: 5 });
    handler({ keyCode: 90 });

    expect(querySelectorMock).toHaveBeenCalledWith('.js-zoom-5')
    expect(querySelectorMock).toHaveBeenCalledWith('.js-header')

    expect(removeMock).toHaveBeenCalledWith('open')
    expect(focusMock).toHaveBeenCalled()
  });

  it('should handle key code 72 (h)', () => {
    const focusMock = jest.fn()
    const removeMock = jest.fn()

    const querySelectorMock = jest.fn().mockReturnValue({
      classList: {
        remove: removeMock,
      },
      focus: focusMock,
    })

    document.querySelector = querySelectorMock

    const handler = onKeyDownRegionHandler();
    handler({ keyCode: 72 });

    expect(querySelectorMock).toHaveBeenCalledWith('.js-year-slider-main-button')
    expect(querySelectorMock).toHaveBeenCalledWith('.js-header')

    expect(removeMock).toHaveBeenCalledWith('open')
    expect(focusMock).toHaveBeenCalled()
  });

  it('should handle key code 82 (r)', () => {
    const focusMock = jest.fn()
    const removeMock = jest.fn()

    const querySelectorMock = jest.fn().mockReturnValue({
      focus: focusMock,
    })

    document.querySelector = querySelectorMock

    const handler = onKeyDownRegionHandler();
    handler({ keyCode: 82 });

    expect(querySelectorMock).toHaveBeenCalledWith('.js-filter')

    expect(focusMock).toHaveBeenCalled()
  });

  it('should handle key code 88 (x)', () => {
    const focusMock = jest.fn()
    const removeMock = jest.fn()

    const querySelectorMock = jest.fn().mockReturnValue({
      classList: {
        remove: removeMock,
      },
    })

    document.querySelector = querySelectorMock

    const handler = onKeyDownRegionHandler();
    handler({ keyCode: 88 });

    expect(querySelectorMock).toHaveBeenCalledWith('.js-header')
    expect(removeMock).toHaveBeenCalledWith('open')
  });

  it('should handle default key code', () => {
    const handler = onKeyDownRegionHandler({ zoom: 1 });
    const result = handler({ keyCode: 99 }); // Arbitrary key code
    expect(result).toBe(false);
  });
});

