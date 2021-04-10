
import io from 'socket.io-client'

const token = localStorage.getItem("AuthToken");

const socket = io("http:localhost:9090", {
  auth: {
    token
  }
})

export default socket;