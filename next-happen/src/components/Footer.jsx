import { 
  Twitter, 
  Linkedin, 
  Instagram, 
  Youtube, 
  Mail, 
  Phone, 
  MapPin 
} from "lucide-react";

const Footer = () => {
  const footerSections = [
    {
      title: "Product",
      links: [
        { name: "Features", href: "#features" },
        { name: "How It Works", href: "#how-it-works" },
        { name: "Pricing", href: "#pricing" },
        { name: "Security", href: "#security" },
        { name: "Integrations", href: "#integrations" }
      ]
    },
    {
      title: "Use Cases",
      links: [
        { name: "Weddings", href: "#weddings" },
        { name: "Corporate Events", href: "#corporate" },
        { name: "Conferences", href: "#conferences" },
        { name: "Concerts", href: "#concerts" },
        { name: "Trade Shows", href: "#tradeshows" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Documentation", href: "#docs" },
        { name: "Help Center", href: "#help" },
        { name: "Event Templates", href: "#templates" },
        { name: "Best Practices", href: "#best-practices" },
        { name: "Case Studies", href: "#case-studies" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "#about" },
        { name: "Careers", href: "#careers" },
        { name: "Press", href: "#press" },
        { name: "Partners", href: "#partners" },
        { name: "Contact", href: "#contact" }
      ]
    }
  ];

  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" }
  ];

  return (
    <footer className="relative border-t border-white/10">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main footer content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-6 gap-8">
            {/* Company info */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <div className="text-2xl font-heading font-bold mb-4">
                  <span className="gradient-text">NextHappen</span>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  The world's most powerful event management platform, trusted by 
                  professionals who create extraordinary experiences.
                </p>
              </div>

              {/* Contact info */}
              <div className="space-y-4 mb-6">
                <div className="flex items-center space-x-3 text-sm">
                  <Mail className="h-4 w-4 text-brand-orange" />
                  <span>hello@nexthappen.com</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <Phone className="h-4 w-4 text-brand-purple" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <MapPin className="h-4 w-4 text-brand-blue" />
                  <span>Delhi, INDIA</span>
                </div>
              </div>

              {/* Social links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      aria-label={social.label}
                      className="w-10 h-10 glass-card rounded-lg flex items-center justify-center hover:bg-white/10 transition-colors group"
                    >
                      <IconComponent className="h-5 w-5 group-hover:scale-110 transition-transform" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Links sections */}
            {footerSections.map((section, index) => (
              <div key={section.title} className="lg:col-span-1">
                <h3 className="font-heading font-semibold mb-4">{section.title}</h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter signup */}
        <div className="py-8 border-t border-white/10">
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
            <div>
              <h3 className="font-heading font-semibold mb-2">Stay Updated</h3>
              <p className="text-muted-foreground text-sm">
                Get the latest event planning tips and platform updates
              </p>
            </div>
            <div className="flex space-x-4 w-full lg:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 lg:w-64 px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-orange/50 placeholder:text-muted-foreground"
              />
              <button className="bg-gradient-cta hover:opacity-90 transition-opacity px-6 py-2 rounded-lg font-semibold whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-white/10">
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
            <div className="flex flex-col lg:flex-row items-center space-y-2 lg:space-y-0 lg:space-x-6 text-sm text-muted-foreground">
              <span>© 2025 NextHappen. All rights reserved.</span>
              <div className="flex space-x-6">
                <a href="#privacy" className="hover:text-foreground transition-colors">
                  Privacy Policy
                </a>
                <a href="#terms" className="hover:text-foreground transition-colors">
                  Terms of Service
                </a>
                <a href="#cookies" className="hover:text-foreground transition-colors">
                  Cookie Policy
                </a>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <span>Crafted with ❤️ by Alisha Karn – Frontend Developer</span>

            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;