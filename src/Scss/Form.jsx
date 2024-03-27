import './Form.scss'
function Form()
{
    return(
        <div>

         <section className='sec'>
         <form action="">
            <label htmlFor="Signup">Signup</label>
          <input type="text" placeholder='Enter Your Name' />
          <br />
          <input type="text" placeholder='Enter Your Email' />
          <br />
          <button>Submit</button>
          </form>
         </section>
        </div>
    )
}
export default Form