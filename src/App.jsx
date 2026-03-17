import { useState } from 'react'


export default function App() {
  const [status, setStatus] = useState('idle')
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    negocio: '',
    reto: '',
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
        setTimeout(() => setStatus('idle'), 5000)
      } else {
        setStatus('error')
      }
    } catch (error) {
      console.error('Error:', error)
      setStatus('error')
    }
  }

  return (
    <div className="min-h-screen bg-background-light text-slate-900 antialiased overflow-x-hidden font-display scroll-smooth">
      <header className="sticky top-0 z-50 backdrop-blur bg-background-light/80 border-b border-primary/15">
        <nav className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
          <a href="#inicio" className="flex items-center gap-2">
            <img src="/logo.PNG" alt="QLatte" className="h-20 w-auto" />
            <span className="text-2xl font-extrabold tracking-tight">QLatte</span>
          </a>

          <div className="hidden md:flex items-center gap-3">
            <span className="inline-flex items-center gap-2 text-xs font-bold px-3 py-2 rounded-full border border-primary/25 bg-white">
              <span className="size-2 rounded-full bg-emerald-500 pulse-dot" />
              Integración en 21 días
            </span>
            <a href="#ideas" className="text-sm font-extrabold px-4 py-2.5 rounded-full bg-slate-900 text-white hover:-translate-y-0.5 transition-transform">
              Agendar llamada
            </a>
          </div>

          <a href="#ideas" className="md:hidden bg-primary text-slate-900 px-5 py-2.5 rounded-full text-sm font-extrabold">
            Demo
          </a>
        </nav>
      </header>

      <main>
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="orb orb-one" />
          <div className="orb orb-two" />
          
          <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-12 items-center relative z-10">
            <div className="space-y-8 reveal-up">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-black tracking-widest">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Software para PyMEs
              </div>
              
              <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter leading-[0.85]">
                Software que <br />
                <span className="text-primary italic">mueve negocios.</span>
              </h1>
              
              <p className="text-xl text-slate-600 dark:text-slate-400 max-w-lg leading-relaxed">
                En QLatte diseñamos arquitecturas digitales a medida para empresas que buscan orden, escalabilidad y control total.
              </p>
            </div>

            {/* El Showcase que arreglamos antes */}
            <aside className="hero-showcase rounded-[2.5rem] p-10 reveal-up group" style={{ animationDelay: '200ms' }}>
              <div className="hero-ring" />
              <div className="relative z-10 space-y-6">
                <p className="text-xs uppercase tracking-[0.2em] font-black text-primary">System Health</p>
                <div className="space-y-3">
                  {[
                    { label: 'Core Architecture', status: 'Active', icon: 'hub' },
                    { label: 'Data Integrity', status: 'Verified', icon: 'verified' },
                    { label: 'Cloud Sync', status: 'Online', icon: 'cloud_done' },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center justify-between p-4 rounded-2xl bg-white/50 dark:bg-slate-900/50 border border-white/20 backdrop-blur-sm">
                      <div className="flex items-center gap-3 font-bold text-sm">
                        <span className="material-symbols-outlined text-primary">{item.icon}</span>
                        {item.label}
                      </div>
                      <span className="text-[10px] font-black text-primary px-2 py-1 rounded bg-primary/10 uppercase tracking-tighter">{item.status}</span>
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </section>

        {/* SECCIÓN: NUESTRO ENFOQUE (Reemplaza a Soluciones) */}
        <section id="enfoque" className="py-24 bg-slate-900 text-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
              <div className="max-w-2xl">
                <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight">
                  Del concepto a la <br />
                  <span className="text-primary italic">operación real.</span>
                </h2>
                <p className="text-slate-400 mt-6 text-lg">
                  No vendemos software de caja. Construimos la infraestructura digital que tu empresa 
                  necesita para escalar sin perder el control.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: '01',
                  title: 'Arquitectura de Datos',
                  desc: 'Diseñamos bases de datos sólidas que permiten una trazabilidad total de tus inventarios, ventas y movimientos.',
                  icon: 'database_schema'
                },
                {
                  step: '02',
                  title: 'Interfaces de Alto Flujo',
                  desc: 'Creamos paneles de administración intuitivos donde tu equipo puede gestionar todo con la mínima cantidad de clics.',
                  icon: 'dashboard_customize'
                },
                {
                  step: '03',
                  title: 'Sincronización Total',
                  desc: 'Conectamos tus sistemas existentes para que la información fluya en tiempo real entre todas tus sucursales o vendedores.',
                  icon: 'sync_alt'
                }
              ].map((item, i) => (
                <article 
                  key={item.title} 
                  className="relative group p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-primary/40 transition-all duration-500"
                >
                  <span className="absolute top-6 right-8 text-5xl font-black opacity-10 group-hover:opacity-20 transition-opacity italic">
                    {item.step}
                  </span>
                  <span className="material-symbols-outlined text-primary text-4xl mb-6">
                    {item.icon}
                  </span>
                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                  <p className="text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </article>
              ))}
            </div>

            {/* Banner de confianza técnica */}
            <div className="mt-20 p-8 rounded-3xl bg-primary/10 border border-primary/20 flex flex-col md:flex-row items-center justify-between gap-6">
              <p className="text-lg font-bold">
                ¿Tienes un modelo de negocio complejo? <span className="text-primary">Lo simplificamos con código.</span>
              </p>
              <a href="#ideas" className="px-6 py-3 bg-white text-slate-900 rounded-xl font-extrabold hover:scale-105 transition-transform text-sm">
                Discutir proyecto
              </a>
            </div>
          </div>
        </section>

        {/* SECCIÓN: SERVICIOS DE DESARROLLO A MEDIDA */}
        <section className="py-24 bg-background-light dark:bg-background-dark border-t border-primary/10">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="max-w-4xl mx-auto">
              {/* Encabezado */}
              <div className="text-center mb-16 animate-fade-in space-y-6">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1]">
                  Servicios de Desarrollo de <br />
                  <span className="text-primary italic">Software a Medida</span>
                </h2>
                
                <div className="space-y-4 max-w-3xl mx-auto">
                  <p className="text-lg md:text-xl font-bold text-slate-800 dark:text-slate-100">
                    Somos proveedores especializados en crear soluciones tecnológicas personalizadas.
                  </p>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    Desde el análisis de requerimientos hasta la implementación y mantenimiento, te acompañamos en cada etapa para construir software escalable, seguro y alineado con tus objetivos. No solo programamos: creamos arquitectura profesional y experiencias de usuario excepcionales.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mt-16">
                {[
                  { icon: 'public', label: 'Sistemas Web' },
                  { icon: 'storage', label: 'Bases de Datos' },
                  { icon: 'cloud_queue', label: 'Cloud & APIs' },
                  { icon: 'encrypted', label: 'Seguridad' },
                  { icon: 'settings_input_component', label: 'Integraciones' },
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
            </div>
          </div>
        </section>

  {/* --- SECCIÓN: BENEFICIOS (La versión editorial) --- */}
        <section className="py-24 bg-slate-50 dark:bg-slate-900/20 border-y border-slate-100 dark:border-white/5">
          <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16 items-center">
            <div className="reveal-up">
              <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-none mb-8">
                Atención que las <br />
                <span className="text-primary italic">grandes ignoran.</span>
              </h2>
              <div className="space-y-8">
                {[
                  { n: '01', t: 'Sin intermediarios', d: 'Línea directa con los desarrolladores fundadores.' },
                  { n: '02', t: 'Agilidad Real', d: 'Iteraciones semanales, no mensuales. Tu feedback manda.' },
                  { n: '03', t: 'Código Propio', d: 'No usamos plantillas; construimos tu activo tecnológico.' }
                ].map(item => (
                  <div key={item.n} className="flex gap-6 group">
                    <span className="text-4xl italic text-primary italic/40 group-hover:text-primary transition-colors">{item.n}</span>
                    <div>
                      <h4 className="font-black text-lg">{item.t}</h4>
                      <p className="text-slate-500 dark:text-slate-400 text-sm">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4 reveal-up" style={{ animationDelay: '300ms' }}>
                {[
                  {
                    title: 'Soporte Especializado',
                    desc: 'Expertos que conocen tu código de memoria, listos para resolver cualquier imprevisto al instante.',
                    icon: 'verified_user'
                  },
                  {
                    title: 'Consultoría Estratégica',
                    desc: 'Te asesoramos sobre qué tecnologías te conviene usar para ahorrar costos a largo plazo.',
                    icon: 'insights'
                  },
                  {
                    title: 'Código Limpio y Propio',
                    desc: 'Software escalable y documentado. Tú eres el dueño de tu solución tecnológica.',
                    icon: 'terminal'
                  }
                ].map((item) => (
                  <article 
                    key={item.title} 
                    className="group relative p-8 rounded-[2rem] bg-slate-50 dark:bg-slate-900/50 border border-transparent hover:border-primary/30 hover:bg-white dark:hover:bg-slate-900 transition-all duration-500 shadow-sm hover:shadow-2xl hover:shadow-primary/5"
                  >
                    <div className="flex items-center gap-6">
                      <div className="size-14 rounded-2xl bg-white dark:bg-slate-800 shadow-inner flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                        <span className="material-symbols-outlined text-primary text-3xl">
                          {item.icon}
                        </span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-black text-slate-900 dark:text-white">{item.title}</h3>
                        <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">{item.desc}</p>
                      </div>
                    </div>
                  </article>
                ))}
            </div>
          </div>
        </section>

  {/* --- SECCIÓN: STACK (Minimalista) --- */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
            <h2 className="text-4xl font-black mb-12">Herramientas de <span className="text-primary">Clase Mundial</span></h2>
            <div className="flex flex-wrap justify-center gap-4 opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
              {/* Aquí solo nombres o logos limpios */}
              {['React', 'Node.js', 'PostgreSQL', 'AWS', 'Tailwind', 'Python'].map(tech => (
                <span key={tech} className="px-6 py-2 rounded-full border border-slate-200 dark:border-white/10 font-bold text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section id="ideas" className="py-20 bg-primary/10 border-y border-primary/20">
          <div className="max-w-4xl mx-auto px-6 md:px-12">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">Cuéntanos tu idea</h2>
            <p className="text-slate-700 mb-10 text-lg">Déjanos tus datos y tu reto. Responderemos a la brevedad.</p>

            <form
              onSubmit={handleSubmit}
              className="grid md:grid-cols-2 gap-5 bg-white backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-primary/20 shadow-xl"
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
                    <p className="text-green-600 font-bold flex items-center gap-2">
                      <span className="material-symbols-outlined">check_circle</span>
                      ¡Mensaje enviado! Revisamos tu idea.
                    </p>
                  )}
                  {status === 'error' && <p className="text-red-600 font-bold">Error al enviar. Intenta de nuevo.</p>}
                  {status === 'idle' && (
                    <p className="text-xs uppercase tracking-wider font-bold opacity-50 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
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
                      : 'bg-slate-900 text-white hover:scale-105 active:scale-95'
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
          <a href="https://api.whatsapp.com/send/?phone=527221069621" className="text-primary hover:underline">Soporte WhatsApp</a>
        </div>
      </footer>
    </div>
  )
}
