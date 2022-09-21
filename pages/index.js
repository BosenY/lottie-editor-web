import Head from 'next/head'
import Image from 'next/image'
import Editor from '../components/Editor'
import { Layout, Button, Upload } from '@douyinfe/semi-ui';
import styles from '../styles/Home.module.css'
export default function Home() {
  const { Header, Footer, Sider, Content } = Layout;

  return (
    <>
      <Head>
        <title>lottie editor web</title>
        <link rel="icon" href="/favicon.ico" />

      </Head>
      <Layout className={styles.layout}>
        <Header className={styles.header}>Header</Header>
        <Layout>
          <Sider className={styles.sider}>Sider</Sider>
          <Content>
            <Editor></Editor>
          </Content>
          <Sider className={styles.sider}>Sider</Sider>
        </Layout>
        <Footer className={styles.footer}>
          Footer

        </Footer>
      </Layout>
    </>
  )
}
