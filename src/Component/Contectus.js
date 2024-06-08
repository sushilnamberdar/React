import React from 'react'

export const Contectus = () => {
    return (
        <>
            <div class="container flex justify-center lg:-mt-60 lg:mb-60 ">
                <div class="max-w-full lg:max-w-screen-md px-4 lg:px-8     lg:-m-60 bg-white w-full max-w-[500px] h-auto grid justify-center items-center">
                    <div class="text-lg mb-4 text-blue-300 mt-10">
                        <h2>Social Media</h2>
                        <p>
                            <strong>Twitter:</strong> <a href="https://x.com/BuntyNamberdar" target="_blank" class="text-blue-600">@BuntyNamberdar</a><br />
                            <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/sushilnamberdar/" target="_blank" class="text-blue-600">Our LinkedIn Profile</a><br />
                            <strong>Instagram:</strong> <a href="https://www.instagram.com/buntynamberdar/" target="_blank" class="text-blue-600">@buntynamberdar</a>
                        </p>
                    </div>
                    <div>
                        <form class="w-full max-w-[400px] p-4">
                            <label for="name" class="block text-blue-300 mb-2 ">Name:</label>
                            <input class="w-full mb-4 p-2 border-2" type="text" id="name" name="name" required />

                            <label for="email" class="block text-blue-300 mb-2">Email:</label>
                            <input class="w-full mb-4 p-2 border-2" type="email" id="email" name="email" required />

                            <label for="subject" class="block text-blue-300 mb-2">Subject:</label>
                            <input class="w-full mb-4 p-2 border-2" type="text" id="subject" name="subject" required />

                            <label for="message" class="block text-blue-300 mb-2">Message:</label>
                            <textarea class="w-full mb-4 p-2 border-2" id="message" name="message" rows="4" required style={{ resize: 'none' }}></textarea>

                            <input class="w-full p-2 bg-blue-500 text-white" type="submit" value="Submit" />
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
