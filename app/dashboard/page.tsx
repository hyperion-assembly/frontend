"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useSearchParams } from "next/navigation"

export default function PageDashboard() {
  const searchParams = useSearchParams()
  const isInstall = searchParams.get('setup_action') === 'install' || searchParams.get('setup_action') === 'update'

  return (
    <div
      className="flex h-full w-full py-6 lg:py-10"
    >
      <div className="col-span-12 flex flex-col lg:col-span-9">
        <h3 className="text-2xl font-bold lg:text-4xl">
          <span className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent dark:from-gray-200 dark:to-gray-400">
            Setup your Hyperion Assembly account
          </span>
        </h3>
        <div>
          <h4 className="mb-2 mt-8 text-xl font-bold">Done</h4>
          <ul className="ml-1 list-inside space-y-4 text-lg">
            <li>
              ✅
              Connect Github account
            </li>
            <li>
              ✅
              Connect web3 wallet (optional)
            </li>
          </ul>
          <h4 className="mb-2 mt-8 text-xl font-bold">Next steps</h4>
          <ol className="ml-1 list-inside space-y-4 text-lg">
            <li>
              <Link href="https://github.com/apps/hyperion-assembly/" target="_blank">
                {isInstall ? '✅ ' : <Button className="mr-3" variant="emerald" size="sm">Install</Button>}
                Install the Hyperion Github app
              </Link>
            </li>
            <li>
              <Link href="https://github.com/hyperion-assembly/demo-repository/issues/new" target="_blank">
                <Button className="mr-3" variant={isInstall ? "emerald" : "outline"} size="sm">Create issues</Button>
                Create issues and merge the first PR
              </Link>
            </li>
            <li>
              <Link href="https://github.com/hyperion-assembly/" target="_blank">
                <Button className="mr-3" variant="outline" size="sm">View</Button>
                See the onchain payout transaction
              </Link>
            </li>
          </ol>
        </div>
      </div>
    </div>
  )
}
