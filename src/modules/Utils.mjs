const Utils = {
  truncateSentence: (sentence, maxLength) => {
    const truncatedString =
      sentence.length > maxLength
        ? `${sentence.substring(0, maxLength)}...`
        : sentence;
    return <span>{truncatedString}</span>;
  },
  scrollTo: (position) => { window.scrollTo({ top: position, behavior: 'smooth' }) },
  scrollToTop: () => { window.scrollTo({ top: 0, behavior: 'smooth' }) },
}

export default Utils;