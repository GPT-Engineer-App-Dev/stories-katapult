import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowUpCircle } from "lucide-react";

const StoryCard = ({ story }) => {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <CardTitle>{story.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="flex items-center text-sm text-muted-foreground">
          <ArrowUpCircle className="mr-1 h-4 w-4" />
          <span>{story.score} upvotes</span>
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full">
          <a href={story.url} target="_blank" rel="noopener noreferrer">
            Read more
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default StoryCard;