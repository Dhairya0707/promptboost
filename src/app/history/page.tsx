// // app/history/page.tsx
// "use client";
// import { useEffect, useState } from "react";
// import Navbar from "../componets/Navbar";
// import { Button } from "@/components/ui/button";
// import Markdown from "react-markdown";
// import {
//   AlertDialog,
//   AlertDialogAction,
//   AlertDialogCancel,
//   AlertDialogContent,
//   AlertDialogFooter,
//   AlertDialogHeader,
//   AlertDialogTitle,
//   AlertDialogTrigger,
// } from "@/components/ui/alert-dialog";
// import { Trash } from "lucide-react";

// const HistoryPage = () => {
//   const [history, setHistory] = useState([]);

//   useEffect(() => {
//     // Load history from local storage
//     const storedHistory = JSON.parse(localStorage.getItem("history") || "[]");
//     setHistory(storedHistory);
//   }, []);

//   const handleDelete = (index: number) => {
//     const updatedHistory = history.filter((_, i) => i !== index);
//     setHistory(updatedHistory);
//     localStorage.setItem("history", JSON.stringify(updatedHistory));
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="mt-10 p-4">
//         {/* <h1 className="text-2xl font-bold mb-4">Prompt History</h1> */}
//         {history.length === 0 ? (
//           <div className="w-full flex justify-center align-middle">
//             No history available.
//           </div>
//         ) : (
//           <div className="space-y-4">
//             {history.map((entry, index) => (
//               <div key={index} className="border p-4 rounded-md shadow-md">
//                 <div className="flex justify-end">
//                   <AlertDialog>
//                     <AlertDialogTrigger asChild>
//                       <Button
//                         variant="destructive"
//                         className="mt-2"
//                         onClick={() => {}}
//                       >
//                         <Trash />
//                         Delete
//                       </Button>
//                     </AlertDialogTrigger>
//                     <AlertDialogContent>
//                       <AlertDialogHeader>
//                         <AlertDialogTitle>Are you sure?</AlertDialogTitle>
//                       </AlertDialogHeader>
//                       <p>
//                         This action cannot be undone. Do you want to delete this
//                         history entry?
//                       </p>
//                       <AlertDialogFooter>
//                         <AlertDialogCancel>Cancel</AlertDialogCancel>
//                         <AlertDialogAction
//                           onClick={() => {
//                             handleDelete(index);
//                           }}
//                         >
//                           Delete
//                         </AlertDialogAction>
//                       </AlertDialogFooter>
//                     </AlertDialogContent>
//                   </AlertDialog>
//                 </div>
//                 <h2 className="font-semibold">Original Prompt:</h2>
//                 <p>{entry["input"]}</p>
//                 <h2 className="font-semibold mt-2">Enhanced Output:</h2>
//                 <Markdown>{entry["response"]}</Markdown>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default HistoryPage;
"use client";
import { useEffect, useState } from "react";
import Navbar from "../componets/Navbar";
import { Button } from "@/components/ui/button";
import Markdown from "react-markdown";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown, ChevronUp, Clock, Trash } from "lucide-react";

interface HistoryEntry {
  input: string;
  response: string;
  timestamp: number;
}

const HistoryPage = () => {
  const [history, setHistory] = useState<HistoryEntry[]>([]);
  const [expandedItems, setExpandedItems] = useState<{
    [key: number]: boolean;
  }>({});

  useEffect(() => {
    const storedHistory = JSON.parse(localStorage.getItem("history") || "[]");
    setHistory(storedHistory);
  }, []);

  const handleDelete = (index: number) => {
    const updatedHistory = history.filter((_, i) => i !== index);
    setHistory(updatedHistory);
    localStorage.setItem("history", JSON.stringify(updatedHistory));
  };

  const toggleExpand = (index: number) => {
    setExpandedItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const formatDate = (timestamp: number) => {
    return new Date(timestamp).toLocaleString("en-US", {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Prompt History</h1>
          <span className="text-muted-foreground">
            {history.length} {history.length === 1 ? "Entry" : "Entries"}
          </span>
        </div>

        {history.length === 0 ? (
          <Card className="flex flex-col items-center justify-center p-8 text-center">
            <Clock className="w-12 h-12 text-muted-foreground mb-4" />
            <h2 className="text-xl font-semibold mb-2">No History Available</h2>
            <p className="text-muted-foreground">
              Your enhanced prompts will appear here once you start using the
              tool.
            </p>
          </Card>
        ) : (
          <div className="space-y-4">
            {history.map((entry, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-muted-foreground">
                        {formatDate(entry["timestamp"])}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => toggleExpand(index)}
                        className="text-muted-foreground hover:text-foreground"
                      >
                        {expandedItems[index] ? (
                          <ChevronUp className="h-4 w-4" />
                        ) : (
                          <ChevronDown className="h-4 w-4" />
                        )}
                      </Button>
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-destructive hover:text-destructive hover:bg-destructive/10"
                          >
                            <Trash className="h-4 w-4" />
                          </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>
                              Delete this entry?
                            </AlertDialogTitle>
                          </AlertDialogHeader>
                          <p className="text-muted-foreground">
                            This action cannot be undone. This will permanently
                            delete this history entry.
                          </p>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction
                              onClick={() => handleDelete(index)}
                              className="bg-destructive hover:bg-destructive/90"
                            >
                              Delete
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h3 className="text-sm font-medium text-muted-foreground mb-2">
                        Original Prompt
                      </h3>
                      <p className="text-sm bg-muted/50 p-3 rounded-md">
                        {entry.input}
                      </p>
                    </div>

                    {expandedItems[index] && (
                      <div>
                        <h3 className="text-sm font-medium text-muted-foreground mb-2">
                          Enhanced Output
                        </h3>
                        <div className="bg-muted/50 p-3 rounded-md">
                          <Markdown>
                            {/* className="text-sm prose prose-sm max-w-none" */}
                            {entry.response}
                          </Markdown>
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default HistoryPage;
