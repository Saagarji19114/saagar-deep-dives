import { useEffect, useState } from "react";
import { Heart } from "lucide-react";
import { cn } from "@/lib/utils";

const LikeButton = ({ articleId }: { articleId: string }) => {
  const storageKey = `saagar-like-${articleId}`;
  const countKey = `saagar-like-count-${articleId}`;
  const [liked, setLiked] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    setLiked(localStorage.getItem(storageKey) === "1");
    const stored = parseInt(localStorage.getItem(countKey) || "0", 10);
    // seed with a nice base number based on id length so it doesn't look empty
    const seed = (articleId.length * 7) % 53 + 12;
    setCount(stored || seed);
  }, [articleId, storageKey, countKey]);

  const toggle = () => {
    const next = !liked;
    setLiked(next);
    const newCount = next ? count + 1 : Math.max(0, count - 1);
    setCount(newCount);
    localStorage.setItem(storageKey, next ? "1" : "0");
    localStorage.setItem(countKey, String(newCount));
  };

  return (
    <button
      onClick={toggle}
      aria-pressed={liked}
      className={cn(
        "inline-flex items-center gap-2 px-4 py-2 rounded-full border transition-all",
        liked
          ? "bg-primary/10 border-primary/40 text-primary"
          : "bg-muted border-border text-muted-foreground hover:text-foreground hover:border-primary/40"
      )}
    >
      <Heart className={cn("h-4 w-4 transition-transform", liked && "fill-current scale-110")} />
      <span className="text-sm font-medium">{count}</span>
    </button>
  );
};

export default LikeButton;