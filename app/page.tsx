import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  BookOpen,
  Users,
  Globe,
  Award,
  Play,
  Star,
  MapPin,
  Zap,
  Shield,
  Smartphone,
  TrendingUp,
  ArrowRight,
  CheckCircle,
} from "lucide-react"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border/40 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <BookOpen className="h-10 w-10 text-primary" />
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-primary to-blue-600 rounded-full animate-pulse"></div>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                EduNabha
              </span>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a
                href="#features"
                className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-105 font-medium"
              >
                Features
              </a>
              <a
                href="#success"
                className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-105 font-medium"
              >
                Stories
              </a>
              <a
                href="#community"
                className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-105 font-medium"
              >
                Community
              </a>
              <Button variant="ghost" size="sm" className="hover:bg-muted/50 text-foreground">
                Login
              </Button>
              <Button
                size="sm"
                className="bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 shadow-lg hover:shadow-xl transition-all duration-300 text-white font-medium"
              >
                Get Started
              </Button>
            </nav>
          </div>
        </div>
      </header>

      <section className="relative py-24 lg:py-40 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-blue-50/50 to-purple-50/30 dark:from-primary/10 dark:via-blue-950/20 dark:to-purple-950/10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(34,197,94,0.1),transparent_50%)]"></div>

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-10">
              <div className="space-y-6">
                <Badge
                  variant="secondary"
                  className="w-fit px-4 py-2 text-sm font-medium bg-gradient-to-r from-primary/10 to-blue-100 border-primary/20 text-foreground"
                >
                  <MapPin className="h-4 w-4 mr-2" />
                  Transforming Education in Nabha
                </Badge>
                <h1 className="text-5xl lg:text-7xl font-bold text-balance leading-[1.1] tracking-tight text-foreground">
                  Future-Ready
                  <span className="block bg-gradient-to-r from-primary via-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Digital Learning
                  </span>
                </h1>
                <p className="text-xl lg:text-2xl text-muted-foreground text-pretty leading-relaxed max-w-xl">
                  Empowering rural students with cutting-edge technology, personalized learning paths, and unlimited
                  potential.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="text-lg px-10 py-6 bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 text-white"
                >
                  Start Your Journey
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg px-10 py-6 border-2 hover:bg-muted/50 transition-all duration-300 text-foreground bg-transparent"
                >
                  <Play className="mr-3 h-6 w-6" />
                  Watch Demo
                </Button>
              </div>

              <div className="flex flex-wrap items-center gap-8 text-sm text-foreground">
                <div className="flex items-center space-x-3">
                  <div className="flex -space-x-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-blue-500 border-3 border-background shadow-lg"></div>
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 border-3 border-background shadow-lg"></div>
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-400 to-pink-500 border-3 border-background shadow-lg"></div>
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-orange-400 to-red-500 border-3 border-background shadow-lg flex items-center justify-center text-white font-bold text-xs">
                      2.5K+
                    </div>
                  </div>
                  <span className="font-medium">Active Students</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="font-medium">4.9/5 Rating</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative aspect-square">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-blue-500/20 to-purple-500/20 rounded-3xl blur-3xl"></div>
                <div className="relative bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 rounded-3xl p-8 shadow-2xl border border-white/20 backdrop-blur-sm">
                  <img
                    src="/rural-indian-students-using-tablets-and-laptops-fo.jpg"
                    alt="Students learning digitally"
                    className="rounded-2xl shadow-xl w-full h-full object-cover"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-900 rounded-2xl p-4 shadow-xl border border-gray-200 dark:border-gray-700">
                    <div className="flex items-center space-x-3">
                      <TrendingUp className="h-8 w-8 text-green-500" />
                      <div>
                        <div className="text-2xl font-bold text-green-500">+85%</div>
                        <div className="text-xs text-muted-foreground">Performance Boost</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-24 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-20">
            <Badge variant="outline" className="px-4 py-2 text-sm font-medium">
              Platform Features
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-balance">
              Everything You Need to
              <span className="block bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                Excel in Learning
              </span>
            </h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto leading-relaxed">
              Our comprehensive platform combines cutting-edge technology with proven educational methods to deliver
              exceptional learning experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group border-0 bg-gradient-to-br from-white to-gray-50/50 dark:from-gray-900 dark:to-gray-800/50 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <BookOpen className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">AI-Powered Lessons</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Personalized learning paths with interactive content in Hindi and Punjabi, adapting to your pace and
                  style.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group border-0 bg-gradient-to-br from-white to-gray-50/50 dark:from-gray-900 dark:to-gray-800/50 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Smartphone className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">Offline-First Design</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Download entire courses and continue learning without internet. Perfect for rural connectivity
                  challenges.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group border-0 bg-gradient-to-br from-white to-gray-50/50 dark:from-gray-900 dark:to-gray-800/50 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">Live Mentorship</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Connect with expert mentors and peer groups for real-time support and collaborative learning
                  experiences.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group border-0 bg-gradient-to-br from-white to-gray-50/50 dark:from-gray-900 dark:to-gray-800/50 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">Blockchain Certificates</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Earn verifiable, industry-recognized certificates that boost college applications and career
                  prospects.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group border-0 bg-gradient-to-br from-white to-gray-50/50 dark:from-gray-900 dark:to-gray-800/50 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">CBSE + Beyond</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Complete CBSE curriculum plus future skills like coding, digital literacy, and entrepreneurship.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group border-0 bg-gradient-to-br from-white to-gray-50/50 dark:from-gray-900 dark:to-gray-800/50 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">Smart Analytics</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Advanced progress tracking with insights for students, parents, and teachers to optimize learning
                  outcomes.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <section id="success" className="py-24 bg-gradient-to-br from-muted/30 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-20">
            <Badge variant="outline" className="px-4 py-2 text-sm font-medium">
              Success Stories
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-balance">
              Real Impact,
              <span className="block bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                Real Results
              </span>
            </h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto leading-relaxed">
              Discover how students and educators in Nabha are transforming their futures through digital learning.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 bg-gradient-to-br from-white to-blue-50/50 dark:from-gray-900 dark:to-blue-950/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <CardHeader className="pb-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-blue-500 flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-xl">P</span>
                  </div>
                  <div>
                    <CardTitle className="text-xl">Priya Sharma</CardTitle>
                    <CardDescription className="text-base">Class 10 Student • Nabha</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  "The AI tutoring helped me jump from 60% to 92% in mathematics. Now I'm confident about pursuing
                  engineering!"
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <Badge variant="secondary" className="bg-green-100 text-green-700">
                    +32% Improvement
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 bg-gradient-to-br from-white to-green-50/50 dark:from-gray-900 dark:to-green-950/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <CardHeader className="pb-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-xl">R</span>
                  </div>
                  <div>
                    <CardTitle className="text-xl">Rajesh Singh</CardTitle>
                    <CardDescription className="text-base">Teacher • Rural School</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  "My classroom engagement increased by 80%. Students are excited about learning like never before!"
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                    Educator of Year
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 bg-gradient-to-br from-white to-purple-50/50 dark:from-gray-900 dark:to-purple-950/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <CardHeader className="pb-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-xl">A</span>
                  </div>
                  <div>
                    <CardTitle className="text-xl">Anita Kaur</CardTitle>
                    <CardDescription className="text-base">Parent • Community Leader</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  "The parent dashboard helps me support my daughter's learning journey. Her confidence has soared!"
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <Badge variant="secondary" className="bg-purple-100 text-purple-700">
                    Active Parent
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="community" className="py-24 bg-gradient-to-br from-background to-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-10">
              <div className="space-y-6">
                <Badge variant="outline" className="px-4 py-2 text-sm font-medium">
                  Community Impact
                </Badge>
                <h2 className="text-4xl lg:text-5xl font-bold text-balance leading-tight">
                  Building Tomorrow's
                  <span className="block bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                    Learning Ecosystem
                  </span>
                </h2>
                <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
                  Join a thriving community of learners, educators, and innovators working together to transform rural
                  education in Punjab.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  { icon: Users, text: "Weekly AI-powered study groups", color: "from-blue-500 to-cyan-500" },
                  { icon: Award, text: "Local mentor & expert network", color: "from-green-500 to-emerald-500" },
                  { icon: Globe, text: "Community workshops & hackathons", color: "from-purple-500 to-pink-500" },
                  { icon: CheckCircle, text: "Parent-teacher collaboration hub", color: "from-orange-500 to-red-500" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-4 group">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-r ${item.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <item.icon className="h-6 w-6 text-white" />
                    </div>
                    <span className="text-lg font-medium group-hover:text-primary transition-colors duration-300">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>

              <Button
                size="lg"
                className="text-lg px-10 py-6 bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 text-white"
              >
                Join Our Community
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
            </div>

            <div className="relative">
              <div className="relative aspect-square">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-blue-500/20 to-purple-500/20 rounded-3xl blur-3xl"></div>
                <div className="relative bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 rounded-3xl p-8 shadow-2xl border border-white/20 backdrop-blur-sm">
                  <img
                    src="/rural-community-members-and-students-collaborating.jpg"
                    alt="Community learning"
                    className="rounded-2xl shadow-xl w-full h-full object-cover"
                  />
                  <div className="absolute -top-6 -left-6 bg-white dark:bg-gray-900 rounded-2xl p-4 shadow-xl border border-gray-200 dark:border-gray-700">
                    <div className="flex items-center space-x-3">
                      <Users className="h-8 w-8 text-primary" />
                      <div>
                        <div className="text-2xl font-bold text-primary">2.5K+</div>
                        <div className="text-xs text-muted-foreground">Active Members</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-primary via-blue-600 to-purple-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.1),transparent_50%)]"></div>

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-10 max-w-4xl mx-auto">
            <Badge variant="secondary" className="px-4 py-2 text-sm font-medium bg-white/20 text-white border-white/30">
              Start Your Journey Today
            </Badge>
            <h2 className="text-4xl lg:text-6xl font-bold text-balance leading-tight">
              Ready to Transform Your Future?
            </h2>
            <p className="text-xl lg:text-2xl text-white/90 text-pretty leading-relaxed max-w-3xl mx-auto">
              Join thousands of students in Nabha who are already building extraordinary futures through cutting-edge
              digital learning.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
              <Button
                size="lg"
                variant="secondary"
                className="text-lg px-12 py-6 bg-white text-primary hover:bg-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-12 py-6 border-2 border-white text-white hover:bg-white hover:text-primary bg-transparent shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-sidebar border-t border-sidebar-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <BookOpen className="h-6 w-6 text-sidebar-primary" />
                <span className="text-lg font-bold text-sidebar-foreground">EduNabha</span>
              </div>
              <p className="text-sidebar-foreground/70 text-sm">
                Empowering rural education through accessible digital learning platforms.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-sidebar-foreground">Platform</h4>
              <div className="space-y-2 text-sm">
                <a
                  href="#features"
                  className="block text-sidebar-foreground/70 hover:text-sidebar-foreground transition-colors"
                >
                  Features
                </a>
                <a
                  href="#courses"
                  className="block text-sidebar-foreground/70 hover:text-sidebar-foreground transition-colors"
                >
                  Courses
                </a>
                <a
                  href="#certificates"
                  className="block text-sidebar-foreground/70 hover:text-sidebar-foreground transition-colors"
                >
                  Certificates
                </a>
                <a
                  href="#mobile-app"
                  className="block text-sidebar-foreground/70 hover:text-sidebar-foreground transition-colors"
                >
                  Mobile App
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-sidebar-foreground">Community</h4>
              <div className="space-y-2 text-sm">
                <a
                  href="#success"
                  className="block text-sidebar-foreground/70 hover:text-sidebar-foreground transition-colors"
                >
                  Success Stories
                </a>
                <a
                  href="#mentors"
                  className="block text-sidebar-foreground/70 hover:text-sidebar-foreground transition-colors"
                >
                  Mentors
                </a>
                <a
                  href="#events"
                  className="block text-sidebar-foreground/70 hover:text-sidebar-foreground transition-colors"
                >
                  Events
                </a>
                <a
                  href="#support"
                  className="block text-sidebar-foreground/70 hover:text-sidebar-foreground transition-colors"
                >
                  Support
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-sidebar-foreground">Contact</h4>
              <div className="space-y-2 text-sm text-sidebar-foreground/70">
                <p>Nabha, Punjab, India</p>
                <p>contact@edunabha.com</p>
                <p>+91 98765 43210</p>
              </div>
            </div>
          </div>

          <div className="border-t border-sidebar-border mt-8 pt-8 text-center text-sm text-sidebar-foreground/70">
            <p>&copy; 2024 EduNabha. All rights reserved. Empowering rural education in Punjab.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
