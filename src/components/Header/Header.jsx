import profile from'../../assets/images/profile.png'
const Header = () => {
    return (
        <div>
            <div className='flex justify-between border-b-2 bg-gray-200'>
            <h1 className='text-3xl font-bold '>Knowledge cafe</h1>
            <img src={profile}alt="" />
            
            </div>

           
        </div>
    );
};

export default Header;