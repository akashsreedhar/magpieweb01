{/* About Section - Premium Corporate Design */}
      <Section ref={aboutRef} className="py-16 sm:py-20 md:py-28 bg-gradient-to-b from-gray-900 via-black to-gray-900 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 left-0 w-72 sm:w-96 h-72 sm:h-96 bg-purple-600/30 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-blue-600/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 sm:w-80 h-64 sm:h-80 bg-fuchsia-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }} />
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16 md:mb-20"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-full backdrop-blur-sm mb-4 sm:mb-6"
            >
              <Globe className="w-3 h-3 sm:w-4 sm:h-4 text-purple-400" />
              <span className="text-xs sm:text-sm font-semibold text-purple-300">About Our Studio</span>
            </motion.div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-fuchsia-400 to-blue-500">
              About Magpie Web
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-2">
              A product studio born from passion, powered by innovation, and driven by community.
            </p>
          </motion.div>

          {/* Hero Story Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mb-12 sm:mb-16 md:mb-20"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-fuchsia-500/20 to-blue-500/20 rounded-2xl sm:rounded-3xl blur-xl" />
            <div className="relative bg-gradient-to-br from-gray-900/95 via-gray-800/95 to-gray-900/95 backdrop-blur-xl border border-purple-500/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 overflow-hidden">
              {/* Decorative Grid */}
              <div className="absolute inset-0 opacity-5 pointer-events-none">
                <div className="w-full h-full" style={{ backgroundImage: 'linear-gradient(rgba(168,85,247,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,0.3) 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
              </div>
              
              <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
                {/* Left: Story */}
                <div>
                  <motion.h3
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 sm:mb-6"
                  >
                    <span className="text-purple-400">Big Dreams.</span> <span className="text-blue-400">Bright Ideas.</span>
                    <br />
                    <span className="text-gray-300">Local Roots. Global Reach.</span>
                  </motion.h3>
                  
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed mb-4 sm:mb-6"
                  >
                    Magpie Web was sparked in a vibrant hometown where ambition meets creativity. What began in a small room with a big dream — <span className="text-purple-400 font-semibold">helping local businesses shine online</span> — has now grown into a trusted digital partner for clients across the world.
                  </motion.p>
                  
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed mb-4 sm:mb-6"
                  >
                    We blend <span className="text-purple-400 font-semibold">human creativity</span> with <span className="text-blue-400 font-semibold">cutting-edge AI innovations</span> — delivering real results without the heavy price tag.
                  </motion.p>

                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed"
                  >
                    We've earned the trust of both domestic brands and international names by staying true to what matters most: <span className="text-purple-400 font-semibold">honest work, powerful design,</span> and <span className="text-blue-400 font-semibold">solutions that just make sense.</span>
                  </motion.p>
                </div>
                
                {/* Right: Stats */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6"
                >
                  {[
                    { value: '2024', label: 'Established', icon: Rocket, color: 'purple' },
                    { value: '10+', label: 'Experts', icon: Users, color: 'blue' },
                    { value: 'Global', label: 'Reach', icon: Globe, color: 'fuchsia' },
                    { value: '100%', label: 'Consistent Growth', icon: TrendingUp, color: 'green' },
                  ].map((stat, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + idx * 0.1, type: "spring" }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="relative p-4 sm:p-5 md:p-6 bg-gradient-to-br from-gray-800/50 to-transparent rounded-xl sm:rounded-2xl border border-gray-700/50 hover:border-purple-500/40 transition-all duration-300 group"
                    >
                      <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400 mb-2 sm:mb-3 group-hover:scale-110 transition-transform" />
                      <p className="text-xl sm:text-2xl md:text-3xl font-black text-white mb-0.5 sm:mb-1">{stat.value}</p>
                      <p className="text-xs sm:text-sm text-gray-400 uppercase tracking-wider">{stat.label}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              {/* Bottom Quote */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="mt-8 pt-8 border-t border-gray-700/50 text-center"
              >
                <p className="text-base sm:text-lg md:text-xl text-gray-300 italic">
                  "We believe <span className="text-purple-400 font-semibold">great ideas can come from anywhere</span> — and with the right support, they can go <span className="text-blue-400 font-semibold">everywhere.</span>"
                </p>
                <p className="text-sm sm:text-base text-gray-400 mt-2">Let's build something meaningful, something lasting — <span className="text-purple-400 font-semibold">together.</span></p>
              </motion.div>
            </div>
          </motion.div>

          {/* Mission & Vision Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-16 md:mb-20">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-fuchsia-500 opacity-0 group-hover:opacity-20 rounded-2xl blur-xl transition-all duration-500" />
              <div className="relative h-full bg-gray-900/80 backdrop-blur-xl border border-gray-700/50 group-hover:border-purple-500/50 rounded-2xl p-5 sm:p-6 md:p-8 transition-all duration-500">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                  className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-purple-500 to-fuchsia-500 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 shadow-lg"
                >
                  <Rocket className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </motion.div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-3 group-hover:text-purple-300 transition-colors">
                  Our Mission
                </h3>
                <p className="text-sm sm:text-base text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                  To help businesses — big or small — grow smarter through meaningful digital solutions. By blending creativity with AI, we aim to make technology <span className="text-purple-400 font-semibold">simple, affordable, and impactful</span> for every brand that dares to dream big.
                </p>
              </div>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-20 rounded-2xl blur-xl transition-all duration-500" />
              <div className="relative h-full bg-gray-900/80 backdrop-blur-xl border border-gray-700/50 group-hover:border-blue-500/50 rounded-2xl p-5 sm:p-6 md:p-8 transition-all duration-500">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                  className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 shadow-lg"
                >
                  <Star className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </motion.div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-3 group-hover:text-blue-300 transition-colors">
                  Our Vision
                </h3>
                <p className="text-sm sm:text-base text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                  To become the go-to digital partner for brands that dream big — turning everyday ideas into extraordinary success stories. From local markets to global platforms, we're here to make your business <span className="text-blue-400 font-semibold">shine everywhere it matters.</span>
                </p>
              </div>
            </motion.div>
          </div>

          {/* Core Values */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12 sm:mb-16 md:mb-20"
          >
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-white mb-6 sm:mb-8 md:mb-10">
              Our <span className="text-purple-400">Core</span> <span className="text-blue-400">Values</span>
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
              {[
                { icon: Lightbulb, title: 'Creativity with Purpose', desc: 'Every design, strategy, and solution is built to solve real problems and spark growth.', color: 'yellow' },
                { icon: Shield, title: 'Trust in Every Step', desc: 'We value honest relationships, clear communication, and long-term partnerships.', color: 'green' },
                { icon: Brain, title: 'Smart Innovation', desc: 'We use AI and technology to simplify your path to success — not complicate it.', color: 'purple' },
                { icon: Globe, title: 'Growth Without Borders', desc: 'We believe great ideas deserve great reach — no matter your size or starting point.', color: 'blue' },
              ].map((value, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * idx }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="p-4 sm:p-5 md:p-6 bg-white/[0.03] border border-gray-700/50 hover:border-purple-500/30 rounded-xl sm:rounded-2xl transition-all duration-300 group text-center"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-purple-500/20 rounded-xl mx-auto mb-3 sm:mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <value.icon className="w-6 h-6 sm:w-7 sm:h-7 text-purple-400" />
                  </div>
                  <h4 className="font-bold text-white text-sm sm:text-base mb-1 sm:mb-2">{value.title}</h4>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">{value.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* What Sets Us Apart */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12 sm:mb-16 md:mb-20"
          >
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-white mb-6 sm:mb-8 md:mb-10">
              What <span className="text-purple-400">Sets Us</span> <span className="text-blue-400">Apart</span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
              {[
                { icon: Code, title: 'Solutions That Fit You', desc: "We don't believe in one-size-fits-all. Everything we build is tailored to your goals, your audience, and your budget." },
                { icon: MessageSquare, title: 'Always Within Reach', desc: 'We work closely with our clients, offering real-time support and simple communication — no technical jargon, just real help.' },
                { icon: LineChart, title: 'Results That Matter', desc: 'From your first website to full-scale digital growth, we focus on results you can see — better reach, better engagement, better business.' },
                { icon: Heart, title: 'Simple Language. Big Impact.', desc: 'We speak your language — literally and digitally. No complex tech talk, just clear solutions that work.' },
                { icon: Sparkles, title: 'AI That Works For You', desc: 'We use the power of AI to automate, enhance, and optimize your digital presence — saving time and cutting costs.' },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * idx }}
                  whileHover={{ scale: 1.03 }}
                  className={`flex items-start gap-3 sm:gap-4 p-4 sm:p-5 bg-gradient-to-br from-gray-800/30 to-transparent border border-gray-700/50 hover:border-purple-500/30 rounded-xl sm:rounded-2xl transition-all duration-300 group ${idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''}`}
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm sm:text-base mb-0.5 sm:mb-1">{item.title}</h4>
                    <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-block relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl blur-lg opacity-40" />
              <div className="relative bg-gradient-to-r from-purple-900/50 to-blue-900/50 backdrop-blur-xl border border-purple-500/30 rounded-2xl px-6 sm:px-8 md:px-12 py-6 sm:py-8 md:py-10">
                <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-4 sm:mb-6">
                  Ready to build something <span className="text-purple-400 font-bold">meaningful</span> together?
                </p>
                <motion.button
                  onClick={() => scrollToSection(contactRef)}
                  className="px-6 sm:px-8 py-2.5 sm:py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-white font-bold text-sm sm:text-base shadow-xl shadow-purple-500/30 hover:shadow-purple-500/50 transition-all"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Let's Talk
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>
     
      