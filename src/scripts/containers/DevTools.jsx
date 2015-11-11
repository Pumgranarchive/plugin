import React from 'react';
import { createDevTools } from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';

export default createDevTools(
    <DockMonitor toggleVisibilityKey='H'
                 defaultSize={ .200 }
                 defaultPosition='left'
                 changePositionKey='Q'>
        <LogMonitor />
    </DockMonitor>
);
