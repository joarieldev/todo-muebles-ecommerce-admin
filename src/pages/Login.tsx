import imgVite from '/vite.svg'

export default function Login() {
  return (
    <main className="container">
      <div className="row justify-content-center align-items-center vh-100">
        <div className="col-lg-5">
          <form>
            <div className="text-center py-4">
              <img
                className="mb-2"
                src={imgVite}
                alt=""
                width="72"
                height="57"
              />
              <h1 className="h3 mb-3 fw-normal">TodoMuebles - Admin</h1>
            </div>

            <div className="form-floating">
              <input type="email" className="form-control" id="email" />
              <label htmlFor="email">Email</label>
            </div>
            <div className="form-floating">
              <input type="password" className="form-control" id="password" />
              <label htmlFor="password">Contraseña</label>
            </div>

            <div className="form-check text-start my-3">
              <input
                className="form-check-input"
                type="checkbox"
                value="show"
                id="showPass"
              />
              <label className="form-check-label" htmlFor="showPass">
                Mostrar Contraseña
              </label>
            </div>
            <button className="btn btn-primary w-100 py-2" type="submit">
              Acceder
            </button>
          </form>
          <p className="text-center my-3">o</p>
          <button className="btn btn-danger w-100 py-2">
            Iniciar con Google
          </button>
        </div>
      </div>
    </main>
  )
}
