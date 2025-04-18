import { sampleBlogsData } from '@/data/blog';
import Link from 'next/link';
import Image from 'next/image';

export default function Page() {
  const blogs = sampleBlogsData;
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
              Hello - I&apos;m Seiichi, a software developer with a master&apos;s degree in
              Electrical Engineering. After graduating, I spent a year on a working-holiday visa in
              Australia and travelled extensively before launching my engineering career in 2016.
              Since then I&apos;ve contributed to a wide range of projects at several companies. In
              2022 I relocated to Germany to join Classmethod Germany, and in July 2024 I co-founded
              my own company in Japan with my brother. With more than seven years of hands-on
              experience, I specialise in full-stack development and DevOps consulting, tailoring
              solutions to each client&apos;s needs.
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

        {/* Blogs */}
        <section>
          <h2 className="text-3xl font-bold text-gray-800 mb-8 border-b-2 pb-2">Recent Blogs</h2>
          <div className="space-y-4">
            {blogs.map((blog) => (
              <Link href={`/blog/${blog.id}`} key={blog.id}>
                <div className="bg-white rounded-lg shadow-md p-4 transition duration-300 hover:shadow-lg hover:-translate-y-1">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-medium text-gray-700">{blog.title}</h3>
                    <span className="text-sm text-gray-500">
                      {blog.id.slice(0, 4)}/{blog.id.slice(4, 6)}/{blog.id.slice(6)}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
            <div className="text-center mt-8">
              <button className="text-gray-600 hover:text-gray-800 hover:underline">
                View More
              </button>
            </div>
          </div>
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
