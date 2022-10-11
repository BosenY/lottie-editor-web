import React, { useEffect, useState } from 'react';
import styles from './style.module.css';
import { useRecoilState } from 'recoil';
import { lottieConfigState } from '../../atoms/lottieConfig';
import { List, Avatar } from '@douyinfe/semi-ui';
const LeftSider = () => {
    const [lottieConfig, setlottieConfig] = useRecoilState(lottieConfigState)
    const [assets, setAssets] = useState([])
    useEffect(() => {
        if (lottieConfig.json?.assets && Array.isArray(lottieConfig.json?.assets)) {
            setAssets(lottieConfig.json?.assets)
        }
    }, [lottieConfig])
    return <div className={styles.leftSider}>
        <List

            dataSource={assets}
            layout="vertical"
            renderItem={item => (
                <List.Item
                className={styles.listItem}
                    main={
                    <>
                            <div>
                                <img className={styles.previewImg} src={item.p} alt={item.id} />
                            </div>

                            <p>图片名称：{item.id}</p>
                            </>
                    }
                />
            )}
        />
    </div>
}
export default LeftSider