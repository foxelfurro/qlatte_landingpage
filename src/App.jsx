import React, { useState } from 'react'

const menuItems = [
  { label: 'Soluciones', href: '#soluciones' },
  { label: 'Beneficios', href: '#beneficios' },
  { label: 'Ideas', href: '#ideas' },
  { label: 'Contacto', href: '#contacto' },
]

export default function App() {
  // --- LÓGICA DEL BACKEND ---
  const [status, setStatus] = useState('idle') // idle, sending, success, error
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    negocio: '',
    reto: ''
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    try {
      const response = await fetch('http://localhost:3001/api/enviar-idea', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setStatus('success')
        setFormData({ nombre: '', email: '', negocio: '', reto: '' })
        // Volver al estado inicial después de 5 segundos
        setTimeout(() => setStatus('idle'), 5000)
      } else {
        setStatus('error')
      }
    } catch (error) {
      console.error("Error:", error)
      setStatus('error')
    }
  }

  return (
    <div className="min-h-screen bg-background-light text-slate-900 antialiased overflow-x-hidden dark:bg-background-dark dark:text-slate-100 font-display scroll-smooth">
      <header className="sticky top-0 z-50 backdrop-blur bg-background-light/80 dark:bg-background-dark/80 border-b border-primary/15">
        <nav className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
          <a href="#inicio" className="flex items-center gap-2">
            <span className="size-8 bg-primary rounded-full flex items-center justify-center">
              <span className="material-symbols-outlined text-background-dark text-lg">coffee</span>
            </span>
            <span className="text-2xl font-extrabold tracking-tight">QLatte</span>
          </a>

          <div className="hidden md:flex items-center gap-7 text-xs uppercase tracking-[0.2em] font-bold">
            {menuItems.map((item) => (
              <a key={item.label} href={item.href} className="hover:text-primary transition-colors">
                {item.label}
              </a>
            ))}
          </div>

          <a
            href="#ideas"
            className="bg-primary text-slate-900 px-5 py-2.5 rounded-full text-sm font-extrabold hover:brightness-95 transition"
          >
            Empezar
          </a>
        </nav>
      </header>

      <main>
        {/* HERO SECTION */}
        <section id="inicio" className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24 grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-7 space-y-8">
            <p className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-bold uppercase tracking-widest rounded-full bg-primary/20 text-slate-700 dark:text-slate-200">
              Software para PyMes
            </p>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[0.92]">
              Software que convierte
              <br /> el caos en <span className="text-primary italic">flujo.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl">
              Unificamos punto de venta, nómina y CRM en una experiencia clara para que tu equipo opere mejor.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#ideas" className="px-7 py-3.5 rounded-full bg-primary text-slate-900 font-extrabold">
                Solicitar demo
              </a>
              <a href="#soluciones" className="px-7 py-3.5 rounded-full border border-primary/30 font-bold hover:bg-primary/10 transition">
                Ver soluciones
              </a>
            </div>
          </div>

          <aside className="md:col-span-5 bg-white dark:bg-slate-900/40 rounded-3xl p-7 md:p-9 border border-primary/20 shadow-xl">
            <h2 className="text-2xl font-extrabold tracking-tight mb-6">Estado operativo</h2>
            <div className="space-y-4">
              {[
                ['Ventas del día', '+18.4%'],
                ['Dispersión de nómina', '100%'],
                ['Seguimientos CRM', '47 activos'],
              ].map(([label, value]) => (
                <div key={label} className="flex items-center justify-between rounded-xl border border-primary/15 px-4 py-3">
                  <span className="text-sm font-semibold opacity-80">{label}</span>
                  <span className="text-sm font-extrabold text-primary">{value}</span>
                </div>
              ))}
            </div>
          </aside>
        </section>

        {/* SOLUCIONES */}
        <section id="soluciones" className="py-20 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-primary">Nuestras Soluciones</h2>
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <article className="rounded-2xl p-7 bg-white/5 border border-white/10">
                <span className="material-symbols-outlined text-primary text-4xl mb-4">point_of_sale</span>
                <h3 className="text-2xl font-bold mb-3">POS Inteligente</h3>
                <p className="text-slate-300">Cobro rápido e inventario sincronizado.</p>
              </article>
              <article className="rounded-2xl p-7 bg-primary text-slate-900">
                <span className="material-symbols-outlined text-4xl mb-4">groups</span>
                <h3 className="text-2xl font-extrabold mb-3">Nómina Digital</h3>
                <p className="font-semibold">Timbrado CFDI y dispersión automática.</p>
              </article>
              <article className="rounded-2xl p-7 bg-white/5 border border-white/10">
                <span className="material-symbols-outlined text-primary text-4xl mb-4">insights</span>
                <h3 className="text-2xl font-bold mb-3">CRM Estratégico</h3>
                <p className="text-slate-300">Pipeline claro para tu equipo comercial.</p>
              </article>
            </div>
          </div>
        </section>

        {/* SECCIÓN: STACK TECNOLÓGICO (ADAPTADO) */}
        <section id="tech" className="py-24 bg-gradient-to-br from-background-light via-primary/5 to-background-light dark:from-background-dark dark:via-primary/5 dark:to-background-dark relative overflow-hidden">
          {/* Efectos de Iluminación de Fondo */}
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-[120px] animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/40 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>

          <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center size-14 bg-primary/10 rounded-2xl border border-primary/20 mb-6">
                <span className="material-symbols-outlined text-primary text-3xl">terminal</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
                Stack <span className="text-primary">Tecnológico</span>
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                Dominamos las herramientas más potentes para construir soluciones escalables, 
                seguras y listas para el mercado global.
              </p>
            </div>

            {/* Grid de Tecnologías */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { 
                  cat: 'Frontend', 
                  tools: ['React', 'Next.js', 'Tailwind', 'TypeScript'],
                  icon: 'devices' 
                },
                { 
                  cat: 'Backend', 
                  tools: ['Node.js', 'Express', 'Python', 'NestJS'],
                  icon: 'settings_ethernet' 
                },
                { 
                  cat: 'Database', 
                  tools: ['PostgreSQL', 'MongoDB', 'Redis', 'Supabase'],
                  icon: 'database' 
                },
                { 
                  cat: 'Infraestructura', 
                  tools: ['AWS', 'Docker', 'Vercel', 'CI/CD'],
                  icon: 'cloud_queue' 
                }
              ].map((group) => (
                <div 
                  key={group.cat} 
                  className="group p-8 rounded-3xl bg-white dark:bg-slate-900/40 border border-primary/15 hover:border-primary/40 transition-all duration-500 shadow-xl shadow-primary/5"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <span className="material-symbols-outlined text-primary text-3xl group-hover:scale-110 transition-transform">
                      {group.icon}
                    </span>
                    <h3 className="text-xl font-extrabold">{group.cat}</h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {group.tools.map((tool) => (
                      <span 
                        key={tool} 
                        className="px-3 py-1.5 rounded-lg bg-primary/5 border border-primary/10 text-xs font-bold text-slate-700 dark:text-slate-300 group-hover:bg-primary/20 transition-colors"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECCIÓN: DESARROLLO A MEDIDA (ADAPTADA) */}
        <section className="py-24 bg-background-light dark:bg-background-dark">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="max-w-4xl mx-auto">
              {/* Encabezado con tu estilo */}
              <div className="text-center mb-16 space-y-6">
                <p className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-bold uppercase tracking-widest rounded-full bg-primary/20 text-slate-700 dark:text-slate-200">
                  Expertos en código
                </p>
                <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-none">
                  Desarrollo de Software <br />
                  <span className="text-primary italic">a la medida.</span>
                </h2>
                <div className="space-y-4 max-w-3xl mx-auto">
                  <p className="text-lg md:text-xl font-bold text-slate-800 dark:text-slate-100">
                    Somos proveedores especializados en crear soluciones tecnológicas personalizadas.
                  </p>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    Desde el análisis de requerimientos hasta el mantenimiento, construimos plataformas 
                    escalables y seguras. No solo programamos: creamos arquitectura profesional y 
                    experiencias de usuario excepcionales alineadas a tus objetivos.
                  </p>
                </div>
              </div>

              {/* Grid de Servicios con tus iconos de Material Symbols */}
              <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mt-12">
                {[
                  { icon: 'language', label: 'Sistemas Web' },
                  { icon: 'database', label: 'Bases de Datos' },
                  { icon: 'cloud_done', label: 'Cloud & APIs' },
                  { icon: 'verified_user', label: 'Seguridad' },
                  { icon: 'memory', label: 'Integraciones' },
                ].map((item) => (
                  <div key={item.label} className="flex flex-col items-center text-center group">
                    <div className="size-16 md:size-20 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-slate-900 transition-all duration-300 shadow-lg shadow-primary/5">
                      <span className="material-symbols-outlined text-3xl md:text-4xl">
                        {item.icon}
                      </span>
                    </div>
                    <h3 className="font-bold text-sm md:text-base opacity-80 group-hover:opacity-100 transition-opacity">
                      {item.label}
                    </h3>
                  </div>
                ))}
              </div>

              {/* Botón Call to Action con el estilo de tu Hero */}
              <div className="text-center mt-20">
                <a 
                  href="#ideas" 
                  className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl bg-slate-900 text-white dark:bg-primary dark:text-slate-900 font-extrabold text-lg hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-primary/20 group"
                >
                  <span className="material-symbols-outlined animate-pulse">auto_awesome</span>
                  Solicitar Propuesta
                  <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">
                    arrow_forward
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* SECCIÓN: POR QUÉ ELEGIRNOS (ADAPTADA A QLATTE) */}
        <section className="py-24 bg-primary/5 relative overflow-hidden border-y border-primary/10">
          {/* Fondo con Blur Estilo QLatte */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 backdrop-blur-3xl"></div>
          
          <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
                ¿Por qué elegir <span className="text-primary italic">QLatte</span>?
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-medium">
                Somos desarrolladores comprometidos con la excelencia técnica y el crecimiento de tu negocio.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { 
                  title: 'Software a Medida', 
                  desc: 'Soluciones únicas que se adaptan exactamente a tus procesos, no al revés.',
                  icon: 'code_blocks'
                },
                { 
                  title: 'Arquitectura Escalable', 
                  desc: 'Sistemas listos para crecer, desde una startup hasta nivel Enterprise.',
                  icon: 'Account_Tree'
                },
                { 
                  title: 'Integraciones Robustas', 
                  desc: 'Conectamos tu ecosistema: ERPs, CRMs, pagos y APIs de terceros.',
                  icon: 'hub'
                },
                { 
                  title: 'Soporte Continuo', 
                  desc: 'Mantenimiento y optimización constante. Nunca te dejamos solo.',
                  icon: 'support_agent'
                },
              ].map((item) => (
                <div key={item.title} className="bg-white/40 dark:bg-slate-900/40 p-8 rounded-3xl border border-primary/10 hover:border-primary/40 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 group">
                  <div className="size-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-slate-900 transition-colors">
                    <span className="material-symbols-outlined text-3xl">
                      {item.icon}
                    </span>
                  </div>
                  <h3 className="text-xl font-extrabold mb-3">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400 font-medium">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA Final de Sección */}
            <div className="text-center mt-16">
              <a 
                href="#ideas" 
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-slate-900 text-white dark:bg-white dark:text-slate-900 font-extrabold hover:scale-105 transition-transform shadow-xl"
              >
                <span className="material-symbols-outlined">rocket_launch</span>
                Solicitar Propuesta
              </a>
            </div>
          </div>
        </section>

        {/* FORMULARIO DE IDEAS (FRONT + BACK) */}
        <section id="ideas" className="py-20 bg-primary/10 border-y border-primary/20">
          <div className="max-w-4xl mx-auto px-6 md:px-12">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">Cuéntanos tu idea</h2>
            <p className="text-slate-700 dark:text-slate-300 mb-10 text-lg">
              Déjanos tus datos y tu reto. Responderemos a la brevedad.
            </p>

            <form 
              onSubmit={handleSubmit}
              className="grid md:grid-cols-2 gap-5 bg-white dark:bg-slate-900/60 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-primary/20 shadow-xl"
            >
              <label className="flex flex-col gap-2">
                <span className="text-sm font-bold opacity-80">Nombre completo</span>
                <input 
                  name="nombre"
                  required
                  value={formData.nombre}
                  onChange={handleChange}
                  className="rounded-xl border border-primary/25 bg-transparent px-4 py-3 focus:ring-2 focus:ring-primary/40 outline-none transition-all" 
                  type="text" 
                  placeholder="Tu nombre" 
                />
              </label>

              <label className="flex flex-col gap-2">
                <span className="text-sm font-bold opacity-80">Correo de contacto</span>
                <input 
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="rounded-xl border border-primary/25 bg-transparent px-4 py-3 focus:ring-2 focus:ring-primary/40 outline-none transition-all" 
                  type="email" 
                  placeholder="nombre@empresa.com" 
                />
              </label>

              <label className="flex flex-col gap-2 md:col-span-2">
                <span className="text-sm font-bold opacity-80">Tipo de negocio</span>
                <input 
                  name="negocio"
                  value={formData.negocio}
                  onChange={handleChange}
                  className="rounded-xl border border-primary/25 bg-transparent px-4 py-3 focus:ring-2 focus:ring-primary/40 outline-none transition-all" 
                  type="text" 
                  placeholder="Ej. cafetería, cadena retail..." 
                />
              </label>

              <label className="flex flex-col gap-2 md:col-span-2">
                <span className="text-sm font-bold opacity-80">Reto principal</span>
                <textarea
                  name="reto"
                  required
                  value={formData.reto}
                  onChange={handleChange}
                  className="rounded-xl border border-primary/25 bg-transparent px-4 py-3 min-h-36 focus:ring-2 focus:ring-primary/40 outline-none resize-none transition-all"
                  placeholder="¿En qué te ayudamos?"
                />
              </label>

              <div className="md:col-span-2 flex flex-col md:flex-row gap-6 md:items-center md:justify-between mt-2">
                <div>
                  {status === 'success' && (
                    <p className="text-green-500 font-bold flex items-center gap-2">
                      <span className="material-symbols-outlined">check_circle</span>
                      ¡Mensaje enviado! Revisamos tu idea.
                    </p>
                  )}
                  {status === 'error' && (
                    <p className="text-red-500 font-bold">Error al enviar. Intenta de nuevo.</p>
                  )}
                  {status === 'idle' && (
                    <p className="text-xs uppercase tracking-wider font-bold opacity-50 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                      Atención inmediata
                    </p>
                  )}
                </div>

                <button 
                  disabled={status === 'sending'}
                  type="submit" 
                  className={`px-10 py-4 rounded-xl font-extrabold transition-all shadow-lg ${
                    status === 'sending' 
                      ? 'bg-slate-400 cursor-wait' 
                      : 'bg-slate-900 text-white dark:bg-primary dark:text-slate-900 hover:scale-105 active:scale-95'
                  }`}
                >
                  {status === 'sending' ? 'Enviando...' : 'Enviar idea'}
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>

      <footer id="contacto" className="max-w-7xl mx-auto px-6 md:px-12 py-14 border-t border-primary/10 flex flex-col md:flex-row gap-6 md:items-center md:justify-between">
        <p className="text-sm opacity-70">© 2026 QLatte Software. Toluca, México.</p>
        <div className="flex items-center gap-6 text-sm font-semibold">
          <a href="https://api.whatsapp.com/send/?phone=7221069621" className="text-primary hover:underline">Soporte WhatsApp</a>
        </div>
      </footer>
    </div>
  )
}