import Link from "next/link";
import { 
  Phone, 
  Calendar, 
  MessageSquare, 
  Clock, 
  Zap, 
  Shield, 
  Check, 
  ChevronDown, 
  Star,
  ArrowRight,
  Users,
  TrendingUp,
  Headphones
} from "lucide-react";

// Navigation Component
function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-900">
            <Phone className="h-4 w-4 text-white" />
          </div>
          <span className="text-xl font-bold text-slate-900">PAC Automation</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          <Link href="#features" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
            Features
          </Link>
          <Link href="#pricing" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
            Pricing
          </Link>
          <Link href="#testimonials" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
            Testimonials
          </Link>
          <Link href="#faq" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
            FAQ
          </Link>
        </nav>
        
        <div className="flex items-center gap-4">
          <a 
            href="tel:888-814-8731" 
            className="hidden sm:flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-900"
          >
            <Phone className="h-4 w-4" />
            (888) 814-8731
          </a>
          <Link 
            href="#demo" 
            className="inline-flex items-center justify-center rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800 transition-colors"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}

// Hero Section
function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white" />
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 md:pt-24 md:pb-32">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-sm font-medium text-slate-600 mb-8">
            <span className="flex h-2 w-2 rounded-full bg-green-500 mr-2"></span>
            Now accepting beta customers
          </div>
          
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl md:text-6xl lg:text-7xl">
            Never Miss a Call Again{" "}
            <span className="block text-blue-600">— AI Answers 24/7</span>
          </h1>
          
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 md:text-xl">
            PAC Automation handles your calls, books appointments, and recovers missed opportunities 
            — all while you focus on running your business.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="#demo"
              className="inline-flex w-full sm:w-auto items-center justify-center rounded-xl bg-slate-900 px-8 py-4 text-base font-semibold text-white shadow-lg hover:bg-slate-800 hover:shadow-xl transition-all"
            >
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <a 
              href="tel:888-814-8731"
              className="inline-flex w-full sm:w-auto items-center justify-center rounded-xl border-2 border-slate-200 bg-white px-8 py-4 text-base font-semibold text-slate-900 hover:border-slate-300 hover:bg-slate-50 transition-all"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call (888) 814-8731
            </a>
          </div>
          
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-slate-500">
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-green-500" />
              <span>No setup fees</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-green-500" />
              <span>Cancel anytime</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-green-500" />
              <span>14-day free trial</span>
            </div>
          </div>
        </div>
        
        {/* Stats Bar */}
        <div className="mt-16 grid grid-cols-2 gap-8 border-t border-slate-200 pt-8 md:grid-cols-4">
          <div className="text-center">
            <div className="text-3xl font-bold text-slate-900">24/7</div>
            <div className="text-sm text-slate-600">AI Availability</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-slate-900">&lt; 1 min</div>
            <div className="text-sm text-slate-600">Response Time</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-slate-900">40%+</div>
            <div className="text-sm text-slate-600">More Bookings</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-slate-900">$99/mo</div>
            <div className="text-sm text-slate-600">Starting Price</div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Problem/Solution Section
function ProblemSolution() {
  return (
    <section className="section-padding bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Every Missed Call Is a Lost Customer
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Small businesses lose thousands in revenue every month from unanswered calls. 
            We fix that.
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Problem Cards */}
          <div className="rounded-2xl bg-white p-8 shadow-sm border border-slate-200">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-red-100">
              <Phone className="h-6 w-6 text-red-600" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-2">Missed Calls = Lost Revenue</h3>
            <p className="text-slate-600">
              62% of calls to small businesses go unanswered. Each missed call could be a $500+ job walking to your competitor.
            </p>
          </div>
          
          <div className="rounded-2xl bg-white p-8 shadow-sm border border-slate-200">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-red-100">
              <Clock className="h-6 w-6 text-red-600" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-2">After-Hours Blind Spot</h3>
            <p className="text-slate-600">
              35% of calls happen outside business hours. Without coverage, you're losing customers while you sleep.
            </p>
          </div>
          
          <div className="rounded-2xl bg-white p-8 shadow-sm border border-slate-200">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-red-100">
              <Users className="h-6 w-6 text-red-600" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-2">Hiring Is Expensive</h3>
            <p className="text-slate-600">
              A full-time receptionist costs $3,000+/month. PAC Automation delivers better results at a fraction of the cost.
            </p>
          </div>
        </div>
        
        {/* Solution Arrow */}
        <div className="flex justify-center my-12">
          <div className="flex flex-col items-center">
            <div className="h-16 w-0.5 bg-gradient-to-b from-red-200 to-green-200"></div>
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500 shadow-lg">
              <Zap className="h-6 w-6 text-white" />
            </div>
            <div className="h-16 w-0.5 bg-gradient-to-b from-green-200 to-blue-200"></div>
          </div>
        </div>
        
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            The PAC Automation Solution
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Our AI handles every call professionally, books appointments automatically, 
            and ensures no opportunity slips through the cracks.
          </p>
        </div>
      </div>
    </section>
  );
}

