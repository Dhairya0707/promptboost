import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Info } from "lucide-react";
import { Button } from "@/components/ui/button";

interface InfoBoxProps {
  title: string;
  description: string;
  guidePoints?: string[];
}

const InfoBox = ({ title, description, guidePoints }: InfoBoxProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon">
          <Info className="w-4 h-4 text-muted-foreground" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl">🤔 What is {title}?</DialogTitle>
          <DialogDescription className="text-base mt-2">
            {description}
          </DialogDescription>
        </DialogHeader>
        {guidePoints && (
          <ul className="list-disc list-inside text-sm mt-4 space-y-1 text-muted-foreground">
            {guidePoints.map((point, i) => (
              <li key={i}>👉 {point}</li>
            ))}
          </ul>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default InfoBox;
