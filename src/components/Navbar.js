import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  ArrowRight,
  ChevronDown,
  TrendingUp,
  FileSearch,
  Video,
  Rss,
  Bookmark,
  Trophy,
  Layout,
  Play,
  HelpCircle,
  Building2,
  Banknote,
  ShieldCheck,
  HeartPulse,
  GraduationCap,
  Home,
  Briefcase,
  Gavel,
  Users2,
  HandHeart,
} from "lucide-react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const featuresRef = useRef();
  const industriesRef = useRef();
  const resourcesRef = useRef();

  const location = useLocation();

  useEffect(() => {
    setOpenDropdown(null);
  }, [location]);

  const handleDropdownToggle = (menu) => {
    setOpenDropdown((prev) => (prev === menu ? null : menu));
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        featuresRef.current?.contains(event.target) ||
        industriesRef.current?.contains(event.target) ||
        resourcesRef.current?.contains(event.target)
      ) {
        return;
      }
      setOpenDropdown(null);
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const topFeatures = [
    { icon: Building2, label: "Publish and schedule", to: "/publish" },
    { icon: Banknote, label: "Social media analytics", to: "/social" },
    { icon: ShieldCheck, label: "Social listening", to: "/sociallistening" },
    { icon: HeartPulse, label: "AI content creation", to: "/aicontentcreation" },
    { icon: Banknote, label: "Engagement tools", to: "/engagementtools" },
    { icon: ShieldCheck, label: "Inbox and messaging", to: "/inboxandmessaging" },
    { icon: Briefcase, label: "Employee advocacy", to: "/employeeadvocacy" },
    { icon: Gavel, label: "Social advertising", to: "/socialadvertising" },
    { icon: Users2, label: "Best times to post", to: "/besttimestopost" },
  ];

  const industries = [
    { icon: Building2, label: "Small business" },
    { icon: Home, label: "Real estate" },
    { icon: Banknote, label: "Financial services" },
    { icon: Briefcase, label: "Professional services" },
    { icon: ShieldCheck, label: "Government" },
    { icon: Gavel, label: "Legal" },
    { icon: HeartPulse, label: "Healthcare" },
    { icon: Users2, label: "Agencies" },
    { icon: GraduationCap, label: "Education" },
    { icon: HandHeart, label: "Nonprofit" },
  ];

  const resources = [
    { icon: TrendingUp, label: "Social media trends", isNew: true },
    { icon: FileSearch, label: "Case studies" },
    { icon: Video, label: "Webinars" },
    { icon: Rss, label: "Blog" },
    { icon: Bookmark, label: "Courses" },
    { icon: Trophy, label: "Free tools" },
    { icon: Layout, label: "Templates" },
    { icon: Play, label: "Tutorials and demos" },
    { icon: HelpCircle, label: "FAQ" },
  ];

  const DropdownMenu = ({ items, footerText }) => (
    <div className="absolute top-full left-0 bg-white shadow-lg border rounded-md p-6 w-full md:w-[550px] z-50 grid grid-cols-1 md:grid-cols-2 gap-4">
      {items.map(({ icon: Icon, label, to, isNew }) => (
        <Link
          key={label}
          to={to || "#"}
          className="flex items-center justify-between hover:text-[#0077b5] cursor-pointer"
        >
          <div className="flex items-center gap-3">
            <Icon className="w-5 h-5 text-[#002b3f]" />
            <span>{label}</span>
          </div>
          {isNew && (
            <span className="bg-green-400 text-white text-xs px-2 py-0.5 rounded-full">
              new
            </span>
          )}
        </Link>
      ))}
      <div className="col-span-2 border-t pt-4 mt-4 flex items-center gap-2 text-sm font-semibold text-[#002b3f] cursor-pointer hover:text-blue-600">
        {footerText} <ArrowRight size={16} />
      </div>
    </div>
  );

  return (
    <nav className="fixed top-0 left-0 w-full flex justify-between items-center px-4 md:px-6 py-4 border-b border-gray-200 bg-white z-50">
      <div className="flex items-center gap-2">
        <img
          src="https://www.hootsuite.com/images/owly-symbol-saffron.svg"
          alt="Hootsuite"
          className="h-6"
        />
        <span className="text-lg font-semibold text-[#ff3b30]">Hootsuite</span>
      </div>

      <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-800">
        <div className="relative" ref={featuresRef}>
          <button
            onClick={() => handleDropdownToggle("features")}
            className="flex items-center gap-1 focus:outline-none"
          >
            Top features <ChevronDown size={16} />
          </button>
          {openDropdown === "features" && (
            <DropdownMenu items={topFeatures} footerText="Explore all features" />
          )}
        </div>
        <div className="cursor-pointer">Integrations</div>
        <div className="relative" ref={industriesRef}>
          <button
            onClick={() => handleDropdownToggle("industries")}
            className="flex items-center gap-1 focus:outline-none"
          >
            Industries <ChevronDown size={16} />
          </button>
          {openDropdown === "industries" && (
            <DropdownMenu items={industries} footerText="See all industries" />
          )}
        </div>
        <div className="relative" ref={resourcesRef}>
          <button
            onClick={() => handleDropdownToggle("resources")}
            className="flex items-center gap-1 focus:outline-none"
          >
            Resources <ChevronDown size={16} />
          </button>
          {openDropdown === "resources" && (
            <DropdownMenu items={resources} footerText="Explore all resources" />
          )}
        </div>
        <div className="cursor-pointer">Pricing</div>
        <div className="cursor-pointer">Enterprise</div>
      </div>

      <div className="hidden md:flex items-center gap-4 text-sm">
      <Link to="/Login">
        <button className="text-[#002b3f] mr-4 font-bold">Log in</button>
      </Link>
      <Link to="/PricingPlans">
        <button className="bg-[#002b3f] text-white px-4 py-2 rounded-md font-semibold">
          Start your free trial
        </button>
        </Link>
      </div>

      <div className="md:hidden">
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md p-4 md:hidden z-50 text-sm text-gray-800 space-y-4">
          {["Top features", "Integrations", "Industries", "Resources", "Pricing", "Enterprise"].map(
            (item) => (
              <div key={item} className="cursor-pointer">
                {item}
              </div>
            )
          )}
          <div className="flex flex-col gap-2">
            <button className="text-[#002b3f] font-bold">Log in</button>
            <button className="bg-[#002b3f] text-white px-4 py-2 rounded-md font-semibold">
              Start your free trial
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;