/**
 *
 * Asynchronously loads the component for ManPage
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
