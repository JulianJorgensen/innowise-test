import firstMainSmall from '../assets/images/1_objects.png';
import firstMainMedium from '../assets/images/1_objects@2x.png';
import firstMainLarge from '../assets/images/1_objects@3x.png';

import secondMainSmall from '../assets/images/1_objects_5.png';
import secondMainMedium from '../assets/images/1_objects@2x_5.png';
import secondMainLarge from '../assets/images/1_objects@3x_5.png';

import thirdMainSmall from '../assets/images/1_objects_6.png';
import thirdMainMedium from '../assets/images/1_objects@2x_6.png';
import thirdMainLarge from '../assets/images/1_objects@3x_6.png';

import firstSideSmall from '../assets/images/1_objects_1.png';
import firstSideMedium from '../assets/images/1_objects@2x_1.png';
import firstSideLarge from '../assets/images/1_objects@3x_1.png';

import secondSideSmall from '../assets/images/1_objects_2.png';
import secondSideMedium from '../assets/images/1_objects@2x_2.png';
import secondSideLarge from '../assets/images/1_objects@3x_2.png';

import thirdSidesmall from '../assets/images/1_objects_3.png';
import thirdSideMedium from '../assets/images/1_objects@2x_3.png';
import thirdSideLarge from '../assets/images/1_objects@3x_3.png';

import firstTitleSmall from '../assets/images/pattern-no.-1-copy-6.png';
import firstTitleMedium from '../assets/images/pattern-no.-1-copy-6@2x.png';
import firstTitleLarge from '../assets/images/pattern-no.-1-copy-6@3x.png';
import secondTitleSmall from '../assets/images/three-waves-copy-2.png';
import secondTitleMedium from '../assets/images/three-waves-copy-2@2x.png';
import secondTitleLarge from '../assets/images/three-waves-copy-2@3x.png';
import thirdTitleSmall from '../assets/images/waves_of_blue-copy.png';
import thirdTitleMedium from '../assets/images/waves_of_blue-copy@2x.png';
import thirdTitleLarge from '../assets/images/waves_of_blue-copy@3x.png';

export const sliderStore = [
  {
    title: 'Pattern no. 1',
    left: {
      small: firstSideSmall,
      medium: firstSideMedium,
      large: firstSideLarge
    },
    central: {
      small: firstMainSmall,
      medium: firstMainMedium,
      large: firstMainLarge
    },
    right: {
      small: secondSideSmall,
      medium: secondSideMedium,
      large: secondSideLarge
    },
    small: firstTitleSmall,
    medium: firstTitleMedium,
    large: firstTitleLarge
  },
  {
    title: 'The three waves',
    left: {
      small: secondSideSmall,
      medium: secondSideMedium,
      large: secondSideLarge
    },
    central: {
      small: secondMainSmall,
      medium: secondMainMedium,
      large: secondMainLarge
    },
    right: {
      small: thirdSidesmall,
      medium: thirdSideMedium,
      large: thirdSideLarge
    },
    small: secondTitleSmall,
    medium: secondTitleMedium,
    large: secondTitleLarge
  },
  {
    title: 'Waves of blue',
    left: {
      small: thirdSidesmall,
      medium: thirdSideMedium,
      large: thirdSideLarge
    },
    central: {
      small: thirdMainSmall,
      medium: thirdMainMedium,
      large: thirdMainLarge
    },
    right: {
      small: firstSideSmall,
      medium: firstSideMedium,
      large: firstSideLarge
    },
    small: thirdTitleSmall,
    medium: thirdTitleMedium,
    large: thirdTitleLarge
  }
];
