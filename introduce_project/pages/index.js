import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../components/layout'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>준짱 포트폴리오</title>
        <meta name="description" content="과거 내 발자취를 담는다." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>HOME 입니다.</h1>
    </Layout>
  )
}
