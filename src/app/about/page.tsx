"use client";
import React from "react";
import Navbar from "../componets/Navbar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Bot, Code2, Palette, Rocket, Users2 } from "lucide-react";

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        {/* Introduction Card */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-3xl font-bold">PromptBoost</CardTitle>
            <CardDescription className="text-lg">
              Transform your prompts into powerful, context-rich instructions
              using AI
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              PromptBoost is an innovative tool designed to enhance your prompts
              using advanced AI technology. Whether you're a writer, developer,
              or content creator, our tool helps you create more effective and
              precise prompts for any AI platform.
            </p>
          </CardContent>
        </Card>

        {/* Core Features Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Bot className="w-6 h-6 text-primary" />
                <CardTitle>AI Technology</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p>
                Powered by Google's Gemini AI API (free tier), delivering
                state-of-the-art prompt enhancement capabilities. Our
                implementation uses the Gemini-2.0-flash model for quick and
                efficient responses.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Palette className="w-6 h-6 text-primary" />
                <CardTitle>Modern UI/UX</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p>
                Built with Shadcn UI components and Tailwind CSS, featuring the
                beautiful Matsu Theme inspired by Ghibli Studio. The UI offers a
                clean, responsive design with a unique watercolor paper texture
                background.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Technical Stack */}
        <Card className="mb-8">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Code2 className="w-6 h-6 text-primary" />
              <CardTitle>Technical Stack</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <h3 className="font-semibold mb-2">Frontend</h3>
                <ul className="list-disc list-inside text-muted-foreground">
                  <li>Next.js 14</li>
                  <li>React 18</li>
                  <li>Tailwind CSS</li>
                  <li>Shadcn/ui components</li>
                  <li>Lucide Icons</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Backend & API</h3>
                <ul className="list-disc list-inside text-muted-foreground">
                  <li>Next.js API Routes</li>
                  <li>Google Gemini AI</li>
                  <li>Local Storage</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Developer Tools</h3>
                <ul className="list-disc list-inside text-muted-foreground">
                  <li>TypeScript</li>
                  <li>ESLint</li>
                  <li>Prettier</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* How It Works */}
        <Card className="mb-8">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Rocket className="w-6 h-6 text-primary" />
              <CardTitle>How It Works</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
              <li>Enter your base prompt in the text area</li>
              <li>
                Customize enhancement settings:
                <ul className="list-disc list-inside ml-6 mt-1">
                  <li>Choose enhancement type (Descriptive, Creative, etc.)</li>
                  <li>Select tone (Casual, Formal, Technical, etc.)</li>
                  <li>Adjust output length and creativity level</li>
                  <li>Toggle emoji inclusion</li>
                </ul>
              </li>
              <li>
                Click &quot;Enhance Prompt&quot; to generate improved content
              </li>
              <li>Copy and use your enhanced prompt anywhere</li>
            </ol>
          </CardContent>
        </Card>

        {/* Future Plans */}
        <Card className="mb-8">
          <CardHeader>
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6 text-primary"
              >
                <path d="M12 2v8"></path>
                <path d="m16 6-4 4-4-4"></path>
                <path d="M3 10h18v9a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-9Z"></path>
                <path d="M7 15h0"></path>
                <path d="M12 15h0"></path>
                <path d="M17 15h0"></path>
              </svg>
              <CardTitle>Coming Soon</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">
                  🧪 AI Experiments Section
                </h3>
                <p className="text-muted-foreground">
                  A new freestyle space where users can:
                </p>
                <ul className="list-disc list-inside text-muted-foreground mt-2 ml-4">
                  <li>Experiment with open-ended AI interactions</li>
                  <li>Test different prompt styles and approaches</li>
                  <li>
                    Get direct AI responses without enhancement constraints
                  </li>
                  <li>Compare different versions of prompts side by side</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-2">🌓 Dark Mode Support</h3>
                <p className="text-muted-foreground">
                  Implementing a system-wide dark theme option for:
                </p>
                <ul className="list-disc list-inside text-muted-foreground ml-4">
                  <li>Comfortable viewing in low-light conditions</li>
                  <li>Toggle between light and dark themes</li>
                  <li>System preference detection</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-2">
                  🔄 Quality of Life Updates
                </h3>
                <ul className="list-disc list-inside text-muted-foreground ml-4">
                  <li>Enhanced mobile responsiveness</li>
                  <li>Improved history management features</li>
                  <li>Better copy/paste functionality</li>
                  <li>Keyboard shortcuts for common actions</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Credits and Attribution */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Users2 className="w-6 h-6 text-primary" />
              <CardTitle>Credits & Attribution</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Developer</h3>
                <p className="text-muted-foreground">
                  Developed by Dhairya Darji - A passionate developer focused on
                  creating innovative AI-powered tools for everyday use.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Technologies</h3>
                <p className="text-muted-foreground">
                  Special thanks to Google's Gemini AI team for the API, Shadcn
                  for the beautiful UI components, and the entire open-source
                  community.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Developer Profile & Links */}
        <Card className="mb-8 mt-8">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Users2 className="w-6 h-6 text-primary" />
              <CardTitle>Developer & Project Links</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-4">Developer Profile</h3>
                <div className="space-y-2 text-muted-foreground">
                  <p className="text-lg font-medium">Dhairya Darji</p>
                  <p className="text-sm">
                    Full Stack Developer | AI Enthusiast
                  </p>
                  <div className="flex flex-col space-y-2 mt-4">
                    <a
                      href="https://github.com/Dhairya0707"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-primary hover:underline"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                        <path d="M9 18c-4.51 2-5-2-7-2" />
                      </svg>
                      GitHub Profile
                    </a>
                    <a
                      href="https://linkedin.com/in/dhairya-darji-072428284"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-primary hover:underline"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                        <rect width="4" height="12" x="2" y="9" />
                        <circle cx="4" cy="4" r="2" />
                      </svg>
                      LinkedIn Profile
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Project Resources</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Project Repository</h4>
                    <a
                      href="https://github.com/Dhairya0707/promptboost"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline flex items-center gap-2"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
                      </svg>
                      PromptBoost GitHub Repository
                    </a>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">UI Theme</h4>
                    <a
                      href="https://matsu-theme.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      Matsu Theme for Shadcn/UI
                    </a>
                    <p className="text-sm text-muted-foreground mt-2">
                      This project uses the beautiful Matsu Theme, a Ghibli
                      Studio inspired theme created by Matt Wierzbicki. The
                      theme features a unique watercolor paper texture and a
                      carefully crafted color palette that brings a touch of
                      Ghibli's magic to the UI.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default AboutPage;
