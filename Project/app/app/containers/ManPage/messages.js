/*
 * ManPage Messages
 *
 * This contains all the text for the ManPage container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.ManPage';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the ManPage container!',
  },
});
