import type { PortableTextBlock } from 'next-sanity'

import { CustomPortableText } from '@/components/shared/CustomPortableText'
import ImageBox from '@/components/shared/ImageBox'
import type { ShowcaseProject } from '@/types'

interface ProjectProps {
  project: ShowcaseProject
  odd: number
}

export function ProjectListItem(props: ProjectProps) {
  const { project } = props

  return (
    <div className="flex flex-col justify-center space-y-4">
      <ImageBox
        image={project.coverImage}
        alt={`Cover image from ${project.title}`}
        classesWrapper="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
      />
      <TextBox project={project} />
    </div>
  )
}

function TextBox({ project }: { project: ShowcaseProject }) {
  return (
    <div className="space-y-2">
      <h3 className="text-xl font-bold">Project 1</h3>
      <p className="text-muted-foreground">
        A web application that helps users manage their personal finances. Built
        with React, Node.js, and MongoDB.
      </p>
    </div>
  )
}
