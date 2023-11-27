import Image from "next/image"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Button, buttonVariants } from "@/components/ui/button"
import {
  PageHeader,
  PageHeaderCTA,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/layout/page-header"
import { ExampleDemos } from "@/components/shared/example-demos"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="container relative mt-12 px-0">
      <PageHeader className="pb-8">
        <Image
          src="/hyperion_assembly_logo.png"
          alt="Hyperion Assembly Logo"
          width={80}
          height={80}
          className="mb-6 h-20 w-20 rounded-2xl"
          style={{
            '-webkitBoxShadow': '5px 5px 0px 0px #a5a5a5, 10px 10px 0px 0px #bcbbbb, 15px 15px 0px 0px #d2d2d2',
            boxShadow: '5px 5px 0px 0px #a5a5a5, 10px 10px 0px 0px #bcbbbb, 15px 15px 0px 0px #d2d2d2'
          }}
        />
        <PageHeaderHeading>Welcome to&nbsp;Hyperion Assembly</PageHeaderHeading>
        <PageHeaderDescription>{siteConfig.description}</PageHeaderDescription>
        <PageHeaderCTA>
          <Link
            href='/login'
          >
            <Button
              variant="default"
              size="lg"
              className="px-6 py-6"
              type="button"
            >
              Join Hyperion
            </Button>
          </Link>
          <Link
            href='https://github.com/hyperion-assembly/'
            target="_blank"
            rel="noreferrer noopener"
          >
            <Button
              variant="secondary"
              size="lg"
              className="px-6 py-6"
              type="button"
            >
              Read more
            </Button>
          </Link>
        </PageHeaderCTA>
        {/* <PageHeaderCTA>
          <Link
            href={siteConfig.links.docs}
            target="_blank"
            rel="noreferrer noopener"
            className={buttonVariants({ variant: "default" })}
          >
            <LuBook className="mr-2 h-4 w-4" />
            Docs
          </Link>
          <Link
            href={siteConfig.links.github}
            target="_blank"
            rel="noreferrer noopener"
            className={buttonVariants({ variant: "secondary" })}
          >
            <FaGithub className="mr-2 h-4 w-4" />
            Github
          </Link>
          <Link
            href={siteConfig.links.discord}
            target="_blank"
            rel="noreferrer noopener"
            className={cn(
              buttonVariants(),
              "bg-[#7289da] text-white hover:bg-[#7289da]/80"
            )}
          >
            <FaDiscord className="mr-2 h-4 w-4" />
            Discord
          </Link>
        </PageHeaderCTA> */}
      </PageHeader>
      <ExampleDemos />
    </div>
  )
}
