
import React from 'react';
import { Button } from '@douyinfe/semi-ui';

function SwitchMode() {
    const switchMode = () => {
        const body = document.body;
        if (body.hasAttribute('theme-mode')) {
            body.removeAttribute('theme-mode');
        } else {
            body.setAttribute('theme-mode', 'dark');
        }
    }

    return (
        <Button
            onClick={switchMode}
        >
            Switch Mode
        </Button>
    );
}
export default SwitchMode