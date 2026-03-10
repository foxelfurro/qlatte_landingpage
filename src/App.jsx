import { useState } from 'react'

const solutions = [
  {
    icon: 'point_of_sale',
    title: 'POS inteligente',
    desc: 'Cobro ágil, inventario en tiempo real y cortes automatizados.',
  },
  {
    icon: 'groups',
    title: 'Nómina digital',
    desc: 'Altas, incidencias y pagos centralizados para todo tu equipo.',
  },
  {
    icon: 'insights',
    title: 'CRM accionable',
    desc: 'Seguimientos con alertas y tableros para vender con claridad.',
  },
]

const benefits = [
  {
    icon: 'timer',
    title: 'Menos operación manual',
    desc: 'Automatizamos tareas repetitivas para recuperar horas productivas.',
  },
  {
    icon: 'account_tree',
    title: 'Todo conectado',
    desc: 'Un solo flujo para ventas, colaboradores y clientes.',
  },
  {
    icon: 'shield',
    title: 'Escalable y seguro',
    desc: 'Arquitectura lista para crecer sin comprometer estabilidad.',
  },
]

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
            <span className="size-8 bg-primary rounded-full flex items-center justify-center">
              <span className="material-symbols-outlined text-background-dark text-lg">coffee</span>
            </span>
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
        <section id="inicio" className="relative isolate py-16 md:py-24">
          <div className="orb orb-one" />
          <div className="orb orb-two" />
          <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-7">
              <p className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-bold uppercase tracking-widest rounded-full bg-primary/20 text-slate-700">
                Software para PyMes
              </p>
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[0.92]">
                Convierte tu operación
                <br />
                en un <span className="text-primary italic">sistema imparable</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-600 max-w-2xl">
                Menos desorden, más claridad: centralizamos ventas, nómina y clientes en una sola experiencia.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#ideas" className="px-7 py-3.5 rounded-full bg-slate-900 text-white font-extrabold hover:-translate-y-0.5 transition-transform">
                  Solicitar demo
                </a>
                <a href="#soluciones" className="px-7 py-3.5 rounded-full border border-primary/40 font-bold hover:bg-primary/10 transition">
                  Ver soluciones
                </a>
              </div>
            </div>

            <aside className="hero-showcase rounded-3xl p-8 md:p-10 reveal-up">
              <div className="hero-ring" />
              <div className="relative z-10 space-y-4">
                <p className="text-xs uppercase tracking-[0.25em] font-extrabold text-primary">Live preview</p>
                {[
                  ['Ventas', '+32% este mes'],
                  ['Cobranza pendiente', '7 cuentas críticas'],
                  ['Nómina', '98% conciliada'],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-2xl border border-white/50 bg-white/70 p-4 flex items-center justify-between">
                    <span className="text-sm font-bold text-slate-700">{label}</span>
                    <span className="text-sm font-extrabold text-slate-900">{value}</span>
                  </div>
                ))}
                <p className="text-xs font-semibold text-slate-600">Visibilidad real del negocio, sin hojas sueltas ni sistemas aislados.</p>
              </div>
            </aside>
          </div>
        </section>

        <section id="soluciones" className="py-20 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">Soluciones clave</h2>
            <p className="text-slate-300 mt-3 max-w-2xl">Un stack operativo compacto para que tu equipo avance sin fricción.</p>
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              {solutions.map((item, i) => (
                <article key={item.title} className="rounded-2xl p-7 bg-white/5 border border-white/10 reveal-up" style={{ animationDelay: `${i * 120}ms` }}>
                  <span className="material-symbols-outlined text-primary text-4xl mb-4">{item.icon}</span>
                  <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                  <p className="text-slate-300">{item.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="beneficios" className="py-20">
          <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-primary font-extrabold">Beneficios</p>
              <h2 className="mt-3 text-4xl md:text-5xl font-extrabold tracking-tight">Más orden, mejor ejecución, decisiones rápidas</h2>
              <details className="mt-8 rounded-2xl border border-primary/20 bg-white p-5">
                <summary className="cursor-pointer font-extrabold">Ver ruta de implementación</summary>
                <div className="mt-4 space-y-3 text-sm text-slate-600">
                  <p><span className="font-bold text-slate-900">Semana 1:</span> Diagnóstico y mapa de procesos.</p>
                  <p><span className="font-bold text-slate-900">Semana 2:</span> Configuración de módulos y entrenamiento.</p>
                  <p><span className="font-bold text-slate-900">Semana 3:</span> Go-live con acompañamiento operativo.</p>
                </div>
              </details>
            </div>
            <div className="grid gap-4">
              {benefits.map((item) => (
                <article key={item.title} className="rounded-2xl p-6 border border-primary/20 bg-white hover:border-primary/50 transition">
                  <div className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-primary text-3xl">{item.icon}</span>
                    <div>
                      <h3 className="font-extrabold text-lg">{item.title}</h3>
                      <p className="text-slate-600 mt-1">{item.desc}</p>
                    </div>
                  </div>
                </article>
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
          <a href="https://api.whatsapp.com/send/?phone=7221069621" className="text-primary hover:underline">Soporte WhatsApp</a>
        </div>
      </footer>
    </div>
  )
}
