import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
  link: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Application scaffolding',
    Svg: require('@site/static/img/logo.svg').default,
    description: (
      <>
        Accelerate your delivery process with our versatile Application templates. Expand your possibilities by extending our comprehensive library with your personalized templates.
      </>
    ),
    link: "docs/user-guide/add-application/",
  },
  {
    title: 'CI/CD pipelines',
    Svg: require('@site/static/img/logo.svg').default,
    description: (
      <>
        Leverage the power of Kubernetes native pipelines for seamless application management with the comprehensive EDP Library.
      </>
    ),
    link: "docs/user-guide/application/",
  },
  {
    title: 'GitOps',
    Svg: require('@site/static/img/logo.svg').default,
    description: (
      <>
        Implement the GitOps approach for efficient deployment of your code and infrastructure. Maintain your state in code and manage changes effortlessly with our platform.
      </>
    ),
    link: "docs/user-guide/add-cd-pipeline/",
  },
  {
    title: 'Single sign-on',
    Svg: require('@site/static/img/logo.svg').default,
    description: (
      <>
        Seamlessly integrate with your Enterprise Single Sign-On for a smooth and efficient user onboarding experience. Our platform is designed to enhance user accessibility and security, promoting a user-friendly environment that aligns with your enterprise’s unique needs.
      </>
    ),
    link: "docs/operator-guide/install-keycloak/",
  },
  {
    title: 'Optimized for Kubernetes',
    Svg: require('@site/static/img/logo.svg').default,
    description: (
      <>
        Experience the power of Kubernetes-native functionality. Our platform is designed to run seamlessly in your preferred Kubernetes or OpenShift clusters, offering you flexibility and control.
      </>
    ),
    link: "docs/operator-guide/install-kuberocketci/",
  },
  {
    title: 'Advanced Security Analysis',
    Svg: require('@site/static/img/logo.svg').default,
    description: (
      <>
        Achieve excellence in DevSecOps with our platform. We prioritize security, making it a mandatory quality gate for all operations. Experience enhanced protection and peace of mind.
      </>
    ),
    link: "docs/operator-guide/devsecops/overview/",
  },
  {
    title: 'Automated Test Analysis',
    Svg: require('@site/static/img/logo.svg').default,
    description: (
      <>
        Streamline your operations with our automated test analysis. Ensure your regressions pass seamlessly and predictably, enhancing the reliability of your systems. Leverage automation to increase your delivery speed and efficiency.
      </>
    ),
    link: "docs/operator-guide/advanced-install/reportportal/",
  },
  {
    title: 'Comprehensive Metrics',
    Svg: require('@site/static/img/logo.svg').default,
    description: (
      <>
        Gain access to your application logs and metrics with ease. Explore your application in real-time, gaining valuable insights and enhancing your understanding of its performance.
      </>
    ),
    link: "docs/operator-guide/monitoring-and-observability/multitenant-logging/",
  },
  {
    title: 'Open-Source Software Solutions',
    Svg: require('@site/static/img/logo.svg').default,
    description: (
      <>
        Experience the power of open-source with EDP. Licensed under Apache 2.0, we equip you with leading open-source tools designed to enhance the reliability of your delivery process.
      </>
    ),
    link: "docs/about-platform",
  },
];

function Feature({title, Svg, description, link}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--left">
        <a href={link}>
          <Svg className={styles.featureSvg} role="img" />
          <Heading as="h3">{title}</Heading>
          <p>{description}</p>
        </a>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
