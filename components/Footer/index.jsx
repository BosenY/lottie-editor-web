import React from 'react';
import styles from './style.module.css';
import { Button } from '@douyinfe/semi-ui';
import { IconGithubLogo } from '@douyinfe/semi-icons';
const Footer =  () => {
    return <div className={styles.footer}>
       <Button
        icon={<IconGithubLogo />}
        onClick={() => {
            window.open('https://github.com/BosenY/lottie-editor-web') 
        }}
        />
    </div>
}
export default Footer