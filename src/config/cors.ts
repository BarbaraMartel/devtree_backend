import { CorsOptions } from 'cors'

export const corsConfig: CorsOptions = {
  origin: function (origin, callback) {
    const whiteList = [
      'http://localhost:5173',
      'https://devtree-barbaramartel.netlify.app'
    ]

    if (process.argv[2] === '--api') {
      whiteList.push(undefined) // permite llamadas sin Origin (por Postman o Thunder)
    }

    if (whiteList.includes(origin)) {
      callback(null, true)
    } else {
      callback(new Error('Error de CORS'))
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE']
}
