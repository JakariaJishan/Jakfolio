import { ArrowRightIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

import { BLOGS } from "../data/blogs";
import { Panel, PanelHeader, PanelTitle } from "./panel";
import { PostItem } from "./post-item";

export function Blog() {
  return (
    <Panel id="blog">
      <PanelHeader>
        <PanelTitle>Blog</PanelTitle>
      </PanelHeader>

      <div className="relative py-4">
        <div className="pointer-events-none absolute inset-0 -z-1 grid grid-cols-1 gap-4 max-sm:hidden sm:grid-cols-2">
          <div className="border-r border-edge"></div>
          <div className="border-l border-edge"></div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {BLOGS.slice(0, 4).map((post) => (
            <PostItem key={post.id} post={post} />
          ))}
        </div>
      </div>

      <div className="screen-line-before flex justify-center py-2">
        <Button variant="default" asChild>
          <a
            href="https://medium.com/@jakariajishan006"
            target="_blank"
            rel="noopener noreferrer"
          >
            All Posts
            <ArrowRightIcon />
          </a>
        </Button>
      </div>
    </Panel>
  );
}
