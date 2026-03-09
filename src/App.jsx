export default function App() {
  return (
    <div className="bg-background-light text-slate-900 antialiased overflow-x-hidden dark:bg-background-dark dark:text-slate-100 font-display">
      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-8 md:px-12 flex justify-between items-end pointer-events-none">
        <div className="pointer-events-auto">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="size-8 bg-primary rounded-full flex items-center justify-center">
              <span className="material-symbols-outlined text-background-light text-lg">coffee</span>
            </div>
            <h2 className="text-2xl font-extrabold tracking-tighter">QLatte</h2>
          </div>
        </div>
        <div className="hidden md:flex flex-col gap-4 items-end pointer-events-auto">
          <div className="flex gap-8 text-xs font-bold uppercase tracking-widest opacity-60 hover:opacity-100 transition-opacity">
            <a className="hover:text-primary transition-colors" href="#">Sistema</a>
            <a className="hover:text-primary transition-colors" href="#">Filosofía</a>
            <a className="hover:text-primary transition-colors" href="#">Precios</a>
          </div>
          <button className="bg-primary text-slate-900 px-8 py-3 rounded-full font-bold text-sm transition-transform active:scale-95">
            Empezar flujo
          </button>
        </div>
      </nav>

      <main className="relative pt-32 pb-24 px-6 md:px-12">
        <section className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-8 flex flex-col gap-12">
            <div className="relative">
              <h1 className="text-7xl md:text-[10rem] font-extrabold leading-[0.85] tracking-tighter text-slate-900 dark:text-slate-100">
                Software <br /> que <br /> <span className="text-primary italic">fluye.</span>
              </h1>
              <div className="absolute -top-4 -right-4 md:right-20 opacity-20">
                <span className="material-symbols-outlined text-9xl">water_drop</span>
              </div>
            </div>
            <p className="max-w-md text-xl md:text-2xl font-light leading-relaxed text-slate-600 dark:text-slate-400">
              Eliminamos la fricción operativa. Una plataforma diseñada para la PyME mexicana que busca orden sin complejidad.
            </p>
          </div>
          <div className="md:col-span-4 sticky top-32 flex flex-col gap-4 border-l border-primary/20 pl-8 py-4">
            <div className="group cursor-pointer py-6 border-b border-primary/10">
              <span className="text-xs font-bold text-primary mb-2 block uppercase tracking-widest">01</span>
              <h3 className="text-2xl font-bold group-hover:translate-x-2 transition-transform">POS Inteligente</h3>
              <p className="text-sm opacity-60 mt-2 max-w-xs">Ventas rápidas, inventarios que se actualizan en tiempo real.</p>
            </div>
            <div className="group cursor-pointer py-6 border-b border-primary/10">
              <span className="text-xs font-bold text-primary mb-2 block uppercase tracking-widest">02</span>
              <h3 className="text-2xl font-bold group-hover:translate-x-2 transition-transform">Nómina Digital</h3>
              <p className="text-sm opacity-60 mt-2 max-w-xs">Cálculos exactos bajo legislación mexicana, sin errores.</p>
            </div>
            <div className="group cursor-pointer py-6">
              <span className="text-xs font-bold text-primary mb-2 block uppercase tracking-widest">03</span>
              <h3 className="text-2xl font-bold group-hover:translate-x-2 transition-transform">CRM Estratégico</h3>
              <p className="text-sm opacity-60 mt-2 max-w-xs">Tus clientes no son números, son relaciones de valor.</p>
            </div>
          </div>
        </section>

        <section className="mt-40 -mx-6 md:-mx-12">
          <div className="px-6 md:px-12 mb-12 flex justify-between items-end">
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter max-w-xl">
              Nuestra visión del <span className="text-primary underline decoration-2 underline-offset-8">orden.</span>
            </h2>
            <div className="hidden md:flex items-center gap-4 text-primary">
              <span className="text-sm font-bold uppercase tracking-widest">Scroll horizontal</span>
              <span className="material-symbols-outlined">east</span>
            </div>
          </div>
          <div className="flex overflow-x-auto hide-scrollbar gap-8 px-6 md:px-12 py-12">
            <div className="min-w-[300px] md:min-w-[500px] aspect-[4/5] bg-white dark:bg-background-dark border border-primary/20 p-10 flex flex-col justify-between group overflow-hidden relative">
              <div className="relative z-10">
                <span className="material-symbols-outlined text-5xl text-primary mb-6">point_of_sale</span>
                <h4 className="text-3xl font-bold">Punto de Venta</h4>
              </div>
              <div className="relative z-10">
                <p className="text-lg font-light mb-8 opacity-80">Gestión de stock automática y reportes de rentabilidad por producto.</p>
                <button className="flex items-center gap-2 font-bold group-hover:gap-4 transition-all">
                  Saber más <span className="material-symbols-outlined">arrow_forward</span>
                </button>
              </div>
              <div className="absolute -bottom-20 -right-20 size-64 bg-primary/5 rounded-full blur-3xl" />
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <span className="text-9xl font-black">POS</span>
              </div>
            </div>

            <div className="min-w-[300px] md:min-w-[500px] aspect-[4/5] bg-primary text-slate-900 p-10 flex flex-col justify-between group relative overflow-hidden">
              <div className="relative z-10">
                <span className="material-symbols-outlined text-5xl mb-6">groups</span>
                <h4 className="text-3xl font-bold">Nómina CFDI</h4>
              </div>
              <div className="relative z-10">
                <p className="text-lg font-medium mb-8">Timbrado masivo y dispersión de pagos en un solo clic.</p>
                <button className="flex items-center gap-2 font-bold border-b-2 border-slate-900 pb-1">Ver funcionamiento</button>
              </div>
              <div className="absolute top-0 right-0 p-4 opacity-20">
                <span className="text-9xl font-black">PAY</span>
              </div>
            </div>

            <div className="min-w-[300px] md:min-w-[500px] aspect-[4/5] bg-slate-900 text-white p-10 flex flex-col justify-between group relative overflow-hidden">
              <div className="relative z-10">
                <span className="material-symbols-outlined text-5xl text-primary mb-6">insights</span>
                <h4 className="text-3xl font-bold">CRM 360</h4>
              </div>
              <div className="relative z-10">
                <p className="text-lg font-light mb-8 opacity-80">Anticipa las necesidades de tus clientes con análisis predictivo simple.</p>
                <button className="flex items-center gap-2 font-bold group-hover:gap-4 transition-all text-primary">
                  Explorar <span className="material-symbols-outlined">arrow_forward</span>
                </button>
              </div>
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <span className="text-9xl font-black">CRM</span>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-40 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-6 relative order-2 md:order-1">
            <div className="aspect-square bg-slate-200 dark:bg-slate-800 rounded-2xl overflow-hidden shadow-2xl">
              <img
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                alt="Modern workspace with coffee and laptop showing clean software"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3OWTUOn-Lo8jUSdeuOXxaV1D1wTRD810lbthow8S2wR6ZBV1seJoRch0cFTcg3aQ0XuJjPVy_I0bFb_1ljQdc3Ju9Agu8WWN8qLFgru9ERMvXZnE8K4B8N4VqeRjwOy51ukbqOmLOKPzKf-DdecTpl9ER4FW3mSrl-Ji2oAEos4LeXu38ydnGQZP7A3OCMa3es8laiuhSFR1c2MAh2hQ37HadeuV9Y8DKb-jjCHGbVZhRYnkgWj6qGx5NYUdu74XMxFKRHdO5gTf1"
              />
            </div>
            <div className="absolute -bottom-10 -right-6 md:-right-12 bg-primary p-8 rounded-2xl shadow-xl max-w-xs">
              <p className="text-slate-900 font-bold leading-tight italic">
                "La fluidez no es solo estética, es el motor de la productividad mexicana."
              </p>
              <p className="text-xs font-bold mt-4 uppercase opacity-60">— QLatte Manifesto</p>
            </div>
          </div>
          <div className="md:col-span-6 md:pl-16 order-1 md:order-2">
            <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-8 leading-none">
              Minimalismo <br /> <span className="text-primary">Estructural.</span>
            </h2>
            <p className="text-xl font-light text-slate-600 dark:text-slate-400 mb-12">
              Nuestra interfaz no grita, te guía. Hemos reducido la carga cognitiva para que tú y tu equipo puedan enfocarse en lo que realmente importa: crecer.
            </p>
            <div className="flex flex-col gap-8">
              <div className="flex items-start gap-4">
                <div className="size-10 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-primary">bolt</span>
                </div>
                <div>
                  <h5 className="font-bold text-lg">Cero Curva de Aprendizaje</h5>
                  <p className="text-sm opacity-60">Implementación en menos de 24 horas para todo tu equipo.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="size-10 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-primary">encrypted</span>
                </div>
                <div>
                  <h5 className="font-bold text-lg">Seguridad de Grado Bancario</h5>
                  <p className="text-sm opacity-60">Tus datos fiscales y financieros siempre protegidos.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-60 py-32 bg-slate-900 dark:bg-black rounded-[3rem] text-center px-6 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-10 left-10 size-40 border border-white rounded-full" />
            <div className="absolute bottom-20 right-20 size-80 border border-primary rounded-full" />
          </div>
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-5xl md:text-8xl font-extrabold text-white tracking-tighter mb-12 leading-none">
              ¿Listo para el <span className="text-primary italic">flow?</span>
            </h2>
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <button className="w-full md:w-auto bg-primary text-slate-900 px-12 py-5 rounded-full font-extrabold text-lg hover:bg-white transition-colors">
                Demo gratuita
              </button>
              <button className="w-full md:w-auto border border-white/20 text-white px-12 py-5 rounded-full font-bold text-lg hover:bg-white/10 transition-colors">
                Contactar ventas
              </button>
            </div>
            <p className="text-white/40 mt-12 text-sm uppercase tracking-widest font-bold">No requiere tarjeta de crédito</p>
          </div>
        </section>
      </main>

      <footer className="px-6 md:px-12 py-24 border-t border-primary/10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-8">
              <div className="size-6 bg-primary rounded-full" />
              <h2 className="text-xl font-extrabold tracking-tighter">QLatte</h2>
            </div>
            <p className="text-sm opacity-50 max-w-xs">Software que fluye para la empresa mexicana. Ciudad de México, MX.</p>
          </div>
          <div className="flex flex-col gap-4">
            <h6 className="text-xs font-bold uppercase tracking-widest text-primary">Producto</h6>
            <a className="text-sm hover:text-primary transition-colors" href="#">Punto de Venta</a>
            <a className="text-sm hover:text-primary transition-colors" href="#">Nómina Digital</a>
            <a className="text-sm hover:text-primary transition-colors" href="#">CRM Estratégico</a>
            <a className="text-sm hover:text-primary transition-colors" href="#">Integraciones</a>
          </div>
          <div className="flex flex-col gap-4">
            <h6 className="text-xs font-bold uppercase tracking-widest text-primary">Compañía</h6>
            <a className="text-sm hover:text-primary transition-colors" href="#">Nuestra Filosofía</a>
            <a className="text-sm hover:text-primary transition-colors" href="#">Blog de Crecimiento</a>
            <a className="text-sm hover:text-primary transition-colors" href="#">Soporte 24/7</a>
            <a className="text-sm hover:text-primary transition-colors" href="#">Prensa</a>
          </div>
          <div className="flex flex-col gap-4">
            <h6 className="text-xs font-bold uppercase tracking-widest text-primary">Social</h6>
            <div className="flex gap-4">
              <a className="size-10 border border-primary/20 rounded-full flex items-center justify-center hover:bg-primary/10 transition-colors" href="#">
                <span className="material-symbols-outlined text-xl">share</span>
              </a>
              <a className="size-10 border border-primary/20 rounded-full flex items-center justify-center hover:bg-primary/10 transition-colors" href="#">
                <span className="material-symbols-outlined text-xl">language</span>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-24 flex flex-col md:flex-row justify-between items-center gap-8 opacity-40 text-xs font-bold uppercase tracking-tighter">
          <p>© 2024 QLATTE SOFTWARE S.A. DE C.V.</p>
          <div className="flex gap-8">
            <a href="#">Privacidad</a>
            <a href="#">Términos</a>
            <a href="#">Seguridad</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
