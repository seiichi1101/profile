import Image from 'next/image';
import { drizzle } from 'drizzle-orm/d1';
import { Blog } from '../../db/schema';
import { getCloudflareContext } from '@opennextjs/cloudflare';
import LoadMoreBlogs from '@/src/components/LoadMoreBlogs';
import { RpcClient, rpc } from './lib/client';

interface Showcase {
  title: string;
  embedUrl: string;
}

const showcases: Showcase[] = [
  {
    title:
      'Djangoで組織とユーザーの権限管理をやってみよう / How to Manage Organization and User Permissions with Django',
    embedUrl: 'https://speakerdeck.com/player/37d6bb70f7124f3abd5541ec08ffe3bc',
  },
  {
    title:
      'AWS Glueを使った Serverless ETL の実装パターン / How to Implement Serverless ETL with AWS Glue',
    embedUrl: 'https://speakerdeck.com/player/ac0741ba6ae041239ef867c1359c88e1',
  },
  {
    title: 'イマドキ!ユースケース別に見る AWS IoT への接続パターン / AWS IoT Connection Patterns',
    embedUrl: 'https://speakerdeck.com/player/11272fb28f4145ba9502a93251d58ed3',
  },
  {
    title:
      'Djangoで組織とユーザーの権限管理をやってみよう / How to Manage Organization and User Permissions with Django',
    embedUrl: 'https://www.youtube.com/embed/7zQdngoCysw?si=vGcpaAjiZtjMwoMV" title=',
  },
  {
    title:
      'AWS Glueを使ったサーバーレスETLの実装方法を徹底解説 / How to Implement Serverless ETL with AWS Glue',
    embedUrl: 'https://www.youtube.com/embed/Hj8bhs0evns?si=_J1ubcS9EdMss5JB',
  },
  {
    title: 'ソフトウェアデザイン 2019年12月号 / Software Design December 2019',
    embedUrl:
      'https://www.amazon.co.jp/%E3%82%BD%E3%83%95%E3%83%88%E3%82%A6%E3%82%A7%E3%82%A2%E3%83%87%E3%82%B6%E3%82%A4%E3%83%B3-2019%E5%B9%B412%E6%9C%88%E5%8F%B7-%E5%90%89%E7%94%B0-%E7%9C%9F%E5%90%BE/dp/B07Z74Q3BD',
  },
];

// avoid SSG due to the fact that the database access is not available in Cloudflare Worker's build phase
export const dynamic = 'force-dynamic';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const getBlogs = async (client: RpcClient) => {
  // const now = new Date();
  // if (now.getSeconds() % 2 === 0) {
  console.log('Fetching blogs directly from the database');
  const db = drizzle((await getCloudflareContext({ async: true })).env.DB);
  const blogs = await db.select().from(Blog).limit(5);
  return blogs;
  // } else {
  // FIXME: this sometime fails as 522 on Cloudflare Workers due to self-fetching
  // console.log('Fetching blogs from the RPC');
  // const blogs = await client.api.blogs
  //   .$get({
  //     query: {
  //       page: '1',
  //       size: '5',
  //     },
  //   })
  //   .then((res) => res.json());
  // return blogs;
  // }
};

