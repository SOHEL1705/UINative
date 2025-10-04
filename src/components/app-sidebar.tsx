"use client";

import * as React from "react";
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

// This is sample data.
const data = {
  user: {
    name: "UINative",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "UIN Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "UIN Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "UIn Corp.",
      logo: Command,
      plan: "Free",
    },
  ],

  navMain: [
    // {
    //   title: "Sections ",
    //   url: "#",
    //   icon: SquareTerminal,
    //   isActive: true,
    //   items: [
    //     {
    //       title: "Getting Started",
    //       url: "dashboard/getStarted",
    //     },
    //     {
    //       title: "Starred",
    //       url: "#",
    //     },
    //     {
    //       title: "Settings",
    //       url: "#",
    //     },
    //   ],
    // },
    {
      title: "Documentation",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Get Started",
          url: "/getStarted",
        },
        // {
        //   title: "Introduction",
        //   url: "",
        // },
        // {
        //   title: "Tutorials",
        //   url: "#",
        // },
        // {
        //   title: "Changelog",
        //   url: "#",
        // },
      ],
    },
    {
      title: "Components",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "input",
          url: "#",
          badge : ""
        },
        {
          title: "button",
          url: "#",
          badge : ""
        },
        {
          title: "card",
          url: "#",
          badge : ""
        },
        {
          title: "table",
          url: "#",
          badge : ""
        },
      ],
    },

    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Team",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Limits",
          url: "#",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        {/* <NavProjects projects={data.projects} /> */}
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
