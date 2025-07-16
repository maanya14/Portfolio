
import { useEffect, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

const Portfolio = () => {
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  useEffect(() => {
    fetchGitHubRepos()
  }, [])

  const fetchGitHubRepos = async () => {
    try {
    const response = await fetch("https://api.github.com/search/repositories?q=user:maanya14+topic:portfolio")
    const data = await response.json()
    setRepos(data.items) 

    } catch (error) {
      console.error("Error fetching GitHub repos:", error)
    } finally {
      setLoading(false)
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  // Icons as SVG components
  const GithubIcon = () => (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  )

  const LinkedinIcon = () => (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )

  const MailIcon = () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>
  )

  const ExternalLinkIcon = () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
      />
    </svg>
  )

  const StarIcon = () => (
    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  )

  const ForkIcon = () => (
    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 18.178l4.62-1.256.623-6.778H12V6.87h8.718l-1.687 12.013L12 20.597l-7.031-1.714L3.282 6.87H12v3.274H7.757l.623 6.778L12 18.178z" />
    </svg>
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
        <motion.div className="absolute inset-0 z-0" style={{ y }}>
          <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-pink-400/20 animate-pulse" />
          <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-72 sm:h-72 bg-purple-500/30 rounded-full blur-3xl animate-bounce" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center z-10 max-w-4xl mx-auto w-full"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-6 sm:mb-8 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 p-1"
          >
            <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center text-2xl sm:text-4xl font-bold text-white">
              M
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
          >
            Maanya Gupta
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8"
          >
            Software Programmer & Full Stack Developer
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="https://github.com/maanya14"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transform hover:scale-105 transition-all duration-200 flex items-center w-full sm:w-auto justify-center"
            >
              <GithubIcon />
              <span className="ml-2">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/maanya14/"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white bg-transparent px-6 py-3 rounded-lg transform hover:scale-105 transition-all duration-200 flex items-center w-full sm:w-auto justify-center"
            >
              <LinkedinIcon />
              <span className="ml-2">LinkedIn</span>
            </a>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }} className="mt-12">
            <div className="animate-bounce">
              <div className="w-6 h-10 border-2 border-purple-400 rounded-full mx-auto">
                <div className="w-1 h-3 bg-purple-400 rounded-full mx-auto mt-2 animate-pulse"></div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}>
            <motion.h2
              variants={itemVariants}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center mb-8 sm:mb-12"
            >
              About Me
            </motion.h2>

            <motion.div variants={itemVariants} className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="space-y-6 order-2 lg:order-1">
                <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                  I'm a full-stack developer who enjoys building functional and user-friendly web applications. 
                  I have a good understanding of both frontend and backend technologies and like turning ideas into working products.
                </p>
                <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                  My technical interests extend to software development, particularly in the realm of DSA and Web Development. 
                  Always eager to learn, collaborate, and grow
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">
                    Problem Solver
                  </span>
                  <span className="px-3 py-1 bg-pink-500/20 text-pink-300 rounded-full text-sm">Creative Thinker</span>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">Collaborative</span>
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-4">
                  {[
                    { name: "C/C++", color: "from-blue-400 to-blue-600" },
                    { name: "Javascript", color: "from-yellow-400 to-yellow-600" },
                    { name: "React", color: "from-blue-500 to-blue-700" },
                    { name: "Node.js", color: "from-green-400 to-green-600" },
                    { name: "Python", color: "from-green-500 to-green-700" },
                    { name: "MongoDB", color: "from-green-600 to-green-800" },
                    { name: "MySQL", color: "from-blue-600 to-blue-800" },
                    { name: "OOPS", color: "from-yellow-400 to-yellow-600" },
                  ].map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      whileHover={{ scale: 1.05 }}
                      transition={{ delay: index * 0.1 }}
                      className={`bg-gradient-to-r ${skill.color} p-3 sm:p-4 rounded-lg text-center shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer`}
                    >
                      <span className="text-white font-medium text-sm sm:text-base">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}>
            <motion.h2
              variants={itemVariants}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center mb-4"
            >
              Featured Projects
            </motion.h2>
            <motion.p variants={itemVariants} className="text-gray-400 text-center mb-8 sm:mb-12 max-w-2xl mx-auto">
              Here are some of my recent projects fetched directly from my GitHub repository
            </motion.p>

            {loading ? (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="bg-slate-800/50 rounded-xl p-4 sm:p-6 animate-pulse border border-slate-700">
                    <div className="h-4 bg-slate-700 rounded mb-4"></div>
                    <div className="h-3 bg-slate-700 rounded mb-2"></div>
                    <div className="h-3 bg-slate-700 rounded mb-4"></div>
                    <div className="flex gap-2 mb-4">
                      <div className="h-6 w-16 bg-slate-700 rounded-full"></div>
                      <div className="h-6 w-12 bg-slate-700 rounded-full"></div>
                    </div>
                    <div className="flex gap-2">
                      <div className="h-8 w-20 bg-slate-700 rounded"></div>
                      <div className="h-8 w-16 bg-slate-700 rounded"></div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <motion.div variants={containerVariants} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {repos.map((repo) => (
                  <motion.div
                    key={repo.id}
                    variants={itemVariants}
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="group"
                  >
                    <div className="bg-slate-800/50 border border-slate-700 hover:border-purple-500/50 transition-all duration-300 h-full backdrop-blur-sm hover:bg-slate-800/70 rounded-xl p-4 sm:p-6 flex flex-col">
                      <div className="flex-1">
                        <div className="text-white flex items-start justify-between text-base sm:text-lg mb-2 gap-2">
                          <span className="group-hover:text-purple-400 transition-colors font-semibold flex-1 line-clamp-2">
                            {repo.name}
                          </span>
                          <div className="flex gap-3 text-xs sm:text-sm text-gray-400 flex-shrink-0">
                            <span className="flex items-center gap-1 hover:text-yellow-400 transition-colors">
                              <StarIcon />
                              {repo.stargazers_count}
                            </span>
                            <span className="flex items-center gap-1 hover:text-blue-400 transition-colors">
                              <ForkIcon />
                              {repo.forks_count}
                            </span>
                          </div>
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
                          {repo.description || "No description available"}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {repo.language && (
                            <span className="bg-purple-500/20 text-purple-300 hover:bg-purple-500/30 transition-colors px-2 py-1 rounded text-xs">
                              {repo.language}
                            </span>
                          )}
                          {repo.topics &&
                            repo.topics.slice(0, 2).map((topic) => (
                              <span
                                key={topic}
                                className="border border-slate-600 text-gray-300 hover:border-slate-500 transition-colors text-xs px-2 py-1 rounded"
                              >
                                {topic}
                              </span>
                            ))}
                        </div>
                      </div>
                      <div className="flex gap-2 mt-auto">
                        <a
                          href={repo.html_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-purple-600 hover:bg-purple-700 text-white px-3 sm:px-4 py-2 rounded flex-1 transition-all duration-200 hover:shadow-lg text-xs sm:text-sm flex items-center justify-center"
                        >
                          <GithubIcon />
                          <span className="ml-1">Code</span>
                        </a>
                        {repo.homepage && (
                          <a
                            href={repo.homepage}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border border-slate-600 text-gray-300 bg-transparent hover:bg-slate-700 px-3 sm:px-4 py-2 rounded flex-1 transition-all duration-200 text-xs sm:text-sm flex items-center justify-center"
                          >
                            <ExternalLinkIcon />
                            <span className="ml-1">Live</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}

            <motion.div variants={itemVariants} className="text-center mt-8 sm:mt-12">
              <a
                href="https://github.com/maanya14"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white bg-transparent px-6 sm:px-8 py-3 text-base sm:text-lg rounded-lg transition-all duration-200 inline-flex items-center gap-2"
              >
                View All Projects
                <ExternalLinkIcon />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}>
            <motion.h2
              variants={itemVariants}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center mb-8 sm:mb-12"
            >
              Experience & Education
            </motion.h2>

            <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
              <motion.div variants={itemVariants}>
                <h3 className="text-xl sm:text-2xl font-bold text-purple-400 mb-4 sm:mb-6">Experience</h3>
                <div className="space-y-4 sm:space-y-6">
                  <div className="bg-slate-800/30 p-4 sm:p-6 rounded-xl border border-slate-700 hover:border-purple-500/30 transition-all duration-300">
                    <h4 className="text-lg sm:text-xl font-semibold text-white mb-2">Research Intern</h4>
                    <p className="text-purple-300 mb-2 text-sm sm:text-base">DRID, JIIT • May,2025 - July,2025</p>
                    <p className="text-gray-300 text-sm sm:text-base">
                      Working on a VR-based game under DRID that promotes inclusivity and stress
                        relief for differently abled users
                    </p>
                  </div>
                  <div className="bg-slate-800/30 p-4 sm:p-6 rounded-xl border border-slate-700 hover:border-purple-500/30 transition-all duration-300">
                    <h4 className="text-lg sm:text-xl font-semibold text-white mb-2">Frontend Developer</h4>
                    <p className="text-purple-300 mb-2 text-sm sm:text-base">• 2025 - Present</p>
                    <p className="text-gray-300 text-sm sm:text-base">
                      Built responsive user interfaces and improved user experience across multiple projects.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={itemVariants}>
                <h3 className="text-xl sm:text-2xl font-bold text-pink-400 mb-4 sm:mb-6">Education</h3>
                <div className="space-y-4 sm:space-y-6">
                  <div className="bg-slate-800/30 p-4 sm:p-6 rounded-xl border border-slate-700 hover:border-pink-500/30 transition-all duration-300">
                    <h4 className="text-lg sm:text-xl font-semibold text-white mb-2">Computer Science, B.Tech</h4>
                    <p className="text-pink-300 mb-2 text-sm sm:text-base">JIIT, Noida • 2023 - 2027</p>
                    <p className="text-gray-300 text-sm sm:text-base">
                      Bachelor's degree with focus on software engineering and web development.
                    </p>
                  </div>
                  <div className="bg-slate-800/30 p-4 sm:p-6 rounded-xl border border-slate-700 hover:border-pink-500/30 transition-all duration-300">
                    <h4 className="text-lg sm:text-xl font-semibold text-white mb-2">Police DAV Public School</h4>
                    <p className="text-pink-300 mb-2 text-sm sm:text-base"> class: XII(CBSE)</p>
                    <p className="text-gray-300 text-sm sm:text-base">
                      2023
                    </p>
                  </div>
                  <div className="bg-slate-800/30 p-4 sm:p-6 rounded-xl border border-slate-700 hover:border-pink-500/30 transition-all duration-300">
                    <h4 className="text-lg sm:text-xl font-semibold text-white mb-2">St.Joseph School</h4>
                    <p className="text-pink-300 mb-2 text-sm sm:text-base">class: X (CBSE)</p>
                    <p className="text-gray-300 text-sm sm:text-base">
                      2021
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="text-center"
          >
            <motion.h2
              variants={itemVariants}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 sm:mb-8"
            >
              Let's Connect
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-gray-300 text-base sm:text-lg mb-8 sm:mb-12 max-w-2xl mx-auto"
            >
              I'm always open to discussing new opportunities, interesting projects, or just having a chat about
              technology and development.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-8 sm:mb-12"
            >
              <a
                href="mailto:maanya.g14@gmail.com"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg text-white rounded-lg flex items-center w-full sm:w-auto justify-center"
              >
                <MailIcon />
                <span className="ml-2">Get In Touch</span>
              </a>
              <a
                href="/Resume - Maanya Gupta.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white bg-transparent transform hover:scale-105 transition-all duration-200 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-lg flex items-center w-full sm:w-auto justify-center"
              >
                Download Resume
              </a>
            </motion.div>

            <motion.div variants={itemVariants} className="flex justify-center gap-4 sm:gap-6">
              {[
                { icon: GithubIcon, href: "https://github.com/maanya14", color: "hover:text-gray-300" },
                { icon: LinkedinIcon, href: "https://www.linkedin.com/in/maanya14/", color: "hover:text-blue-400" },
                { icon: MailIcon, href: "mailto:maanya.g14@gmail.com", color: "hover:text-purple-400" },
              ].map(({ icon: Icon, href, color }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -2 }}
                  className={`text-gray-400 ${color} transition-all duration-200 p-3 rounded-full bg-slate-800/50 hover:bg-slate-700/50`}
                >
                  <Icon />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 sm:py-8 px-4 sm:px-6 lg:px-8 border-t border-slate-800 bg-slate-900/50">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <p className="mb-2 text-sm sm:text-base">
            &copy; 2024 Maanya. Built with React, Framer Motion, and Tailwind CSS.
          </p>
          <p className="text-xs sm:text-sm">Designed and developed with ❤️</p>
        </div>
      </footer>
    </div>
  )
}

export default Portfolio
