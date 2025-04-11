import { useState } from "react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

type CopyPromptAlertProps = {
  enahcedprompt: string;
};

export function CopyPromptAlert({ enahcedprompt }: CopyPromptAlertProps) {
  const [open, setOpen] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(enahcedprompt);
      setOpen(true);
      setTimeout(() => setOpen(false), 1000);
    } catch (error) {
      alert("Clipboard access failed. Please copy manually.");
      console.log(error);
    }
  };

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <Button variant="outline" onClick={handleCopy}>
        📋
      </Button>
      <AlertDialogContent className="w-72 p-4 rounded-xl shadow-md bg-background/80 backdrop-blur">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-base font-medium text-center">
            ✅ Prompt copied to clipboard!
          </AlertDialogTitle>
        </AlertDialogHeader>
      </AlertDialogContent>
    </AlertDialog>
  );
}
