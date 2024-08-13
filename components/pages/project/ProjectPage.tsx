import type { EncodeDataAttributeCallback } from '@sanity/react-loader'
import Link from 'next/link'

import { CustomPortableText } from '@/components/shared/CustomPortableText'
import { Header } from '@/components/shared/Header'
import ImageBox from '@/components/shared/ImageBox'
import type { ProjectPayload } from '@/types'

export interface ProjectPageProps {
  data: ProjectPayload | null
  encodeDataAttribute?: EncodeDataAttributeCallback
}

export function ProjectPage({ data, encodeDataAttribute }: ProjectPageProps) {
  // Default to an empty object to allow previews on non-existent documents
  const {
    client,
    coverImage,
    description,
    duration,
    overview,
    site,
    tags,
    title,
  } = data ?? {}

  const startYear = duration?.start
    ? new Date(duration.start).getFullYear()
    : null
  const endYear = duration?.end ? new Date(duration.end).getFullYear() : 'Now'

  return (
    <div className="flex justify-center py-12 md:py-24 lg:py-32">
      <div className="flex flex-col min-h-dvh">
        <section className="w-full pt-12 md:pt-24 lg:pt-32 border-b">
          <div className="container px-4 md:px-6 space-y-10 xl:space-y-16">
            <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
              <div>
                <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                  {title}
                </h1>
                {overview && (
                  <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                    <CustomPortableText value={overview} />
                  </p>
                )}
                <div className="mt-6">
                  {site && (
                    <Link
                      href={site}
                      className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                      prefetch={false}
                    >
                      View Project
                    </Link>
                  )}
                </div>
              </div>
              <ImageBox
                data-sanity={encodeDataAttribute?.('coverImage')}
                image={coverImage}
                alt=""
                classesWrapper="relative aspect-[16/9] mx-auto aspect-video overflow-hidden rounded-xl object-bottom sm:w-full lg:order-last lg:aspect-square"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 space-y-12">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {client && (
                <div className="space-y-2">
                  <h3 className="text-lg font-bold">Client</h3>
                  <p className="text-muted-foreground">{client}</p>
                </div>
              )}
              {!!tags?.length && (
                <div className="space-y-2">
                  <h3 className="text-lg font-bold">Technologies</h3>
                  <p className="text-muted-foreground">
                    {tags.map((tag, key) => (
                      <span key={key} className="mr-1">
                        #{tag}
                      </span>
                    ))}
                  </p>
                </div>
              )}
              {site && (
                <div className="space-y-2">
                  <h3 className="text-lg font-bold">Live Site</h3>
                  <Link
                    href={site}
                    className="inline-flex items-center text-primary hover:underline"
                    prefetch={false}
                  >
                    {site}
                    <ArrowRightIcon className="ml-1 w-4 h-4" />
                  </Link>
                </div>
              )}
              {!!(startYear && endYear) && (
                <div className="space-y-2">
                  <h3 className="text-lg font-bold">Duration</h3>
                  <p className="text-muted-foreground">
                    {startYear} - {endYear}
                  </p>
                </div>
              )}
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                About the Project
              </h2>
              {description && (
                <CustomPortableText
                  paragraphClasses="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
                  value={description}
                />
              )}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Project Gallery
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                A collection of images or screenshots showcasing the project.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8">
              {/* Replace these with actual project images */}
              <img
                src="/placeholder.svg"
                width="400"
                height="300"
                alt="Project Screenshot 1"
                className="rounded-lg object-cover"
              />
              <img
                src="/placeholder.svg"
                width="400"
                height="300"
                alt="Project Screenshot 2"
                className="rounded-lg object-cover"
              />
              <img
                src="/placeholder.svg"
                width="400"
                height="300"
                alt="Project Screenshot 3"
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

function ArrowRightIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  )
}

export default ProjectPage
