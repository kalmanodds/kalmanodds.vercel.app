import { slug as slugger } from "github-slugger";
import type { BlogFrontmatter, ProjectFrontmatter } from "@content/_schemas";

export const slugifyStr = (str: string) => slugger(str);

export const slugifyAll = (arr: string[]) => arr.map(str => slugifyStr(str));

export const slugifyPost = (post: BlogFrontmatter) =>
  post.postSlug ? slugger(post.postSlug) : slugger(post.title);

export const slugifyProject = (project: ProjectFrontmatter) => 
  project.projectSlug ? slugger(project.projectSlug) : slugger(project.title);


