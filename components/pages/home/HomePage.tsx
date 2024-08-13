import type { EncodeDataAttributeCallback } from '@sanity/react-loader'
import Link from 'next/link'

import { ProjectListItem } from '@/components/pages/home/ProjectListItem'
import { Header } from '@/components/shared/Header'
import { resolveHref } from '@/sanity/lib/utils'
import type { HomePagePayload } from '@/types'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export interface HomePageProps {
  data: HomePagePayload | null
  encodeDataAttribute?: EncodeDataAttributeCallback
}

export function HomePage({ data, encodeDataAttribute }: HomePageProps) {
  // Default to an empty object to allow previews on non-existent documents
  const { overview = [], showcaseProjects = [], title = '' } = data ?? {}

  return (
    <main>
      <section className="flex justify-center py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  John Doe
                </h1>
                <h2 className="text-xl font-semibold text-muted-foreground">
                  Software Engineer
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  I'm a passionate software engineer with a strong background in
                  full-stack web development. I love building innovative and
                  user-friendly applications that solve real-world problems.
                </p>
              </div>
            </div>
            <img
              src="/placeholder.svg"
              width="550"
              height="550"
              alt="John Doe"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
            />
          </div>
        </div>
      </section>
      {/* Header */}
      {/* {title && <Header centered title={title} description={overview} />} */}
      {/* Showcase projects */}
      {showcaseProjects && showcaseProjects.length > 0 && (
        <section
          id="projects"
          className="flex justify-center py-12 md:py-24 lg:py-32 bg-muted"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  My Projects
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Here are some of the projects I've worked on. Each one
                  showcases my skills in different areas of software
                  development.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              {showcaseProjects.map((project, key) => {
                const href = resolveHref(project?._type, project?.slug)
                if (!href) {
                  return null
                }
                return (
                  <Link
                    key={key}
                    href={href}
                    data-sanity={encodeDataAttribute?.([
                      'showcaseProjects',
                      key,
                      'slug',
                    ])}
                  >
                    <ProjectListItem project={project} odd={key % 2} />
                  </Link>
                )
              })}
            </div>
          </div>
        </section>
      )}

      <section
        id="skills"
        className="flex justify-center py-12 md:py-24 lg:py-32"
      >
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                My Skills
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                I have a diverse set of technical skills that I've developed
                over the years. Here are some of the key technologies I'm
                proficient in.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Front-end</h3>
                <p className="text-muted-foreground">
                  React, Vue.js, Angular, HTML, CSS, JavaScript, TypeScript
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Back-end</h3>
                <p className="text-muted-foreground">
                  Node.js, Express, Ruby on Rails, Django, PHP
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Databases</h3>
                <p className="text-muted-foreground">
                  MongoDB, PostgreSQL, MySQL, SQLite
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="experience"
        className="flex justify-center py-12 md:py-24 lg:py-32 bg-muted"
      >
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Work Experience
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                I've had the opportunity to work at several companies, where
                I've gained valuable experience in various areas of software
                development.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Software Engineer</h3>
                <p className="text-muted-foreground">
                  Acme Inc. | 2020 - Present
                </p>
                <ul className="list-disc pl-4 text-muted-foreground">
                  <li>
                    Developed and maintained multiple web applications using
                    React and Node.js
                  </li>
                  <li>
                    Implemented new features and bug fixes, ensuring
                    high-quality code
                  </li>
                  <li>
                    Collaborated with cross-functional teams to deliver projects
                    on time and within budget
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Intern</h3>
                <p className="text-muted-foreground">
                  Globex Corporation | 2019 - 2020
                </p>
                <ul className="list-disc pl-4 text-muted-foreground">
                  <li>
                    Assisted in the development of a mobile app using React
                    Native and Firebase
                  </li>
                  <li>
                    Participated in code reviews and learned best practices for
                    software development
                  </li>
                  <li>
                    Gained experience in agile project management and team
                    collaboration
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Software Developer</h3>
                <p className="text-muted-foreground">
                  Initech Solutions | 2018 - 2019
                </p>
                <ul className="list-disc pl-4 text-muted-foreground">
                  <li>
                    Worked on a team developing a cloud-based SaaS application
                    using Ruby on Rails
                  </li>
                  <li>
                    Implemented RESTful APIs and integrated with third-party
                    services
                  </li>
                  <li>
                    Contributed to the development of automated testing and
                    deployment pipelines
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Junior Web Developer</h3>
                <p className="text-muted-foreground">
                  Cyberdyne Systems | 2017 - 2018
                </p>
                <ul className="list-disc pl-4 text-muted-foreground">
                  <li>
                    Developed and maintained company websites using HTML, CSS,
                    and JavaScript
                  </li>
                  <li>
                    Collaborated with designers to implement responsive and
                    accessible user interfaces
                  </li>
                  <li>
                    Gained experience in version control and project management
                    tools
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="contact"
        className="flex justify-center py-12 md:py-24 lg:py-32 border-t"
      >
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Get in Touch
            </h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              If you'd like to discuss a project or just say hello, feel free to
              reach out.
            </p>
          </div>
          <div className="mx-auto w-full max-w-sm space-y-2">
            <form className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="max-w-lg flex-1"
              />
              <Button type="submit">Send Message</Button>
            </form>
            <p className="text-xs text-muted-foreground">
              I'll get back to you as soon as possible.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default HomePage