export default async function Page() {
  const env = (await getCloudflareContext({ async: true })).env.NEXTJS_ENV;
  const urlForServer = env ? 'http://localhost:3000' : 'http://127.0.0.1:8787';
  const urlForClient = env ? 'http://localhost:3000' : 'https://profile.seiichi.me';
  const client = await rpc(urlForServer).build();
  const blogs = await getBlogs(client);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12 max-w-5xl space-y-16">
        {/* About Me */}
        <section>
          <h2 className="text-3xl font-bold text-gray-800 mb-8 border-b-2 pb-2">About Me</h2>
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="mb-8">
              <Image
                src="/desk1.jpg"
                alt="My workspace setup 1"
                width={1200}
                height={400}
                className="rounded-lg shadow-md object-cover w-full"
                priority
              />
            </div>
            <h3 className="text-2xl font-semibold text-gray-700 mb-6 text-center">Seiichi Arai</h3>
            <p className="text-gray-600 leading-relaxed">
              Hello – I&apos;m Seiichi, a software developer with a master&apos;s degree in
              Information and Electrical Engineering. After graduating, I spent a year in Australia
              on a working holiday visa, traveling extensively before launching my engineering
              career in 2016. Since then, I&apos;ve contributed to a wide range of projects at
              several companies. In 2022, I relocated to Germany to join Classmethod Germany under
              the EU Blue Card. In 2024, I also obtained a permanent residence permit
              (Niederlassungserlaubnis) in Germany. Additionally, in July 2024, I co-founded a
              company in Japan with my brother. With more than 10 years of hands-on experience, I
              specialize in full-stack development and DevOps, providing tailored solutions to meet
              each client&apos;s unique needs.
            </p>
          </div>
        </section>
        {/* Skills */}
        <section>
          <h2 className="text-3xl font-bold text-gray-800 mb-8 border-b-2 pb-2">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-700 mb-4">Technical Skills</h3>
              <p className="text-gray-600">Software Development, DevOps, SRE</p>
              <p className="text-gray-600 mt-2">C++, Rust, Go, Java, Kotlin, TypeScript, Python</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-700 mb-4">Languages</h3>
              <ul className="text-gray-600 space-y-2">
                <li>Native Japanese</li>
                <li>Business English</li>
                <li>Elementary German (telc Deutsch B1)</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 md:col-span-2">
              <h3 className="text-xl font-semibold text-gray-700 mb-4">Certifications</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-700 font-medium">Google Cloud Certified:</p>
                  <ul className="list-disc list-inside ml-4 text-gray-600 mt-2">
                    <li>Professional Cloud Architect</li>
                    <li>Professional Cloud Developer</li>
                    <li>Cloud DevOps Engineer</li>
                  </ul>
                </div>
                <div>
                  <p className="text-gray-700 font-medium">AWS Certified:</p>
                  <ul className="list-disc list-inside ml-4 text-gray-600 mt-2">
                    <li>DevOps Engineer - Professional</li>
                    <li>Solutions Architect - Professional</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Careers */}
        <section>
          <h2 className="text-3xl font-bold text-gray-800 mb-8 border-b-2 pb-2">Careers</h2>
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold text-gray-700">Erstech LLC</h3>
                <span className="text-sm text-gray-500">Jul 2024 - Present</span>
              </div>
              <div className="ml-4">
                <h4 className="font-medium text-gray-700 mb-2">Founder</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>
                    Org-chart SaaS: Hono, Next.js, Prisma, React Flow, TypeScript, Cloudflare
                    Workers, Cloudflare D1
                  </li>
                  <li>
                    Partner-relationship management app: Django, Python, Terraform, Google Cloud
                    Run, Google Cloud SQL(PostgreSQL)
                  </li>
                  <li>
                    Edge surveillance system: Raspberry Pi, Camera, Python, Cloudflare Workers,
                    Soracom
                  </li>
                </ul>
              </div>
            </div>

            {/* Classmethod Europe */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold text-gray-700">Classmethod (Europe) GmbH</h3>
                <span className="text-sm text-gray-500">Jul 2022 - Present</span>
              </div>
              <div className="space-y-4 ml-4">
                <div>
                  <h4 className="font-medium text-gray-700 mb-2">Service Operations Engineering</h4>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>Authentication-platform replacement: OAuth 2.0, Auth0</li>
                    <li>Back-end migration: Kotlin, Spring Boot, OAuth 2.0,JPA, Aurora MySQL</li>
                    <li>E-mail batch-job system: Rust, AWS CDK, AWS Lambda</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700 mb-2">Development & Consulting</h4>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>
                      Heavy-machinery data-collection system: Cloud-native Architecture, ETL,
                      Python, FastAPI, AWS Lambda, Aurora Postgres, Serverless Framework
                    </li>
                    <li>
                      Web-app AWS re-platform (infra + SRE): Cloud-native Architecture,
                      Containerization, Terraform, AWS ALB, AWS ECS, Amazon Aurora Serverless,
                      Amazon ElastiCache, New Relic
                    </li>
                    <li>
                      Factory monitoring & visualization: PLC, NestJS, React, WebSocket, Node.js,
                      C/C++, S7 Protocol
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-700 mb-6">Classmethod Inc.</h3>
              <div className="space-y-6 ml-4">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-medium text-gray-700">Contract Development Division</h4>
                  <span className="text-sm text-gray-500">Apr 2018 - Jun 2022</span>
                </div>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>
                    Cloud-native web application: REST API, Python, AWS SAM, API Gateway, AWS
                    Lambda, DynamoDB
                  </li>
                  <li>
                    Agricultural IoT system: MQTT, REST API, Python, AWS SAM, AWS IoT, AWS Lambda,
                    DynamoDB, Soracom
                  </li>
                  <li>
                    Connected-vehicle IoT platform: MQTT, REST API, Python, AWS SAM, AWS IoT, AWS
                    Lambda, DynamoDB
                  </li>
                  <li>
                    Factory monitoring data pipeline: PLC, MQTT, Soracom, ETL, Python, AWS IoT, AWS
                    Lambda, DynamoDB
                  </li>
                  <li>
                    Microservice system: Clean Architecture, Microservices, gRPC, OAuth 2.0, Go,
                    Amazon ALB, AWS ECS, Amazon Neptune, Auth0
                  </li>
                  <li>
                    Web-app AWS re-platform (infra): Terraform, AWS ALB, AWS ECS, AWS RDS, Amazon
                    ElastiCache
                  </li>
                  <li>
                    Web-app AWS re-platform (infra + SRE): Cloud-native Architecture,
                    Containerization, SRE (SLO/SLI), Terraform, AWS ALB, AWS ECS, AWS RDS, Amazon
                    ElastiCache, New Relic
                  </li>
                  <li>Front-end enablement: React, GraphQL, AWS Amplify, AWS CDK</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-700 mb-6">
                Works Applications Co., Ltd.
              </h3>
              <div className="space-y-6 ml-4">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-medium text-gray-700">
                    Site Reliability Engineering Division
                  </h4>
                  <span className="text-sm text-gray-500">Dec 2016 - Mar 2018</span>
                </div>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Product DevOps: System Monitoring, CI/CD</li>
                  <li>AWS research & POC: Amazon Aurora MySQL, Serverless Framework, Node.js</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-700 mb-6">Tecnoplus Inc.</h3>
              <div className="space-y-6 ml-4">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-medium text-gray-700">Development Division</h4>
                    <span className="text-sm text-gray-500">Apr 2016 - Sep 2016</span>
                  </div>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>
                      Advertising-management tool Development: C++, Database Migration,
                      Troubleshooting, Sakura VPN
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Showcase */}
        <section>
          <h2 className="text-3xl font-bold text-gray-800 mb-8 border-b-2 pb-2">Showcase</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {showcases.map((showcase) => (
              <div key={showcase.embedUrl} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-700 mb-4">{showcase.title}</h3>
                <div className="relative h-0" style={{ paddingBottom: '56.25%' }}>
                  <iframe
                    className="absolute top-0 left-0 w-full h-full rounded-lg"
                    src={showcase.embedUrl}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Blogs */}
        <section>
          <h2 className="text-3xl font-bold text-gray-800 mb-8 border-b-2 pb-2">Recent Blogs</h2>
          <LoadMoreBlogs url={urlForClient} initialBlogs={blogs} />
        </section>

        {/* Honors & Awards */}
        <section>
          <h2 className="text-3xl font-bold text-gray-800 mb-8 border-b-2 pb-2">Honors & Awards</h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="text-gray-600">
              <p>2021 APN AWS Top Engineers (Japan)</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