// Features Section
function Features() {
  const features = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "24/7 AI Answering",
      description: "Our AI answers calls instantly, any time of day or night. No more voicemail, no more missed opportunities.",
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "SMS Confirmations",
      description: "Automatic text confirmations and reminders reduce no-shows by up to 50%. Customers love the convenience.",
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Calendar Booking",
      description: "AI integrates with your calendar to book appointments in real-time. No back-and-forth phone tag required.",
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Missed Call Recovery",
      description: "When you miss a call, our system immediately texts the caller and attempts to book them automatically.",
    },
    {
      icon: <Headphones className="h-6 w-6" />,
      title: "Call Transcriptions",
      description: "Every call is transcribed and summarized. Review conversations and track leads in your dashboard.",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Spam Filtering",
      description: "Advanced AI filters out robocalls and spam, so you only pay for conversations with real customers.",
    },
  ];

  return (
    <section id="features" className="section-padding bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Everything You Need to Win More Business
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Powerful AI tools that work together to capture every lead and convert more callers into customers.
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group rounded-2xl bg-slate-50 p-8 transition-all hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 border border-transparent hover:border-slate-200"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Testimonials Section
function Testimonials() {
  const testimonials = [
    {
      quote: "PAC Automation paid for itself in the first week. We're booking 40% more appointments without hiring anyone.",
      author: "Sarah Mitchell",
      role: "Owner, Mitchell Dental",
      rating: 5,
    },
    {
      quote: "The missed call recovery feature is a game-changer. We used to lose 5-10 leads a week. Now we capture almost all of them.",
      author: "Mike Torres",
      role: "Founder, Torres HVAC",
      rating: 5,
    },
    {
      quote: "I was skeptical about AI phone answering, but our customers can't tell the difference. The setup took 10 minutes.",
      author: "Jennifer Park",
      role: "Director, Park Family Law",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="section-padding bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Trusted by Growing Businesses
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            See why business owners are switching to PAC Automation
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="rounded-2xl bg-slate-800 p-8">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-lg text-slate-200 mb-6 leading-relaxed">"{testimonial.quote}"</p>
              <div>
                <div className="font-semibold text-white">{testimonial.author}</div>
                <div className="text-sm text-slate-400">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Trust Badges */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 opacity-50">
          <div className="text-slate-400 font-semibold">As seen on:</div>
          <div className="flex gap-8 text-slate-500">
            <span className="font-bold">Forbes</span>
            <span className="font-bold">TechCrunch</span>
            <span className="font-bold">Inc.</span>
            <span className="font-bold">Business Insider</span>
          </div>
        </div>
      </div>
    </section>
  );
}

// Pricing Section
function Pricing() {
  return (
    <section id="pricing" className="section-padding bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            No hidden fees. No long-term contracts. Cancel anytime.
          </p>
        </div>
        
        <div className="mx-auto max-w-5xl grid gap-8 md:grid-cols-2">
          {/* Beta Plan */}
          <div className="rounded-2xl bg-slate-50 p-8 border border-slate-200">
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-slate-900">Beta</h3>
              <p className="text-slate-600">Perfect for small businesses getting started</p>
            </div>
            <div className="mb-6">
              <span className="text-4xl font-bold text-slate-900">$99</span>
              <span className="text-slate-600">/month</span>
            </div>
            <ul className="mb-8 space-y-4">
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                <span className="text-slate-600">Up to 200 minutes/month</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                <span className="text-slate-600">24/7 AI answering</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                <span className="text-slate-600">SMS confirmations</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                <span className="text-slate-600">Calendar integration</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                <span className="text-slate-600">Call transcriptions</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                <span className="text-slate-600">Email support</span>
              </li>
            </ul>
            <Link 
              href="#demo"
              className="block w-full rounded-xl border-2 border-slate-900 bg-transparent px-6 py-3 text-center font-semibold text-slate-900 hover:bg-slate-900 hover:text-white transition-all"
            >
              Start Free Trial
            </Link>
          </div>
          
          {/* Growth Plan */}
          <div className="relative rounded-2xl bg-slate-900 p-8 text-white">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <span className="rounded-full bg-blue-600 px-4 py-1 text-sm font-semibold">
                Most Popular
              </span>
            </div>
            <div className="mb-4">
              <h3 className="text-xl font-semibold">Growth</h3>
              <p className="text-slate-400">For businesses ready to scale</p>
            </div>
            <div className="mb-6">
              <span className="text-4xl font-bold">$199</span>
              <span className="text-slate-400">/month</span>
            </div>
            <ul className="mb-8 space-y-4">
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-green-400 shrink-0 mt-0.5" />
                <span className="text-slate-300">Unlimited minutes</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-green-400 shrink-0 mt-0.5" />
                <span className="text-slate-300">Everything in Beta, plus:</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-green-400 shrink-0 mt-0.5" />
                <span className="text-slate-300">Missed call recovery</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-green-400 shrink-0 mt-0.5" />
                <span className="text-slate-300">Priority support</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-green-400 shrink-0 mt-0.5" />
                <span className="text-slate-300">Custom AI voice training</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-green-400 shrink-0 mt-0.5" />
                <span className="text-slate-300">Advanced analytics</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-green-400 shrink-0 mt-0.5" />
                <span className="text-slate-300">Multiple locations</span>
              </li>
            </ul>
            <Link 
              href="#demo"
              className="block w-full rounded-xl bg-blue-600 px-6 py-3 text-center font-semibold text-white hover:bg-blue-500 transition-all"
            >
              Start Free Trial
            </Link>
          </div>
        </div>
        
        <p className="mt-8 text-center text-sm text-slate-500">
          Need enterprise pricing? <a href="tel:888-814-8731" className="text-blue-600 hover:underline">Call us</a> for custom solutions.
        </p>
      </div>
    </section>
  );
}

// FAQ Section
function FAQ() {
  const faqs = [
    {
      question: "How does the AI answer calls?",
      answer: "Our AI uses advanced natural language processing to understand caller intent and respond naturally. It can handle appointment booking, answer common questions, take messages, and route urgent calls to you. Callers typically can't tell they're talking to AI."
    },
    {
      question: "How long does setup take?",
      answer: "Most businesses are up and running in under 10 minutes. Simply connect your phone number, integrate your calendar, and customize your greeting. Our team can also handle setup for you at no extra cost."
    },
    {
      question: "What happens if the AI can't answer a question?",
      answer: "The AI is trained to recognize when it needs help. For complex questions or urgent matters, it can seamlessly transfer the call to you or take a detailed message with callback information."
    },
    {
      question: "Can I keep my existing phone number?",
      answer: "Absolutely. You can forward your existing business number to PAC Automation, or we can provide you with a new number. The choice is yours."
    },
    {
      question: "Is there a contract or commitment?",
      answer: "No. All plans are month-to-month with no long-term contracts. You can cancel anytime with 30 days notice. We also offer a 14-day free trial so you can try before you buy."
    },
    {
      question: "What calendars do you integrate with?",
      answer: "We integrate with Google Calendar, Outlook, Calendly, Square, and most major scheduling platforms. If you use something else, let us know and we'll work on adding it."
    },
  ];

  return (
    <section id="faq" className="section-padding bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Everything you need to know about PAC Automation
            </p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="rounded-xl bg-white p-6 shadow-sm border border-slate-200">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{faq.question}</h3>
                <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// CTA Section
function CTA() {
  return (
    <section id="demo" className="section-padding bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Ready to Never Miss a Call Again?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400">
            Join hundreds of businesses capturing more leads and booking more appointments with PAC Automation. 
            Start your 14-day free trial today.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="#"
              className="inline-flex w-full sm:w-auto items-center justify-center rounded-xl bg-white px-8 py-4 text-base font-semibold text-slate-900 shadow-lg hover:bg-slate-100 transition-all"
            >
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <a 
              href="tel:888-814-8731"
              className="inline-flex w-full sm:w-auto items-center justify-center rounded-xl border-2 border-slate-600 bg-transparent px-8 py-4 text-base font-semibold text-white hover:border-slate-500 hover:bg-slate-800 transition-all"
            >
              <Phone className="mr-2 h-5 w-5" />
              (888) 814-8731
            </a>
          </div>
          
          <p className="mt-6 text-sm text-slate-500">
            No credit card required. 14-day free trial. Cancel anytime.
          </p>
        </div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="bg-slate-950 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white">
                <Phone className="h-4 w-4 text-slate-900" />
              </div>
              <span className="text-xl font-bold text-white">PAC Automation</span>
            </Link>
            <p className="text-slate-400 max-w-sm">
              AI-powered phone answering for small businesses. Never miss a call, 
              book more appointments, and grow your business.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">Product</h4>
            <ul className="space-y-2">
              <li><Link href="#features" className="text-slate-400 hover:text-white transition-colors">Features</Link></li>
              <li><Link href="#pricing" className="text-slate-400 hover:text-white transition-colors">Pricing</Link></li>
              <li><Link href="#" className="text-slate-400 hover:text-white transition-colors">Integrations</Link></li>
              <li><Link href="#" className="text-slate-400 hover:text-white transition-colors">API</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="text-slate-400 hover:text-white transition-colors">About</Link></li>
              <li><Link href="#" className="text-slate-400 hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="#" className="text-slate-400 hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="#" className="text-slate-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © 2026 PAC Automation. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-slate-500 hover:text-white text-sm transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-slate-500 hover:text-white text-sm transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Main Page
export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <ProblemSolution />
      <Features />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
