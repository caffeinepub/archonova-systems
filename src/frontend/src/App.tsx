import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import ARCOPlatform from "@/pages/ARCOPlatform";
import AWSServices from "@/pages/AWSServices";
import About from "@/pages/About";
import CloudServices from "@/pages/CloudServices";
import Contact from "@/pages/Contact";
import DataCenter from "@/pages/DataCenter";
import GoogleCloud from "@/pages/GoogleCloud";
import Home from "@/pages/Home";
import LicensingConsulting from "@/pages/LicensingConsulting";
import ManagedServices from "@/pages/ManagedServices";
import MicrosoftCloud from "@/pages/MicrosoftCloud";
import SoftwareAI from "@/pages/SoftwareAI";
import Training from "@/pages/Training";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";

const queryClient = new QueryClient();

function RootLayout() {
  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ backgroundColor: "#0A0A0A" }}
    >
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

const rootRoute = createRootRoute({ component: RootLayout });

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
});
const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: About,
});
const cloudServicesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/cloud-services",
  component: CloudServices,
});
const microsoftRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/microsoft-cloud",
  component: MicrosoftCloud,
});
const googleRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/google-cloud",
  component: GoogleCloud,
});
const awsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/aws-services",
  component: AWSServices,
});
const dataCenterRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/data-center",
  component: DataCenter,
});
const softwareAIRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/software-ai",
  component: SoftwareAI,
});
const managedRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/managed-services",
  component: ManagedServices,
});
const licensingRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/licensing-consulting",
  component: LicensingConsulting,
});
const trainingRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/training",
  component: Training,
});
const arcoRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/arco",
  component: ARCOPlatform,
});
const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: Contact,
});

const routeTree = rootRoute.addChildren([
  homeRoute,
  aboutRoute,
  cloudServicesRoute,
  microsoftRoute,
  googleRoute,
  awsRoute,
  dataCenterRoute,
  softwareAIRoute,
  managedRoute,
  licensingRoute,
  trainingRoute,
  arcoRoute,
  contactRoute,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}
