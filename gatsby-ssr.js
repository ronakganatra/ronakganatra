export { wrapPageElement, wrapRootElement } from './gatsby-browser'

// renders meta tags before inline style to ensure correct link unfurling on social media
export const onPreRenderHTML = ({
    getHeadComponents,
    replaceHeadComponents,
  }) => {
    const headComponents = getHeadComponents();
    headComponents.sort((x, y) => {
      if (x.props && x.props['data-react-helmet']) {
        return -1;
      } else if (y.props && y.props['data-react-helmet']) {
        return 1;
      }
      return 0;
    });
    replaceHeadComponents(headComponents);
  };