
let productos = [
    {id:'1',categoria: 'camisetas', nombre: 'Camiseta C.A.I', stock: 20, precio: 15000, descripcion:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, aspernatur. Consequuntur dolores commodi iste optio, vero laboriosam, voluptas sed eum delectus natus ducimus cupiditate asperiores est? Qui labore magni repellat', foto: '/public/productosTiendaDelRey/CamisetaAlternativaIndependienteTopperRetro.png'},
    {id:'2',categoria: 'camisetas', nombre: 'Camiseta C.A.I', stock: 20, precio: 15000, descripcion:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, aspernatur. Consequuntur dolores commodi iste optio, vero laboriosam, voluptas sed eum delectus natus ducimus cupiditate asperiores est? Qui labore magni repellat', foto: '/public/productosTiendaDelRey/CamisetaDeIndependienteTitularPuma.png' },
    {id:'3',categoria: 'camisetas', nombre: 'Camiseta C.A.I', stock: 20, precio: 15000, descripcion:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, aspernatur. Consequuntur dolores commodi iste optio, vero laboriosam, voluptas sed eum delectus natus ducimus cupiditate asperiores est? Qui labore magni repellat', foto: '/public/productosTiendaDelRey/CamisetaIndependienteRetro1984Bochini.png' },
    {id:'4',categoria: 'camisetas', nombre: 'Camiseta C.A.I', stock: 20, precio: 15000, descripcion:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, aspernatur. Consequuntur dolores commodi iste optio, vero laboriosam, voluptas sed eum delectus natus ducimus cupiditate asperiores est? Qui labore magni repellat', foto: '/public/productosTiendaDelRey/CamisetaIndependienteSuplente2021.png' },
    {id:'5',categoria: 'camisetas', nombre: 'Camiseta C.A.I', stock: 20, precio: 15000, descripcion:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, aspernatur. Consequuntur dolores commodi iste optio, vero laboriosam, voluptas sed eum delectus natus ducimus cupiditate asperiores est? Qui labore magni repellat', foto: '/public/productosTiendaDelRey/CamisetaIndependienteTitularPuma 2023.png' },
    {id:'6',categoria: 'camisetas', nombre: 'Camiseta C.A.I', stock: 20, precio: 15000, descripcion:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, aspernatur. Consequuntur dolores commodi iste optio, vero laboriosam, voluptas sed eum delectus natus ducimus cupiditate asperiores est? Qui labore magni repellat', foto: '/public/productosTiendaDelRey/CamisetaIndependienteTopperRetroOriginal.png' },
    {id:'7',categoria: 'camisetas', nombre: 'Camiseta C.A.I', stock: 20, precio: 15000, descripcion:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, aspernatur. Consequuntur dolores commodi iste optio, vero laboriosam, voluptas sed eum delectus natus ducimus cupiditate asperiores est? Qui labore magni repellat', foto: '/public/productosTiendaDelRey/CamisetaPumaCai2021_2022.png' },
    {id:'8',categoria: 'camisetas', nombre: 'Camiseta C.A.I', stock: 20, precio: 15000, descripcion:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, aspernatur. Consequuntur dolores commodi iste optio, vero laboriosam, voluptas sed eum delectus natus ducimus cupiditate asperiores est? Qui labore magni repellat', foto: '/public/productosTiendaDelRey/CamisetaPumaIndependienteAlternativa 22_23.png' },
    {id:'9',categoria: 'camisetas', nombre: 'Camiseta C.A.I', stock: 20, precio: 15000, descripcion:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, aspernatur. Consequuntur dolores commodi iste optio, vero laboriosam, voluptas sed eum delectus natus ducimus cupiditate asperiores est? Qui labore magni repellat', foto: '/public/productosTiendaDelRey/CamisetaPumaIndependienteAlternativa21.png' },
    {id:'10',categoria: 'camisetas', nombre: 'Camiseta C.A.I', stock: 20, precio: 15000, descripcion:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, aspernatur. Consequuntur dolores commodi iste optio, vero laboriosam, voluptas sed eum delectus natus ducimus cupiditate asperiores est? Qui labore magni repellat',  foto: '/public/productosTiendaDelRey/CamisetaPumaIndependienteArquero.png' },
    {id:'11',categoria: 'camisetas', nombre: 'Camiseta C.A.I', stock: 20, precio: 15000, descripcion:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, aspernatur. Consequuntur dolores commodi iste optio, vero laboriosam, voluptas sed eum delectus natus ducimus cupiditate asperiores est? Qui labore magni repellat',  foto: '/public/productosTiendaDelRey/CamisetaRetroDelRojoDeAvellaneda.png' },
    {id:'12',categoria: 'asado', nombre: 'Asado C.A.I', stock: 20, precio: 10000, descripcion:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, aspernatur. Consequuntur dolores commodi iste optio, vero laboriosam, voluptas sed eum delectus natus ducimus cupiditate asperiores est? Qui labore magni repellat', foto: '/public/productosTiendaDelRey/asado1.png' },
    {id:'13',categoria: 'asado', nombre: 'Asado C.A.I', stock: 20, precio: 10000, descripcion:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, aspernatur. Consequuntur dolores commodi iste optio, vero laboriosam, voluptas sed eum delectus natus ducimus cupiditate asperiores est? Qui labore magni repellat', foto: '/public/productosTiendaDelRey/asado2.png' },
    {id:'14',categoria: 'asado', nombre: 'Asado C.A.I', stock: 20, precio: 10000, descripcion:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, aspernatur. Consequuntur dolores commodi iste optio, vero laboriosam, voluptas sed eum delectus natus ducimus cupiditate asperiores est? Qui labore magni repellat', foto: '/public/productosTiendaDelRey/asado3.png' },
    {id:'15',categoria: 'asado', nombre: 'Asado C.A.I', stock: 20, precio: 10000, descripcion:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, aspernatur. Consequuntur dolores commodi iste optio, vero laboriosam, voluptas sed eum delectus natus ducimus cupiditate asperiores est? Qui labore magni repellat', foto: '/public/productosTiendaDelRey/asado4.png' },
    {id:'16',categoria: 'asado', nombre: 'Asado C.A.I', stock: 20, precio: 10000, descripcion:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, aspernatur. Consequuntur dolores commodi iste optio, vero laboriosam, voluptas sed eum delectus natus ducimus cupiditate asperiores est? Qui labore magni repellat', foto: '/public/productosTiendaDelRey/asado5.png' },
    {id:'17',categoria: 'asado', nombre: 'Asado C.A.I', stock: 20, precio: 10000, descripcion:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, aspernatur. Consequuntur dolores commodi iste optio, vero laboriosam, voluptas sed eum delectus natus ducimus cupiditate asperiores est? Qui labore magni repellat', foto: '/public/productosTiendaDelRey/asado6.png' },
    {id:'18',categoria: 'asado', nombre: 'Asado C.A.I', stock: 20, precio: 10000, descripcion:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, aspernatur. Consequuntur dolores commodi iste optio, vero laboriosam, voluptas sed eum delectus natus ducimus cupiditate asperiores est? Qui labore magni repellat', foto: '/public/productosTiendaDelRey/asado7.png' },
    {id:'19',categoria: 'mate', nombre: 'Mate C.A.I', stock: 20, precio: 5000, descripcion:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, aspernatur. Consequuntur dolores commodi iste optio, vero laboriosam, voluptas sed eum delectus natus ducimus cupiditate asperiores est? Qui labore magni repellat', foto: '/public/productosTiendaDelRey/mate1.png' },
    {id:'20',categoria: 'mate', nombre: 'Mate C.A.I', stock: 20, precio: 5000, descripcion:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, aspernatur. Consequuntur dolores commodi iste optio, vero laboriosam, voluptas sed eum delectus natus ducimus cupiditate asperiores est? Qui labore magni repellat', foto: '/public/productosTiendaDelRey/mate2.png' },
    {id:'21',categoria: 'mate', nombre: 'Mate C.A.I', stock: 20, precio: 5000, descripcion:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, aspernatur. Consequuntur dolores commodi iste optio, vero laboriosam, voluptas sed eum delectus natus ducimus cupiditate asperiores est? Qui labore magni repellat', foto: '/public/productosTiendaDelRey/mate3.png' },
    {id:'22',categoria: 'mate', nombre: 'Mate C.A.I', stock: 20, precio: 5000, descripcion:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, aspernatur. Consequuntur dolores commodi iste optio, vero laboriosam, voluptas sed eum delectus natus ducimus cupiditate asperiores est? Qui labore magni repellat', foto: '/public/productosTiendaDelRey/mate4.png' },
    {id:'23',categoria: 'mate', nombre: 'Mate C.A.I', stock: 20, precio: 5000, descripcion:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, aspernatur. Consequuntur dolores commodi iste optio, vero laboriosam, voluptas sed eum delectus natus ducimus cupiditate asperiores est? Qui labore magni repellat', foto: '/public/productosTiendaDelRey/mate5.png' },
    {id:'24',categoria: 'mate', nombre: 'Mate + Termo', stock: 20, precio: 12000, descripcion:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, aspernatur. Consequuntur dolores commodi iste optio, vero laboriosam, voluptas sed eum delectus natus ducimus cupiditate asperiores est? Qui labore magni repellat', foto: '/public/productosTiendaDelRey/termoMate1.png' },
    {id:'25',categoria: 'mate', nombre: 'Mate + Termo', stock: 20, precio: 12000, descripcion:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, aspernatur. Consequuntur dolores commodi iste optio, vero laboriosam, voluptas sed eum delectus natus ducimus cupiditate asperiores est? Qui labore magni repellat', foto: '/public/productosTiendaDelRey/termoMate2.png' },
    {id:'26',categoria: 'mate', nombre: 'Mate + Termo', stock: 20, precio: 12000, descripcion:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, aspernatur. Consequuntur dolores commodi iste optio, vero laboriosam, voluptas sed eum delectus natus ducimus cupiditate asperiores est? Qui labore magni repellat', foto: '/public/productosTiendaDelRey/termoMate3.png' },
    {id:'27',categoria: 'mate', nombre: 'Mate + Termo', stock: 20, precio: 12000, descripcion:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, aspernatur. Consequuntur dolores commodi iste optio, vero laboriosam, voluptas sed eum delectus natus ducimus cupiditate asperiores est? Qui labore magni repellat', foto: '/public/productosTiendaDelRey/termoMate4.png' },
    {id:'28',categoria: 'mate', nombre: 'Mate + Termo', stock: 20, precio: 12000, descripcion:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, aspernatur. Consequuntur dolores commodi iste optio, vero laboriosam, voluptas sed eum delectus natus ducimus cupiditate asperiores est? Qui labore magni repellat', foto: '/public/productosTiendaDelRey/termoMate5.png' },

]

const mFetch = () => {
  return new Promise((res, rej) =>{
    setTimeout(()=>{
        res(productos)
    },1000)
  })
}

export default mFetch