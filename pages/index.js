import Layout from '../components/Layout'
import BannerServices from '../components/BannerServices'
import Services from '../components/Services'
import Contact from '../components/Contact'

import Head from 'next/head'

// import { i18n, withNamespaces } from '../i18n'

const Index = () => (
  <Layout>
      <Head>
        <title>Diseño web | Imágenes de Drones - TECNOVA.IO - Tecnova.io</title>
        <meta name="title" content="Diseño web | Imágenes de drone - TECNOVA.IO - Tecnova.io"></meta>
        <meta name="description" content="El diseño web de TECNOVA.IO se distingue por: profesionalismo, diseño estético, atención especial a los detalles, disponibilidad en teléfonos inteligentes, SEO amigable."></meta>
        
        <meta property="og:type" content="website"></meta>
        <meta property="og:url" content="https://www.tecnova.io/"></meta>
        <meta property="og:title" content="Diseño web | Imágenes de drone - TECNOVA.IO - Tecnova.io"></meta>
        <meta property="og:description" content="TECNOVA.IO Ofrecemos webs profesionales y diseño de medios digitales. La idea principal de la empresa es trabajar y viajar por todo el mundo. #TECNOVA.IO"></meta>
        <meta property="og:image" content=""></meta>
        
        <meta property="twitter:card" content="summary_large_image"></meta>
        <meta property="twitter:url" content="https://www.tecnova.io/"></meta>
        <meta property="twitter:title" content="Diseño web | Imágenes de drone - TECNOVA.IO - Tecnova.io"></meta>
        <meta property="twitter:description" content="TECNOVA.IO Ofrecemos webs profesionales y diseño de medios digitales. La idea principal de la empresa es trabajar y viajar por todo el mundo. #TECNOVA.IO"></meta>
        <meta property="twitter:image" content=""></meta>
      </Head>
      <BannerServices />
      <Services></Services>
      <Contact></Contact>
      <style>{`
      `}</style>
  </Layout>
);
export default Index




