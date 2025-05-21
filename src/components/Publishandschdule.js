import React from 'react'
import  Navbar from "./Navbar"

const Publishandschdule = () => {
  return (
    <div>
      <Navbar/>
      <section className="w-full bg-white px-4 py-12 md:py-24">
  <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-8">
    
    {/* Left side image */}
    <div className="w-full md:w-1/2 flex justify-center">
      <img
        src="https://www.hootsuite.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fta4ffdi8h2om%2F4J34lnDUMxkh4QkOeI1uYh%2F4eb3f30e50f30d54f33810dd74fb1a5d%2FPlanner-Hero__2_.png&w=3840&q=75"
        alt="Social media calendar preview"
        className="w-full max-w-[600px] h-auto"
      />
    </div>

    {/* Right side text */}
    <div className="w-full md:w-1/2 text-center md:text-left">
      <h1 className="text-3xl md:text-5xl font-bold leading-tight text-[#00252E]">
        Grow fast and save time <br />
        with a <span className="text-[#F44336]">smart social media</span><br />
        <span className="text-[#F44336]">calendar</span> and planner
      </h1>
      <p className="mt-6 text-lg text-[#00252E] max-w-xl mx-auto md:mx-0">
        Easily create, schedule, and publish content for all your platforms from a single
        dashboard. And escape creative block while you do it.
      </p>

      {/* CTA buttons */}
      <div className="mt-8 flex flex-col md:flex-row items-center gap-4">
        <a
          href="#"
          className="bg-[#00252E] text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-[#001B20] transition"
        >
          Start your free 30-day trial
        </a>
        <a href="#" className="text-[#00252E] font-medium underline">
          Request a demo
        </a>
      </div>
    </div>
  </div>
</section>

<section className="w-full bg-white px-4 py-16 md:py-24">
  <div className="max-w-7xl mx-auto text-center px-4">
    <h2 className="text-3xl md:text-5xl font-bold text-[#00252E] leading-tight mt-[-80px]">
      See the best time to post and stay inspired <br className="hidden md:block" />
      with content ideas
    </h2>
    <p className="mt-4 text-lg text-[#00252E] max-w-3xl mx-auto">
      Our social media publishing platform tells you when to post on social media to get the highest engagement.
      You schedule your content to go live then, even if you’re out of office.
    </p>
  </div>

  <div className="mt-20 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 px-4">
    {/* Left Text Block */}
    <div className="w-full md:w-1/2">
      <h3 className="text-3xl md:text-4xl font-bold text-[#00252E] leading-tight">
        Instantly generate captions and <br className="hidden md:block" />
        post ideas with <span className="text-[#00252E]">AI</span>
      </h3>
      <p className="mt-6 text-[#00252E] text-lg">
        It’s seriously easy with OwlyWriter AI, a time-saving social media writing tool built
        by Hootsuite exclusively for busy social pros. Give it a prompt and it’ll whip up
        winning captions and post ideas. Or have it repurpose your top-performing posts,
        create content for upcoming holidays, or create quick ad copy variations for your
        paid posts.
      </p>
    </div>

    {/* Right Image Block */}
    <div className="w-full md:w-1/2 flex justify-center">
      <img
        src="https://www.hootsuite.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fta4ffdi8h2om%2F7KMkUPvou3vXrnkUSWK4Gg%2Fe5700d9d6adab63028c239477e1e3356%2FBOFU-CutWorkload-600x400_2x.png&w=3840&q=75"
        alt="AI caption tool preview"
        className="w-full max-w-[600px] h-auto"
      />
    </div>
  </div>
</section>

<section className="w-full bg-white px-4 py-16 md:py-24 mt-[-100px]">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 px-4">
    
    {/* Left: Heatmap & Card */}
    <div className="w-full md:w-1/2 flex justify-center">
      <img
        src="https://www.hootsuite.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fta4ffdi8h2om%2F6nPTpv0tpJ9htsIDYsiY5H%2Fd28b485470fe9968190a2a422232dad1%2FSMManagement-Accordion-2-600x400_2x.png&w=3840&q=75"
        alt="Heatmap and best time to post"
        className="w-full max-w-[600px] h-auto"
      />
    </div>

    {/* Right: Text Content */}
    <div className="w-full md:w-1/2 text-left">
      <h2 className="text-3xl md:text-4xl font-bold text-[#00252E] leading-tight">
        Boost engagement and reach by <br className="hidden md:block" />
        posting at the right time
      </h2>
      <p className="mt-6 text-[#00252E] text-lg">
        Take your social strategy to the next level by posting at the exact time your
        audience is online. See heat maps showing when to post to reach your specific
        goals. Then automatically schedule your content to go live at that time.
      </p>
    </div>

  </div>
</section>

<section className="w-full bg-white px-4 py-16 md:py-24 mt-[-100px]">
  <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12 px-4">

    {/* Left: Text Content */}
    <div className="w-full md:w-1/2 text-left">
      <h2 className="text-3xl md:text-4xl font-bold text-[#00252E] leading-tight">
        Plan and create great content in <br className="hidden md:block" /> seconds
      </h2>
      <p className="mt-6 text-[#00252E] text-lg">
        Create compelling, on-brand content in just a few clicks with built-in Canva
        templates, free stock images, and effortless approval workflows. Plus, reach the
        right audience with a hashtag generator that automatically tags your content
        based on your copy, images, and videos.
      </p>
    </div>

    {/* Right: Image Content */}
    <div className="w-full md:w-1/2 flex justify-center">
      <img
        src="https://www.hootsuite.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fta4ffdi8h2om%2F7LNov0waFHQ88WGAQqg6a9%2F68b10f592e0f571b9f8272a237b2d23a%2Fig-marketing-postmore_x2.png&w=3840&q=75"
        alt="Plan and create content"
        className="w-full max-w-[600px] h-auto"
      />
    </div>

  </div>
</section>


<section className="w-full bg-white px-4 py-16 md:py-24">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 px-4">

    {/* Left: Image */}
    <div className="w-full md:w-1/2 flex justify-center">
      <img
        src="https://www.hootsuite.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fta4ffdi8h2om%2F4cXgXheN4CTW71Fz9QMcPV%2Feb7d5a088592aa5844f2148adc6183ec%2FEnterprise-Publishing-600x400_3x.png&w=3840&q=75"
        alt="Bulk Post Scheduling Calendar"
        className="w-full max-w-[600px] h-auto"
      />
    </div>

    {/* Right: Text */}
    <div className="w-full md:w-1/2 text-left">
      <h2 className="text-3xl md:text-4xl font-bold text-[#00252E] leading-tight">
        Cut hours from your workweek <br className="hidden md:block" /> with bulk post scheduling
      </h2>
      <p className="mt-6 text-[#00252E] text-lg">
        Quickly glance at your organic, paid, published, and scheduled content in a
        calendar or list view. Map out campaigns, fill content gaps, and collaborate in
        real-time. Then use our bulk social media scheduler to schedule up to
        <strong> 350 posts</strong> at once. Easily suspend scheduled posts in case of a
        potential crisis or unexpected opportunity.
      </p>
    </div>

  </div>
</section>


<section className="px-4 py-12 md:py-20 bg-white">
  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
    {/* Left Content */}
    <div>
      <h2 className="text-3xl md:text-4xl font-bold text-[#002b3f] leading-tight mb-4">
        See what's trending and capture your audience's attention
      </h2>
      <p className="text-gray-600 text-base md:text-lg">
        Figure out precisely what gets your audience engaged with trend tracking and social
        listening tools. View the latest hot topics by industry and then have AI instantly draft
        posts based on those trends. You can also search by topic, company, and hashtag to
        discover what’s getting the most action in your niche.
      </p>
    </div>

    {/* Right Image */}
    <div className="flex justify-center md:justify-end">
      <img
        src="https://www.hootsuite.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fta4ffdi8h2om%2F5Hgih5kXey0ROQB5j1xQbL%2F008b0ba1779c9be971be892dcf6b2ee8%2Flistening-sentiment-2-600x400.png&w=3840&q=75"
        alt="Trend Insights"
        className="w-full max-w-[500px] h-auto rounded-lg shadow-lg"
      />
    </div>
  </div>
</section>

<section className="px-4 py-12 md:py-20 max-w-7xl mx-auto text-center">
      <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
        Your all-in-one social media publishing tool
      </h2>
      <p className="text-lg text-slate-700 max-w-3xl mx-auto mb-12">
        Check out a few of the top Hootsuite publishing features that help you whip up high-quality content,
        sell more online, and grow your following.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-y-16 gap-x-10">
        {/* Block 1 */}
        <div>
          <div className="flex justify-center mb-6">
            <img src="https://img.icons8.com/ios-filled/50/000000/pencil-tip.png" alt="Pencil Icon" className="h-12" />
          </div>
          <h3 className="text-2xl font-semibold text-slate-900 mb-2">Automated captions</h3>
          <p className="text-slate-700 max-w-xs mx-auto">
            Instantly generate captions and hashtags for every social media network. Use the built-in ideas engine
            to get ideas on what to post.
          </p>
        </div>

        {/* Block 2 */}
        <div>
          <div className="flex justify-center mb-6">
            <img src="https://www.hootsuite.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fta4ffdi8h2om%2FTylNXEq6RZAgWlxMRAE8r%2F276216a33782e84ed65f5eb521d0e1d9%2FUntitled_design_-_2024-07-29T115858.948.png&w=256&q=75" alt="Canva Icon" className="h-12" />
          </div>
          <h3 className="text-2xl font-semibold text-slate-900 mb-2">Canva templates</h3>
          <p className="text-slate-700 max-w-xs mx-auto">
            Get access to your favorite Canva templates right from the Composer window. Create from scratch or
            access your edited templates.
          </p>
        </div>

        {/* Block 3 */}
        <div>
          <div className="flex justify-center mb-6">
            <img src="https://img.icons8.com/ios-filled/50/000000/clock.png" alt="Clock Icon" className="h-12" />
          </div>
          <h3 className="text-2xl font-semibold text-slate-900 mb-2">Best time to post</h3>
          <p className="text-slate-700 max-w-xs mx-auto">
            Get more likes, comments, and shares with recommended times to publish right in your calendar window.
          </p>
        </div>

        {/* Block 4 */}
        <div>
          <div className="flex justify-center mb-6">
            <img src="https://img.icons8.com/ios-filled/50/000000/hashtag.png" alt="Hashtag Icon" className="h-12" />
          </div>
          <h3 className="text-2xl font-semibold text-slate-900 mb-2">Hashtag suggestions</h3>
        </div>

        {/* Block 5 */}
        <div>
          <div className="flex justify-center mb-6">
            <img src="https://img.icons8.com/ios-filled/50/000000/planner.png" alt="Schedule Icon" className="h-12" />
          </div>
          <h3 className="text-2xl font-semibold text-slate-900 mb-2">Bulk post scheduling</h3>
        </div>

        {/* Block 6 */}
        <div>
          <div className="flex justify-center mb-6">
            <img src="https://img.icons8.com/ios-filled/50/000000/handshake.png" alt="Collaboration Icon" className="h-12" />
          </div>
          <h3 className="text-2xl font-semibold text-slate-900 mb-2">Easy collaboration</h3>
        </div>
      </div>
    </section>

    <section style={{ backgroundColor: "#f2f5f7", padding: "40px 20px" }}>
  <div
    style={{
      maxWidth: "1200px",
      margin: "0 auto",
      display: "flex",
      flexDirection: "column",
      gap: "40px"
    }}
  >
    {/* Newsletter Header Section */}
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "30px"
      }}
      className="newsletter-top"
    >
      <div style={{ flex: "1" }}>
        <h2
          style={{
            fontSize: "32px",
            fontWeight: "700",
            color: "#002f3c",
            marginBottom: "16px"
          }}
        >
          <span style={{ color: "#e53e3e" }}>The Perch</span> newsletter: Get smarter about social.
        </h2>
        <p style={{ fontSize: "18px", color: "#002f3c" }}>
          The Perch is your inside source for what’s happening in social media — and why it matters to you.
        </p>
      </div>
      <div style={{ flex: "1", maxWidth: "500px" }}>
        <label style={{ fontWeight: "600", marginBottom: "8px", display: "block" }}>
          Email Address: <span style={{ color: "red" }}>*</span>
        </label>
        <input
          type="email"
          placeholder="Enter your email address"
          style={{
            width: "100%",
            padding: "12px",
            fontSize: "16px",
            marginBottom: "12px",
            borderRadius: "6px",
            border: "1px solid #ccc"
          }}
        />
        <button
          style={{
            backgroundColor: "#002f3c",
            color: "#fff",
            padding: "12px 24px",
            border: "none",
            borderRadius: "6px",
            fontWeight: "600",
            cursor: "pointer"
          }}
        >
          Subscribe
        </button>
      </div>
    </div>

    <hr style={{ margin: "40px 0", borderColor: "#ccc" }} />

    {/* Footer Columns */}
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "40px",
        justifyContent: "space-between"
      }}
    >
      <div>
        <img
          src="https://www.hootsuite.com/images/owly-symbol-saffron.svg"
          alt="Owl logo"
          style={{ width: "50px", height: "auto" }}
        />
      </div>

      {[
        {
          title: "About",
          links: ["Why Hootsuite", "About us", "Careers", "Leadership", "Customers", "Newsroom"]
        },
        {
          title: "Plans",
          links: ["Pricing", "Standard", "Advanced", "Enterprise", "Features"]
        },
        {
          title: "Guides",
          links: [
            "Social media strategy",
            "Social media analytics",
            "Social listening",
            "Best times to post",
            "Social media calendar",
            "Social media engagement"
          ]
        },
        {
          title: "Free tools",
          links: [
            "AI caption generator",
            "Sentiment analysis tool",
            "Instagram hashtag generator",
            "Instagram engagement rate calculator",
            "Instagram SEO tool",
            "Product updates",
            "Contact us"
          ]
        },
        {
          title: "Resources",
          links: ["Case studies", "Academy", "Blog", "Resource library", "Webinars", "App directory","Need help?"]
        },
      ].map((col, i) => (
        <div key={i} style={{ minWidth: "150px" }}>
          <h4 style={{ fontWeight: "700", color: "#006d6d" }}>{col.title}</h4>
          <ul style={{ listStyle: "none", padding: 0, marginTop: "10px" }}>
            {col.links.map((link, j) => (
              <li key={j} style={{ marginBottom: "8px", color: "#002f3c", fontSize: "15px" }}>
                {link}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
</section>

    <section style={{ padding: "30px 20px", backgroundColor: "#fff" }}>
  <div
    style={{
      maxWidth: "1200px",
      margin: "0 auto",
      display: "flex",
      flexDirection: "column",
      gap: "20px"
    }}
  >
    {/* Top Row: Language and Legal */}
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px"
      }}
      className="footer-bottom-top"
    >
      <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "#002f3c" }}>
        🌐 <span>English</span> ▼
      </div>
      <div style={{ fontSize: "14px", color: "#002f3c" }}>
        © 2025 Hootsuite Inc. All Rights Reserved.
      </div>
      <div style={{ fontSize: "14px", color: "#002f3c", display: "flex", flexWrap: "wrap", gap: "10px" }}>
        <span>Legal Center</span> | <span>Trust Center</span> | <span>Privacy</span> |{" "}
        <span>Cookie preferences</span> | <span>Accessibility</span>
      </div>
    </div>

    {/* Middle Row: App Store Buttons */}
    <div
      style={{
        display: "flex",
        gap: "12px",
        flexWrap: "wrap"
      }}
    >
      <img
        src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
        alt="App Store"
        style={{ height: "40px" }}
      />
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
        alt="Google Play"
        style={{ height: "40px" }}
      />
    </div>

    {/* Bottom Row: Social Icons */}
    <div
      style={{
        display: "flex",
        gap: "20px",
        fontSize: "24px"
      }}
    >
      {/* Replace with your own icon components or image src */}
      {["instagram", "facebook", "twitter", "youtube", "linkedin", "pinterest", "tiktok"].map((icon, i) => (
        <span key={i}>{/* Replace with <FontAwesomeIcon icon={...} /> or actual <img /> if needed */}</span>
      ))}
    </div>
  </div>
</section>


<footer className="bg-white px-4 py-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Language Dropdown */}
        <div className="flex items-center space-x-2">
          <span className="text-gray-600">English</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>

        {/* Legal Links */}
        <div className="flex flex-wrap justify-center md:justify-start space-x-4 text-gray-600 mt-4 md:mt-0">
          <a href="#" className="hover:text-black">Legal Center</a>
          <a href="#" className="hover:text-black">Trust Center</a>
          <a href="#" className="hover:text-black">Privacy</a>
          <a href="#" className="hover:text-black">Cookie preferences</a>
          <a href="#" className="hover:text-black">Accessibility</a>
        </div>

        {/* App Store & Google Play */}
        <div className="flex items-center space-x-4 mt-4 md:mt-0">
          <button className="bg-black text-white px-4 py-2 rounded-md text-sm">
            Download on the App Store
          </button>
          <button className="bg-black text-white px-4 py-2 rounded-md text-sm">
            Get it on Google Play
          </button>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="text-gray-600 hover:text-black">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="text-gray-600 hover:text-black">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="text-gray-600 hover:text-black">
            <i className="fab fa-youtube"></i>
          </a>
          <a href="#" className="text-gray-600 hover:text-black">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="#" className="text-gray-600 hover:text-black">
            <i className="fab fa-pinterest"></i>
          </a>
          <a href="#" className="text-gray-600 hover:text-black">
            <i className="fab fa-tiktok"></i>
          </a>
        </div>
      </div>
    </footer>
    </div>
  )
}

export default Publishandschdule
