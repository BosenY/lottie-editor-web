import React, { useEffect, useState } from 'react';
import styles from './style.module.css';
import Image from 'next/image'
import { useRecoilState } from 'recoil';
import { lottieConfigState } from '../../atoms/lottieConfig';
import { List } from '@douyinfe/semi-ui';
const LeftSider = () => {
    const [lottieConfig, setlottieConfig] = useRecoilState(lottieConfigState)
    const [assets, setAssets] = useState([])
    useEffect(() => {
        if (lottieConfig.json?.assets && Array.isArray(lottieConfig.json?.assets)) {
            setAssets(lottieConfig.json?.assets)
        }
    }, [lottieConfig])
    const loadingComplete = (item, index, size) => {
        if(item) {
            setAssets(list => {
                return [...list.slice(0, index),{...item, size: size}, ...list.slice(index + 1)]
            })
        }
    }
    return <div className={styles.leftSider}>
        <List
            className={styles.list}
            dataSource={assets}
            layout="vertical"
            renderItem={(item, index) => (
                <List.Item
                    className={styles.listItem}
                    main={
                        <>
                            <div className={styles.previewImgContainer}>
                                <Image
                                    onLoadingComplete={(size) => loadingComplete(item, index, size)}
                                    className={styles.previewImg}
                                    src={item.p}
                                    alt={item.id}
                                    width={140}
                                    height={140}
                                />

                            </div>
                            {item?.size && <p>
                               实际宽高：{item?.size?.naturalWidth} * {item?.size?.naturalHeight}
                            </p>}
                            <p>图片名称：{item.id}</p>
                        </>
                    }
                />
            )}
        />
    </div>
}
export default LeftSider