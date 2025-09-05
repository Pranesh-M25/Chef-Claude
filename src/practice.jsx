import React from 'react';


export default function App() {

    function signUp(formData) {
     
      
        // const email = formData.get("email")
        // const pw = formData.get("password")
        // const des = formData.get("description")
        // const emp = formData.get("emp")
        // const diet = formData.getAll("diet")
        // const colour = formData.get("favColour")
        // console.log(email,pw,des,emp,diet,colour)

        console.log(Object.fromEntries(formData))
    
    }

  return (
    <section>
      <h1>Signup form</h1>
      <form action={signUp}>
        <label>Email:
        <input type="email" name="email" defaultValue="prn@jhn.com" placeholder="joe@schmoe.com" required />
        </label> <br />

        <label>Password:
            <input type="password" defaultValue="12345" name="password" id="" required/>
        </label> <br />

        <label >Description: <br />
        <textarea defaultValue="Welcome to React" name="description" id=""></textarea>
        </label>
        
        <fieldset>

        <legend>Are You Employed?</legend>

        <label>Yes <br />
          <input type="radio" defaultChecked={true} name="" id="" name="emp" value="yes" />
        </label>

        <label>No <br />
          <input type="radio" name="" id="" name="emp" value="no" />
        </label>

        <label>Do not want to Disclose <br />
          <input type="radio" name="" id="" name="emp" value="dnd" />
        </label>

        </fieldset>

         
        <fieldset>

        <legend>Diet</legend>

        <label>Veg <br />
          <input type="checkbox"   id="" name="diet" value="veg" />
        </label>

        <label>Non Veg <br />
          <input type="checkbox"  id="" name="diet" value="non veg" />
        </label>

        <label> Both <br />
          <input type="checkbox" defaultChecked={true}  id="" name="diet" value="both" />
        </label>

        </fieldset>


         <label htmlFor="favColor">What is your favorite color?</label>
        <select name='favColour' id="favColor">
          <option value="" disabled>--Choose a Colour--</option>
          <option>Red</option>
          <option>Orange</option>
          <option>Yellow</option>
          <option>Green</option>
          <option>Blue</option>
          <option>Indigo</option>
          <option>Violet</option>
        </select>

        <button>Submit</button>
      </form>
    </section>
  )
}

