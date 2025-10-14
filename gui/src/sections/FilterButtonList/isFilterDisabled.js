function isFilterDisabled({ currentUrl, k }) {
  return (
    ['anti-bias-tool-kit', 'prime-symptom-list'].includes(currentUrl)
    &&
    k === 'primeSymptomType'
  ) || (
    currentUrl === 'time-line'
    &&
    k === 'severe'
  ) || false
}

export default isFilterDisabled
