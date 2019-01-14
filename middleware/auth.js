export default () => {
  if (process.browser) {
    console.log('console.log() on browser');
  } else {
    console.log('console.log() on SSR server');
  }
}