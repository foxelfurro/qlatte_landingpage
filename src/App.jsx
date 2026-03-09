const features = [
  'Base lista con React 18 + Vite',
  'Scripts de desarrollo, build y preview',
  'Estructura inicial para una landing moderna',
]

export default function App() {
  return (
    <main className="page">
      <section className="hero">
        <p className="badge">🚀 Entorno inicial listo</p>
        <h1>Qlatte landing page starter</h1>
        <p>
          Ya tienes una base limpia para arrancar el desarrollo de la landing.
          Modifica esta sección y empieza a construir tu propuesta visual.
        </p>
        <div className="actions">
          <a href="#" className="btn btn-primary">
            Comenzar ahora
          </a>
          <a href="#" className="btn btn-secondary">
            Ver estructura
          </a>
        </div>
      </section>

      <section className="card">
        <h2>¿Qué incluye?</h2>
        <ul>
          {features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
      </section>
    </main>
  )
}
