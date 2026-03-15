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
              <p className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-bold tracking-widest rounded-full bg-primary/20 text-slate-700">
                Software para PyMEs
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

            <aside className="hero-showcase rounded-[2.5rem] p-8 md:p-10 reveal-up bg-white/5 border border-white/10 backdrop-blur-xl relative overflow-hidden group">
              {/* Efecto de luz ambiental */}
              <div className="absolute -top-24 -right-24 size-48 bg-primary/20 blur-[80px] rounded-full group-hover:bg-primary/30 transition-colors" />
              
              <div className="relative z-10 space-y-6">
                <div className="flex items-center justify-between">
                  <p className="text-xs uppercase tracking-[0.25em] font-black text-primary animate-pulse">
                    System Architecture
                  </p>
                  <span className="material-symbols-outlined text-primary text-sm">settings_input_component</span>
                </div>

                <div className="space-y-3">
                  {[
                    { label: 'Core Engine', status: 'Optimized', icon: 'memory' },
                    { label: 'Data Consistency', status: '100% Traceable', icon: 'database' },
                    { label: 'Scalability Ready', status: 'Active', icon: 'Insights' },
                  ].map((item) => (
                    <div 
                      key={item.label} 
                      className="group/item rounded-2xl border border-white/10 bg-slate-900/50 p-4 flex items-center justify-between hover:bg-white/5 transition-all duration-300"
                    >
                      <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-primary/70 text-lg group-hover/item:text-primary">
                          {item.icon}
                        </span>
                        <span className="text-sm font-bold text-slate-300">{item.label}</span>
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-wider px-2 py-1 rounded-md bg-primary/10 text-primary border border-primary/20">
                        {item.status}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Footer técnico del showcase */}
                <div className="pt-4 border-t border-white/5">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="size-2 rounded-full bg-green-500 animate-ping" />
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Deployment Status: Ready</p>
                  </div>
                  <p className="text-xs font-medium text-slate-500 italic leading-relaxed">
                    "Transformamos lógica de negocio compleja en sistemas que simplemente funcionan."
                  </p>
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

        <section id="beneficios" className="py-24 bg-white dark:bg-background-dark">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              
              {/* Columna Izquierda: El Manifiesto */}
              <div className="space-y-8">
                <div>
                  <p className="text-primary font-black uppercase tracking-[0.3em] text-xs mb-4 animate-pulse">
                    Socio Tecnológico Exclusivo
                  </p>
                  <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-[0.9] text-slate-900 dark:text-white">
                    Atención que las <br />
                    <span className="text-primary italic font-light font-serif">grandes ignoran.</span>
                  </h2>
                </div>

                <div className="space-y-6 text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-lg">
                  <p>
                    En <span className="text-slate-900 dark:text-white font-bold">QLatte</span> no eres un ticket en una fila de espera. Somos un equipo boutique que entiende que tu software es el motor de tu negocio.
                  </p>
                  
                  {/* Información que antes estaba en el desplegable, ahora integrada con estilo */}
                  <div className="grid gap-6 pt-6 border-t border-primary/10">
                    <div className="flex gap-4">
                      <span className="text-primary font-serif italic text-2xl">01</span>
                      <p className="text-sm"><span className="font-bold text-slate-900 dark:text-white">Sin intermediarios:</span> Comunicación directa por WhatsApp o Slack con los desarrolladores. Respuesta en minutos, no días.</p>
                    </div>
                    <div className="flex gap-4">
                      <span className="text-primary font-serif italic text-2xl">02</span>
                      <p className="text-sm"><span className="font-bold text-slate-900 dark:text-white">Agilidad Real:</span> Como somos un equipo compacto, podemos pivotar y ajustar funcionalidades en tiempo récord según tu operación.</p>
                    </div>
                    <div className="flex gap-4">
                      <span className="text-primary font-serif italic text-2xl">03</span>
                      <p className="text-sm"><span className="font-bold text-slate-900 dark:text-white">ADN Mexicano:</span> Conocemos los retos fiscales y operativos locales. Diseñamos software que entiende tu realidad.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Columna Derecha: Cards de Beneficios */}
              <div className="grid gap-6">
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
