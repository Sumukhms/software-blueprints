import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/getting-started">
            Get Started ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Home | ${siteConfig.title}`}
      description="Open-Source System Architecture Designs and UI Blueprints">
      <HomepageHeader />
      <main>
        <div className="container" style={{ textAlign: 'center', padding: '50px 0' }}>
          <h2>Enterprise-Grade Blueprints</h2>
          <p>
            This repository contains standardized frontend UI components, backend architectures, 
            and full-stack boilerplates. Click "Get Started" to dive into the documentation!
          </p>
        </div>
      </main>
    </Layout>
  );
}
