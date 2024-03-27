const Forrm = () =>{
    return(
        <div className="App">
            <section style={{height:'100vh',width:'100%',backgroundImage:"url(https://cdn.pixabay.com/photo/2024/01/25/12/30/forest-8531787_1280.jpg)"}}>
               <form action="" className="border-2 border-black text-center p-5 shadow-md shadow-blue-600 flex justify-center items-center ">
                <h1 className="text-3xl font-bold">Registration From</h1>
                <br />
                <input type="text" placeholder="Enter Your Name" className="focus outline-none border-b bg-gradient-to-r" />
                <br /><br />
                <input type="email" placeholder="Enter Your Email" className="focus outline-none border-b bg-gradient-to-r " />
                <br /><br />
                <button className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ">Submit</button>
               </form>
            </section>
         
        </div>

    )
}
export default Forrm