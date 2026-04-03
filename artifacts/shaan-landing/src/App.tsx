import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import GatePage from "@/pages/gate";
import SystemsPage from "@/pages/systems";
import SectionPersonalBrandPage from "@/pages/section-personal-brand";
import SectionAIPage from "@/pages/section-ai";
import PdfViewerPage from "@/pages/pdf-viewer";
import PdfViewerPromptPage from "@/pages/pdf-viewer-prompt";
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={GatePage} />
      <Route path="/systems" component={SystemsPage} />
      <Route path="/section/personal-brand" component={SectionPersonalBrandPage} />
      <Route path="/section/ai" component={SectionAIPage} />
      <Route path="/system/content-psychology" component={PdfViewerPage} />
      <Route path="/system/prompt-engineering" component={PdfViewerPromptPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
        <Router />
      </WouterRouter>
    </QueryClientProvider>
  );
}

export default App;
