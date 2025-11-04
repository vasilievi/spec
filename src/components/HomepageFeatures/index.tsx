import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Углубление знаний и навыков',
    Svg: require('@site/static/img/checklist.svg').default,
    description: (
      <>
        Подготовка к экзамену поможет систематизировать те знания, 
        которые уже есть, и найти пробелы.
      </>
    ),
  },
  {
    title: 'Подтверждение высокого уровня компетенции',
    Svg: require('@site/static/img/student.svg').default,
    description: (
      <>
        Получение сертификата гарантирует, что специалист обладает не только теоретическими, 
        но и практическими навыками работы с системой 1С. 
      </>
    ),
  },
  {
    title: 'Повышает профессиональную ценность',
    Svg: require('@site/static/img/work.svg').default,
    description: (
      <>
        Сертификат даёт преимущество среди остальных кандидатов на рынке труда,
        открывает двери в крупные проекты, где можно реализовать свой потенциал и развиться профессионально.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
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
