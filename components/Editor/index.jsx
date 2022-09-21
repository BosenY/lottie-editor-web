import React, { useState, useEffect } from 'react'
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import { Layout, Button, Upload } from '@douyinfe/semi-ui'
import axios from 'axios';
import styles from './style.module.css'
const Editor = () => {
    useEffect(() => {
        axios.get('/api/hello').then(rs => {
            console.log(rs.data)
        })
    }, [])
    const [lottieJson, setLottieJson] = useState(null)
    const mockRequest = ({ file, fileInstance, onProgress, onError, onSuccess }) => {
        console.log(fileInstance)
        if(fileInstance.type.indexOf('json') > -1) {
            let reader = new FileReader();
            reader.readAsText(fileInstance, "utf8");//gbk编码
            reader.onload = () => {
                console.log(JSON.parse(reader.result));// 文本内容
                setLottieJson(JSON.parse(reader.result))
            };
        } else if(fileInstance.type.indexOf('zip') > -1) {
            console.log('zip')
            let param = new FormData()       // 创建form对象
            param.append('zip', fileInstance)       // 通过append向form对象添加数据
            axios.post('/api/uploadZip', param, {
                // headers: {'Content-Type': 'multipart/form-data'}
            }).then(rs => {
                console.log(rs.data.json)
                setLottieJson(rs.data.json)
            }).catch(er => {
                console.log(er)
            })
        }

        let count = 0;
        let interval = setInterval(() => {
            if (count === 100) {
                clearInterval(interval);
                onSuccess();
                return;
            }
            onProgress({ total: 100, loaded: count });
            count += 20;
        }, 500);
    };
    return (
        <div className={styles.editor}>
            {!lottieJson ? <Upload
                action=""
                customRequest={mockRequest}
                draggable={true}
                dragMainText={'点击上传文件或拖拽文件到这里'}
                dragSubText="支持zip/json"
                fileList={[]}
                accept="application/json,.zip"
            ></Upload> :
                <Player
                    autoplay
                    loop
                    showUploadList={false}
                    src={lottieJson}
                    style={{ height: '300px', width: '300px' }}
                >
                    <Controls visible={true} buttons={['play', 'repeat', 'frame', 'debug']} />
                </Player>}
        </div>
    )
}
export default Editor