import React, { useState } from "react";
import { blogs } from "@/data/resources";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileText, ArrowRight, Filter } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function BlogsTab() {
  const [category, setCategory] = useState<string>("all");
  const [readTime, setReadTime] = useState<string>("all");
  const [sort, setSort] = useState<string>("newest");

  const filteredBlogs = blogs.filter((blog) => {
    if (category !== "all" && blog.category !== category) return false;
    if (readTime !== "all" && blog.readTime !== readTime) return false;
    return true;
  });

  // Sort logic (mock)
  if (sort === "newest") {
    filteredBlogs.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-display font-bold text-primary">Blogs</h2>
          <p className="text-muted-foreground">
            Clear, practical reading for finance, ops, and technical evaluators.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          <Select value={category} onValueChange={setCategory}>
            <SelectTrigger className="w-[180px] bg-white">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="B2B">B2B</SelectItem>
              <SelectItem value="B2C">B2C</SelectItem>
              <SelectItem value="RIAA solution">RIAA solution</SelectItem>
              <SelectItem value="Partnerships">Partnerships</SelectItem>
              <SelectItem value="Security and deployment">Security and deployment</SelectItem>
            </SelectContent>
          </Select>

          <Select value={readTime} onValueChange={setReadTime}>
            <SelectTrigger className="w-[160px] bg-white">
              <SelectValue placeholder="Read time" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Any duration</SelectItem>
              <SelectItem value="3–5 min">3–5 min</SelectItem>
              <SelectItem value="6–10 min">6–10 min</SelectItem>
              <SelectItem value="10+ min">10+ min</SelectItem>
            </SelectContent>
          </Select>

          <Select value={sort} onValueChange={setSort}>
            <SelectTrigger className="w-[140px] bg-white">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Newest</SelectItem>
              <SelectItem value="most-read">Most read</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {filteredBlogs.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBlogs.map((blog) => (
            <div key={blog.id} className="group bg-white rounded-xl border border-border p-6 hover:shadow-md transition-all hover:border-primary/20 flex flex-col h-full">
              <div className="mb-4">
                <div className="flex items-center gap-2 mb-3">
                  <div className="p-1.5 rounded-md bg-slate-100 group-hover:bg-primary/5 transition-colors">
                    <FileText className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <span className="text-xs font-medium text-muted-foreground">{blog.category}</span>
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {blog.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                  {blog.summary}
                </p>
              </div>
              
              <div className="mt-auto pt-4 flex items-center justify-between border-t border-border/50">
                <div className="flex gap-2">
                  {blog.tags.map((tag, i) => (
                    <span key={i} className="text-[10px] font-medium text-slate-500 bg-slate-50 px-2 py-1 rounded-full border border-slate-100">
                      {tag}
                    </span>
                  ))}
                </div>
                <Button variant="ghost" size="sm" className="rounded-full hover:bg-primary/5 hover:text-primary px-0 pl-2">
                  Read
                </Button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="py-24 text-center bg-slate-50 rounded-xl border border-dashed border-border">
          <Filter className="w-8 h-8 text-muted-foreground/30 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-muted-foreground">No blogs match your filters.</h3>
          <Button variant="link" onClick={() => { setCategory("all"); setReadTime("all"); }}>
            Clear filters
          </Button>
        </div>
      )}
    </div>
  );
}
