"use client"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar"
import { createSupabaseClient } from "@/lib/createSupabase"
import { useState, useEffect } from "react"
import { User } from "@supabase/supabase-js"
import Link from "next/link"
import { useRouter } from 'next/navigation'

export function UserNav() {
  const [user, setUser] = useState<User | undefined>();
  const supabaseClient = createSupabaseClient();
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      const {
        data: { session },
        error
      } = await supabaseClient.auth.getSession()
      console.log('session', session);
      const user = session?.user;

      if (error) {
        console.error('Error fetching user', error);
      } else {
        setUser(user);
      }
    };

    fetchUser();
  }, []);

  const onLogout = () => {
    supabaseClient.auth.signOut();
    router.push('/');
  }

  const getLoggedInMenu = () => (
    <>
      <DropdownMenuLabel className="font-normal">
        <div className="flex flex-col space-y-2">
          <p className="text-md font-medium leading-none">{user?.user_metadata.preferred_username}</p>
          <p className="text-xs leading-none text-muted-foreground">
            {user?.user_metadata.account}
          </p>
        </div>
      </DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuGroup>
        <Link href="/dashboard">
          <DropdownMenuItem>
            Overview
            {/* <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut> */}
          </DropdownMenuItem>
        </Link>
        {/* <DropdownMenuItem>
            Billing
            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Settings
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem> */}
      </DropdownMenuGroup>
      <DropdownMenuSeparator />
      <DropdownMenuItem onClick={() => onLogout()}>
        Log out
      </DropdownMenuItem>
    </>
  )

  const getLoggedOutMenu = () => (
    <>
      <Link href="/login">
        <DropdownMenuItem>
          Login
        </DropdownMenuItem>
      </Link>
    </>
  )

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-8 w-8 rounded-full p-0">
          <Avatar className="">
            {<AvatarImage className="h-8 w-8 rounded-full" src={user?.user_metadata.avatar_url || '/hyperion_assembly_logo.png'} alt="user-profilepic" />}
            <AvatarFallback>{user?.user_metadata.preferred_username || 'HA'}</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        {user ? getLoggedInMenu() : getLoggedOutMenu()}
      </DropdownMenuContent>
    </DropdownMenu >
  )
}
