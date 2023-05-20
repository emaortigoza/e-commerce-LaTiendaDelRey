
let productos = [
    {id:'1',categoria: 'camisetas', nombre: 'Camiseta C.A.I', stock: 20, precio: 15000, descripcion:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, aspernatur. Consequuntur dolores commodi iste optio, vero laboriosam, voluptas sed eum delectus natus ducimus cupiditate asperiores est? Qui labore magni repellat', foto: '/public/img/CamisetaAlternativaIndependienteTopperRetro.png'},
    {id:'2',categoria: 'camisetas', nombre: 'Camiseta C.A.I', stock: 20, precio: 15000, descripcion:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, aspernatur. Consequuntur dolores commodi iste optio, vero laboriosam, voluptas sed eum delectus natus ducimus cupiditate asperiores est? Qui labore magni repellat', foto: '/public/img/CamisetaDeIndependienteTitularPuma.png' },
    {id:'3',categoria: 'camisetas', nombre: 'Camiseta C.A.I', stock: 20, precio: 15000, descripcion:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, aspernatur. Consequuntur dolores commodi iste optio, vero laboriosam, voluptas sed eum delectus natus ducimus cupiditate asperiores est? Qui labore magni repellat', foto: '/public/img/CamisetaIndependienteRetro1984Bochini.png' },
    {id:'4',categoria: 'camisetas', nombre: 'Camiseta C.A.I', stock: 20, precio: 15000, descripcion:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, aspernatur. Consequuntur dolores commodi iste optio, vero laboriosam, voluptas sed eum delectus natus ducimus cupiditate asperiores est? Qui labore magni repellat', foto: '/public/img/CamisetaIndependienteSuplente2021.png' },
    {id:'5',categoria: 'camisetas', nombre: 'Camiseta C.A.I', stock: 20, precio: 15000, descripcion:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, aspernatur. Consequuntur dolores commodi iste optio, vero laboriosam, voluptas sed eum delectus natus ducimus cupiditate asperiores est? Qui labore magni repellat', foto: '/public/img/CamisetaIndependienteTitularPuma 2023.png' },
    {id:'6',categoria: 'camisetas', nombre: 'Camiseta C.A.I', stock: 20, precio: 15000, descripcion:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, aspernatur. Consequuntur dolores commodi iste optio, vero laboriosam, voluptas sed eum delectus natus ducimus cupiditate asperiores est? Qui labore magni repellat', foto: '/public/img/CamisetaIndependienteTopperRetroOriginal.png' },
    {id:'7',categoria: 'camisetas', nombre: 'Camiseta C.A.I', stock: 20, precio: 15000, descripcion:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, aspernatur. Consequuntur dolores commodi iste optio, vero laboriosam, voluptas sed eum delectus natus ducimus cupiditate asperiores est? Qui labore magni repellat', foto: '/public/img/CamisetaPumaCai2021_2022.png' },
    {id:'8',categoria: 'camisetas', nombre: 'Camiseta C.A.I', stock: 20, precio: 15000, descripcion:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, aspernatur. Consequuntur dolores commodi iste optio, vero laboriosam, voluptas sed eum delectus natus ducimus cupiditate asperiores est? Qui labore magni repellat', foto: '/public/img/CamisetaPumaIndependienteAlternativa 22_23.png' },
    {id:'9',categoria: 'camisetas', nombre: 'Camiseta C.A.I', stock: 20, precio: 15000, descripcion:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, aspernatur. Consequuntur dolores commodi iste optio, vero laboriosam, voluptas sed eum delectus natus ducimus cupiditate asperiores est? Qui labore magni repellat', foto: '/public/img/CamisetaPumaIndependienteAlternativa21.png' },
    {id:'10',categoria: 'camisetas', nombre: 'Camiseta C.A.I', stock: 20, precio: 15000, descripcion:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, aspernatur. Consequuntur dolores commodi iste optio, vero laboriosam, voluptas sed eum delectus natus ducimus cupiditate asperiores est? Qui labore magni repellat',  foto: '/public/img/CamisetaPumaIndependienteArquero.png' },
    {id:'11',categoria: 'camisetas', nombre: 'Camiseta C.A.I', stock: 20, precio: 15000, descripcion:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, aspernatur. Consequuntur dolores commodi iste optio, vero laboriosam, voluptas sed eum delectus natus ducimus cupiditate asperiores est? Qui labore magni repellat',  foto: '/public/img/CamisetaRetroDelRojoDeAvellaneda.png' },
    {id:'12',categoria: 'asado', nombre: 'Asado C.A.I', stock: 20, precio: 10000, descripcion:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, aspernatur. Consequuntur dolores commodi iste optio, vero laboriosam, voluptas sed eum delectus natus ducimus cupiditate asperiores est? Qui labore magni repellat', foto: '/public/img/asado1.png' },
    {id:'13',categoria: 'asado', nombre: 'Asado C.A.I', stock: 20, precio: 10000, descripcion:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, aspernatur. Consequuntur dolores commodi iste optio, vero laboriosam, voluptas sed eum delectus natus ducimus cupiditate asperiores est? Qui labore magni repellat', foto: '/public/img/asado2.png' },
    {id:'14',categoria: 'asado', nombre: 'Asado C.A.I', stock: 20, precio: 10000, descripcion:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, aspernatur. Consequuntur dolores commodi iste optio, vero laboriosam, voluptas sed eum delectus natus ducimus cupiditate asperiores est? Qui labore magni repellat', foto: '/public/img/asado3.png' },
    {id:'15',categoria: 'asado', nombre: 'Asado C.A.I', stock: 20, precio: 10000, descripcion:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, aspernatur. Consequuntur dolores commodi iste optio, vero laboriosam, voluptas sed eum delectus natus ducimus cupiditate asperiores est? Qui labore magni repellat', foto: '/public/img/asado4.png' },
    {id:'16',categoria: 'asado', nombre: 'Asado C.A.I', stock: 20, precio: 10000, descripcion:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, aspernatur. Consequuntur dolores commodi iste optio, vero laboriosam, voluptas sed eum delectus natus ducimus cupiditate asperiores est? Qui labore magni repellat', foto: '/public/img/asado5.png' },
    {id:'17',categoria: 'asado', nombre: 'Asado C.A.I', stock: 20, precio: 10000, descripcion:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, aspernatur. Consequuntur dolores commodi iste optio, vero laboriosam, voluptas sed eum delectus natus ducimus cupiditate asperiores est? Qui labore magni repellat', foto: '/public/img/asado6.png' },
    {id:'18',categoria: 'asado', nombre: 'Asado C.A.I', stock: 20, precio: 10000, descripcion:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, aspernatur. Consequuntur dolores commodi iste optio, vero laboriosam, voluptas sed eum delectus natus ducimus cupiditate asperiores est? Qui labore magni repellat', foto: '/public/img/asado7.png' },
    {id:'19',categoria: 'mate', nombre: 'Mate C.A.I', stock: 20, precio: 5000, descripcion:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, aspernatur. Consequuntur dolores commodi iste optio, vero laboriosam, voluptas sed eum delectus natus ducimus cupiditate asperiores est? Qui labore magni repellat', foto: '/public/img/mate1.png' },
    {id:'20',categoria: 'mate', nombre: 'Mate C.A.I', stock: 20, precio: 5000, descripcion:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, aspernatur. Consequuntur dolores commodi iste optio, vero laboriosam, voluptas sed eum delectus natus ducimus cupiditate asperiores est? Qui labore magni repellat', foto: '/public/img/mate2.png' },
    {id:'21',categoria: 'mate', nombre: 'Mate C.A.I', stock: 20, precio: 5000, descripcion:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, aspernatur. Consequuntur dolores commodi iste optio, vero laboriosam, voluptas sed eum delectus natus ducimus cupiditate asperiores est? Qui labore magni repellat', foto: '/public/img/mate3.png' },
    {id:'22',categoria: 'mate', nombre: 'Mate C.A.I', stock: 20, precio: 5000, descripcion:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, aspernatur. Consequuntur dolores commodi iste optio, vero laboriosam, voluptas sed eum delectus natus ducimus cupiditate asperiores est? Qui labore magni repellat', foto: '/public/img/mate4.png' },
    {id:'23',categoria: 'mate', nombre: 'Mate C.A.I', stock: 20, precio: 5000, descripcion:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, aspernatur. Consequuntur dolores commodi iste optio, vero laboriosam, voluptas sed eum delectus natus ducimus cupiditate asperiores est? Qui labore magni repellat', foto: '/public/img/mate5.png' },
    {id:'24',categoria: 'mate', nombre: 'Mate + Termo', stock: 20, precio: 12000, descripcion:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, aspernatur. Consequuntur dolores commodi iste optio, vero laboriosam, voluptas sed eum delectus natus ducimus cupiditate asperiores est? Qui labore magni repellat', foto: '/public/img/termoMate1.png' },
    {id:'25',categoria: 'mate', nombre: 'Mate + Termo', stock: 20, precio: 12000, descripcion:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, aspernatur. Consequuntur dolores commodi iste optio, vero laboriosam, voluptas sed eum delectus natus ducimus cupiditate asperiores est? Qui labore magni repellat', foto: '/public/img/termoMate2.png' },
    {id:'26',categoria: 'mate', nombre: 'Mate + Termo', stock: 20, precio: 12000, descripcion:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, aspernatur. Consequuntur dolores commodi iste optio, vero laboriosam, voluptas sed eum delectus natus ducimus cupiditate asperiores est? Qui labore magni repellat', foto: '/public/img/termoMate3.png' },
    {id:'27',categoria: 'mate', nombre: 'Mate + Termo', stock: 20, precio: 12000, descripcion:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, aspernatur. Consequuntur dolores commodi iste optio, vero laboriosam, voluptas sed eum delectus natus ducimus cupiditate asperiores est? Qui labore magni repellat', foto: '/public/img/termoMate4.png' },
    {id:'28',categoria: 'mate', nombre: 'Mate + Termo', stock: 20, precio: 12000, descripcion:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, aspernatur. Consequuntur dolores commodi iste optio, vero laboriosam, voluptas sed eum delectus natus ducimus cupiditate asperiores est? Qui labore magni repellat', foto: '/public/img/termoMate5.png' },

]

const mFetch = (id) => {
  return new Promise((res, rej) =>{
    setTimeout(()=>{
        res(!id ? productos : productos.find(producto => producto.id === id))
    },1000)
  })
}

export default mFetch