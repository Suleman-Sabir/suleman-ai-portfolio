// Signal Atelier design system: dark editorial AI-systems interface with factual portfolio content and calm, keyboard-friendly interactions.
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider, useTheme } from "./contexts/ThemeContext";
import Home from "./pages/Home";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function ThemedApp() {
  const { theme } = useTheme();
  return (
    <TooltipProvider>
      <Toaster theme={theme} />
      <Router />
    </TooltipProvider>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark" switchable>
        <ThemedApp />
      </ThemeProvider>
    </ErrorBoundary>
  );
}
