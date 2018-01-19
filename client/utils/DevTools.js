import React from 'react';
// Exported from redux-devtools
import {createDevTools} from 'redux-devtools';

// Monitors are separate packages
import LogMonitor from 'redux-devtools-log-monitor';
import SliderMonitor from 'redux-slider-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';

// createDevTools takes a monitor and produces a DevTools component
const DevTools = createDevTools(
  // Monitors are individually adjustable with props.
  // Consult their repositories to learn about those props.
  // Here, we put LogMonitor inside a DockMonitor.
  // Note: DockMonitor is visible by default.
  <DockMonitor toggleVisibilityKey='ctrl-g'
    changePositionKey='ctrl-q'
    changeMonitorKey='ctrl-m'
    defaultSize={0.15}
    defaultIsVisible={true}>
    <LogMonitor theme='tomorrow' />
    <SliderMonitor keyboardEnabled />
      </DockMonitor>
);

export default DevTools;
