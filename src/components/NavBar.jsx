const NavBar = () =>{
    const [mostrarCategoias, setmostrarCategoias] = useState(false)


return <nav className="bg-blue-700 py-4">

    <div className="container mx-auto flex justify-between items-center">
        <div className="mr-20 flex justify-between items-center">
            <h2 className="text-xl ">Pompo Ceramica</h2>
            <img className="w-20" src={logo} alt="" />
        </div>

        <div className="flex items-center justify-center flex-grow">
            <img className="w-20" src={lupa} alt="" />
            <form className="bg-white p-2 h-[20%] w-full rounded-lg" action="">
                <input type="text" />
            </form>
        </div>

        <div className="ml-20 flex items-center justify-end">
            <ul className="flex space-x-4 justify-end">
                <li>
                    <button className=" text-xl" onClick={() => setmostrarCategoias(!mostrarCategoias)}>Categoria</button> 
                    {mostrarCategoias && (
                    <ul className="absolute bg-blue-500 text-xl w-[10%]">
                        <li>Categoria1</li>
                        <li>Categoria2</li>
                        <li>Categoria3</li>
                    </ul>
                    )}
                </li>
                <li><button className=" text-xl">Productos</button></li>
                <li><button className=" text-xl">contactos</button></li>
                <li><Carrito/></li>
            </ul>

        </div>

    </div>

</nav>

}

export default NavBar;