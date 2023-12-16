"use client"

import { useEffect, useState } from "react"
import error from "next/error"
import Image from "next/image"
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"
import { Auth } from "@supabase/auth-ui-react"
import { ThemeSupa } from "@supabase/auth-ui-shared"
import { User } from "@supabase/supabase-js"

import { createSupabaseClient } from "@/lib/createSupabase"
import { Button } from "@/components/ui/button"
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/layout/page-header"

export default function LoginPage() {
  const router = useRouter()
  const [user, setUser] = useState<User | undefined>()

  const supabaseClient = createSupabaseClient()

  useEffect(() => {
    const fetchUser = async () => {
      const {
        data: { session },
      } = await supabaseClient.auth.getSession()
      const user = session?.user

      if (error) {
        console.error("Error fetching user", error)
      } else {
        setUser(user)
      }
    }

    void fetchUser()
  }, [])

  useEffect(() => {
    const {
      data: { subscription },
    } = supabaseClient.auth.onAuthStateChange((event, session) => {
      console.log(`Login onAuthStateChange`, event)

      if (event === "INITIAL_SESSION") {
        console.log("initial session")
      } else if (event === "PASSWORD_RECOVERY") {
        console.log("new pw being set")
      } else if (event === "USER_UPDATED") {
        console.log("Login onAuthStateChange hasSession")
      } else if (event === "SIGNED_IN") {
        console.log("Login onAuthStateChange signed in")
        router.push("/dashboard")
      } else if (event === "SIGNED_OUT") {
        console.log("Login onAuthStateChange signed out")
      }
    })

    return () => subscription.unsubscribe()
  }, [])

  return (
    <div className="mt-10 text-lg text-white sm:mx-auto sm:w-full sm:max-w-sm">
      <PageHeader className="pb-8">
        <Image
          src="/hyperion_assembly_logo.png"
          alt="Hyperion Assembly Logo"
          width={80}
          height={80}
          className="mb-6 h-20 w-20 rounded-2xl"
          style={{
            // @ts-ignore
            "-webkitBoxShadow":
              "5px 5px 0px 0px #a5a5a5, 10px 10px 0px 0px #bcbbbb, 15px 15px 0px 0px #d2d2d2",
            boxShadow:
              "5px 5px 0px 0px #a5a5a5, 10px 10px 0px 0px #bcbbbb, 15px 15px 0px 0px #d2d2d2",
          }}
        />
        {user ? (
          <>
            <PageHeaderHeading>
              Welcome to &nbsp;Hyperion Assembly
            </PageHeaderHeading>
            <PageHeaderDescription>
              I can only show you the door, you&lsquo;re the one that has to
              walk through it
            </PageHeaderDescription>
          </>
        ) : (
          <>
            <PageHeaderHeading>Join &nbsp;Hyperion Assembly</PageHeaderHeading>
            <PageHeaderDescription>
              Connect your Github account
            </PageHeaderDescription>
          </>
        )}
      </PageHeader>
      {user ? (
        <Link href="/dashboard" className="text-center">
          <Button variant="default">Go to dashboard 🚪</Button>
        </Link>
      ) : (
        <Auth
          supabaseClient={supabaseClient}
          appearance={{
            theme: ThemeSupa,
            extend: true,
            className: {
              button:
                "border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground",
            },
          }}
          providers={["github"]}
          redirectTo="http://localhost:3000/login"
          onlyThirdPartyProviders
          localization={{
            variables: {
              sign_in: {
                social_provider_text: "Connect your Github account",
              },
            },
          }}
        // queryParams={searchParams}
        // dark
        />
      )}
    </div>
  )
}
