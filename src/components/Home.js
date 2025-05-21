import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <section className="w-full flex flex-col-reverse lg:flex-row items-center justify-between px-4 sm:px-8 lg:px-20 py-12 sm:py-16 bg-white">
        <div className="w-full lg:w-1/2 relative mt-8 lg:mt-0">
          <img
            src="https://www.hootsuite.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fta4ffdi8h2om%2FJMXZfYnEx0ufUUb8H9Ghz%2F06d3c1176fbcd662a30e65e5b2d3ac7c%2FGeneric-Hero-2024-600x500-V2_3x__3_.png&w=3840&q=75"
            alt="Dashboard Preview"
            className="w-full max-w-md sm:max-w-lg lg:max-w-xl mx-auto rounded-xl"
          />
        </div>
        <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-poppins text-[#002b3f] leading-tight mt-8">
  Save time and get <span className="text-[#002b3f]">REAL</span> results on social media.
  <br />
  <span className="text-[#ff3b30]">Hootsuite makes it easy.</span>
</h1>


          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
            <Link to="/PricingPlans">
            <button className="bg-[#002b3f] text-white px-6 py-3 rounded-md font-semibold w-full sm:w-auto">
              Start your free trial
            </button>
            </Link>
            <button className="text-[#002b3f] underline font-medium w-full sm:w-auto text-center">
              Request a demo
            </button>
          </div>
        </div>
      </section>
   
<section className="bg-white px-6 sm:px-12 lg:px-28 py-20 sm:py-28 text-center mt-[-40px]">
  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-500 mt-[-70px] ">
    Trusted by leading brands
  </h2>

  <div className="flex flex-wrap justify-center items-center gap-x-14 gap-y-12 mt-8">
    <img
      src="https://images.ctfassets.net/ta4ffdi8h2om/5Uyf5l1tVUyHveBXcFEKAF/9e9e25fbcc9806d46a23ea5b6f4e9bd5/Jetblue-Logo.svg"
      alt="JetBlue"
      className="h-12 sm:h-14 lg:h-16 max-w-[150px] grayscale hover:grayscale-0 transition duration-300"
    />
    <img
      src="https://images.ctfassets.net/ta4ffdi8h2om/37syYsOShNMS9lXNdQ5H6Q/0ebe2983c3ee477abd321ce5f233c227/UofChicago-Logo.svg"
      alt="UChicago"
      className="h-12 sm:h-14 lg:h-16 max-w-[180px] grayscale hover:grayscale-0 transition duration-300"
    />
    <img
      src="https://images.ctfassets.net/ta4ffdi8h2om/55tw8tHqeBWab7qaKfwANe/59439b2808018c1e7f6b9a1d47440ec4/Adobe-Logo.svg"
      alt="Adobe"
      className="h-12 sm:h-14 lg:h-16 max-w-[140px] grayscale hover:grayscale-0 transition duration-300"
    />
    <img
      src="https://images.ctfassets.net/ta4ffdi8h2om/6ddsUBtAsxVGjZKutt60hM/d98c15db7165e5b09d6364fdc5650937/UHaul-Logo.svg"
      alt="U-Haul"
      className="h-12 sm:h-14 lg:h-16 max-w-[160px] grayscale hover:grayscale-0 transition duration-300"
    />
    <img
      src="https://images.ctfassets.net/ta4ffdi8h2om/hZyyK3rGTOPIhSI5HWkwk/11647561ec7b47b81d4c6c67f7132bb5/Ikea-Logo.svg"
      alt="IKEA"
      className="h-12 sm:h-14 lg:h-16 max-w-[130px] grayscale hover:grayscale-0 transition duration-300"
    />
  </div>

  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#002b3f] leading-tight mt-5">
    Explore Hootsuite features: What’s in the dashboard?
  </h3>
  <p className=" text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto mt-5">
    Schedule, engage, monitor, and analyze social media posts — all in one user-friendly dashboard.
  </p>
</section>


<section className="w-full bg-white px-6 sm:px-12 lg:px-28 py-20 flex flex-col lg:flex-row items-center justify-between gap-12 mt-[-50px]">
  {/* Left Column - Feature List */}
  <div className="w-full lg:w-1/2">
    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#ff3b30] mb-4">
      Analyze social media performance
    </h2>
    <p className="text-gray-700 text-base sm:text-lg mb-6">
      Track hundreds of social media metrics and grow faster on social with these features:
    </p>
    <ul className="list-disc pl-5 text-gray-700 space-y-3 text-base sm:text-lg mb-4">
      <li>Best time to post by network and goal</li>
      <li>Industry and competitor benchmarking</li>
      <li>Custom reports and report templates</li>
      <li>Report scheduling and exporting</li>
      <li>Paid and organic performance reporting</li>
      <li>... and so much more</li>
    </ul>
    <a href="https://www.hootsuite.com/platform/analytics"  className="text-[#002b3f] underline font-medium">
      Learn more
    </a>

    {/* Additional Accordions (example placeholders) */}
    <div className="mt-10 space-y-4">
      <div className="border-t pt-4">
        <button className="text-[#007C89] text-xl font-semibold w-full text-left">
          Schedule posts and create content
        </button>
      </div>
      <div className="border-t pt-4">
        <button className="text-[#007C89] text-xl font-semibold w-full text-left">
          Respond to messages and comments
        </button>
      </div>
      <div className="border-t pt-4 border-b pb-4">
        <button className="text-[#007C89] text-xl font-semibold w-full text-left">
          Track mentions, keywords, and trends
        </button>
      </div>
    </div>
  </div>

  {/* Right Column - Image */}
  <div className="w-full lg:w-1/2">
    <img
      src="https://www.hootsuite.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fta4ffdi8h2om%2F6qiY3uDOZ47r3pu3GAWgKe%2F395ad503a1167bd1ff2b47ed81c94a52%2FHomepage-Accordion-Analytics_4x.png&w=1200&q=75"
      alt="Social Media Dashboard"
      className="w-full max-w-2xl mx-auto rounded-xl"
    />
  </div>
</section>

<section className="bg-white py-20 px-4 sm:px-6 lg:px-20 text-center">
  <h2 className="text-[28px] sm:text-[32px] md:text-[36px] font-bold text-[#001b33] mb-16">
    What can Hootsuite do for you?
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-gray-300">
    {/* Block 1 */}
    <div className="flex flex-col items-center px-6 py-10">
      <p className="text-[#e03c31] text-[56px] md:text-[72px] font-bold leading-none mb-4">80%</p>
      <p className="text-[#00263a] text-base md:text-lg max-w-xs">
        reduction in workload using Hootsuite’s chatbot capabilities
      </p>
      <img
        src="https://images.ctfassets.net/ta4ffdi8h2om/6pvAhysFl3dbM27CC6jF39/123559b00b7e8793267e2473dae1102c/1.png"
        alt="Hootsuite Logo"
        className="h-20 mt-10"
      />
    </div>

    {/* Block 2 */}
    <div className="flex flex-col items-center px-6 py-10">
      <p className="text-[#e03c31] text-[56px] md:text-[72px] font-bold leading-none mb-4">500%</p>
      <p className="text-[#00263a] text-base md:text-lg max-w-xs">
        growth across all social channels using Hootsuite Enterprise
      </p>
      <img
        src="https://images.ctfassets.net/ta4ffdi8h2om/1UroAie3WlsiNvo8MCjEDu/ee3fba105d73f8c476976870dc6f7c9a/2.png"
        alt="Wood Buffalo Logo"
        className="h-20 mt-10"
      />
    </div>

    {/* Block 3 */}
    <div className="flex flex-col items-center px-6 py-10">
      <p className="text-[#e03c31] text-[56px] md:text-[72px] font-bold leading-none mb-4">2M+</p>
      <p className="text-[#00263a] text-base md:text-lg max-w-xs">
        new followers on social media using Hootsuite Enterprise
      </p>
      <img
        src="https://images.ctfassets.net/ta4ffdi8h2om/3dTx6cWdR83gB7LlO8mghk/6ec38cdfbd40942e8abde80ebff3c7fb/3.png"
        alt="British Museum Logo"
        className="h-20 mt-10"
      />
    </div>
  </div>
</section>

<section className="bg-[#f4f6f7] py-16 px-4 sm:px-8 lg:px-20">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10">
    
    {/* Left content */}
    <div>
      <h2 className="text-[32px] sm:text-[36px] font-bold text-[#00263a] leading-tight mb-6">
        Discover the biggest social media trends shaping 2025
      </h2>
      <p className="text-[#00263a] text-base sm:text-lg mb-8 max-w-xl">
        Do you know what the best social strategies have in common? Or what qualities drive social media performance? And how you can apply them to your organization? Dig into our Social Media Trends 2025 report for insights that'll help you drive action and make a real business impact.
      </p>
      <button className="bg-[#00263a] text-white font-bold px-6 py-3 rounded-md hover:bg-[#001b33] transition">
        Read the report
      </button>
    </div>

    {/* Right image */}
    <div className="flex justify-center">
      <img
        src="https://www.hootsuite.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fta4ffdi8h2om%2FqiQj6ZfH3Vpdq2ktWDzJd%2F1a4f0ac344adf30d177de75f5c557149%2FTrends2025-Web-Social-Impact-IMG-V2.2-550x300__1_.png&w=3840&q=75"
        alt="Social Media Trends 2025"
        className="w-full max-w-md sm:max-w-lg rounded"
      />
    </div>

  </div>
</section>

<section className="bg-white py-16 px-4 md:px-20">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row-reverse items-center gap-12">
    {/* Right content (now visually on the right) */}
    <div className="md:w-1/2 text-center md:text-left">
      <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
        Save hours posting, creating, and analyzing content
      </h2>
      <p className="text-gray-600 mb-6">
        Schedule posts to go live anytime — even if you're fast asleep or on the beach.
        Plus, create content quickly with Canva templates and have AI write your captions and hashtags for you.
        Then get the full picture with straightforward performance reports.
        Oh, and did we mention it's all in one (1) tab?
      </p>
      <button className="px-6 py-3 border border-gray-900 rounded-full font-semibold hover:bg-gray-900 hover:text-white transition">
        Learn more
      </button>
    </div>

    {/* Left image section (moved visually left on desktop) */}
    <div className="md:w-1/2 relative">
      <div className="bg-gray-100 rounded-2xl p-4 shadow-lg">
        <img
          src="https://www.hootsuite.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fta4ffdi8h2om%2F3n6mGfKmBpZeqkEvkR8ZXb%2F15cb2675437ae3cc7be7eb616d9081e5%2FHomepage-Features-SaveHours_4x.png&w=3840&q=75"
          alt="Calendar Preview"
          className="w-full rounded-xl"
        />
        <div className="mt-4 flex justify-between items-center">
          <span className="font-medium">Schedule post</span>
          <button className="bg-black text-white px-4 py-2 rounded-full text-sm">
            Schedule multiple
          </button>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="bg-white py-16 px-4 md:px-20">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
    
    {/* Left Text Content */}
    <div className="md:w-1/2 text-center md:text-left">
      <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
        Boost engagement, reach, and follower count with less effort
      </h2>
      <p className="text-gray-600 mb-6">
        See the content that brings in the most engagement and revenue and measure how you’re performing against your competitors. Plus, get personalized suggestions for how to win in your industry. And, with reports that show you the best time to post for every network, you can say goodbye to hop-scotching between network tabs for good.
      </p>
      <div className="flex flex-col sm:flex-row sm:items-center justify-center md:justify-start gap-4">
        <button className="bg-gray-900 text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition">
          Try it for free
        </button>
        <a href="" className="text-gray-900 font-semibold underline hover:text-gray-700">
          Learn more
        </a>
      </div>
    </div>

    {/* Right Analytics Image */}
    <div className="md:w-1/2 relative">
      <div className="bg-gray-100 rounded-2xl p-4 shadow-lg">
        <img
          src="https://www.hootsuite.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fta4ffdi8h2om%2F61lfq838fmjvWQnmHaUwau%2Fc317c9dce485da007870e6de65e8a90f%2FHomepage-Features-BoostEngagement_4x.png&w=3840&q=75" 
          alt="Analytics Preview"
          className="w-full rounded-xl"
        />
      </div>
    </div>
    
  </div>
</section>

<section className="bg-white py-16 px-4 md:px-20">
  <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
    
    {/* Left Image Section */}
    <div className="md:w-1/2">
      <div className="bg-gray-100 rounded-2xl p-4 shadow-lg">
        <img
          src="https://www.hootsuite.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fta4ffdi8h2om%2F71iRoMz4p3VOS0UyvK2MLn%2F454b4c1bac1693c075ef1eb5b256be2d%2FHomepage-Features-Deliver_4x.png&w=3840&q=75"
          alt="Inbox Preview"
          className="w-full rounded-xl"
        />
      </div>
    </div>

    {/* Right Text Content */}
    <div className="md:w-1/2 text-center md:text-left">
      <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
        Deliver a better customer experience and keep your inbox tidy
      </h2>
      <p className="text-gray-600 mb-6">
        Reduce the clutter and eliminate DM dread with a unified social media inbox. Reply to comments and messages across platforms in one convenient hub and never leave your followers on read again. Cut your team’s message volume with saved replies or level up with our AI chatbot add-on.
      </p>
      <button className="px-6 py-3 border border-gray-900 rounded-full font-semibold hover:bg-gray-900 hover:text-white transition">
        Learn more
      </button>
    </div>

  </div>
</section>

<section className="bg-white py-16 px-4 md:px-20">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
    
    {/* Left Text Content */}
    <div className="md:w-1/2 text-center md:text-left">
      <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
        Safeguard your reputation and never miss a chance to engage
      </h2>
      <p className="text-gray-600 mb-6">
        Keep an eye on what people are saying about your brand or industry with social listening tools. Track mentions and conversations to find opportunities to engage, discover new trends, or get ahead of feedback. Plus, easily suspend scheduled posts in case of a potential crisis or unexpected opportunity.
      </p>
      <button className="px-6 py-3 border border-gray-900 rounded-full font-semibold hover:bg-gray-900 hover:text-white transition">
        Learn more
      </button>
    </div>

    {/* Right Image Section */}
    <div className="md:w-1/2">
      <div className="bg-gray-100 rounded-2xl p-4 shadow-lg">
        <img
          src="https://www.hootsuite.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fta4ffdi8h2om%2FafItbIVg2RH4hEFztegp8%2Fd123b847b97e267f00eddc393a2447e2%2FHomepage-Features-Safeguard_4x.png&w=3840&q=75"
          alt="Analytics Preview"
          className="w-full rounded-xl"
        />
      </div>
    </div>

  </div>
</section>


<section className="flex flex-col lg:flex-row items-center lg:items-start gap-10 px-6 py-12 bg-white">
      {/* Left Panel - Key Metrics */}
      <div className="w-full lg:w-1/4 bg-gray-100 rounded-xl p-5 shadow-md">
        <div className="bg-yellow-300 text-black font-semibold py-2 px-4 rounded-md">
          Key Metrics
        </div>
        <ul className="mt-4 space-y-3 text-gray-800 font-medium">
          <li>Sentiment</li>
          <li>Top Themes</li>
          <li>Influencers</li>
          <li>Demographics</li>
          <li>World Map</li>
          <li>Results</li>
        </ul>
      </div>

      {/* Center Panel - Graph + Channels */}
      <div className="relative w-full lg:w-2/4 bg-white border border-gray-200 rounded-xl p-6 shadow-md">
        <div className="text-sm font-bold text-gray-500 mb-3">TOP THEMES</div>
        <div className="flex flex-wrap justify-center gap-3 text-white font-semibold">
          <span className="bg-purple-700 px-4 py-2 rounded-full text-sm">#crypto</span>
          <span className="bg-red-400 px-4 py-2 rounded-full text-sm">#Bitcoin</span>
          <span className="bg-blue-600 px-4 py-2 rounded-full text-sm">#banking</span>
          <span className="bg-orange-300 px-3 py-1 rounded-full text-xs">#finance</span>
          <span className="bg-yellow-300 px-3 py-1 rounded-full text-xs">#ai</span>
          <span className="bg-indigo-300 px-3 py-1 rounded-full text-xs">#web3</span>
        </div>

        <div className="absolute top-4 right-4 bg-white border px-3 py-1 rounded text-xs font-bold">
          19.2K RESULTS
        </div>

        {/* Channels Stats */}
        <div className="mt-8 bg-gray-50 p-4 rounded-lg">
          <h4 className="font-semibold text-gray-700 mb-2">Channels</h4>
          <ul className="space-y-2 text-sm">
            <li className="text-green-600 font-medium">↑ 440% <span className="text-gray-800">TikTok</span></li>
            <li className="text-green-500 font-medium">↑ 322% <span className="text-gray-800">Facebook</span></li>
            <li className="text-green-500 font-medium">↑ 329% <span className="text-gray-800">YouTube</span></li>
            <li className="text-green-400 font-medium">↑ 185% <span className="text-gray-800">Instagram</span></li>
          </ul>
        </div>
      </div>

      {/* Right Panel - Text and CTA */}
      <div className="w-full lg:w-1/4 text-center lg:text-left">
        <h2 className="text-3xl font-extrabold text-gray-800 mb-4 leading-snug">
          Stay ahead of the latest trends<br className="hidden lg:block" />
          and boost your chances of going viral
        </h2>
        <p className="text-gray-600 mb-6">
          Figure out what engages your audience with trend tracking. Discover hot topics and auto-generate posts using AI.
        </p>
        <a
          href="#"
          className="inline-block bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition duration-200"
        >
          Learn more
        </a>
      </div>
    </section>


    <section className="py-16 px-4 md:px-8 bg-white text-center">
  <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Why Hootsuite?</h2>
  <p className="max-w-4xl mx-auto text-gray-600 text-base md:text-lg mb-12">
    Don’t worry, we won’t make you read our 2,000+ five-star reviews. A few highlights: superior customer service,
    top-notch security features, and the best blog, webinars, and social media academy in the industry.
  </p>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
    {/* Card 1 */}
    <div className="flex flex-col items-center text-center px-4">
      <img src="https://www.hootsuite.com/images/svg/owly/owly-face.svg" alt="Owl Icon" className="w-14 h-14 mb-4" />
      <h3 className="text-xl font-bold text-gray-900 mb-2 leading-tight">
        17 years and 25<br /> million users
      </h3>
      <p className="text-gray-600 text-sm md:text-base mb-4">
        Hootsuite was the first, and we’re still the most popular 17 years later. Over 25 million users have used Hootsuite
        to post, track, and out-perform their competitors on social media.
      </p>
      <button className="border border-gray-400 px-6 py-2 rounded-md font-semibold hover:bg-gray-100 transition">
        More about us
      </button>
    </div>

    {/* Card 2 */}
    <div className="flex flex-col items-center text-center px-4">
      <img src="/icons/sparkles-icon.svg" alt="Sparkles Icon" className="w-14 h-14 mb-4" />
      <h3 className="text-xl font-bold text-gray-900 mb-2 leading-tight">
        The ultimate social<br /> media AI
      </h3>
      <p className="text-gray-600 text-sm md:text-base mb-4">
        Hootsuite helps you automate every part of social media management — posting, writing, messaging,
        and social listening. Our AI was designed by social pros for social pros.
      </p>
      <button className="border border-gray-400 px-6 py-2 rounded-md font-semibold hover:bg-gray-100 transition">
        Learn more
      </button>
    </div>

    {/* Card 3 */}
    <div className="flex flex-col items-center text-center px-4">
      <img src="/icons/plug-icon.svg" alt="Plug Icon" className="w-14 h-14 mb-4" />
      <h3 className="text-xl font-bold text-gray-900 mb-2 leading-tight">
        The largest library of<br /> integrations
      </h3>
      <p className="text-gray-600 text-sm md:text-base mb-4">
        Connect over 100 integrations to bring all your favorite tools into the Hootsuite dashboard.
        That’s more than any other social media management platform (by far).
      </p>
      <button className="border border-gray-400 px-6 py-2 rounded-md font-semibold hover:bg-gray-100 transition">
        Explore integrations
      </button>
    </div>
  </div>
</section>

<section className="py-16 px-4 md:px-8 bg-white text-center">
  <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-12">
    Resources for social media pros
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto text-left">
    {/* Card 1 */}
    <div>
      <img src="https://www.hootsuite.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fta4ffdi8h2om%2F70o9HUj25zitHRp0N6gWzi%2F18c934a49484db027292628e0371c6da%2FStuckysImages-V2_Stucky-1-V2.png&w=828&q=75" alt="Retail Success" className="w-full h-auto mb-4" />
      <h3 className="text-xl font-bold text-gray-900 mb-2">
        How a retail brand used Hootsuite to increase sales by 750%
      </h3>
      <p className="text-gray-600 mb-4">
        See how legendary candy-maker Stuckey’s leveraged Hootsuite Professional to skyrocket their online sales and following.
      </p>
      <a href="#" className="text-blue-900 font-semibold hover:underline">
        Read now →
      </a>
    </div>

    {/* Card 2 */}
    <div>
      <img src="https://www.hootsuite.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fta4ffdi8h2om%2F3iiJxE6g70bcvf6GjDG6Aq%2F48aba5a5e3f34555ce0efd1471955455%2FStuckysImages-V2_Stucky-2-V2.png&w=828&q=75" alt="Competitor Analysis" className="w-full h-auto mb-4" />
      <h3 className="text-xl font-bold text-gray-900 mb-2">
        8 social media competitor analysis tools to help you get ahead
      </h3>
      <p className="text-gray-600 mb-4">
        Find out how to beat the competition with the right social media competitor analysis tools. Get the scoop on the Hootsuite blog.
      </p>
      <a href="#" className="text-blue-900 font-semibold hover:underline">
        Read now →
      </a>
    </div>

    {/* Card 3 */}
    <div>
      <img src="https://www.hootsuite.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fta4ffdi8h2om%2F6F5Ini0AiagzeBeQGRev2J%2Fe3e62fc5061ceb4d3cdaa02468d00b83%2FStuckysImages-V2_Stucky-3-V2.png&w=828&q=75" alt="Certification Course" className="w-full h-auto mb-4" />
      <h3 className="text-xl font-bold text-gray-900 mb-2">
        Take the Hootsuite Social Media Marketing Certification Course
      </h3>
      <p className="text-gray-600 mb-4">
        Become a social media expert — and slap a shiny new certification on your resumé — with the industry standard in social media education.
      </p>
      <a href="#" className="text-blue-900 font-semibold hover:underline">
        Sign up now →
      </a>
    </div>
  </div>
</section>


<section className="py-16 px-4 md:px-8 bg-white">
  <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-900 mb-12">
    What our customers are saying about us
  </h2>

  <div className="grid gap-8 md:grid-cols-3 max-w-7xl mx-auto">
    {/* Testimonial 1 */}
    <div className="border rounded-lg p-6 shadow-sm relative">
      <div className="text-red-600 text-xl mb-2">★★★★★</div>
      <p className="text-gray-700 mb-6">
        Great for beginner to intermediate social media managers, an example when Hootsuite is perfect is when you are still learning campaign management targets, the analytics are really great.
      </p>
      <p className="text-sm text-right italic text-gray-500 mb-4">Feb 7, 2024</p>
      <div className="flex items-center gap-4">
        <img src="https://media.trustradius.com/profile-photos/65c0ef5f4cf2d7c44964d191/BNI7VF826MDQ.jpeg" className="w-12 h-12 rounded-full" alt="Joanne" />
        <div>
          <p className="font-bold text-gray-900">Joanne Vallely Hignett</p>
          <p className="text-sm text-gray-600">Digital Marketing Specialist<br/>Chandos Construction<br/>Construction | 501-1000 employees</p>
        </div>
      </div>
      <a href="#" className="mt-4 block text-blue-900 font-semibold hover:underline">Read full review →</a>
    </div>

    {/* Testimonial 2 */}
    <div className="border rounded-lg p-6 shadow-sm relative">
      <div className="text-red-600 text-xl mb-2">★★★★★</div>
      <p className="text-gray-700 mb-6">
        Hoot suite has helped my company reach our target audience on multiple trending social media platforms. This bundled tool allows you to reach your target audience with ease and time efficiency.
      </p>
      <p className="text-sm text-right italic text-gray-500 mb-4">Feb 13, 2024</p>
      <div className="flex items-center gap-4">
        <img src="https://media.trustradius.com/profile-photos/58a49f9aef50ee000fddfb08/VJ2JEOIUVV29.jpeg" className="w-12 h-12 rounded-full" alt="Zaina" />
        <div>
          <p className="font-bold text-gray-900">Zaina Kroschinski</p>
          <p className="text-sm text-gray-600">Customer Service Specialist<br/>Remax Excellence Rental Advisors<br/>Real Estate | 11-50 employees</p>
        </div>
      </div>
      <a href="#" className="mt-4 block text-blue-900 font-semibold hover:underline">
        Read full review →
      </a>
      <p className="text-xs italic text-gray-500 mt-1">Incentivized Review</p>
    </div>

    {/* Testimonial 3 */}
    <div className="border rounded-lg p-6 shadow-sm relative">
      <div className="text-red-600 text-xl mb-2">★★★★★</div>
      <p className="text-gray-700 mb-6">
        As a busy financial security advisor, I couldn't have time to handle my social media. Hootsuite helped me to manage my platforms easily and saved a lot of my time. Thank you Hootsuite!
      </p>
      <p className="text-sm text-right italic text-gray-500 mb-4">Jan 12, 2024</p>
      <div className="flex items-center gap-4">
        <img src="https://media.trustradius.com/profile-photos/6376f56ed3bdcc6f40779e2b/AJHC06RNTC4W.jpeg" className="w-12 h-12 rounded-full" alt="Abdollah" />
        <div>
          <p className="font-bold text-gray-900">Abdollah Safavi</p>
          <p className="text-sm text-gray-600">Financial Advisor<br/>Freedom 55 Financial<br/>Financial Services | 1001-5000 employees</p>
        </div>
      </div>
      <a href="#" className="mt-4 block text-blue-900 font-semibold hover:underline">
        Read full review →
      </a>
      <p className="text-xs italic text-gray-500 mt-1">Incentivized Review</p>
    </div>
  </div>
</section>


<section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-12">
  <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-gray-900 mb-12">
    Follow us on social. <span className="text-indigo-600">It's where we thrive.</span>
  </h2>

  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
    {/* Post 1 */}
    <div className="relative group overflow-hidden rounded-2xl shadow-md bg-white">
      <img
        src="data:image/jpeg;base64,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"
        alt="Post 1"
        className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white p-3 text-sm sm:text-base">
        Good riddance. You know who we’re talking about.
      </div>
    </div>

   {/* Post 2 - Fully Responsive */}
<div className="rounded-2xl bg-white shadow-xl p-4 sm:p-6 md:p-8 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between border border-gray-100 w-full max-w-xl mx-auto">
  {/* Header */}
  <div className="flex items-center mb-4">
    <img
      src="https://www.hootsuite.com/images/svg/owly/owly-face.svg"
      className="w-10 h-10 mr-3 sm:mr-4"
      alt="Hootsuite"
    />
    <div className="flex-1">
      <p className="text-gray-900 font-bold text-base sm:text-lg">Hootsuite</p>
      <p className="text-xs sm:text-sm text-gray-500">Mar 14, 2025</p>
    </div>
    <img
      src="https://static.vecteezy.com/system/resources/previews/023/986/970/non_2x/linkedin-logo-linkedin-logo-transparent-linkedin-icon-transparent-free-free-png.png"
      className="w-5 h-5 sm:w-6 sm:h-6 ml-auto"
      alt="LinkedIn"
    />
  </div>

  {/* Quote Block */}
  <div className="relative bg-gray-50 border border-indigo-100 p-3 sm:p-4 rounded-xl mb-6">
    <svg
      className="absolute -top-3 -left-3 w-7 h-7 sm:w-8 sm:h-8 text-indigo-200"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M7.17 6.17a4.001 4.001 0 00-3.17 6.33l.9.9a1 1 0 001.42-1.42l-.9-.9A2 2 0 017.17 8a1 1 0 100-2zm10 0a4.001 4.001 0 00-3.17 6.33l.9.9a1 1 0 001.42-1.42l-.9-.9A2 2 0 0117.17 8a1 1 0 100-2z" />
    </svg>
    <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
      Unfortunately, my nervous system can’t tell the difference between
      getting chased by a bear and forgetting to add a UTM.
    </p>
  </div>

  {/* Footer link */}
  <a
    href="#"
    className="text-indigo-600 font-semibold text-sm sm:text-base hover:underline flex items-center gap-1 group"
  >
    Read more on LinkedIn
    <svg
      className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path
        fillRule="evenodd"
        d="M12.293 2.293a1 1 0 011.414 0L19 7.586a1 1 0 010 1.414l-5.293 5.293a1 1 0 01-1.414-1.414L15.586 9H5a1 1 0 110-2h10.586l-3.293-3.293a1 1 0 010-1.414z"
        clipRule="evenodd"
      />
    </svg>
  </a>
</div>

    {/* Post 3 */}
    <div className="relative overflow-hidden rounded-2xl bg-gray-900 text-white flex flex-col justify-center items-center text-center p-6 h-64 sm:h-auto">
      <img
        src="data:image/jpeg;base64,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"
        alt="Trends 2025"
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      />
      <div className="z-10">
        <p className="text-sm sm:text-base mb-2">SMMs! New metrics dropping 👀</p>
        <p className="font-semibold">@hootsuite</p>
      </div>
    </div>

    {/* Post 4 */}
    <div className="relative overflow-hidden rounded-2xl shadow-md bg-white">
      <img
        src="https://img.freepik.com/free-vector/follow-us-background_23-2148039273.jpg?semt=ais_hybrid&w=740"
        alt="Post 4"
        className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute top-4 left-4 bg-black bg-opacity-70 text-white px-3 py-1 text-sm sm:text-base rounded-lg">
        “When’s the best time to post on social media?”
      </div>
    </div>
  </div>
</section>


<section className="bg-gray-50 py-10 px-4 sm:px-6 lg:px-16">
  <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
    {/* Left: Image & UI Mockup */}
    <div className="w-full lg:w-1/2 relative">
      <img
        src="https://www.hootsuite.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fta4ffdi8h2om%2F2L86xXnfPELAOzuWr35nT3%2F1f915e3fa1a9bc55ef3798b4d2f582cf%2FHomepage-Footer_4x.png&w=3840&q=75"
        alt="Hootsuite Promo Visual"
        className="w-full h-auto object-contain"
      />
    </div>

    {/* Right: Text Content */}
    <div className="w-full lg:w-1/2 text-center lg:text-left">
      <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-800 mb-4">
        Try Hootsuite for free. No strings attached.
      </h2>
      <p className="text-gray-600 mb-6 text-sm sm:text-base max-w-md mx-auto lg:mx-0">
        With your free Hootsuite trial, you get instant access to social media scheduling,
        analytics, messaging, and social listening. Completely free.
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
        <a
          href="#"
          className="bg-cyan-900 hover:bg-cyan-800 text-white font-semibold text-sm px-6 py-3 rounded-lg transition"
        >
          Start your free 30-day trial
        </a>
        <a
          href="#"
          className="text-cyan-900 font-semibold text-sm hover:underline"
        >
          Request a demo
        </a>
      </div>
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
  );
};

export default Home;