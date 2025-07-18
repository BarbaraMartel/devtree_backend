import { CorsOptions } from 'cors'

export const corsConfig: CorsOptions = {
  origin: function (origin, callback) {
    const whiteList = [process.env.FRONTEND_URL]

    // Permitir herramientas como Postman o Thunder Client (sin origin)
    if (!origin || whiteList.includes(origin)) {
      callback(null, true)
    } else {
      console.log('🚫 Origen bloqueado por CORS:', origin)
      callback(new Error('Error de CORS'))
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE']
}
