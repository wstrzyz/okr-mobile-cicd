/**
 * @format
 */

import 'react-native';
import React from 'react';
import {Text} from 'react-native';
import App, {Section} from '../App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

const TITLES = ['Step One', 'See Your Changes', 'Debug', 'Learn More'];

it('renders correctly', () => {
  renderer.create(<App />);
});

it('renders proper titles', () => {
  const result = renderer.create(<App />);
  const sections = result.root.findAllByType(Section);
  const titles = sections.map(
    section => section.findAllByType(Text)[0].props.children,
  );
  expect(titles).toStrictEqual(TITLES);
});
