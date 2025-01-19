function Navbar() {
    return (
        <>
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-4">
                <div className="flex justify-between items-center">
                    <div className="text-2xl font-bold">ConnectSphere</div>

                    <div className="flex gap-4">
                        <div className="hover:underline cursor-pointer">Home</div>
                        <div className="hover:underline cursor-pointer">Communities</div>
                        <div className="hover:underline cursor-pointer">Events</div>
                        <div className="hover:underline cursor-pointer">Profile</div>
                        <div className="hover:underline cursor-pointer">About</div>
                    </div>

                    <div>
                        <input
                            type="text"
                            placeholder="Search communities..."
                            className="rounded-full px-4 py-2 border-2 border-white"
                        />
                    </div>

                    <div className="flex gap-4">
                        <button className="bg-white text-blue-500 px-4 py-2 rounded hover:bg-blue-100">
                            Login
                        </button>
                        <button className="bg-purple-500 px-4 py-2 rounded hover:bg-purple-700">
                            Sign Up
                        </button>
                    </div>

                    <div className="ml-4">
                        <div className="bg-gray-200 text-gray-800 px-2 py-1 rounded cursor-pointer">toggle</div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Navbar;
