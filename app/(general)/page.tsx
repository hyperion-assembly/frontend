import Image from "next/image"
import Link from "next/link"
import { FaArchway, FaGithub, FaTelegram } from "react-icons/fa"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Button, buttonVariants } from "@/components/ui/button"
import {
  PageHeader,
  PageHeaderCTA,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/layout/page-header"

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
            // @ts-expect-error
            "-webkitBoxShadow":
              "5px 5px 0px 0px #a5a5a5, 10px 10px 0px 0px #bcbbbb, 15px 15px 0px 0px #d2d2d2",
            boxShadow:
              "5px 5px 0px 0px #a5a5a5, 10px 10px 0px 0px #bcbbbb, 15px 15px 0px 0px #d2d2d2",
          }}
        />
        <PageHeaderHeading>Welcome to&nbsp;Hyperion Assembly</PageHeaderHeading>
        <PageHeaderDescription>{siteConfig.description}</PageHeaderDescription>
        <PageHeaderCTA>
          <Link href="/login">
            <Button variant="default" size="lg" className="p-6" type="button">
              Join Hyperion
            </Button>
          </Link>
          <Link
            href="https://github.com/hyperion-assembly/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Button variant="secondary" size="lg" className="p-6" type="button">
              Learn more
            </Button>
          </Link>
        </PageHeaderCTA>
        <PageHeaderCTA className="mt-12">
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
            href={siteConfig.links.farcaster}
            target="_blank"
            rel="noreferrer noopener"
            className={cn(
              buttonVariants(),
              "bg-[#8465CB] text-white hover:bg-[#8465CB]/80"
            )}
          >
            <FaArchway className="mr-2 h-4 w-4" />
            Farcaster
          </Link>
          <Link
            href={siteConfig.links.telegram}
            target="_blank"
            rel="noreferrer noopener"
            className={cn(
              buttonVariants(),
              "bg-[#5FB2EC] text-white hover:bg-[#5FB2EC]/80"
            )}
          >
            <FaTelegram className="mr-2 h-4 w-4" />
            Telegram
          </Link>
        </PageHeaderCTA>
      </PageHeader>
      {/* <ExampleDemos /> */}
    </div>
  )
}
