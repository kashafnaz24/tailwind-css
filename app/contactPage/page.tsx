 
 
export default function ContactPage() {
    return (
        <div>
                <h1 className="text-center font-extrabold text-neutral-100 text-[30px]">Contact Us</h1>

            <form className="border-4 border-[#2a8ef1] rounded-[20px] h-[700px] w-[900px] p-[20px] m-[40px]">
                <fieldset className="border-2 border-[#2a8ef1] m-[20px] p-[10px]">
                    <legend className="text-[25px] font-[cursive]">Your Details</legend>
                    <label htmlFor="name">Name:</label>
                    <br />
                    <input
                        className="border-2 border-[#2a8ef1] h-[30px] w-[400px]"
                        type="text"
                        name="name"
                        placeholder="Enter your Name"
                        required
                    />
                    <br /><br />
                    <label htmlFor="email">Email:</label>
                    <br />
                    <input
                        className="border-2 border-[#2a8ef1] h-[30px] w-[400px]"
                        type="email"
                        name="email"
                        placeholder="Enter your Email"
                        required
                    />
                </fieldset>

                <fieldset className="border-2 border-[#2a8ef1] m-[20px] p-[10px]">
                    <legend className="text-[25px] font-[cursive]">Your Review</legend>
                    <label htmlFor="how hear about us">How did you hear about us?</label>
                    <select required>
                        <option value="google">Google</option>
                        <option value="facebook">Facebook</option>
                        <option value="other">Other</option>
                    </select>
                    <br /><br />

                    <label htmlFor="visit">Would you visit again?</label>
                    <br />
                    <input type="radio" name="visit" className="h-[20px] w-[25px]"/>
                    <label htmlFor="yes">Yes</label>
                    <input type="radio" name="visit" className="h-[20px] w-[25px]"/>
                    <label htmlFor="no">No</label>
                    <input type="radio" name="visit" className="h-[20px] w-[25px]"/>
                    <label htmlFor="maybe">Maybe</label>
                    <br /><br />
                    <label htmlFor="comments">Comments:</label>
                    <br />
                    <textarea placeholder="Enter your comments" 
                    className="border-2 border-[#2a8ef1] w-[500px]"></textarea>
                    <br /><br />

                    <input type="checkbox" className="h-[20px] w-[25px]" />
                    <label htmlFor="signup">Sign me up for email updates</label>
                    <br />
                </fieldset>

                <button type="submit" className="border-2 border-[#2a8ef1] rounded-[20px] font-bold capitalize text-lg h-[50px] w-[300px] m-[30px] hover:shadow-[5px_5px_5px_#2a8ef1] hover:bg-neutral-100">submit Review</button>
            </form>
            <h1 className="text-center font-extrabold text-neutral-100 text-[30px]">Our Location</h1>

    <iframe
     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57904.22728152133!2d67.13455341073812!3d24.897497086959422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb339c72ec76665%3A0xec5d1d821453c988!2sJinnah%20International%20Airport!5e0!3m2!1sen!2s!4v1729449078561!5m2!1sen!2s
     &amp;output=embed"    
     width="900"
     height="500"
     title="Google Map"
     className="m-[40px] border-[#2a8ef1] border-[3px]  rounded-[20px]"
    ></iframe>
    </div>
            
    );
}
