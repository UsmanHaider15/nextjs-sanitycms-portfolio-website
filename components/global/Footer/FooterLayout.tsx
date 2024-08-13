import type { PortableTextBlock } from 'next-sanity'

// import { CustomPortableText } from '@/components//shared/CustomPortableText'
import type { SettingsPayload } from '@/types'

import Link from 'next/link'

interface FooterProps {
  data: SettingsPayload
}
export default function Footer(props: FooterProps) {
  const { data } = props
  const footer = data?.footer || ([] as PortableTextBlock[])

  return (
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
      <p className="text-xs text-muted-foreground">
        &copy; 2024 John Doe. All rights reserved.
      </p>
      <nav className="sm:ml-auto flex gap-4 sm:gap-6">
        <Link
          href="#"
          className="text-xs hover:underline underline-offset-4"
          prefetch={false}
        >
          Privacy Policy
        </Link>
        <Link
          href="#"
          className="text-xs hover:underline underline-offset-4"
          prefetch={false}
        >
          Terms of Service
        </Link>
      </nav>
    </footer>
  )
  // return (
  //   <footer className="bottom-0 w-full bg-white py-12 text-center md:py-20">
  //     {footer && (
  //       <CustomPortableText
  //         paragraphClasses="text-md md:text-xl"
  //         value={footer}
  //       />
  //     )}
  //   </footer>
  // )
}
