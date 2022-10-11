import Head from 'next/head'
import Image from 'next/image'
import Editor from '../components/Editor'
import { Layout, Button, Upload } from '@douyinfe/semi-ui';
import SwitchMode from '../components/SwitchMode';
import styles from '../styles/Home.module.css'
import LeftSider from '../components/LeftSider';
import RightSider from '../components/RightSide';
import FooterComponent from '../components/Footer';
export default function Home() {
  const { Header, Footer, Sider, Content } = Layout;

  return (
    <>
      <Head>
        <title>lottie editor web</title>
        <link rel="icon" href="/favicon.ico" />

      </Head>
      <Layout className={styles.layout}>
        <Header className={styles.header}>
          <SwitchMode />
        </Header>
        <Layout className={styles.center}>
          <Sider className={styles.sider}><LeftSider /></Sider>
          <Content className={styles.content}>
            <Editor></Editor>
          </Content>
          <Sider className={styles.sider}><RightSider /></Sider>
        </Layout>
        <Footer className={styles.footer}>
          <FooterComponent />
        </Footer>
      </Layout>
    </>
  )
}
