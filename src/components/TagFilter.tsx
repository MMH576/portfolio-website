"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface TagFilterProps {
  tags: string[];
  selectedTag: string | null;
  onTagSelect: (tag: string | null) => void;
}

export function TagFilter({ tags, selectedTag, onTagSelect }: TagFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      <Button
        variant={selectedTag === null ? "default" : "outline"}
        size="sm"
        onClick={() => onTagSelect(null)}
        className={cn(
          "transition-all",
          selectedTag === null && "shadow-sm"
        )}
      >
        All
      </Button>
      {tags.map((tag) => (
        <Button
          key={tag}
          variant={selectedTag === tag ? "default" : "outline"}
          size="sm"
          onClick={() => onTagSelect(tag)}
          className={cn(
            "transition-all",
            selectedTag === tag && "shadow-sm"
          )}
        >
          {tag}
        </Button>
      ))}
    </div>
  );
}
