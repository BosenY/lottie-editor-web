
import React, {useEffect} from 'react';
import { Button } from '@douyinfe/semi-ui';
import { IconMoon, IconSun } from '@douyinfe/semi-icons';
import { useRecoilState } from 'recoil';
import { themeState } from '../../atoms/theme';
function SwitchMode() {
    const [themeMode, setThemeMode] = useRecoilState(themeState)
    useEffect(() => {
        if(themeMode == 'dark') {
            document.body.setAttribute('theme-mode', 'dark');
        }
    }, [])
    const switchMode = () => {
        const body = document.body;
        if (body.hasAttribute('theme-mode')) {
            setThemeMode('')
            body.removeAttribute('theme-mode');
        } else {
            setThemeMode('dark')
            body.setAttribute('theme-mode', 'dark');
        }
    }

    return (
        
        <Button
        icon={themeMode == 'dark' ?  <IconSun /> : <IconMoon />}
            onClick={switchMode}
        />
           
    );
}
export default SwitchMode