"use client";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  AlignLeft,
  BookOpenText,
  Bot,
  Briefcase,
  Brush,
  ClipboardPaste,
  Image,
  Shrink,
  Terminal,
} from "lucide-react";
import React, { useRef, useState } from "react";
import EnhancementTypeSelector from "./Enahncer";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import InfoBox from "./Infobox";
import { CopyPromptAlert } from "./CopyPromptAlert";
import Markdown from "react-markdown";

const MainBox = () => {
  const [msg, setmsg] = useState("");
  const [activetype, setactivetype] = useState<String>("Descriptive");
  const [tone, setTone] = useState("casual");
  const [outputLength, setOutputLength] = useState("Medium");
  const [emojiEnabled, setEmojiEnabled] = useState(false);
  const [creativity, setCreativity] = useState(1);
  const [loading, setIsLoading] = useState(false);
  const [show, setshow] = useState(true);
  const [enahncedprompt, setenhancedpromtp] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const getcreativity = (num: number) => {
    const data: { [key: string]: string } = {
      0: "Neutral",
      1: "Creative",
      2: "Creative",
    };
    return data[num] || "Neutral";
  };

  const pastetxt = async () => {
    try {
      const txt = await navigator.clipboard.readText();
      setmsg(txt);
    } catch (e) {
      console.error("Clipboard access denied", e);
      alert("Clipboard access failed. Please paste manually.");
    }
  };

  const updateactive = (name: String) => {
    setactivetype(name);
  };

  const type = (name: String) => {
    return activetype === name ? "default" : "outline";
  };

  const generate = async () => {
    setIsLoading(true);

    // if (!msg) {
    //   setIsLoading(false);
    //   return;
    // }
    if (!msg.trim()) {
      setErrorMsg("Please enter a prompt to proceed.");

      // scroll to textarea
      if (textareaRef.current) {
        textareaRef.current.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
        textareaRef.current.focus(); // optional: focus on it
      }

      setIsLoading(false);
      return;
    } else {
      setErrorMsg(""); // clear error
    }
    try {
      const res = await fetch("/api/enhance", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          msg,
          activetype,
          tone,
          outputLength,
          emojiEnabled,
          creativity: getcreativity(creativity),
        }),
      });

      const data = await res.json();
      setIsLoading(false);

      if (res.status == 200) {
        setenhancedpromtp(data.output);
        saveToHistory(msg, data.output);
        setshow(false);
      } else {
        setenhancedpromtp(data.message);
        console.error("Error:", data.message);
      }
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  const saveToHistory = (input: string, response: string) => {
    const existing = JSON.parse(localStorage.getItem("history") || "[]");
    const newEntry = {
      input,
      response,
      timestamp: Date.now(),
    };
    localStorage.setItem("history", JSON.stringify([newEntry, ...existing]));
  };

  return (
    <>
      <div>
        <div className="flex justify-center items-center">
          <div className=" w-full ml-5 mr-5 sm:w-1/2">
            <div className=" grid gap-1.5">
              <div className="w-full flex flex-row justify-between">
                <Label htmlFor="message" className="">
                  Enter your prompt
                </Label>
                {/* <Button variant="link" onClick={pastetxt}>Paste</Button> */}
                <Button variant="ghost" size="icon" onClick={pastetxt}>
                  <ClipboardPaste className="h-4 w-4" />
                </Button>
              </div>

              <Textarea
                ref={textareaRef}
                placeholder="Got a rough prompt? Drop it here..."
                value={msg}
                rows={10}
                id="message"
                onChange={(e) => {
                  setmsg(e.target.value);
                  console.log(msg);
                }}
              />
              {errorMsg && (
                <p className="text-red-500 text-sm mt-1">{errorMsg}</p>
              )}
            </div>

            {/* //here all things */}
            <div className={show && !loading ? "block" : "hidden"}>
              <div className="w-full flex flex-row justify-between mt-10">
                <Label className="text-base">Enhancement Types</Label>
                <InfoBox
                  title="Enhancement Types"
                  description="Choose how you want your prompt to be enhanced. Each option applies a different style or tone to match your purpose or platform more effectively."
                  guidePoints={[
                    "📝 Descriptive: Enriches your prompt with vivid details and clear explanations.",
                    "🎨 Creative: Adds imagination, expressive language, and a unique twist to your prompt.",
                    "💼 Professional: Makes the tone formal, polished, and suitable for business or corporate use.",
                    "📉 Concise: Compresses the content to be shorter, sharper, and more direct.",
                    "🧠 AI Art: Refines prompts specifically for AI image-generation platforms like Midjourney or DALL·E.",
                    "📖 Storytelling: Shapes your idea into a compelling story with structure and flow.",
                    "🤖 AI Optimized: Tunes your prompt for better results on platforms like ChatGPT, Gemini, Claude, etc.",
                  ]}
                />
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full">
                <Button
                  className="flex items-center gap-2 w-full"
                  variant={type("Descriptive")}
                  onClick={() => {
                    updateactive("Descriptive");
                  }}
                >
                  <AlignLeft className="w-4 h-4" />
                  Descriptive
                </Button>

                <Button
                  variant={type("Creative")}
                  className="flex items-center gap-2 w-full"
                  onClick={() => {
                    updateactive("Creative");
                  }}
                >
                  <Brush className="w-4 h-4" />
                  Creative
                </Button>

                <Button
                  variant={type("Professional")}
                  className="flex items-center gap-2 w-full"
                  onClick={() => {
                    updateactive("Professional");
                  }}
                >
                  <Briefcase className="w-4 h-4" />
                  Professional
                </Button>

                <Button
                  variant={type("Concise")}
                  className="flex items-center gap-2 w-full"
                  onClick={() => {
                    updateactive("Concise");
                  }}
                >
                  <Shrink className="w-4 h-4" />
                  Concise
                </Button>

                <Button
                  variant={type("AI Art")}
                  className="flex items-center gap-2 w-full"
                  onClick={() => {
                    updateactive("AI Art");
                  }}
                >
                  <Image className="w-4 h-4" />
                  AI Art
                </Button>

                <Button
                  variant={type("AI Optimized")}
                  className="flex items-center gap-2 w-full"
                  onClick={() => {
                    updateactive("AI Optimized");
                  }}
                >
                  <Bot className="w-4 h-4" />
                  AI Optimized
                </Button>
              </div>

              <div className="w-full flex flex-row justify-between mt-10">
                <Label className="text-base">
                  Tone Selector
                  {/* <Button variant="ghost"> */}
                  {/* <Info /> */}
                  <InfoBox
                    title="Tone Selector"
                    description="Adjusts how your final prompt should sound."
                    guidePoints={[
                      "🎯 Choose 'Casual' for friendly content.",
                      "📚 Use 'Formal' for professional use cases.",
                      "🎉 Try 'Playful' when writing for fun or social media.",
                      "💼 'Technical' is great for precise and structured prompts.",
                    ]}
                  />
                  {/* </Button> */}
                </Label>
                <div className="w-1/3">
                  <Select
                    value={tone}
                    onValueChange={(value) => setTone(value)}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="casual">Casual</SelectItem>
                      <SelectItem value="formal">Formal</SelectItem>
                      <SelectItem value="playful">Playful</SelectItem>
                      <SelectItem value="technical">Technical</SelectItem>
                      <SelectItem value="inspirational">
                        Inspirational
                      </SelectItem>
                      <SelectItem value="academic">Academic</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="w-full flex flex-row justify-between mt-10">
                <Label className="text-base">Output Length</Label>
                {/* <Button variant="ghost"> */}
                <InfoBox
                  title="Output Length"
                  description="Control how long or short you want your generated content to be."
                  guidePoints={[
                    "📝 'Short' gives you quick summaries or concise answers.",
                    "📄 'Medium' offers a balanced amount of detail and length.",
                    "📚 'Long' is best for detailed explanations, stories, or deep dives.",
                    "🎯 Choose the length based on your target use — tweets vs blogs, for example.",
                  ]}
                />
                {/* </Button> */}
              </div>
              <div className="flex gap-4 w-full jus">
                {["Short", "Medium", "Long"].map((length) => (
                  <Button
                    key={length}
                    variant={outputLength === length ? "default" : "outline"}
                    onClick={() => setOutputLength(length)}
                  >
                    {length}
                  </Button>
                ))}
              </div>

              <div className="flex items-center justify-between mt-10">
                <Label
                  htmlFor="emoji-toggle"
                  className="text-base font-semibold"
                >
                  Include Emojis
                  <InfoBox
                    title="Include Emojis"
                    description="Choose whether to add emojis to your prompt for extra flair and emotional expression."
                    guidePoints={[
                      "😀 Emojis help make content more engaging and visually fun.",
                      "📱 Perfect for social media posts, casual messages, or playful content.",
                      "⚙️ Turning it off keeps your text clean and professional.",
                      "💡 Use emojis to highlight key points or add personality to your message.",
                    ]}
                  />
                </Label>
                <Switch
                  id="emoji-toggle"
                  checked={emojiEnabled}
                  onCheckedChange={setEmojiEnabled}
                />
              </div>

              <div className="w-full">
                <div className="w-full flex flex-row justify-between mt-10">
                  <Label className="mb-2 text-sm">Creativity Level</Label>
                  {/* <Button variant="ghost"> */}
                  <InfoBox
                    title="Creativity Level"
                    description="Set how imaginative or innovative the generated content should be."
                    guidePoints={[
                      "🧘 Neutral – Balanced and straightforward, sticks to the facts.",
                      "🎭 Creative – Adds flair and uniqueness while staying on-topic.",
                      "🚀 Very Creative – Thinks outside the box with bold and expressive content.",
                      "🎯 Choose based on your use case: professional = neutral, ads/blogs = creative.",
                    ]}
                  />
                  {/* </Button> */}
                </div>

                <Slider
                  min={0}
                  max={2}
                  step={1}
                  value={[creativity]}
                  onValueChange={([val]) => setCreativity(val)}
                />
                <div className="flex justify-between text-xs mt-1 px-1 text-muted-foreground">
                  <span>Neutral</span>
                  <span>Creative</span>
                  <span>Very Creative</span>
                </div>
              </div>
            </div>
            {/* ///// */}

            {/* <Button className="w-full mt-10" size="lg">
              🚀 Enhance Prompt
            </Button> */}
            {show ? (
              <Button
                className="w-full mt-10"
                size="lg"
                disabled={loading}
                onClick={() => {
                  // setIsLoading(true);
                  // setshow(false);
                  generate();
                }}
              >
                {loading ? (
                  <div className="flex items-center gap-2 relative ">
                    {/* <span className="inline-block animate-fly">✈️ </span> */}
                    <span className="absolute left-0 animate-marquee-plane">
                      ✈️
                    </span>
                    Enhancing...
                  </div>
                ) : (
                  "🚀 Enhance Prompt"
                )}
              </Button>
            ) : (
              <Button
                className="w-full mt-10"
                size="lg"
                variant="destructive"
                onClick={() => {
                  setmsg(""); // clear prompt input
                  setenhancedpromtp(""); // clear enhanced result
                  setshow(true); // hide buttons
                }}
              >
                🔄 Reset
              </Button>
            )}
            {/* <span className="fly-plane">✈️</span> */}

            {/* <div className="m-20"> */}
            <div className="mt-20 mb-20">
              {!show && !loading && (
                <Card className="mt-6 bg-muted border text-sm whitespace-pre-wrap">
                  <CardHeader className="flex flex-row items-center justify-between">
                    <div>
                      <CardTitle className="text-base font-bold">
                        Enhanced Output
                      </CardTitle>
                      {/* Optional Description below title */}
                      {/* <CardDescription> */}
                      {/* Formatted response below */}
                      {/* </CardDescription> */}
                    </div>
                    <CopyPromptAlert enahcedprompt={enahncedprompt} />
                  </CardHeader>

                  <CardContent className="mt-4">
                    <Markdown>{enahncedprompt.toString()}</Markdown>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainBox;
