
import React from 'react';
import styles from './style.module.scss';
import { Button } from '@douyinfe/semi-ui';
import { IconGithubLogo } from '@douyinfe/semi-icons';
import SwitchMode from '../SwitchMode';
import exportFromJSON from 'export-from-json'
import { useRecoilState } from 'recoil';
import { lottieConfigState } from '../../atoms/lottieConfig';

const ExportJson = () => {
    const [lottieConfig, setlottieConfig] = useRecoilState(lottieConfigState)
    const exportLottieJson = () => {
        if(lottieConfig.json) {
            exportFromJSON({
                data: lottieConfig.json,
                fileName: 'lottie',
                exportType: exportFromJSON.types.json
            })
        }
    }
    return <Button onClick={exportLottieJson} style={{marginRight: '30px'}}>Export Json</Button>
}
const Header =  () => {
    return <div className={styles.header}>
        <div className={styles.logo}>
            <h1 className={styles['logo-title']}>Lottie Editor Web</h1>
        </div>
        <div className={styles.headerCenter}></div>
        <div className={styles.options}>
            <ExportJson></ExportJson>
            <SwitchMode></SwitchMode>
        </div>
    </div>
}
export default Header