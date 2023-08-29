import { TechStack } from "./TechStack"
import { Url } from "next/dist/shared/lib/router/router"

export type ProjectType = {
    glink: Url,
    link: Url,
    image: string,
    title: string,
    techstack: TechStack[],
    description: string
  }